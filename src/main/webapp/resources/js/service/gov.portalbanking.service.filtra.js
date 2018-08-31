gov.portalbanking.service.filtra = function(tableId){

	alert(tableId);

	//$('#'+tableId).DataTable();
	//.fnFilter( 'test string' );
	
	$(document).ready(function() {
        var table = $(tableId).dataTable();
          alert(table);
            var hidden = table.fnGetHiddenNodes();
            alert( hidden.length +' nodes were returned' );
    } );
}