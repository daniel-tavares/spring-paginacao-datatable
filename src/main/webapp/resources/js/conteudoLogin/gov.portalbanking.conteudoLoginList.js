$(function() {
    var columns = [
//        { "data": "null", "defaultContent": '<input type="checkbox">' },
        { "data": "conteudoLoginPk.id"},
        { "data": "nome" },
        { "data": "status" },
        { "data": "operacao.usuario" },
        { "data": "operacao.manutencaoFormatada" },
        { "data": "null", "class": "center", "defaultContent" : '<span class="acoesDatatable"></span>'}
    ];
    
    /**
     * Definições das colunas do datatables.
     */
    var columnDefs = [
        {targets: [0], searchable: false},
        {targets: [5], searchable: false, orderable: false}
    ];
    
    service.fnDataTable("#tableConteudoLogin", "conteudoLoginTable", columns, columnDefs);
    service.datepicker();
});