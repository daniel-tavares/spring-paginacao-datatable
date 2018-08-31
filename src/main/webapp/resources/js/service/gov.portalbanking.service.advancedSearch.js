gov.portalbanking.service.advancedSearch = function (tableId){

	$(document).ready(function() {

	    $('#dataInicioIpt, #dataFimIpt').keyup( function() {
	        table.draw();
	    } );
		
		$('#' + tableId + ' tbody').on( 'click', 'tr', function () {
	        if ( $(this).hasClass('selected') ) {
	            $(this).removeClass('selected');
	        }
	        else {
	            table.$('tr.selected').removeClass('selected');
	            $(this).addClass('selected');
	        }
	    } );
		
		$('.removeRow').click( function () {
	        table.row('.selected').remove().draw( false );
	    } );
	    
		$('input.column_filter').on( 'keyup click', function () {
	        filterColumn( $('table.display').attr('id'), $(this).attr('data-column') );
	    } );
	    
	} );
};

function filterColumn ( tableId, i ) {
    $('#'+tableId).DataTable().column( i ).search( $('#col'+ i +'_filter').val(), false, true ).draw();
}