$(function() {
    var columns = [
        { data: "id"},
        { data: "nome" },
        { data: "ativo", "defaultContent" : ''},
        { data: "null", "class": "center", "defaultContent" : '<span class="acoesDatatable"></span>' }
    ];
    
    /**
     * Definições das colunas do datatables.
     */
    var columnDefs = [
        {targets: [0], searchable: false},        
        {targets: [1], "type": "char-specials"},
        {targets: [3], searchable: false, orderable: false}
    ];
    
    service.fnDataTable("#tableComunidade", "comunidadeTable", columns, columnDefs,"Nenhum registro encontrado para o filtro informado!", "Nenhum registro encontrado!",false);   
    service.advancedSearch("comunidadeTable");
});


$(document).ready(function() {	
	var table = $('#tableComunidade').DataTable();    
	$('#nomeComunidade').on( 'keyup', function () {
	    table.column(1).search( this.value ).draw();
	} );
	
	$('#situacaoComunidade').on( 'change', function () {
	    table.column(2).search( this.value ).draw();
	} );	
	
	$("#situacaoComunidade option[value='NAO_SE_APLICA']").remove();
});

labelComboSituacao = function(){
	var ativo = $("#situacaoComunidade option[value='Ativo']");
	var inativo = $("#situacaoComunidade option[value='Inativo']").val("N\u00c3O");
	ativo.val("SIM").text("SIM");
	inativo.val("N\u00c3O").text("N\u00c3O");
};

labelComboSituacao();

