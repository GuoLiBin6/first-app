//后退按钮
$('#back').click(function(){
	location.href="recommendation.html";
});

//页面显示购物车
var uid=localStorage.getItem('userID');
$.ajax({
	type:'get',		    
    url:'http://datainfo.duapp.com/shopdata/getCar.php',
    dataType:'jsonp',
    data:{
    	userID:uid
   	},		
   	success:function(data){
		//添加各个商品的页面
   		var len=data.length;
   		for(var i=0;i<len;i++){
   			$('#content').html(
   					$('#content').html()
   				+	'<div class="goodItem">'
   				+		'<span id="box'+i+'"><img src="icon/unchecked.png" style="width:0.3rem;height: 0.3rem;" price="'+data[i].price+'" num="'+data[i].number+'" class="con_check" id="checkbox'+i+'"></span>'
   				+		'<img src="'+data[i].goodsListImg+'"/>'
   				+		'<p class="name">'+data[i].goodsName+'</p>'
   				+		'<p class="info">颜色：默认，尺码：默认，数量： '+data[i].number+'</p>'
   				+		'<p class="price">￥ '+data[i].price+'</p>'
   				+		'<img src="icon/delete.png" class="delete" style="width: 0.45rem;height: 0.45rem;position: absolute;right: 0.5rem;bottom: 0.1rem;" id="'+data[i].goodsID+'">'
   				+   '</div>'
   			);
   		}	
		//全选按钮
		$('#check_all').click(function(){
			if($('#check_all').attr('src')=='icon/unchecked.png'){
				$('#check_all').attr('src','icon/checked.png');
				var price=0;
				for(var i=0;i<len;i++){
					$('#checkbox'+i).attr('src','icon/checked.png');
					price+=data[i].number*data[i].price;
				}
				$('#pri-all-price').html(price);
			}
			else{
				$('#check_all').attr('src','icon/unchecked.png');
				for(var i=0;i<len;i++){
					$('#checkbox'+i).attr('src','icon/unchecked.png');
				}
				$('#pri-all-price').html(0);
			}
		});
		//分按钮
		$('.con_check').on('click',function(){
			if($(this).attr('src')=="icon/unchecked.png"){						
				$(this).attr('src','icon/checked.png');
				var num=$(this).attr('num');
				var pri=$(this).attr('price');
				var all_pri=num*pri;
				var pre_pri=parseFloat($('#pri-all-price').html());			
				$('#pri-all-price').html(all_pri+pre_pri);
				var all_checked=true;
				for(var i=0;i<len;i++){
					if($('#checkbox'+i).attr('src')=='icon/unchecked.png')
						all_checked=false;
				}
				if(all_checked){
					$('#check_all').attr('src','icon/checked.png');
				}else{
					$('#check_all').attr('src','icon/unchecked.png');
				}
			}
			else{
				$(this).attr('src','icon/unchecked.png');
				$('#check_all').attr('src','icon/unchecked.png');
				var num=$(this).attr('num');
				var pri=$(this).attr('price');
				var all_pri=num*pri;
				var pre_pri=parseFloat($('#pri-all-price').html());
				$('#pri-all-price').html(pre_pri-all_pri);
			}
		});
		//删除按钮
		$('.delete').click(function(){
			var usersID=localStorage.getItem('userID');
			if(!usersID ){
				alert('请先进行登录！');
				setTimeout(function(){
					location.href='login.html';
					
				},500);
				
			}
			else
			{var goodID=$(this).attr('id');

			$.ajax({
				type:'get',
				data:{
					userID:usersID,goodsID:goodID,number:0
				},
				url:'http://datainfo.duapp.com/shopdata/updatecar.php',
				success:function(data){
					if(data==0){
						alert('删除失败！');
					}
					if(data==1){
						alert('删除成功！');
						window.location.reload(true);
					}
				}
			});}
		})
	}
});