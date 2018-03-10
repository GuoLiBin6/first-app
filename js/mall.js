$.ajax({
	type: 'get',
	url: 'http://datainfo.duapp.com/shopdata/getGoods.php',			
	dataType: 'jsonp',
	data:{
		classID:1
	},
	success:function(data){
//				console.log(data);
		for(var i=1;i<=8;i++){
			$("img[name='content_img"+i+"']").attr('src',data[i-1].goodsListImg);
			$("p[name='li_title"+i+"']").html(data[i-1].goodsName);
			$("p[name='li_rmb"+i+"']").html('RMB '+data[i-1].price);
			$('#li'+(i-1)).attr('good',data[i-1].goodsID);
		}
	},
	error:function(){
		alert('error');
	}
});
//点击分类按钮
$('#list').on('click','li',function(){
	for(var i=1;i<=8;i++){
		$('#first_li'+i).removeAttr('class');			
		$(this).attr('class','first_li');
	}
	
	var classid=$(this).attr('id').substr(-1);
	
	$.ajax({
		type: 'get',
		url: 'http://datainfo.duapp.com/shopdata/getGoods.php',			
		dataType: 'jsonp',
		data:{
			classID:classid
		},
		success:function(data){
//				console.log(data);
			for(var i=1;i<=10;i++){
				$("img[name='content_img"+i+"']").attr('src',data[i-1].goodsListImg);
				$("p[name='li_title"+i+"']").html(data[i-1].goodsName);
				$("p[name='li_rmb"+i+"']").html('RMB '+data[i-1].price);
				$('#li'+(i-1)).attr('good',data[i-1].goodsID);
			}
			$('#className').html(data[0].className);
		},
		error:function(){
			alert('error');
		}
	});
});
//点击商品进入商品详情页
$('#goodList').on('click','li',function(){
	var goodID=this.getAttribute('good');
//		alert(goodID);

	location.href='goodsInfo.html#'+goodID;
});
//搜索框按钮

$(document).ready(function(){
	var txt='';
	$('#search').focus(function(){
//			alert('a');
		$(document).keypress(function(e){
			var evt=e||window.event;
			var keycode=evt.keyCode
			if(keycode==13){
				txt=$('#search').val();
				if(txt!=''){
					$.ajax({
						type: 'get',
						url: 'http://datainfo.duapp.com/shopdata/selectGoodes.php',			
						dataType: 'jsonp',
						data:{
							selectText:encodeURI(txt)
						},
						success:function(data){
//								console.log(data)
								if(data==0){
									$('#search').val('没有搜索的商品：'+txt);
								}else{
									var hash=data[0].goodsID;
//										alert(hash)
									location.href="goodsinfo.html#"+hash;
								}
						},
						error:function(){
							alert('error');
						}
					});
				}					
			}
				
		});
		
	});

});