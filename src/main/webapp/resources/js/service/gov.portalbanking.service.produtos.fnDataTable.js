/**
 * Created by henrique.nascimento on 09/06/2014.
 */
gov.portalbanking.service.fnDataTable = function (tableId, urlRequisicao, columns, columnDefs, zeroRecords, emptyTable, history, logout, oferta) {
    var tabela = $(tableId).DataTable({
    	aaSorting: [],// desabilita a ordena��o default do primeiro campo da tabela.
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
                var status = $(this).find('td').text();

				var segmento = '';
				if( $(tableId).DataTable().row(this).data() ){
					segmento = $(tableId).DataTable().row(this).data().produtoPK.segmento;
				}
                
                if(id.match(/\d/)) {

                	if(history){
                        $(this).find('td:eq(0)').html('<a href=./historico/' + id + '>' + id + '</a>');
                	}else{
                		if(id.indexOf("N") < 0){
                			$(this).find('td:eq(0)').html('<a href=./' + id + "/" + segmento + '>' + id + '</a>');
                		}
                	}

                    var acoes = $(this).find('.acoesDatatable');
                    var excluirCode = 	"<a href=# class='openExcluir glyphicon glyphicon-remove-circle'  data-toggle='modal' data-target='#modalExcluir' title=Excluir id='btnExcluir"+id+"' \/>";
                    var historicoCode = "<a href=./" + id + "/" + segmento  + "/historico class=\"glyphicon glyphicon-time\" title=Hist&oacute;rico \/>";
                    if(oferta){
                    	if(!(status.trim().indexOf("Exclu\u00eddo") >= 0) && !(status.trim().indexOf("Publicado") >= 0 && ($("#rules").text().trim().indexOf("NBCEM")>=0 || $("#rules").text().trim().indexOf("NBCEA")>=0))) {
	                    	acoes.html(historicoCode + "&nbsp;&nbsp;" + excluirCode);
	                        acoes.on("click", "#btnExcluir" + id +"" , function () {
	                        	$("#exclude-form").attr("action", "./" + id + "/" + segmento + "/excluir");
	                        });
                    	}else{
                    		acoes.html(historicoCode);
                    	}
                    }else{
                    	if(!(status.trim().indexOf("Exclu\u00eddo") >= 0) && !(status.trim().indexOf("Publicado") >= 0 && ($("#rules").text().trim().indexOf("NBCEM")>=0 || $("#rules").text().trim().indexOf("NBCEA")>=0))) {
	                    	acoes.html(historicoCode + "&nbsp;&nbsp;" + excluirCode);
	                        acoes.on("click", "#btnExcluir" + id +"" , function () {
	                        	$("#exclude-form").attr("action", "./" + id + "/" + segmento + "/excluir");
	                        });
	                     }else{
	                    	 acoes.html(historicoCode); 
	                     }
                    }
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

$("#btnSim").on("click", function () {
    $("#exclude-form").submit();
});	