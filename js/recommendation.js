			var mySwiper=new Swiper('.swiper-container',{
    		
    		// 分页器
		    pagination: '.swiper-pagination',
		    loop:true,
		    speed:1000,
		    autoplayDisableOnInteraction : false,
            autoplay:1500
		    
    	});

		$.ajax({
			type: 'get',
			url: 'http://datainfo.duapp.com/shopdata/getGoods.php',			
			dataType: 'jsonp',
			success:function(data){
//			 		console.log(data);
			 		for(var i=0;i<data.length;i++){
			 			$('.content').html($('.content').html()+
			 				'<div class="content_item" id="'+data[i].goodsID+'">'
			 				+	'<img src="'+data[i].goodsListImg+'">'
			 				+	'<p>'+data[i].goodsName+'</p>'
			 				+	'<div class="item_gray"></div>'
			 				+'</div>'
			 			);
			 		}
			 		$('.content_item').click(function(){
			 			var goodID=this.getAttribute('id');
//			 			alert(goodID);
						location.href='goodsInfo.html#'+goodID;
			 		});
			 		
			 	},
			 	error:function(){
			 		alert('error');
			 	}
		});
//		var aa=doument.getElementsByClassName('swiper-slide');
		$.ajax({
			type: 'get',
			url: 'http://datainfo.duapp.com/shopdata/getBanner.php',			
			dataType: 'jsonp',
			success:function(data){
					for(var i=0;i<data.length;i++){
						var src_url=JSON.parse(data[i].goodsBenUrl)[0];
						$("div[name='swiper"+i+"']").html('<img src="'+src_url+'">');						
					}
			 	},
			 	error:function(){
			 		alert('error');
			 	}
		});