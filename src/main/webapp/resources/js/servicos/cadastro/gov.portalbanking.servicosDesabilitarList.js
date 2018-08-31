$(function() {
    /**
     * Definições das colunas do datatables.
     */
    var columnDefs = [
         {targets: [0],visible: true,defaultContent: "",searchable: false},
 		 {targets: [1], "type": "char-specials"},
		 {targets: [8], "type": "data-grade"}
    ];
    
    service.fnDataTable("#tableServicos", "servicosTable", columnDefs);
    service.advancedSearch("servicosTable");
    
    $("#tableServicos").on("click", ".openDesabilitar",function(){
    	var action = $(this).attr("event");
    	var id = $(this).attr("id");
    	
    	if(action == "D"){
    		$("#buttonDesabilitar").click();
    		$("#txtModalTitle").html("Deseja realmente desabilitar este servi&ccedil;o?");
    		$("#Desabilitar-form").attr("action", "./" + id + "/acaoDesabilitar");
    	}else{
       		$("#buttonDesabilitar").click();
    		$("#txtModalTitle").html("Deseja realmente habilitar este servi&ccedil;o?");
    		$("#Desabilitar-form").attr("action", "./" + id + "/acaoHabilitar");
    	}
    });
});