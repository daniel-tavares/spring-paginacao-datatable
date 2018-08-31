$(function() {
	
	$("#tableListMain").hide();
    service.datepicker();

	$("#pesquisar").click(function(){
	    var columns = [
	                   {"data": "id"},
	                   {"data" : "matricula"},
	                   {"data" : "tpConteudo"},
	                   {"data" : "dtEvento"},
	                   {"data" : "descricaoEvento"}
	               ]; 					   
	               service.fnDataTable("#tableRegistroLog", "loadRegistroLog", columns);
	               service.advancedSearch("tableRegistroLog");
	               
	    $("#tableListMain").show();
	});
	
});