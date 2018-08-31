$(function() {
    var columns = [
        { "data": "id"},
        { "data": "nomeServico" },
        { "data": "dispositivoString", "class": "center" },
        { "data": "operacao.manutencaoFormatada", "class": "center" },
        { "data": "operacao.usuario", "class": "center" },	        
        { "data": "segmentoPFString", "class": "center" },
        { "data": "segmentoPJString", "class": "center" },
        { "data": "segmentoGOVString", "class": "center" },
        { "data": "segmentoCartaoString", "class": "center" },
        { "data": "segmentoCidadaoString", "class": "center" },
        { "data": "null", "class": "center", "defaultContent" : '<span class="acoesDatatable"></span>' }
    ];	
    /**
     * Definições das colunas do datatables.
     */
    var columnDefs = [
        {targets: [0], searchable: false},
		{targets: [1], "type": "char-specials"},
		{targets: [3], "type": "data-grade"},
        {targets: [10], searchable: false, orderable: false}
    ];
    
    $("#dtInclusao").mask('00/00/0000');
    service.fnDataTable("#tableServicos", "servicosTable", columns, columnDefs);
    service.advancedSearch("servicosTable");
    service.datepicker();
    
    /** PESQUISA AVANÇADA*/
    $(document).ready(function() {    	
    	var table = $("#tableServicos").DataTable();
    	
    	$('#nomeServico').on( 'keyup', function () {
    	    table.column(1).search( this.value ).draw();
    	} );    	
    	$('#dispositivo').on( 'change', function () {
    	    table.column(2).search( this.value ).draw();
    	} );    	
    	$('#dtInclusao').on( 'keyup', function () {
    	    table.column(3).search( this.value ).draw();
    	} );    
    	$('#dtInclusao').on( 'change', function () {
    	    table.column(3).search( this.value ).draw();
    	} );
    	$('#usuario').on('keyup' , function() {
    		table.column(4).search( this.value ).draw();
    	});  
    });

    
});

