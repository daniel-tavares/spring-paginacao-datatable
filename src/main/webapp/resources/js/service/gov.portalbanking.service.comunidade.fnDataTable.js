gov.portalbanking.service.fnDataTable = function (tableId, urlRequisicao, columns, columnDefs, zeroRecords, emptyTable, history) {
    var tabela = $(tableId).DataTable({
    	aaSorting: [],// desabilita a ordenação default do primeiro campo da tabela.
        bProcessing: true,
        sAjaxSource: urlRequisicao,
        columns: columns,
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
            zeroRecords:    "Nenhum registro encontrado para o filtro informado!",
            emptyTable:     "Nenhum registro encontrado!",
            paginate: {
                first:      "Primeiro",
                previous:   "Anterior",
                next:       "Pr&oacute;ximo",
                last:       "&Uacute;ltimo"
            },
            aria: {
                sortAscending:  ": Ordenar colunas de forma ascendente",
                sortDescending: ": Ordenar colunas de forma descendente"
            }
        },
        fnDrawCallback : function() {
            $(tableId).find("tr").each(function() {
                var id = $(this).find('td:eq(0)').text();
                var status = $(this).find('td:eq(2)').text();
                if(id.match(/\d/)) {

                	if(history){
                        $(this).find('td:eq(0)').html('<a href=./historico/' + id + '>' + id + '</a>');
                	}else{
                		if(id.indexOf("N") < 0){
                			$(this).find('td:eq(0)').html('<a href=./' + id + '>' + id + '</a>');
                		}
                	}

                    var acoes = $(this).find('.acoesDatatable');
                    
                    var editarCode = 	"<a href=./" + id + "/editar class=\"glyphicon glyphicon-edit\" title=Editar \/>";
                    var historicoCode = "<a href=./" + id + "/historico class=\"glyphicon glyphicon-time\" title=Hist&oacute;rico \/>";
                    if((status.trim() == "SIM" || status.trim() == "Em processamento" || status.trim() == "Pendente de Processamento")){
                    	var excluirCode = 	"<a href=# class='openExcluir glyphicon glyphicon-remove-circle'  data-toggle='modal' data-target='#modalExcluir' title=Excluir id='btnExcluir"+id+"' \/>";
                    	 acoes.html(editarCode + "&nbsp;&nbsp;" + historicoCode + "&nbsp;&nbsp;" + excluirCode);
                    }
                    else{
                     acoes.html(editarCode + "&nbsp;&nbsp;" + historicoCode);
                    }
                    
                    acoes.on("click", "#btnExcluir" + id +"" , function () {
                    	$("#exclude-form").attr("action", "./excluir/" + id +"");
                    	                        
                    });
                }
            });
            
            
            /*$('#modalExcluir').on('shown.bs.modal', function () {
        	  var form = $(this).find("form");
        	  
        	  form.off("submit").on("submit", function(e){
        		  regex = new RegExp("[^A-Za-z]", "g");
        		  if($('#motivoSituacao').val().match(regex)){
        			  e.preventDefault(); 
        			  this.msg.showMessageError("","Caracrteres especiasi não são permitidos.", "motivoSituacao");
        			  
        		  }
        	  });
        	});*/
        },
        fnServerData: function ( sSource, aoData, fnCallback ) {
            $.ajax({
                "dataType": 'json',
                "type": "GET",
                "url": sSource,
                "cache": false,
                "data": aoData,
                "success": fnCallback
            });
        }
    });
};
