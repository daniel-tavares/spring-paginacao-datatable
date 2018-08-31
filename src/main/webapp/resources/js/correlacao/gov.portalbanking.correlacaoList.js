$(function() {
	var columns = [
	               { "data": "id"},
	               { "data": "codProdutoSidec","defaultContent" : '' },
	               { "data": "codProdutoNsgd","defaultContent" : '' },
	               { "data": "nomeCorrelacao","defaultContent" : '' },
	               { "data": "segmento","defaultContent" : '' },
	               { "data": "operacao.usuario","defaultContent" : '' },
	               { "data": "operacao.manutencaoFormatado","defaultContent" : '' },	               
	               { "data": "null", "class": "center", "defaultContent" : '<span class="acoesDatatable"></span>'}
	           ];
    
    /**
     * Definições das colunas do datatables.
     */
    var columnDefs = [
                      {targets: [0], searchable: false},
                      {targets: [3], "type": "char-specials"},
              		  {targets: [6], "type": "data-grade"},
                      {targets: [7], searchable: false, orderable: false}
                  ];
    
    service.fnDataTable("#tableCorrelacao", "correlacaoTable", columns, columnDefs);
    service.advancedSearch("correlacaoTable");
    service.datepicker();
});

$(document).ready(function() {
    
    /**TRATAMENTO LIMITE DE CARACTERES MOTIVO DA EXCLUSÃO*/
    $("#motivoSituacao").limit('255', '#motivoSituacaoLeft');
    
});
