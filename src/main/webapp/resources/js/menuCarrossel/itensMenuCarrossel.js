	/** Necessidade do IE10*/
	$.ajaxSetup ({cache: false});

		$(".liSub").click(function(){
			if(!editando){
				liClicked(this);
			}
		});
		
		$("#nomeEditado").keypress(function(){
			$("#alterarNomeItemMenu").css("display","block");
		});
		
		function liClicked(obj){
			$(".liSub").removeClass( "marked" );
			$(obj).toggleClass( "marked" );
			$("#historicoItemMenu").css("display","block");
			$("#editarItemMenu").css("display","block");		
			$("#excluirItemMenu").css("display","block");
			$("#detalhesItemMenu").css("display","block");
			
			detalharItemMenu(obj);
		}
		
		function detalharItemMenu(obj){
			$("#idItemMenuSelecionado").val($(obj).find(".identificadorItemMenu").html());
			$("#nomeEditado").val($(obj).find(".identificadorNomeEditado").html());			
			$("#nomeDetalhesItemMenu").html($(obj).find(".identificadorNomeOriginalServico").html());
			
			$("#divTextoToolTip").html($(obj).find(".identificadorTextoToolTip").html());
			$("#divSiperCode").html($(obj).find(".identificadorSiperCode").html());
			$("#divUrlExterna").html($(obj).find(".identificadorUrlExterna").html());
			$("#divUrlAplicacao").html($(obj).find(".identificadorUrlAplicacao").html());
			$("#divDispositivo").html($(obj).find(".identificadorDispositivo").html());
			$("#divSegmento").html( $(obj).find(".identificadorSegmento").html());
		}
		
		$("#editarItemMenu").click(function(){
			document.location="itensMenuCarrosselNovo.html";
		});
		
		$("#historicoItemMenu").click(function(){
			   
			var local = $("#hrefHistoricoItemMenu").prop("href");
			var idItemMenu = $("#idItemMenuSelecionado").val();
			
			$("#itensMenuCarrosselForm").prop("action",local+"/"+idItemMenu);
			$("#itensMenuCarrosselForm").prop("method","post");
			
			$("#itensMenuCarrosselForm").submit();
		});
		
		
		$("#excluirItemMenu").click(function(){
			   
			var local = $("#hrefExcluirItemMenu").prop("href");
			$("#itensMenuCarrosselForm").prop("action",local);
			$("#itensMenuCarrosselForm").prop("method","post");
			
			$("#itensMenuCarrosselForm").submit();
		});		
		
		$('#buttonUp').click(function(){
			if($('.marked').length>0 && !editando){
			  var current = $('.marked');
			  $(current).addClass("liChanged");
			  current.prev().before(current);
			  exibeGravarOrdenacao();
			}
		});
		
		$('#buttonDown').click(function(){
			if($('.marked').length>0 && !editando){
			  var current = $('.marked');
			  $(current).addClass("liChanged");
			  current.next().after(current);
			  exibeGravarOrdenacao();
			}
		});
		
		function exibeGravarOrdenacao(){
			$("#gravarOrdenacao").css("display","block");
		}
			
		$("#gravarOrdenacao").click(function(){
			$("#gravarOrdenacao").css("display","none");
			alert("Ordena\u00e7\u00e3o gravada com sucesso");
			$(".marked").removeClass("marked");
			limparSelecaoSubMenu();
			
			
			var lista = [];
			
			$("#listaItemMenu").find(".identificadorItemMenu").each(function(){
				lista.push($(this).html());
			});
			$("#ordenacaoItemMenu").val(lista);			

			var local = $("#hrefGravarOrdenacao").prop("href");
			$("#itensMenuCarrosselForm").prop("action",local);
			$("#itensMenuCarrosselForm").prop("method","post");
			$("#itensMenuCarrosselForm").submit();			
		});
		
		var editando=false;
		
		$("#novoItemMenu").click(function(){
			var local = $("#hrefPopupNovoItemMenu").prop("href");
			var left  = ($(window).width()/2)-(900/2),
				top   = ($(window).height()/2)-(650/2),
				popup = window.open (local, "popupNovoItemCarrossel", "width=900, height=650, top="+top+", left="+left);  
			
			// document.location="itensMenuCarrosselNovo.html";
		});
	  
	  	$("#adicionarItemCarrossel").click(function(){
	  		alert("Adicionar: "+$(this));
	  	});
	  	
		$("#excluirSubMenu").click(function(){
			if(confirm("Deseja realmente excluir este sub-menu?")){
				$(".marked").remove();
				limparSelecaoSubMenu();
			}
		});
			
		function limparSelecaoSubMenu(){
			$("#editarSubMenu").css("display","none");
			$("#excluirSubMenu").css("display","none");
			$("#detalhesItemMenu").css("display","none");
		}
		
		function inserirItemLista(titulo){
			$("#listaItemMenu").append('<li class="liSub liChanged">'+titulo+'</li>');
			var obj = $(".liSub").last();
			$(obj).click(function(){if(!editando){liClicked(this)}});
		}
		 
		$("#btSelecionar").click(function(){
			if($('.itensMenuSelecionados:checkbox:checked').length==0){
				alert("Necessário selecionar um item da lista.")
			}else{
				$("#associaServicoForm").submit();				
			}
			
		});

		$("#alterarNomeItemMenu").click(function(){
			var nomeItem=$("#nomeEditado").val();
			
			if(nomeItem=="" || nomeItem==undefined){
				alert("Digite um nome para o item de menu.");
			}else{
				var local = $("#hrefAlterarNomeItemMenu").prop("href");
				$("#itensMenuCarrosselForm").prop("action",local);
				$("#itensMenuCarrosselForm").prop("method","post");
				
				$("#itensMenuCarrosselForm").submit();				
			}
		});
		
		$(document).ready(function(){
			//## Tratamento Outras Opcoes : INICIO ##
			$('#tableServicos').dataTable({
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
		});