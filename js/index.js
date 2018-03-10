var mySwiper=new Swiper('.swiper-container',{
    		loop:false,
    		// 分页器
		    pagination: '.swiper-pagination',		    
		    //前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
    	});
    	$('#btn').click(function(){
    		var logined=localStorage.setItem('logined','logined');
    		
    		var userID=localStorage.getItem('userID');
    		if(userID==null){
    			location.href='login.html';
    		}else{
    			location.href='recommendation.html';
    		}
	  		
    		
    	});