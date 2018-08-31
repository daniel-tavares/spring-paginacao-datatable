$(function() {
    var columns = [
        { "data": "id", "class": "center"},
        { "data": "nomeServico" },
        { "data": "dispositivoString", "class": "center" },
        { "data": "operacao.manutencaoFormatada", "class": "center" },
        { "data": "operacao.usuario", "class": "center" },	        
        { "data": "segmentoPFString", "class": "center" },
        { "data": "segmentoPJString", "class": "center" },
        { "data": "segmentoGOVString", "class": "center" },
        { "data": "segmentoCartaoString", "class": "center" },
        { "data": "segmentoCidadaoString", "class": "center" },/*        */
        { "data": "null", "class": "center", "defaultContent" : '<span class="acoesDatatable"></span>'}
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
    
    service.fnDataTable("#tableServicos", "servicosTable", columns, columnDefs);
    service.advancedSearch("servicosTable");
    service.datepicker();
});

