$('#icon2').click(function(){
	location.href="car.html";
});
$('#extent').click(function(){
	if($('#ext').css("display")=='none'){
		$('#ext').css("display","block");
		$('#jiantou').html('');
	}
		
	else{
		$('#ext').css("display","none");
		$('#jiantou').html('>');
	}
		
});
var mySwiper=new Swiper('.swiper-container',{
	loop:false,
	// 分页器
    pagination: '.swiper-pagination'	    

});
//$(window).ready(function(){
	var goodID=location.hash.substring(1);
	$.ajax({
		type:'get',
		dataType:'jsonp',
		url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
		data:{
			goodsID:goodID
		},
		success:function(data){
//    				console.log(data);
			var newData=JSON.parse(data[0].goodsBenUrl)
		    //console.log(newData[0]);
			//$('.swiper-wrapper').html('');
			for(var i=0;i<4;i++){
				$('#slide'+i).html('<img src="'+newData[i]+'">');
			}
			
			//goodsname
			$('#goodsName').html(data[0].goodsName);
			
			$('#price').html('￥'+data[0].price);
			
			$('#higth-price').html('价格'+(parseInt(data[0].price)+20));
			
			$('#buyNumber').html($('#buyNumber').html()+data[0].buynumber);
		}
	});
	//加入购物车
	$('#addgo').click(function(){
		var num=$('#get_num').val();
		if(num<=0){
			alert('请选择数量！')
		}else{
			$.ajax({
				type:'get',
	    		datatype:'json',
	    		url:'http://datainfo.duapp.com/shopdata/updatecar.php',
	    		data:{
	    			userID:'guolibin6',goodsID:goodID,number:num
	    		},
	    		
	    		success:function(data){
	    			if(data==1){
	    				alert('加入购物车');
	    			}
	    			if(data==0){
	    				alert('加入失败');
	    			}
	    		}
			});
			
		}
//  			alert('a');
		
});