//TRATAMENTO DE MENSAGENS
var msgError = $(".alert-dismissable span").text();
if(msgError != ""){
	if(msgError.indexOf("Segmento") > -1 || msgError.indexOf("segmento") > -1){
		$("#errorConteudoSgto").html(msgError);
	}
}
