$(function() {
    var columns = [
        { "data": "id"},
        { "data": "tituloCategoria" },
        { "data": "segmento" },
        { "data": "dispositivo" },
        { "data": "status" },
        { "data": "operacao.manutencaoFormatada", "class": "center" },
        { "data": "operacao.usuario", "class": "center" }	 
        //{ "data": "null", "class": "center", "defaultContent" : '<span class="acoesDatatable"></span>'}
    ];
    
    /**
     * Definições das colunas do datatables.
     */
    var columnDefs = [
        {targets: [0], searchable: false},
        {targets: [9], searchable: false, orderable: false}
    ];

    service.fnDataTable("#tableCategoriaCarrossel", "tableCategoriaCarrossel", columns, columnDefs);
    // service.advancedSearch("tableCategoriaCarrossel");
    service.datepicker();
    
    /** PESQUISA AVANÇADA*/
    $(document).ready(function() {    	
    	var table = $("#tableCategoriaCarrossel").DataTable();
    	
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
    	$('#col1_filter').on( 'keyup', function () {
    	    table.column(6).search( this.value ).draw();
    	} );
    	$('#col5_filter').on( 'keyup', function () {
    	    table.column(2).search( this.value ).draw();
    	} );    
    	$('#col6_filter').on('keyup' , function() {
    		table.column(4).search( this.value ).draw();
    	});  
    	$('#col7_filter').on('keyup' , function() {
    		table.column(3).search( this.value ).draw();
    	});  
    });
    

});