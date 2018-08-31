function lpad(str, padString, length) {

    while (str.length < length)
        str = padString + str;
    return str;
}

$(".contasCheckbox").click(function(){
	var selecionados = $(".contasCheckbox:checked");
	var idSelecionados = "";
	
	for(var a=0; a<selecionados.length; a++){
		if(idSelecionados!=""){
			idSelecionados+=",";
		}
		idSelecionados+=$(selecionados[a]).val();
	}

	$("#tiposContasStr2").val(idSelecionados);
});

$("document").ready(function(){
	 var selecionados = $("#tiposContasStr2").val();
	 
	 var arr = selecionados.split(",");
	 
	 for(var a=0; a<arr.length; a++){
		 $(".contasCheckbox").each(function(){
			if(lpad($(this).val(),'0',4)==lpad(arr[a],'0',4)){
				$(this).attr('checked','checked');
			} 
		 });
	 }
});

$("#btAtualizar").click(function(){
	$("#dispositivo").removeAttr("disabled");
	$("#pessoaFisica").removeAttr("disabled");
	$("#pessoaJuridica").removeAttr("disabled");
	$("#governo").removeAttr("disabled");
	$("#nCorrCidadao").removeAttr("disabled");
	$("#nCorrCartao").removeAttr("disabled");
	
	$("#add-servicos-form").submit();
});

$("#cpNome").limit('100', '#cpNomeLeft');
$("#cpToolTip").limit('255', '#cpToolTipLeft');
$("#listaDescritivaTxt").limit('255', '#cpListaDescritivaTxtLeft');
$("#urlAplicacao").limit('255', '#urlAplicacaoLeft');
$("#siperCode").limit('255', '#siperCodeLeft');

//TRATAMENTO DE MENSAGENS
var msgError = $(".alert-dismissable span").text();
if(msgError != ""){
	if(msgError.indexOf("Segmento") > -1 || msgError.indexOf("segmento") > -1){
		$("#errorConteudoSgto").html(msgError);
	}
	if(msgError.indexOf("Dispositivo") > -1){
		$("#errorConteudoDsptvo").html(msgError);
	}
	if(msgError.indexOf("tipo de conta") > -1){
		$("#errorConteudoTiposContas").html(msgError);
	}	
}
