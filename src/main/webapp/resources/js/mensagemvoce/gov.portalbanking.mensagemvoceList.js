$(function() {
	
	/** Necessidade do IE10*/
	$.ajaxSetup ({cache: false});

    var columns = [
        {"data": "id"},
        {"data" : "titulo","defaultContent" : '' },
        {"data" : "segmento","defaultContent" : '' },
        { "data": "comunidade.nome",  "defaultContent" : ''},
        {"data" : "ambiente","defaultContent" : '' },
        {"data" : "dispositivo","defaultContent" : '' },
        {"data" : "status","defaultContent" : '' },
        {"data" : "vigencia.inicioFormatado","defaultContent" : '' },
        {"data" : "vigencia.fimFormatado","defaultContent" : '' },
        {"data" : "null", "class" : "center", "defaultContent" : '<span class="acoesDatatable"></span>'}
    ];
    
    /**
     * Definições das colunas do datatables.
     */
    var columnDefs = [
        {targets: [0], searchable: false},
		{targets: [1], "type": "char-specials"},
		{targets: [3], "type": "char-specials"},
		{targets: [7], "type": "data-grade"},
		{targets: [8], "type": "data-grade"},
        {targets: [9], searchable: false, orderable: false}
    ];
    
	$("#dataInicialVigencia").mask('00/00/0000');
    $("#dataFinalVigencia").mask('00/00/0000');
    service.fnDataTable("#mensagemVoceTable", "mensagemVoceTable", columns, columnDefs,"Nenhum registro encontrado para o filtro informado!","Nenhum registro encontrado", false);
    service.advancedSearch("mensagemVoceTable");
    service.datepicker();
});

function teste(){
	service.filtra("#mensagemVoceTable");
}


$(document).ready(function() {
	
	var table = $("#mensagemVoceTable").DataTable();
	
	$('#titulo').on( 'keyup', function () {
	    table.column(1).search( this.value ).draw();
	} );
	
	$('#segmento').on( 'change', function () {
	    table.column(2).search( this.value ).draw();
	} );

	$('#comunidade').on( 'change', function () {
	    table.column(3).search( this.value ).draw();
	} );

	$('#ambiente').on( 'change', function () {
	    table.column(4).search( this.value ).draw();
	} );
	
	$('#situacao').on( 'change', function () {
	    table.column(6).search( this.value ).draw();
	} );
	
	$('#dataInicialVigencia').on( 'keyup', function () {
	    table.column(7).search( this.value ).draw();
	} );
	
	$('#dataInicialVigencia').on('change' , function() {
		table.column(7).search( this.value ).draw();
	});
	
	$('#dataFinalVigencia').on( 'keyup', function () {
	    table.column(8).search( this.value ).draw();
	});
	
	$('#dataFinalVigencia').on('change', function(){
		table.column(8).search( this.value).draw();
	});

	$("#btnPublicar").on("click", function () {
        $("#modalPublicar").show();
    });	
});


