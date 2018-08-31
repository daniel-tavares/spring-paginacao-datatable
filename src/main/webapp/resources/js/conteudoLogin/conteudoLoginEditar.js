$(function() {
	$("#preVisualizar").click(function(){
		//abreVisualizarPagina();
	});		
	var items = [];
	//EDITAR IMAGEM FUNDO
	try{	
		$("#cpLink").limit('255', '#cpLinkLeft');
	}catch(err){}	
	$("#cpLink").limit('255', '#cpLinkLeft');
	//BOX LOGIN
	try{	
		$("#editBoxLogindetalhamentoTxt").limit('255', '#editBoxLogindetalhamentoTxtLeft');
		$("#editBoxLogindetalhamento2Txt").limit('255', '#editBoxLogindetalhamento2TxtLeft');
		//items.push("#editBoxLogindetalhamentoTxt");
	}catch(err){}	
	//BOX CADASTRE-SE
	try{
		$("#boxCadastreseTituloTxt").limit('255', '#boxCadastreseTituloTxtLeft');
		$("#boxCadastreseDetalhamentoTxt").limit('4000', '#boxCadastreseDetalhamentoTxtLeft');
	}catch(err){}	
	//BOX CENTRAL
	try{
		$("#boxCentralTituloTxt").limit('255', '#boxCentralTituloTxtLeft');
		$("#boxCentralDetalheTxt").limit('4000', '#boxCentralDetalheTxtLeft');
	}catch(err){}
	//CONHEÇA
	try{
		$("#conhecaSaibaTxt").limit('4000', '#conhecaSaibaTxtLeft');
		$("#conhecaAcessibilidadeTxt").limit('4000', '#conhecaAcessibilidadeTxtLeft');
		$("#conhecaCadastroComputadorTxt").limit('4000', '#conhecaCadastroComputadorTxtLeft');
		$("#conhecaSenhaUsuarioTxt").limit('4000', '#conhecaSenhaUsuarioTxtLeft');
		$("#conhecaPerguntasTxt").limit('4000', '#conhecaPerguntasTxtLeft');
	}catch(err){}
	//CADASTRO
	try{
		$("#cadastroSaibaTxt").limit('4000', '#cadastroSaibaTxtLeft');
		$("#cadastroTextoTxt").limit('4000', '#cadastroTextoTxtLeft');
		$("#cadastroQuadroUsuarioCContaTxt").limit('4000', '#cadastroQuadroUsuarioCContaTxtLeft');
		$("#cadastroQuadroUsuarioSContaTxt").limit('255', '#cadastroQuadroUsuarioSContaTxtLeft');
		$("#cadastroSaibaMaisObjetivoTxt").limit('255', '#cadastroSaibaMaisObjetivoTxtLeft');
		$("#cadastroSaibaMaisHorarioTxt").limit('255', '#cadastroSaibaMaisHorarioTxtLeft');
		$("#cadastroSaibaMaisCondicoesTxt").limit('255', '#cadastroSaibaMaisCondicoesTxtLeft');
		$("#cadastroSaibaMaisDescricaoTxt").limit('255', '#cadastroSaibaMaisDescricaoTxtLeft');
		$("#cadastroSaibaMaisObservacoesTxt").limit('255', '#cadastroSaibaMaisObservacoesTxtLeft');
		$("#cadastroSaibaMaisCustoTxt").limit('255', '#cadastroSaibaMaisCustoTxtLeft');
	}catch(err){}
	//CADASTRO USUÁRIO COM CONTA
	try{
		$("#cadastroUsuarioContaSaibaTxt").limit('4000', '#cadastroUsuarioContaSaibaTxtLeft');
		$("#cadastroUsuarioContaDetalheTxt").limit('4000', '#cadastroUsuarioContaDetalheTxtLeft');
		$("#cadastroUsuarioContaUsuarioSenhaTxt").limit('4000', '#cadastroUsuarioContaUsuarioSenhaTxtLeft');
		$("#cadastroUsuarioContaUsuarioDetalhe2Txt").limit('400', '#cadastroUsuarioContaUsuarioDetalhe2TxtLeft');
		$("#cadastroUsuarioContaUsuarioTituloTxt").limit('4000', '#cadastroUsuarioContaUsuarioTituloTxtLeft');
		$("#cadastroUsuarioContaUsuarioDetalhe3Txt").limit('4000', '#cadastroUsuarioContaUsuarioDetalhe3TxtLeft');
		$("#cadastroUsuarioContaUsuarioAvisoTxt").limit('255', '#cadastroUsuarioContaUsuarioAvisoTxtLeft');
		$("#cadastroUsuarioContaUsuarioDetalhe4Txt").limit('4000', '#cadastroUsuarioContaUsuarioDetalhe4TxtLeft');
	}catch(err){}
	//IDENTIFICAÇÃO USUÁRIO
	try{
		$("#identUsuarioTituloTxt").limit('255', '#identUsuarioTituloTxtLeft');
		$("#identUsuarioDetalhamentoTxt").limit('4000', '#identUsuarioDetalhamentoTxtLeft');
		$("#identUsuarioComplementoTxt").limit('400', '#identUsuarioComplementoTxtLeft');
	}catch(err){}
	//RODAPÉ
	try{
		$("#rodapeTextoTxt").limit('255', '#rodapeTextoTxtLeft');
		$("#rodapeLinkTxt").limit('4000', '#rodapeLinkTxtLeft');
		$("#rodapeRedeTxt").limit('4000', '#rodapeRedeTxtLeft');
	}catch(err){}

	//SMARTPHONE
	//ATIVAÇÃO SMARTPHONE
	try{
		$("#ativSmartInformationTxt").limit('4000', '#ativSmartInformationTxtLeft');
		$("#ativSmartTituloTxt").limit('255', '#ativSmartTituloTxtLeft');
		$("#ativSmartAssinaturaTxt").limit('4000', '#ativSmartAssinaturaTxtLeft');
	}catch(err){}
	//IDENTIFICAÇÃO USUÁRIO
	try{
		$("#ativSmartUserTituloTxt").limit('255', '#ativSmartUserTituloTxtLeft');
		$("#ativSmartUserDetalheTxt").limit('4000', '#ativSmartUserDetalheTxtLeft');
		$("#ativSmartUserSenhaTxt").limit('4000', '#ativSmartUserSenhaTxtLeft');
	}catch(err){}

	
	$.each(items, function( index, value ) {
/*		  alert( index + ": " + value );
		  service.editorTexto(value,150);
*/		});
	

});
		 