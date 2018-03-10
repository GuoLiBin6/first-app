$(document).ready(function(){
//	底部
		$('.footer').on('click','#index',function(){
			location.href='recommendation.html';
		});
		$('.footer').on('click','#mall',function(){
			location.href='mall.html';
		});
		$('.footer').on('click','#open-add',function(){
			location.href='open-add.html';
		});
		$('.footer').on('click','#car',function(){
			location.href='car.html';
		});
		$('.footer').on('click','#mine',function(){
			location.href='mine.html';
		});
//  index导航
		$('#tuijian').on('click',function(){
			location.href='recommendation.html';
		});
		$('#home-life').on('click',function(){
			location.href='home-life.html';
		});
});