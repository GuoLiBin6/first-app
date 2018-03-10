/*点击输入框，红色提示信息消失*/
	$('#username').focus(function(){
		$('#username_p').text('');
	});
	$('#phone_num').focus(function(){
//		if($('#phone_num').val().length!=11){
//			$('#phone_p').text('请输入11位手机号！');
//			$('#phone_p').css('color','blanchedalmond');
//		}else{
			$('#phone_p').text('');
//		}
		
	});
	$('#password').focus(function(){
		$('#password_p').text('');
	});
	$('#password2').focus(function(){
		$('#password2_p').text('');
	});
	
	
/*输入信息空验证，及表单提交*/	
$('#register').click(function(){
		var name = $('#username').val();
		var num = $('#phone_num').val();
		var pwd = $('#password').val();
		var pwd2 = $('#password2').val();
		if(name == ''){
			$('#username_p').text('用户名不能为空');
			return;
		}
		if(num == ''){
			$('#phone_p').text('手机号不能为空');
			return;
		}
		if(pwd == ''){
			$('#password_p').text('密码不能为空');
			return;
		}
		if(pwd2 == ''){
			$('#password2_p').text('确认密码不能为空');
			return;
		}
		if(pwd!= pwd2){
			$('#password2_p').text('确认密码与密码不相同');
			return;
		}
		$.ajax({
			type: 'get',
			url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
			data: {
				status: 'register',userID: name,password:pwd
			},
//			dataType: 'json',
			success:function(data){
			 		if(data == 0){
			 			$('#username_p').text('用户名重名！');
			 		}else if(data == 1){
			 			alert('成功注册');
			 			location.href = 'login.html';
			 			
			 		}
			 	},
			 	error:function(){
			 		alert('error');
			 	}
		});
});


/*用户名非法信息验证*/
$('#username').keyup(function(){
	var regx = /[^a-zA-Z0-9]/g;
	var name = $('#username').val();
	if(name.match(regx)){
		$('#username_p').text('用户名不能包含特殊字符！');
	}else{
		$('#username_p').text('');
	}
});


/*手机号格式验证*/
$('#phone_num').keyup(function(){
	var regx = /[^0-9]/g;
	var num = $('#phone_num').val();
	if(num.match(regx)){
		$('#phone_p').text('手机号只能包含数字！');
	}else if($('#phone_num').val().length == 11){
		$('#phone_p').text('');
	}else if($('#phone_num').val().length != 11){
		$('#phone_p').text('请输入11位手机号！');
		$('#phone_p').css('color','blanchedalmond');
	}
});

$('#phone_num').blur(function(){

	var numy = $('#phone_num').val();
	if(numy.length != 0 && !(/^1[3|4|5|8][0-9]\d{4,8}$/.test(numy))){
		$('#phone_p').text('不是正确的手机号格式！');
		$('#phone_p').css('color','red');
	}
})


/*密码强度验证*/
$('#password').keyup(function(){
	var regxs = [];
	regxs[0] = /[^a-zA-Z0-9]/g; //特殊字符
	regxs[1] = /[a-zA-Z]/g; //字母
	regxs[2] = /[0-9]/g; //数字
	var str = $('#password').val();
	var len = str.length;
	var sec = 0; //强度
	if(len >= 6){
		for(var i = 0;i < regxs.length;i++){
			if(str.match(regxs[i])){
				sec++;
			}
		}
	}
	if(sec == 0){
		$('#password_p').text('密码长度不少于6位！');
		$('#password_p').css("color","yellow");
	}else if(sec == 1){
		$('#password_p').text('密码强度：差');
		$('#password_p').css("color","red");
	}else if(sec == 2){
		$('#password_p').text('密码强度：中');
		$('#password_p').css("color","blanchedalmond");
	}else if(sec == 3){
		$('#password_p').text('密码强度：强');
		$('#password_p').css("color","yellow");
	}
});
