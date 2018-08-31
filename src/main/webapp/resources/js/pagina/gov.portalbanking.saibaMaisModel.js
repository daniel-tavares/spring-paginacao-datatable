$(function() {
   // service.editorTexto(".textarea", 150);
	var sgto = ["PF","PJ","GOV","CID","CAR"];
	$.each(sgto, function(index, value) {
		try{
			$("#txTitulo"+value).limit('255', '#txTitulo'+value+'Left');
			$("#txObjetivo"+value).limit('2000', '#txObjetivo'+value+'Left');
			$("#txHorario"+value).limit('2000', '#txHorario'+value+'Left');
			$("#txCondicoesUso"+value).limit('2000', '#txCondicoesUso'+value+'Left');
			$("#txDescricao"+value).limit('2000', '#txDescricao'+value+'Left');
			$("#txObservacao"+value).limit('2000', '#txObservacao'+value+'Left');
			$("#txCusto"+value).limit('255', '#txCusto'+value+'Left');
			$("#txApresentacao"+value).limit('2000', '#txApresentacao'+value+'Left');	
			$("#txTituloApresentacao"+value).limit('255', '#txTituloApresentacao'+value+'Left');
		}catch(err){}
	});
		
	//TRATAMENTO DOS CAMPOS OBRIGATÓRIOS SAIBA MAIS / HORÁRIOS E LIMITES
	$(".submitSaibaMais").on("click", function(){
		var sgto = this.name;
		//CAMPO TITULO
		var titulo = $("#txTituloApresentacao"+sgto).val();
		if(!titulo.match(/[\w|\d]+/)){
			$("#errorTitulo"+sgto).show();
			return false;
		}
		//CAMPO APRESENTAÇÃO
		var apresentacao = $("#txApresentacao"+sgto).val();
		if(!apresentacao.match(/[\w|\d]+/)){
			$("#errorApresentacao"+sgto).show();
			return false;
		}
		
		$("#txTituloApresentacao"+sgto).val($("#txTituloApresentacao"+sgto).val().replace(/(?:\r\n|\r|\n)/g, '<br>'));
		$("#txApresentacao"+sgto).val($("#txApresentacao"+sgto).val().replace(/(?:\r\n|\r|\n)/g, '<br>'));
		$("#txTitulo"+sgto).val($("#txTitulo"+sgto).val().replace(/(?:\r\n|\r|\n)/g, '<br>'));
		$("#txObjetivo"+sgto).val($("#txObjetivo"+sgto).val().replace(/(?:\r\n|\r|\n)/g, '<br>'));
		$("#txHorario"+sgto).val($("#txHorario"+sgto).val().replace(/(?:\r\n|\r|\n)/g, '<br>'));
		$("#txCondicoesUso"+sgto).val($("#txCondicoesUso"+sgto).val().replace(/(?:\r\n|\r|\n)/g, '<br>'));
		$("#txDescricao"+sgto).val($("#txDescricao"+sgto).val().replace(/(?:\r\n|\r|\n)/g, '<br>'));
		$("#txObservacao"+sgto).val($("#txObservacao"+sgto).val().replace(/(?:\r\n|\r|\n)/g, '<br>'));
		$("#txCusto"+sgto).val($("#txCusto"+sgto).val().replace(/(?:\r\n|\r|\n)/g, '<br>'));


	});
	
	$(document).ready(function() {
		var regex = /<br\s*[\/]?>/gi;
		
		if(navigator.userAgent.indexOf('Win')!= -1){
			$("#txTituloApresentacao"+sgto).val($("#txTituloApresentacao"+sgto).val().replace(regex, "\r\n"));
			$("#txApresentacao"+sgto).val($("#txApresentacao"+sgto).val().replace(regex, "\r\n"));
			$("#txTitulo"+sgto).val($("#txTitulo"+sgto).val().replace(regex, "\r\n"));
			$("#txObjetivo"+sgto).val($("#txObjetivo"+sgto).val().replace(regex, "\r\n"));
			$("#txHorario"+sgto).val($("#txHorario"+sgto).val().replace(regex, ""));
			$("#txCondicoesUso"+sgto).val($("#txCondicoesUso"+sgto).val().replace(regex, "\r\n"));
			$("#txDescricao"+sgto).val($("#txDescricao"+sgto).val().replace(regex, "\r\n"));
			$("#txObservacao"+sgto).val($("#txObservacao"+sgto).val().replace(regex, "\r\n"));
			$("#txCusto"+sgto).val($("#txCusto"+sgto).val().replace(regex, "\r\n"));
		}else if(navigator.userAgent.indexOf('Mac') != -1){
			$("#txTituloApresentacao"+sgto).val($("#txTituloApresentacao"+sgto).val().replace(regex, "\r"));
			$("#txApresentacao"+sgto).val($("#txApresentacao"+sgto).val().replace(regex, "\r"));
			$("#txTitulo"+sgto).val($("#txTitulo"+sgto).val().replace(regex, "\r"));
			$("#txObjetivo"+sgto).val($("#txObjetivo"+sgto).val().replace(regex, "\r"));
			$("#txHorario"+sgto).val($("#txHorario"+sgto).val().replace(regex, "\r"));
			$("#txCondicoesUso"+sgto).val($("#txCondicoesUso"+sgto).val().replace(regex, "\r"));
			$("#txDescricao"+sgto).val($("#txDescricao"+sgto).val().replace(regex, "\r"));
			$("#txObservacao"+sgto).val($("#txObservacao"+sgto).val().replace(regex, "\r"));
			$("#txCusto"+sgto).val($("#txCusto"+sgto).val().replace(regex, "\r"));
		}else{
			$("#txTituloApresentacao"+sgto).val($("#txTituloApresentacao"+sgto).val().replace(regex, "\n"));
			$("#txApresentacao"+sgto).val($("#txApresentacao"+sgto).val().replace(regex, "\n"));
			$("#txTitulo"+sgto).val($("#txTitulo"+sgto).val().replace(regex, "\n"));
			$("#txObjetivo"+sgto).val($("#txObjetivo"+sgto).val().replace(regex, "\n"));
			$("#txHorario"+sgto).val($("#txHorario"+sgto).val().replace(regex, ""));
			$("#txCondicoesUso"+sgto).val($("#txCondicoesUso"+sgto).val().replace(regex, "\n"));
			$("#txDescricao"+sgto).val($("#txDescricao"+sgto).val().replace(regex, "\n"));
			$("#txObservacao"+sgto).val($("#txObservacao"+sgto).val().replace(regex, "\n"));
			$("#txCusto"+sgto).val($("#txCusto"+sgto).val().replace(regex, "\n"));
		}
	});
	
	
	
});
