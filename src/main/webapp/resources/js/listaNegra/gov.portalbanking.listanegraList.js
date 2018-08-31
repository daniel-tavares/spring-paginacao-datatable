$(function() {
    var columns = [
        {"data" : "maquina"},
        {"data" : "dataInclusaoFormatada"},
        {"data" : "dataExclusaoFormatada","defaultContent" : ''},
        {"data" : "operacao.usuario"},
        {"data" : "ativo"},        
        {"data" : "null", "class": "center", "defaultContent" : '<span class="acoesDatatable"></span>' }
    ]; 					   
    
    /**
     * Definições das colunas do datatables.
     */
    var columnDefs = [
        {targets: [0], searchable: true},
		{targets: [1], "type": "data-grade"},
		{targets: [2], "type": "data-grade"},
        {targets: [5], searchable: false, orderable: false}
    ];

    service.fnDataTable("#tableListaNegraTable", "listaNegraTable", columns, columnDefs,"Nenhum registro encontrado para o filtro informado!", "Nenhum registro encontrado!",false );
    service.advancedSearch("listaNegraTable");
    service.datepicker();
    
    
});

$(document).ready(function() {	
		
	var table = $('#tableListaNegraTable').DataTable();
	
    
	$('#colId').on( 'keyup', function () {
	    table.column(0).search( this.value ).draw();
	} );
	
	$('#colDataInclusao').on( 'change', function () {
	    table.column(1).search( this.value ).draw();
	} );
	
	$('#colDataInclusao').on( 'keyup', function () {
	    table.column(1).search( this.value ).draw();
	} );
	
	$('#colDataExclusao').on( 'keyup', function () {
	    table.column(2).search( this.value ).draw();
	} );
	
	$('#colDataExclusao').on( 'change', function () {
	    table.column(2).search( this.value ).draw();
	} );
	
	$('#colMatrucilaLdap').on( 'keyup', function () {
	    table.column(3).search( this.value ).draw();
	} );
	
	$('#colSituacao').on( 'change', function () {
	    table.column(4).search( this.value ).draw();
	} );
	
	$("#exampleInputFile").change(function(){
		var extensaoFile = $(this).val().split('.').pop().toLowerCase();
		if($.inArray(extensaoFile, ['csv']) == -1) {
			 $("#btoInfUploadExtension").click();
			    return false;
		}else{			
			$("#uploadForm").submit();
		}
	});
	
});