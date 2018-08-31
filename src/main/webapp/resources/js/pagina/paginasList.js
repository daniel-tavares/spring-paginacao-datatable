$(function() {
	//## Tratamento Outras Opcoes : INICIO ##
	$('table').dataTable({
		   aaSorting: [],
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
	//## Tratamento Outras Opcoes : FIM ##
	
	
	$("#radioSaibaMais").prop("checked",true);

	$(".preview").click(function(){  
		var url = $("#hrefPreviewSaibaMaisHorLimites").prop("href");
		
		$.ajax({url  : url,
    		success: function(result)
            {
    			$("#divPreviewSaibaMaisHorLimites").html(result);
				$("#btoModalPreview").click();
    		},
            error:function(xhr)
            {
            	alert("Erro ao carregar Preview " + xhr.status + " " + xhr.statusText);
            }
        });		

	});
});
	

		
		
	