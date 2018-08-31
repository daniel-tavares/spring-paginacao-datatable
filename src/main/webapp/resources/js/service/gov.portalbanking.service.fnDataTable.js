/**
 * Created by henrique.nascimento on 09/06/2014.
 */
gov.portalbanking.service.fnDataTable = function (tableId, urlRequisicao, columns, columnDefs, history) {
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
                if(id.match(/\d/)) {
                	
                	if(history){
                        $(this).find('td:eq(0)').html('<a href=./historico/' + id + '>' + id + '</a>');
                	}else{
                		if(id.indexOf("N") < 0){
                			$(this).find('td:eq(0)').html('<a href=./' + id + '>' + id + '</a>');
                		}
                	}

                    var acoes = $(this).find('.acoesDatatable');
                    var excluirCode = 	"<a href=# class='openExcluir glyphicon glyphicon-remove-circle'  data-toggle='modal' data-target='#modalExcluir' title=Excluir id='btnExcluir"+id+"' \/>";
                    var cloneCode = 	"<a href=./" + id + "/copiar/0 class=\"glyphicon glyphicon-file\" title=Copiar\/>";
                    var editarCode = 	"<a href=./" + id + "/editar class=\"glyphicon glyphicon-edit\" title=Editar \/>";
                    var historicoCode = "<a href=./" + id + "/historico class=\"glyphicon glyphicon-time\" title=Hist&oacute;rico \/>";
                    if(!(status.trim().indexOf("Exclu\u00eddo") >= 0) && !(status.trim().indexOf("Publicado") >= 0 && ($("#rules").text().trim().indexOf("NBCEM")>=0 || $("#rules").text().trim().indexOf("NBCEA")>=0))) {
                   	  acoes.html(editarCode + "&nbsp;&nbsp;" + cloneCode + "&nbsp;&nbsp;" + historicoCode + "&nbsp;&nbsp;" + excluirCode);
                   }else{
                	   acoes.html(editarCode + "&nbsp;&nbsp;" + cloneCode + "&nbsp;&nbsp;" + historicoCode);
                   }
                    
                    
                    acoes.on("click", "#btnExcluir" + id +"" , function () {
                        $("#exclude-form").attr("action", "./excluir/" + id +"");
                    });
                }
            });
        },
        fnServerData: function ( sSource, aoData, fnCallback ) {
            $.ajax({
                "dataType": 'json',
                "type": "GET",
                "url": sSource,
                "data": aoData,
                "success": fnCallback
            });
        }
    });
};


gov.portalbanking.service.fnDataTable = function (tableId, urlRequisicao, columns, columnDefs, zeroRecords, emptyTable, history) {
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
            zeroRecords:    zeroRecords,
            emptyTable:     emptyTable,
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
                if(id.match(/\d/)) {

                	if(history){
                        $(this).find('td:eq(0)').html('<a href=./historico/' + id + '>' + id + '</a>');
                	}else{
                		if(id.indexOf("N") < 0){
                			$(this).find('td:eq(0)').html('<a href=./' + id + '>' + id + '</a>');
                		}
                	}

                    var acoes = $(this).find('.acoesDatatable');
                    var excluirCode = 	"<a href=# class='openExcluir glyphicon glyphicon-remove-circle'  data-toggle='modal' data-target='#modalExcluir' title=Excluir id='btnExcluir"+id+"' \/>";
                    var cloneCode = 	"<a href=./" + id + "/copiar class=\"glyphicon glyphicon-file\" title=Copiar\/>";
                    var editarCode = 	"<a href=./" + id + "/editar class=\"glyphicon glyphicon-edit\" title=Editar \/>";
                    var historicoCode = "<a href=./" + id + "/historico class=\"glyphicon glyphicon-time\" title=Hist&oacute;rico \/>";
                    if(!(status.trim().indexOf("Exclu\u00eddo") >= 0) && !(status.trim().indexOf("Publicado") >= 0 && ($("#rules").text().trim().indexOf("NBCEM")>=0 || $("#rules").text().trim().indexOf("NBCEA")>=0))) {
                     acoes.html(editarCode + "&nbsp;&nbsp;" + cloneCode + "&nbsp;&nbsp;" + historicoCode + "&nbsp;&nbsp;" + excluirCode);
                    }else{
                    	acoes.html(editarCode + "&nbsp;&nbsp;" + cloneCode + "&nbsp;&nbsp;" + historicoCode);
                    }
                    
                    acoes.on("click", "#btnExcluir" + id +"" , function () {
                        $("#exclude-form").attr("action", "./excluir/" + id +"");
                    });
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

gov.portalbanking.service.fnDataTable = function (tableId, urlRequisicao, columns, columnDefs, zeroRecords, emptyTable, history, logout) {
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
            zeroRecords:    zeroRecords,
            emptyTable:     emptyTable,
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
                if(id.match(/\d/)) {

                	if(history){
                        $(this).find('td:eq(0)').html('<a href=./historico/' + id + '>' + id + '</a>');
                	}else{
                		if(id.indexOf("N") < 0){
                			$(this).find('td:eq(0)').html('<a href=./' + id + '>' + id + '</a>');
                		}
                	}

                    var acoes = $(this).find('.acoesDatatable');
                    var excluirCode = 	"<a href=# class='openExcluir glyphicon glyphicon-remove-circle'  data-toggle='modal' data-target='#modalExcluir' title=Excluir id='btnExcluir"+id+"' \/>";
                    var cloneCode = 	"<a href=./" + id + "/copiar/0 class=\"glyphicon glyphicon-file\" title=Copiar\/>";
                    var editarCode = 	"<a href=./" + id + "/editar class=\"glyphicon glyphicon-edit\" title=Editar \/>";
                    var historicoCode = "<a href=./" + id + "/historico class=\"glyphicon glyphicon-time\" title=Hist&oacute;rico \/>";
                    if(logout){
                    	acoes.html(editarCode);                    	
                    }else{
                    	if(!(status.trim().indexOf("Exclu\u00eddo") >= 0) && !(status.trim().indexOf("Publicado") >= 0 && ($("#rules").text().trim().indexOf("NBCEM")>=0 || $("#rules").text().trim().indexOf("NBCEA")>=0))) {
                    	acoes.html(editarCode + "&nbsp;&nbsp;" + cloneCode + "&nbsp;&nbsp;" + historicoCode + "&nbsp;&nbsp;" + excluirCode);
                        acoes.on("click", "#btnExcluir" + id +"" , function () {
                            $("#exclude-form").attr("action", "./excluir/" + id +"");
                        });
                      }else{
                    	  acoes.html(editarCode + "&nbsp;&nbsp;" + cloneCode + "&nbsp;&nbsp;" + historicoCode);
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
                "data": aoData,
                "success": fnCallback
            });
        }
    });
};

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
                if(id.match(/\d/)) {

                	if(history){
                        $(this).find('td:eq(0)').html('<a href=./historico/' + id + '>' + id + '</a>');
                	}else{
                		if(id.indexOf("N") < 0){
                			$(this).find('td:eq(0)').html('<a href=./' + id + '>' + id + '</a>');
                		}
                	}

                    var acoes = $(this).find('.acoesDatatable');
                    var excluirCode = 	"<a href=# class='openExcluir glyphicon glyphicon-remove-circle'  data-toggle='modal' data-target='#modalExcluir' title=Excluir id='btnExcluir"+id+"' \/>";
                    var cloneCode = 	"<a href=./" + id + "/copiar/0 class=\"glyphicon glyphicon-file\" title=Copiar\/>";
                    var editarCode = 	"<a href=./" + id + "/editar class=\"glyphicon glyphicon-edit\" title=Editar \/>";
                    var historicoCode = "<a href=./" + id + "/historico class=\"glyphicon glyphicon-time\" title=Hist&oacute;rico \/>";
                    if(oferta){
                    	if(!(status.trim().indexOf("Exclu\u00eddo") >= 0) && !(status.trim().indexOf("Publicado") >= 0 && ($("#rules").text().trim().indexOf("NBCEM")>=0 || $("#rules").text().trim().indexOf("NBCEA")>=0))) {
	                    	acoes.html(editarCode + "&nbsp;&nbsp;" + historicoCode + "&nbsp;&nbsp;" + excluirCode);
	                        acoes.on("click", "#btnExcluir" + id +"" , function () {
	                            $("#exclude-form").attr("action", "./excluir/" + id +"");
	                        });
                    	}else{
                    		acoes.html(editarCode + "&nbsp;&nbsp;" + historicoCode);
                    	}
                    }else{
                    	if(!(status.trim().indexOf("Exclu\u00eddo") >= 0) && !(status.trim().indexOf("Publicado") >= 0 && ($("#rules").text().trim().indexOf("NBCEM")>=0 || $("#rules").text().trim().indexOf("NBCEA")>=0))) {
	                    	acoes.html(editarCode + "&nbsp;&nbsp;" + cloneCode + "&nbsp;&nbsp;" + historicoCode + "&nbsp;&nbsp;" + excluirCode);
	                        acoes.on("click", "#btnExcluir" + id +"" , function () {
	                            $("#exclude-form").attr("action", "./excluir/" + id +"");
	                        });
	                     }else{
	                    	 acoes.html(editarCode + "&nbsp;&nbsp;" + cloneCode + "&nbsp;&nbsp;" + historicoCode); 
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