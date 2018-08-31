$(function() {	
	$("#nomeIpt").limit('60', '#nomeIptLeft');
	$("#descricaoIpt").limit('255', '#descricaoIptLeft');
	$('#dataInicioIpt').mask("00/00/0000");
    $('#dataFimIpt').mask("00/00/0000");
	service.datepicker();
});

$('#radioPesquisaPorComunidade').click(function() {
	$("#DivPorComunidade").show('fast');
	$("#DivPorSegmento").hide('fast');
});

$('#radioPesquisaPorSegmento').click(function() {
	$("#DivPorComunidade").hide('fast');
	$("#DivPorSegmento").show('fast');
});

$('#segmentoSel').change(function() {
	if (this.selectedIndex != 0) {
		$('#comunidadeSel').prop( "disabled", true );
	} else {
		$('#comunidadeSel').prop( "disabled", false );
	}
});

$('#recorrenteQtdDia').change(function() {
	$("#qtd").val($("#recorrenteQtdDia").val());	
});

$('#recorrenteQtdSemana').change(function() {
	$("#qtd").val($("#recorrenteQtdSemana").val());
});

$('#recorrenteQtdMes').change(function() {
	$("#qtd").val($("#recorrenteQtdMes").val());
});


$('#recorrenciaDiaMensal').change(function() {
	$("#dia").val($("#recorrenciaDiaMensal").val());
});

$('#recorrenciaDiaAnual').change(function() {
	$("#dia").val($("#recorrenciaDiaAnual").val());
});

$('#comunidadeSel').change(function() {
	if (this.selectedIndex != 0) {
		$('#segmentoSel').prop( "disabled", true );
	} else {
		$('#segmentoSel').prop( "disabled", false );
	}
});

if ($('#segmentoSel').prop('selectedIndex') != 0 && $('#segmentoSel').prop('selectedIndex') != 7) {
	$('#comunidadeSel').prop( "disabled", true );
}else if ($('#comunidadeSel').prop('selectedIndex') != 0) {
	$('#segmentoSel').prop( "disabled", true );
}

if($('#recorrenciaSel').prop('selectedIndex') != 0) {
	verificarRecorrencia();
}

if($("#qtd").val() != 1) {
	$("#recorrenteQtdDia").val($("#qtd").val());	
	$("#recorrenteQtdSemana").val($("#qtd").val());
	$("#recorrenteQtdMes").val($("#qtd").val());
}else{
	$("#recorrenteQtdDia").val(1);	
	$("#recorrenteQtdSemana").val(1);
	$("#recorrenteQtdMes").val(1);
}

if($("#dia").val() != 0) {
	$("#recorrenciaDiaAnual").val($("#dia").val());	
	$("#recorrenciaDiaMensal").val($("#dia").val());
}else{
	$("#recorrenciaDiaAnual").val("");	
	$("#recorrenciaDiaMensal").val("");
}

$("#recorrenciaSel").change(function() {
	$("#recorrenteQtdDia").val("");
	$("#recorrenteQtdSemana").val("");
	$("#recorrenteQtdMes").val("");
	verificarRecorrencia();	
});

$("#btnPendenteAprovacao").on("click", function() {
	$("#add-evento-form").attr("action", "./pendenteAprovacao");
	$("#add-evento-form").submit();
});

$('#dataInicioIpt').datepicker("option", "defaultDate", new Date());

function verificarRecorrencia(){
	var selecionado=true;
	if ($("#recorrenciaSel").val() == "UNICA") {
		escondeTodosRecorrencia();
		$("#divRecorrenciaUnica").show('fast');
	} else if ($("#recorrenciaSel").val() == "DIARIA") {
		escondeTodosRecorrencia();
		$("#divRecorrenciaDiaria").show('fast');
	} else if ($("#recorrenciaSel").val() == "SEMANAL") {
		escondeTodosRecorrencia();
		$("#divRecorrenciaSemanal").show('fast');
	} else if ($("#recorrenciaSel").val() == "MENSAL") {
		escondeTodosRecorrencia();
		$("#divRecorrenciaMensal").show('fast');
	} else if ($("#recorrenciaSel").val() == "ANUAL") {
		escondeTodosRecorrencia();
		$("#divRecorrenciaAnual").show('fast');
	} else {
		selecionado=false;
		escondeTodosRecorrencia();
	}
	
	if(selecionado==true){
		$("#divAntecipaDiaUtil").show('fast');
	}else{
		$("#divAntecipaDiaUtil").hide('fast');
	}
}

function escondeTodosRecorrencia() {
	$("#divRecorrenciaUnica").hide('fast');
	$("#divRecorrenciaDiaria").hide('fast');
	$("#divRecorrenciaSemanal").hide('fast');
	$("#divRecorrenciaMensal").hide('fast');
	$("#divRecorrenciaAnual").hide('fast');
}

$("#recorrenciaDiaAnual").load(function(){validateDate();});
$("#recorrenciaDiaAnual").change(function(){validateDate();});
$("#recorrenciaDiaAnualMesSel").change(function(){validateDate();});

function validateDate(){
	var dia = $("#recorrenciaDiaAnual").val();
	var mes = $("#recorrenciaDiaAnualMesSel").val();
	var erro = false;
	if(dia == 0 || mes == "SEL"){
		erro = true;
	}
	if( dia >= 30 ){
		if( mes == 'ABRIL' || mes == 'JUNHO' || mes == 'SETEMBRO' || mes == 'NOVEMBRO'){
			erro = true;
		}
	}
	if(mes == 'FEVEREIRO' && dia >= 29){
		erro = true;
	}
	if(erro){
		$("#divRecorrenciaAnualError").css('display', 'block');
		return true;
	}else{
		$("#divRecorrenciaAnualError").css('display', 'none');
		return false;
	}
}

$('#add-evento-form').submit(function(e) { 
	if($("#dataUnicaIpt").val() == ""){
		if($("#recorrenteQtdSemana").val() == "" && $("diasSemanaSelecionados") == ""){
			if($("#recorrenciaDiaMensal").val() == "" && $("recorrenteQtdMes").val() == ""){
				if(validateDate()){
					e.preventDefault();
				}			
			}
		}	
	}
});

$('#recorrenteQtdSemana , #recorrenciaDiaMensal , #recorrenteQtdMes, #recorrenciaDiaAnual').keypress(function(event) {
    if ((event.keyCode > 48 && event.keyCode < 58)){
    	return true;
    }
    else {
    	return false;
    }
});