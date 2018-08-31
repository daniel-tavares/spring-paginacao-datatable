/**
 * Created by henrique.nascimento on 09/06/2014.
 */
gov.portalbanking.service.fnDataTable = function (tableId, urlRequisicao, columns, columnDefs) {
    var tabela = $(tableId).DataTable({
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
            zeroRecords:    "Nenhum registro encontrado",
            emptyTable:     "Nenhum registro encontrado",
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
                $(this).find('td:eq(0)').html("<a href=\"./detalhe?idDetalhe=" + id + "\">" + id + "</a>");                   

                var acoes = $(this).find('.acoesDatatable');
                
                if($(this).context.cells.length > 3 && $(this).context.cells[4].innerHTML != 'Sim') {
                	acoes.html('<a href="#" class="openAtivar glyphicon glyphicon-ok-circle" data-toggle="modal" ' + 'data-target="#modalListaNegraAtivar" title="Ativar" />');
                } else {
                	acoes.html('<a class="openExcluir glyphicon glyphicon-remove-circle" href="#" data-toggle="modal" ' + 'data-target="#modalExcluir" title="Inativar" />');
                }
                
                acoes.on("click", ".openExcluir", function () {                    	
                    $("#exclude-form").attr("action", "./inativar");
                    $("#idExclusao").val(id);                        
                    });
 
                acoes.on("click", ".openAtivar", function () {
                    $("#ative-form").attr("action", "./ativar");
                    $("#idAtivacao").val(id);
                });
            });
        },
        fnServerData: function ( sSource, aoData, fnCallback ) {
            $.ajax({
                "dataType": 'json',
                "type": "GET",
                "cache": false,
                "url": sSource,
                "data": aoData,
                "success": fnCallback
            });
        }
    });
};