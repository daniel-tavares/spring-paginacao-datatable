		/** Necessidade do IE10*/
		$.ajaxSetup ({cache: false});
	
		$(".liSub").click(function(){
			if(!editando){
				liClicked(this);
			}
		});
		
		function liClicked(obj){
			$(".liSub").removeClass( "marked" );
			$(obj).toggleClass( "marked" );
			
			$("#idSubMenu").val($(".marked").find(".identificadorSubMenu").html());
			$("#tituloSubMenu").val($(".marked").find(".identificadorTituloSubMenu").html());
			$("#ordenacaoSubMenu").val($(".marked").find(".identificadorOrdenacao").html());
			
			$("#historicoSubMenu").css("display","block");
			$("#editarSubMenu").css("display","block");		
			$("#excluirSubMenu").css("display","block");
			$("#gerenciarItens").css("display","block");			
		}
		
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
			
			$("#listaSubmenu").find(".identificadorSubMenu").each(function(){
				lista.push($(this).html());
			});
			$("#ordenacaoSubMenu").val(lista);			
			
			var local = $("#hrefGravarOrdenacao").prop("href");
			$("#listarSubMenuCarrossel").prop("action",local);
			$("#listarSubMenuCarrossel").submit();
		});
		
		var editando=false;
		
		$("#editarSubMenu").click(function(){
				
				$("#idSubMenu").val($(".marked").find(".identificadorSubMenu").html());
				$("#tituloSubMenu").val($(".marked").find(".identificadorTituloSubMenu").html());
				$("#dispositivoSubMenu").val($(".marked").find(".identificadorDispositivo").html());
				$("#ordenacaoSubMenu").val($(".marked").find(".identificadorOrdenacao").html());
				
				$("#auxComboDispositivo").val($(".marked").find(".identificadorDispositivo").html());
				$("#auxTitulo").val($(".marked").find(".identificadorTituloSubMenu").html());
		});

		$("#cancelarEditarSubMenu").click(function(){
			$("#editarSubMenuBox").hide("fast");
			editando=false;
		});
				
	  
	  
		$("#novoSubMenu").click(function(){
			$("#idSubMenu").val(0);
			$("#ordenacaoSubMenu").val(0);
			
			$(".marked").removeClass("marked");
			$("#excluirSubMenu").css("display","none");
			editando=true;
		});
		
		$("#cancelarSubMenu").click(function(){
			$("#novoSubMenuBox").hide("fast");
			editando=false;
		});
		
		$("#salvarSubMenu").click(function(){
			if($("#tituloSubMenu").val()!=""){
				$("#novoSubMenuBox").hide("fast");
				
				var tituloTemp=$("#tituloSubMenu").val();
				
				// $(".marked").text($("#tituloEditarSubMenu").val());
				/*
				if($("#dispositivoDesk").prop("checked")==true){
					tituloTemp+=" [D]";
				}
				
				if($("#dispositivoMob").prop("checked")==true){
					tituloTemp+=" [S]";
				}*/
				
				$(".marked").text(tituloTemp);					
				
				inserirItemLista(tituloTemp);
				$("#tituloSubMenu").val("");
				editando=false;
			}else{
				alert("Necessário digitar um título para o submenu.");
			}				
		});
			
		
		$("#excluirSubMenu").click(function(){
			if(confirm("Deseja realmente excluir este sub-menu?")){
				
				$("#idSubMenu").val($(".marked").find(".identificadorSubMenu").html());
				
				var categoriaSelecionada = $("#idSubMenu").val();
				
				var act = $("#hrefExcluirSubMenu").prop("href") + "/" + categoriaSelecionada;
				
				$("#listarSubMenuCarrossel").prop("action", act);
				
				$("#listarSubMenuCarrossel").submit();				
			}
		});
		
		function limparSelecaoSubMenu(){
			$("#historicoSubMenu").css("display","none");
			$("#editarSubMenu").css("display","none");
			$("#excluirSubMenu").css("display","none");
			$("#gerenciarItens").css("display","none");
		}
		
		function inserirItemLista(titulo){
			$("#listSubmenu").append('<li class="liSub liChanged">'+titulo+'</li>');
			var obj = $(".liSub").last();
			$(obj).click(function(){if(!editando){liClicked(this)}});
		}

		$("#preVisualizar").click(function(){
			abreVisualizarCarrossel();
		});
		
		$("#btSalvar").click(function(){
			
			//$("#idSubMenu").val($(".marked").find(".identificadorSubMenu").html());
			$("#tituloSubMenu").val($("#auxTitulo").val());
			//$("#ordenacaoSubMenu").val($("#auxTitulo").val())
			$("#dispositivoSubMenu").val($("#auxComboDispositivo").val());
			
			$("#listarSubMenuCarrossel").submit();
			//$("#submitFormNovoSubMenu").click();
		});
		
		$("#gerenciarItens").click(function(){
			
			var local = $("#hrefItemMenuCarrossel").prop("href");
			
			var categoriaSelecionada = $("#idSubMenu").val();
			
			var act = $("#hrefItemMenuCarrossel").prop("href") + "/" + categoriaSelecionada;
			
			$("#listarSubMenuCarrossel").prop("action", act);
			
			$("#listarSubMenuCarrossel").submit();						
			
			
		});
		
		$("#historicoSubMenu").click(function(){
			
			var local = $("#hrefHistoricoSubMenu").prop("href");
			
			var idSubMenu = $("#idSubMenu").val();
			
			var act = local + "/" + idSubMenu;
			
			$("#listarSubMenuCarrossel").prop("action", act);
			
			$("#listarSubMenuCarrossel").submit();						
			
			
		});		