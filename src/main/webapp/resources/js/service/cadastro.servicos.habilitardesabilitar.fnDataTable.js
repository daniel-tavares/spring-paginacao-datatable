gov.portalbanking.service.fnDataTable = function (tableId, urlRequisicao, columnDefs) {
	$(tableId).DataTable({
		   aaSorting: [],
		   columnDefs: columnDefs,
	       language: {
	    	   processing:     "Processando...",
	    	    search:         "Pesquisar:",
	    	    lengthMenu:     "Mostrar _MENU_ registros por p&aacute;gina",
	    	    info:           "Mostrar de _START_ at&eacute; _END_ de _TOTAL_ registros",
	    	    infoEmpty:      "Mostrando 0 at&eacute; 0 de 0 registros",
	    	    infoFiltered:   "(Filtrar de _MAX_ total registros)",
	    	    infoPostFix:    "",
	    	    loadingRecords: "Carregando...",
	    	    zeroRecords:    "Nenhum registro encontrado",
	    	    emptyTable:     "Nenhum registro encontrado",
	            paginate: {
	                first:      "  Primeiro  ",
	                previous:   "  Anterior  ",
	                next:       "  Pr&oacute;ximo  ",
	                last:       "  &Uacute;ltimo  "
	            },
	            aria: {
	                sortAscending:  ": Ordenar colunas de forma ascendente",
	                sortDescending: ": Ordenar colunas de forma descendente"
	            }
	        }
		});	
};