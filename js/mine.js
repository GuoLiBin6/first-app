var userID=localStorage.getItem('userID');
$('.header-name').html(userID);
$('#settings').click(function(){
	location.href = 'seetings.html';
});