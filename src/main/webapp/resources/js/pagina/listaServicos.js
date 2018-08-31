
$("#btSelecionar").on("click", function(){
	var selecionado = $("input[name='radioServicos']:checked").prop("value");	
	if(selecionado==undefined){
		$("#btoInf").click();
	}else{
		$("#servicos-form").attr("action", "./obterPaginasConteudo?idServicoSelecionado="+selecionado);
		$("#servicos-form").submit();
	}
});

