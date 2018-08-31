$(function() {
    var columns = [
        { "data": "revisao"},
        { "data": "operacao.usuario"},
        { "data": "operacao.manutencaoFormatado"},
        { "data": "status"}
    ];
    
    /**
     * Definições das colunas do datatables.
     */
    var columnDefs = [];
    
    service.fnDataTable("#tableHistorico", "historyTable", columns, columnDefs,"Nenhum registro encontrado para o filtro informado!", "Nenhum registro encontrado!", true);
});