$(function() {
    var columns = [
        { "data": "id"},
        { "data": "nome"},
        { "data": "recorrencia","defaultContent" : '' },
        { "data": "segmento", "defaultContent" : '' },
        { "data": "comunidade.nome",  "defaultContent" : ''},
        { "data": "ambiente", "defaultContent" : '' },
        { "data": "dispositivo", "defaultContent" : '' },
        { "data": "status", "defaultContent" : ''},
        { "data": "vigencia.inicioFormatado" },
        { "data": "vigencia.fimFormatado" },
        { "data": "null", "class": "center", "defaultContent" : '<span class="acoesDatatable"></span>' }
    ];
    
    /**
     * Definições das colunas do datatables.
     */
    var columnDefs = [
        {targets: [0], searchable: false},
		{targets: [1], "type": "char-specials"},
		{targets: [4], "type": "char-specials"},
		{targets: [8], "type": "data-grade"},
		{targets: [9], "type": "data-grade"},
        {targets: [10], searchable: false, orderable: false}
    ];
    
	$("#dataInicial").mask('00/00/0000');
    $("#dataFinal").mask('00/00/0000');
    service.fnDataTable("#tableEvento", "eventoTable", columns, columnDefs,"Nenhum registro encontrado para o filtro informado!", "Nenhum registro encontrado!",false);
    service.advancedSearch("eventoTable");
    service.datepicker();
    
    /**TRATAMENTO LIMITE DE CARACTERES MOTIVO DA EXCLUSÃO*/
    $("#motivoSituacao").limit('255', '#motivoSituacaoLeft');
});

$(document).ready(function() {
	 
	
	var table = $('#tableEvento').DataTable();
	
    
	$('#titulo').on( 'keyup', function () {
	    table.column(1).search( this.value ).draw();
	} );
	
	$('#recorrencia').on( 'keyup', function () {
	    table.column(2).search( this.value ).draw();
	} );
	
	$('#dataInicial').on( 'keyup', function () {
	    table.column(8).search( this.value ).draw();
	} );
	
	$('#dataInicial').on( 'change', function () {
	    table.column(8).search( this.value ).draw();
	} );
	
	$('#dataFinal').on( 'keyup', function () {
	    table.column(9).search( this.value ).draw();
	} );
	
	$('#dataFinal').on( 'change', function () {
	    table.column(9).search( this.value ).draw();
	} );
	
	$('#situacao').on( 'change', function () {
	    table.column(7).search( this.value ).draw();
	} );
	
	$('#segmento').on( 'change', function () {
	    table.column(3).search( this.value ).draw();
	} );
	
	$('#comunidade').on( 'change', function () {
	    table.column(4).search( this.value ).draw();
	} );
	$('#ambiente').on( 'change', function () {
	    table.column(5).search( this.value ).draw();
	} );

	/*$("#btnPendenteAprovacao").on("click", function() {
		$("#add-evento-form").attr("action", "./pendenteAprovacao");
		$("#add-evento-form").submit();
	});**/
	
	$("#btnPublicar").on("click", function () {
        //$("#publicar-form").attr("action", "./eventos/eventoPublicar");
        $("#modalPublicar").show();
    });	
});



