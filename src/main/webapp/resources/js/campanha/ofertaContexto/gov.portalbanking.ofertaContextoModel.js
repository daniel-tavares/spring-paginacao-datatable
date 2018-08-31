$(function() {
    service.datepicker();
    $('#dtPublicacao').mask("00/00/0000");
    $('#dtExpiracao').mask("00/00/0000");
});

$("#btnPendenteAprovacao").on("click", function() {
	$("#add-ofertaContexto-form").attr("action", "./pendenteAprovacao");
	$("#add-ofertaContexto-form").submit();
});