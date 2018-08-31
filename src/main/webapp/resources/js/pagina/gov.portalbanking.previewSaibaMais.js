$(function() {
 
		var regex = /<br\s*[\/]?>/gi;
		
		if(navigator.userAgent.indexOf('Win')!= -1){
			$("#txTituloApresentacaoPF").text($("#txTituloApresentacaoPF").text().replace(regex, "\r\n"));
			$("#txApresentacaoPF").text($("#txApresentacaoPF").text().replace(regex, "\r\n"));
			$("#txTituloPF").text($("#txTituloPF").text().replace(regex, "\r\n"));
			$("#txObjetivoPF").text($("#txObjetivoPF").text().replace(regex, "\r\n"));
			$("#txHorarioPF").text($("#txHorarioPF").text().replace(regex, "\r\n"));
			$("#txCondicoesUsoPF").text($("#txCondicoesUsoPF").text().replace(regex, "\r\n"));
			$("#txDescricaoPF").text($("#txDescricaoPF").text().replace(regex, "\r\n"));
			$("#txObservacaoPF").text($("#txObservacaoPF").text().replace(regex, "\r\n"));
			$("#txCustoPF").text($("#txCustoPF").text().replace(regex, "\r\n"));

			$("#txTituloApresentacaoPJ").text($("#txTituloApresentacaoPJ").text().replace(regex, "\r\n"));
			$("#txApresentacaoPJ").text($("#txApresentacaoPJ").text().replace(regex, "\r\n"));
			$("#txTituloPJ").text($("#txTituloPJ").text().replace(regex, "\r\n"));
			$("#txObjetivoPJ").text($("#txObjetivoPJ").text().replace(regex, "\r\n"));
			$("#txHorarioPJ").text($("#txHorarioPJ").text().replace(regex, "\r\n"));
			$("#txCondicoesUsoPJ").text($("#txCondicoesUsoPJ").text().replace(regex, "\r\n"));
			$("#txDescricaoPJ").text($("#txDescricaoPJ").text().replace(regex, "\r\n"));
			$("#txObservacaoPJ").text($("#txObservacaoPJ").text().replace(regex, "\r\n"));
			$("#txCustoPJ").text($("#txCustoPJ").text().replace(regex, "\r\n"));

			$("#txTituloApresentacaoGOV").text($("#txTituloApresentacaoGOV").text().replace(regex, "\r\n"));
			$("#txApresentacaoGOV").text($("#txApresentacaoGOV").text().replace(regex, "\r\n"));
			$("#txTituloGOV").text($("#txTituloGOV").text().replace(regex, "\r\n"));
			$("#txObjetivoGOV").text($("#txObjetivoGOV").text().replace(regex, "\r\n"));
			$("#txHorarioGOV").text($("#txHorarioGOV").text().replace(regex, "\r\n"));
			$("#txCondicoesUsoGOV").text($("#txCondicoesUsoGOV").text().replace(regex, "\r\n"));
			$("#txDescricaoGOV").text($("#txDescricaoGOV").text().replace(regex, "\r\n"));
			$("#txObservacaoGOV").text($("#txObservacaoGOV").text().replace(regex, "\r\n"));
			$("#txCustoGOV").text($("#txCustoGOV").text().replace(regex, "\r\n"));

		}else if(navigator.userAgent.indexOf('Mac') != -1){
			$("#txTituloApresentacaoPF").text($("#txTituloApresentacaoPF").text().replace(regex, "\r"));
			$("#txApresentacaoPF").text($("#txApresentacaoPF").text().replace(regex, "\r"));
			$("#txTituloPF").text($("#txTituloPF").text().replace(regex, "\r"));
			$("#txObjetivoPF").text($("#txObjetivoPF").text().replace(regex, "\r"));
			$("#txHorarioPF").text($("#txHorarioPF").text().replace(regex, "\r"));
			$("#txCondicoesUsoPF").text($("#txCondicoesUsoPF").text().replace(regex, "\r"));
			$("#txDescricaoPF").text($("#txDescricaoPF").text().replace(regex, "\r"));
			$("#txObservacaoPF").text($("#txObservacaoPF").text().replace(regex, "\r"));
			$("#txCustoPF").text($("#txCustoPF").text().replace(regex, "\r"));

			$("#txTituloApresentacaoPJ").text($("#txTituloApresentacaoPJ").text().replace(regex, "\r"));
			$("#txApresentacaoPJ").text($("#txApresentacaoPJ").text().replace(regex, "\r"));
			$("#txTituloPJ").text($("#txTituloPJ").text().replace(regex, "\r"));
			$("#txObjetivoPJ").text($("#txObjetivoPJ").text().replace(regex, "\r"));
			$("#txHorarioPJ").text($("#txHorarioPJ").text().replace(regex, "\r"));
			$("#txCondicoesUsoPJ").text($("#txCondicoesUsoPJ").text().replace(regex, "\r"));
			$("#txDescricaoPJ").text($("#txDescricaoPJ").text().replace(regex, "\r"));
			$("#txObservacaoPJ").text($("#txObservacaoPJ").text().replace(regex, "\r"));
			$("#txCustoPJ").text($("#txCustoPJ").text().replace(regex, "\r"));

			$("#txTituloApresentacaoGOV").text($("#txTituloApresentacaoGOV").text().replace(regex, "\r"));
			$("#txApresentacaoGOV").text($("#txApresentacaoGOV").text().replace(regex, "\r"));
			$("#txTituloGOV").text($("#txTituloGOV").text().replace(regex, "\r"));
			$("#txObjetivoGOV").text($("#txObjetivoGOV").text().replace(regex, "\r"));
			$("#txHorarioGOV").text($("#txHorarioGOV").text().replace(regex, "\r"));
			$("#txCondicoesUsoGOV").text($("#txCondicoesUsoGOV").text().replace(regex, "\r"));
			$("#txDescricaoGOV").text($("#txDescricaoGOV").text().replace(regex, "\r"));
			$("#txObservacaoGOV").text($("#txObservacaoGOV").text().replace(regex, "\r"));
			$("#txCustoGOV").text($("#txCustoGOV").text().replace(regex, "\r"));
		}else{
			$("#txTituloApresentacaoPF").text($("#txTituloApresentacaoPF").text().replace(regex, "\n"));
			$("#txApresentacaoPF").text($("#txApresentacaoPF").text().replace(regex, "\n"));
			$("#txTituloPF").text($("#txTituloPF").text().replace(regex, "\n"));
			$("#txObjetivoPF").text($("#txObjetivoPF").text().replace(regex, "\n"));
			$("#txHorarioPF").text($("#txHorarioPF").text().replace(regex, "\n"));
			$("#txCondicoesUsoPF").text($("#txCondicoesUsoPF").text().replace(regex, "\n"));
			$("#txDescricaoPF").text($("#txDescricaoPF").text().replace(regex, "\n"));
			$("#txObservacaoPF").text($("#txObservacaoPF").text().replace(regex, "\n"));
			$("#txCustoPF").text($("#txCustoPF").text().replace(regex, "\n"));

			$("#txTituloApresentacaoPJ").text($("#txTituloApresentacaoPJ").text().replace(regex, "\n"));
			$("#txApresentacaoPJ").text($("#txApresentacaoPJ").text().replace(regex, "\n"));
			$("#txTituloPJ").text($("#txTituloPJ").text().replace(regex, "\n"));
			$("#txObjetivoPJ").text($("#txObjetivoPJ").text().replace(regex, "\n"));
			$("#txHorarioPJ").text($("#txHorarioPJ").text().replace(regex, "\n"));
			$("#txCondicoesUsoPJ").text($("#txCondicoesUsoPJ").text().replace(regex, "\n"));
			$("#txDescricaoPJ").text($("#txDescricaoPJ").text().replace(regex, "\n"));
			$("#txObservacaoPJ").text($("#txObservacaoPJ").text().replace(regex, "\n"));
			$("#txCustoPJ").text($("#txCustoPJ").text().replace(regex, "\n"));

			$("#txTituloApresentacaoGOV").text($("#txTituloApresentacaoGOV").text().replace(regex, "\n"));
			$("#txApresentacaoGOV").text($("#txApresentacaoGOV").text().replace(regex, "\n"));
			$("#txTituloGOV").text($("#txTituloGOV").text().replace(regex, "\n"));
			$("#txObjetivoGOV").text($("#txObjetivoGOV").text().replace(regex, "\n"));
			$("#txHorarioGOV").text($("#txHorarioGOV").text().replace(regex, "\n"));
			$("#txCondicoesUsoGOV").text($("#txCondicoesUsoGOV").text().replace(regex, "\n"));
			$("#txDescricaoGOV").text($("#txDescricaoGOV").text().replace(regex, "\n"));
			$("#txObservacaoGOV").text($("#txObservacaoGOV").text().replace(regex, "\n"));
			$("#txCustoGOV").text($("#txCustoGOV").text().replace(regex, "\n"));
		}
	
});
