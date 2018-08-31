/**
 * CAMPANHA : 
 */
gov.portalbanking.service.fnDataTableCampanha = function (tableId, urlRequisicao, columns, columnDefs) {
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
                var status = $(this).find('td:eq(4)').text();
                var colunTable = tableId == "#tableBannerLateral" ? 'td:eq(4)' : 'td:eq(3)';
                var situacao = $(this).find(colunTable).text();
                if(id.match(/\d/)) {
                    $(this).find('td:eq(0)').html('<a href=./' + id + '>' + id + '</a>');
                    
                    var acoes = $(this).find('.acoesDatatable');
                    var excluirCode = '<a class="openExcluir glyphicon glyphicon-remove-circle" href="./excluir/' + id + '" data-toggle="modal" ' + 'data-target="#modalExcluir" title="Excluir" style="display:inline;"/>';
                    var editarCode = 	"<a href=./" + id + "/editar class=\"glyphicon glyphicon-edit\" title=Editar \ style='display:inline;'/>";
                    var historicoCode = "<a href=./" + id + "/historico class=\"glyphicon glyphicon-time\" title=Hist&oacute;rico \ style='display:inline;'/>";
                    if(!(status.trim().indexOf("Exclu\u00eddo") >= 0) && !(status.trim().indexOf("Publicado") >= 0 && $("#rules").text().trim().indexOf("NBCEINF")>=0)) {
                    	acoes.html(editarCode + "&nbsp;&nbsp;" + historicoCode + "&nbsp;&nbsp;" + excluirCode);
                    } else {
                    	acoes.html(editarCode + "&nbsp;&nbsp;" + historicoCode);
                    }

                    acoes.on("click", ".openExcluir", function () {
                        $("#exclude-form").attr("action", "./" + id + "/removerItem?motivo="+$("#motivoSituacao").html());
                    });

                    if(situacao == "Excluido"){
                    	$(".openExcluir").remove();
                    	$(".glyphicon-edit").remove();
                    }
                    
                    if(id.indexOf("N") < 0){
            			$(this).find('td:eq(0)').html('<a href=./' + id + '>' + id + '</a>');
                    }
                }
            });
        },
        fnServerData: function ( sSource, aoData, fnCallback ) {
            $.ajax({
				"cache": false,
                "dataType": 'json',
                "type": "GET",
                "url": sSource,
                "data": aoData,
                "success": fnCallback
            });
        }
    });
};
