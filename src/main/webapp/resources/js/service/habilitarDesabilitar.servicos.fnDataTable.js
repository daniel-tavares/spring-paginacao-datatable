/**
 * Created by henrique.nascimento on 09/06/2014.
 */
gov.portalbanking.service.fnDataTable = function (tableId, urlRequisicao, columns) {
    var tabela = $(tableId).DataTable({
        bProcessing: true,
        sAjaxSource: urlRequisicao,
        columns: columns,
        ColumnDefs: [{
            targets: [ 0 ],
            visible: true,
            searchable: false
        }],
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
                var ativo = $(this).find('td:eq(9)').text();
                var iconeHabilitar;
                var hintHabilitar;
                if(id.match(/\d/)) {
                    $(this).find('td:eq(0)').html('<a href=./' + id + '>' + id + '</a>');
                	
                    if(id.indexOf("N") < 0){
                			$(this).find('td:eq(0)').html('<a href=./' + id + '>' + id + '</a>');
            		}
                    
                    if(ativo=="SIM"){
                    	iconeHabilitar="glyphicon-remove-circle";
                    	hintHabilitar="Desabilitar";
                    }else{
                    	iconeHabilitar="glyphicon-ok-circle";
                    	hintHabilitar="Habilitar";
                    }
                    
                    var acoes = $(this).find('.acoesDatatable');
                    
                    var habilitar = '<a href="#" class="open'+hintHabilitar+' glyphicon '+iconeHabilitar+'" data-toggle="modal" ' +
                    				'data-target="#modal'+hintHabilitar+'" title="'+hintHabilitar+'" />';

                    acoes.html(habilitar);

                    acoes.on("click", ".open"+hintHabilitar, function () {
                        $("#"+hintHabilitar+"-form").attr("action", "./" + id + "/acao"+hintHabilitar);
                    });

                }
            });
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