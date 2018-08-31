$(function(){
	
	$("#motivoSituacao").limit('255', '#motivoSituacaoLeft');
	
	$("#valueStatus").click(function(){
		if($(this).is(':checked')){
			$("#labelModalStatus").text('Ativar Acesso ao CRM');
			$("#labelTituloModal").text('Motivo Ativar Acesso :');
		}else{
			$("#labelModalStatus").text('Desativar Acesso ao CRM');
			$("#labelTituloModal").text('Motivo Desativar Acesso :');
		}		
	});
	
	$(".cancel").click(function(){
		var isChecked = $("#valueStatus").is(':checked');
		if(isChecked){
			
		}
		if($("#valueStatus").is(':checked') ? $("#valueStatus").prop('checked', false): $("#valueStatus").prop('checked', true));
	});
	
});

