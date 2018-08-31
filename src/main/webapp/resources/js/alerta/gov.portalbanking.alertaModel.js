$(function() {
    service.datepicker();
    $('#dataInicioIpt').mask("00/00/0000");
    $('#dataFimIpt').mask("00/00/0000");
});

$('.form-control datePicker').datepicker("option", "defaultDate", new Date());
$('.form-control datePicker').datepicker("option", "mask", "dd/MM/yy");

$('#tituloIpt').limit('60', '#tituloIptLeft');
$('#detalhamentoTxt').limit('1000', '#detalhamentoTxtLeft');
$('#conteudoTxt').limit('1000', '#conteudoTxtLeft');
/**
 * Desabilita a comunidade caso seja selecionado um segmento e vice versa.
 */
$('#segmentoSel').change(function() {
	if (this.selectedIndex != 0) {
		$('#comunidadeSel').prop( "disabled", true );
	} else {
		$('#comunidadeSel').prop( "disabled", false );
	}
});
$('#comunidadeSel').change(function() {
	if (this.selectedIndex != 0) {
		$('#segmentoSel').prop( "disabled", true );
	} else {
		$('#segmentoSel').prop( "disabled", false );
	}
});
if ($('#segmentoSel').prop('selectedIndex') != 0) {
	$('#comunidadeSel').prop( "disabled", true );
}
if ($('#comunidadeSel').prop('selectedIndex') != 0) {
	$('#segmentoSel').prop( "disabled", true );
}

$("#btnPendenteAprovacao").on("click", function() {
	$("#add-alerta-form").attr("action", "./pendenteAprovacao");
	$("#add-alerta-form").submit();
});

