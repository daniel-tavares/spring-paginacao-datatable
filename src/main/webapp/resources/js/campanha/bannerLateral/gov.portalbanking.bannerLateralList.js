$(function() {
	
	/** Necessidade do IE10*/
	$.ajaxSetup ({cache: false});

    var columns = [
        { "data": "id"},
        { "data": "tituloCampanha" },
        { "data": "bannerPadraoFormatado" },
        { "data": "indCampanhaFormatado" },
        { "data": "status" },
        { "data": "ambiente" },
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
		{targets: [3], "type": "char-specials"},
		{targets: [6], "type": "data-grade"},
		{targets: [7], "type": "data-grade"},
        {targets: [8], searchable: false, orderable: false}
    ];
    
	$("#dtInicialVigencia").mask('00/00/0000');
    $("#dtFimVigencia").mask('00/00/0000');
    service.fnDataTableCampanha("#tableBannerLateral", "bannerLateralTable", columns, columnDefs);
    service.advancedSearch("bannerLateralTable");
    service.datepicker();

    /** PESQUISA AVANÇADA*/
    $(document).ready(function() {    	
    	var table = $("#tableBannerLateral").DataTable();
    	
    	$('#tituloCampanha').on( 'keyup', function () {
    	    table.column(1).search( this.value ).draw();
    	} );    	
    	$('#indicadorCampanha').on( 'keyup', function () {
    	    table.column(3).search( this.value ).draw();
    	} );    	
    	$('#padrao').on( 'change', function () {
    	    table.column(2).search( this.value ).draw();
    	} );    	
    	$('#status').on( 'change', function () {
    	    table.column(4).search( this.value ).draw();
    	} );    	
    	$('#ambiente').on( 'change', function () {
    	    table.column(5).search( this.value ).draw();
    	} );    	
    	$('#dtInicialVigencia').on( 'keyup', function () {
    	    table.column(6).search( this.value ).draw();
    	} );    
    	$('#dtInicialVigencia').on( 'change', function () {
    	    table.column(6).search( this.value ).draw();
    	} );
    	$('#dtFimVigencia').on('keyup' , function() {
    		table.column(7).search( this.value ).draw();
    	});  
    	$('#dtFimVigencia').on('change' , function() {
    		table.column(7).search( this.value ).draw();
    	}); 
    });
    
    /**TRATAMENTO LIMITE DE CARACTERES MOTIVO DA EXCLUSÃO*/
    $("#motivoSituacao").limit('255', '#motivoSituacaoLeft');
});

