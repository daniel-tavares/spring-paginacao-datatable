$(function() {
    var columns = [
        {"data": "id"},
        {"data" : "segmento","defaultContent" : '' },
        {"data" : "status","defaultContent" : '' },
        {"data": "operacao.manutencaoFormatado"},
        {"data": "operacao.usuario"},
        {"data" : "null", "class" : "center", "defaultContent" : '<span class="acoesDatatable"></span>'}
    ];
    
    /**
     * Definições das colunas do datatables.
     */
    var columnDefs = [
        {targets: [0], searchable: false},
        {targets: [5], searchable: false, orderable: false}
    ];
    
    service.fnDataTableLogout("#logoutTable", "logoutTable", columns, columnDefs);
});
