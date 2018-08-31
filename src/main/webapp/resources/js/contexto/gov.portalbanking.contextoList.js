$(function() {
	var columns = [
	               { "data": "id"},
	               { "data": "nomeContexto","defaultContent" : '' },	               
	               { "data": "operacao.manutencaoFormatado","defaultContent" : '' },	               
	               { "data": "operacao.usuario","defaultContent" : '' },
	               { "data": "null", "class": "center", "defaultContent" : '<span class="acoesDatatable"></span>'}
	           ];
    
    /**
     * Definições das colunas do datatables.
     */
    var columnDefs = [
                      {targets: [0], searchable: false},
                      {targets: [1], "type": "char-specials"},
              		  {targets: [2], "type": "data-grade"},
                      {targets: [4], searchable: false, orderable: false}
                  ];
    
    $("#dataManutencao").mask('00/00/0000');
    service.fnDataTableContexto("#tableContexto", "contextoTable", columns, columnDefs);
    service.advancedSearch("contextoTable");
    service.datepicker();
});

$(document).ready(function() {

    	
   var table = $("#tableContexto").DataTable();
    	
    $('#nome').on('keyup', function () {
    	table.column(1).search( this.value ).draw();
    } );
    
    $('#dataManutencao').on('keyup', function () {
	    table.column(2).search( this.value ).draw();
    });
    
    $('#dataManutencao').on('change', function () {
	    table.column(2).search( this.value ).draw();
    });
   
    $('#usuario').on('keyup', function () {
	    table.column(3).search( this.value ).draw();
    });
    
/*    $('#situacao').on('change', function () {
    	table.column(4).search( this.value ).draw();
    } );
*/    	
   
    /**TRATAMENTO LIMITE DE CARACTERES MOTIVO DA EXCLUSÃO*/
    $("#motivoSituacao").limit('255', '#motivoSituacaoLeft');
    
});
