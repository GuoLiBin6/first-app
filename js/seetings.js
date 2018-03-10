$('#back').on('click',function(){
	location.href = 'mine.html';
});
$('#footer').on('click',function(){
	location.href = 'login.html';
	localStorage.removeItem('userID');
});

var charge = false;
var li12 = document.getElementById('li12');
var li22 = document.getElementById('li22');
$('#li1').on('click',function(){
	charge = !charge;
	if(charge){
		$('#li10').attr('style','color: #ffdb2c;');
		li12.setAttribute('style','display: block;');
		$('#li11').html('&nu;');
		$('#li11').attr('style','color: #ffdb2c;float: right;');
	}else{
		li12.setAttribute('style','display: none;');
		$('#li10').attr('style','color: #000;');
		$('#li11').html('>');
		$('#li11').attr('style','color: #000;float: right;');
	}
});
$('#li2').on('click',function(){
	charge = !charge;
	if(charge){
		$('#li20').attr('style','color: #ffdb2c;');
		li22.setAttribute('style','display: block;');
		$('#li21').html('&nu;');
		$('#li21').attr('style','color: #ffdb2c;float: right;');
	}else{
		li22.setAttribute('style','display: none;');
		$('#li20').attr('style','color: #000;');
		$('#li21').html('>');
		$('#li21').attr('style','color: #000;float: right;');
	}
});