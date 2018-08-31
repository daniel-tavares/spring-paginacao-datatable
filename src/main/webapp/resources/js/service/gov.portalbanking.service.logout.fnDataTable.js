/**
 * Created by henrique.nascimento on 09/06/2014.
 */
gov.portalbanking.service.fnDataTableLogout = function (tableId, urlRequisicao, columns, columnDefs) {
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
        },
        
        fnDrawCallback : function() {
            $(tableId).find("tr").each(function() {
                var id = $(this).find('td:eq(0)').text();
                if(id.match(/\d/)) {
                    $(this).find('td:eq(0)').html('<a href=./' + id + '>' + id + '</a>');

                    var acoes = $(this).find('.acoesDatatable');
                    var editarCode = 	"<a href=./" + id + "/editar class=\"glyphicon glyphicon-edit\" title=Editar \/>";
                    var historicoCode = "<a href=./" + id + "/historico class=\"glyphicon glyphicon-time\" title=Hist&oacute;rico \/>";
                    acoes.html(editarCode + "&nbsp;&nbsp;" + historicoCode);
                }
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