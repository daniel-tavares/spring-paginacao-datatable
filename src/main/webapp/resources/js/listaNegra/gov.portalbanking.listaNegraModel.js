$(function() {
	$("#nomeIpt").limit('16', '#nomeIptLeft');
	
	$("#nomeIpt").keyup(function(){
		var data = $(this).val().toUpperCase();
		data = data.replace(/[^A-F0-9]+/g,"");
		$(this).val(data);
	});

});


