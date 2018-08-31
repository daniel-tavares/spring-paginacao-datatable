$(function() {
	var columns = [
	               { "data": "produtoPK.id"},
	               { "data": "descTipoConta","defaultContent" : '' },
	               { "data": "operacao.manutencaoFormatado","defaultContent" : '' },	               
	               { "data": "operacao.usuario","defaultContent" : '' },
	               { "data": "segmentoEnum","defaultContent" : '' },
	               { "data": "null", "class": "center", "defaultContent" : '<span class="acoesDatatable"></span>'},
				   { "data": "produtoPK.segmento", "defaultContent" : '' }
	           ];
    
    /**
     * Definições das colunas do datatables.
     */
    var columnDefs = [
                      {targets: [0], searchable: false},
              		  {targets: [2], "type": "data-grade"},
                      {targets: [5], searchable: false, orderable: false},
					  {targets: [6], searchable: true, visible: false}
                  ];
    
    service.fnDataTable("#tableProdutos", "produtoTable", columns, columnDefs);
    service.advancedSearch("produtoTable");
    service.datepicker();
});

