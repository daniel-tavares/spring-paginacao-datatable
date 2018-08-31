$(function(a) {
	
	/** Necessidade do IE10*/
	$.ajaxSetup ({cache: false});

	var columns = [
        { "data": "id"},
        { "data": "titulo" },
        { "data": "segmento" },
        { "data": "comunidade.nome",  "defaultContent" : ''},
        { "data": "ambiente" },
        { "data": "dispositivo" },
        { "data": "status" },
        { "data": "vigencia.inicioFormatado" },
        { "data": "vigencia.fimFormatado" },
        { "data": "null", "class": "center", "defaultContent" : '<span class="acoesDatatable"></span>'}
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
    
	$("#col3_filter").mask('00/00/0000');
    $("#col4_filter").mask('00/00/0000');
    service.fnDataTable("#tableAlerta", "alertaTable", columns, columnDefs);
    service.advancedSearch("alertaTable");
    service.datepicker();
   
    //alert(document.documentMode);retorna a versão do IE <> IE undefined
	
    /** PESQUISA AVANÇADA*/
    $(document).ready(function() {  
    	$("#col5_filter option").first().val("");
    	
    	var table = $("#tableAlerta").DataTable();
    	
    	$('#col2_filter').on( 'keyup', function () {
    	    table.column(1).search( this.value ).draw();
    	} );    	
    	$('#col3_filter').on( 'keyup', function () {
    	    table.column(7).search( this.value ).draw();
    	} );   
       	$('#col3_filter').on( 'change', function () {
    	    table.column(7).search( this.value ).draw();
    	} );   
    	$('#col4_filter').on( 'keyup', function () {
    	    table.column(8).search( this.value ).draw();
    	} );    	
    	$('#col4_filter').on( 'change', function () {
    	    table.column(8).search( this.value ).draw();
    	} );    	
    	$('#col1_filter').on( 'change', function () {
    	    table.column(6).search( this.value ).draw();
    	} );
    	$('#col5_filter').on( 'change', function () {
    	    table.column(2).search( this.value ).draw();
    	} );    
    	$('#ambiente').on('change' , function() {
    		table.column(4).search( this.value ).draw();
    	});  
    	$('#col7_filter').on('change' , function() {
    		table.column(3).search( this.value ).draw();
    	});  
      });
    
    /**TRATAMENTO LIMITE DE CARACTERES MOTIVO DA EXCLUSÃO*/
    $("#motivoSituacao").limit('255', '#motivoSituacaoLeft');
    
   
});