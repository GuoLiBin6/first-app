$('#go_register').click(function(){
		
		location.href = 'register.html';
	});

$('#login').click(function(){
		var name = $('#username').val();
		
		var pwd = $('#password').val();
		
		if(name == ''){
			$('#username_p').text('用户名不能为空');
			return;
		}
		
		if(pwd == ''){
			$('#password_p').text('密码不能为空');
			return;
		}
		
		
		$.ajax({
			type: 'get',
			url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
			data: {
				status: 'login',userID: name,password:pwd
			},

			success:function(data){
			 		if(data == 0){
			 			$('#username_p').text('用户名不正确！');
			 		}else if(data == 2){
			 			$('#password_p').text('密码不正确！');
			 			
			 		}else{
			 			alert(name+'登录成功！');
			 			localStorage.setItem("userID",name);			 			
			 			location.href="recommendation.html";
			 		}
			 	},
			 	error:function(){
			 		alert('error');
			 	}
		});
});