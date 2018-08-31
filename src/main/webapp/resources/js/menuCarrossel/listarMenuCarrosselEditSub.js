	  		$(".mob").parent().css("display","none");
	  		$(".desk").parent().css("display","none");


	  		function atualizaAcaoClickCategoria(){

	  				$(".menuCarrosselItem").click(function () {
	  				$(".menuCarrosselItem").parent().removeClass("categoriaMarcada");
	  				$(this).parent().addClass("categoriaMarcada");
	  				
	  				$("#categoriaIdSelecionado").val($(this).find(".identificadorCategoria").val());
	  				$("#categoriaImagemSelecionado").val($(this).find(".identificadorImagemCategoria").prop("src"));
	  				$("#categoriaTituloSelecionado").val($(this).find(".identificadorTituloCategoria").html());
	  				
	  				$("#catSelecionada").html("Categoria selecionada: "+$(this).children("span").html());
	  				
	  				$("#historicoCategoria").css("display","block");
	  				$("#editarCategoria").css("display","block");
	  				$("#excluirCategoria").css("display","block");
	  				$("#gerenciarSubMenu").css("display","block");				
	  				
	  			});	
	  			
	  		}
			
			function limparSelecaoCategoria(){
				$(".menuCarrosselItem").parent().removeClass("categoriaMarcada");
				$("#catSelecionada").html("Categoria selecionada: ");
				
				$("#historicoCategoria").css("display","none");
				$("#editarCategoria").css("display","none");
				$("#excluirCategoria").css("display","none");
				$("#gerenciarSubMenu").css("display","none");
				
				$("#modificarOrdenacaoDiv").css("display","none");
				
			}

			var listaChanged=false;
			function startSortable(opt){
				var listas=["#sortable1"];
				
				for(var a=0;a<listas.length;a++){
					if(opt!=""){
						$( listas[a] ).sortable(opt,{change: function( event, ui ) {listaChanged = true;}});
					}else{
						$( listas[a] ).sortable({change: function( event, ui ) {listaChanged = true;}});
					}
					
				}
				
			}
		  /*
		  $("#ordenacao").click(function(){
		  	startSortable("");
		  	
		  	if($("#ordenacao").prop("checked")){
		  		$("#gravarOrdenacao").css("display","block");
		  		$("#cancelarOrdenacao").css("display","block");
		  		
		  		startSortable("enable");
		  	}else{
		  		$("#gravarOrdenacao").css("display","none");
		  		$("#cancelarOrdenacao").css("display","none");
		  		
		  		if(listaChanged){
			  		if(confirm("Você alterou a ordem das categorias;\nDeseja gravar e manter suas alterações?")){
			  			startSortable("disable");
			  			listaChanged=false;
			  			$("#gravarOrdenacao").click();
			  		}
			  	}
		  	}
		  });

			
			$("#cancelarOrdenacao").click(function(){
					startSortable("cancel");		
					listaChanged=false;	
			});
	
			$("#gravarOrdenacao").click(function(){
				$("#ordenacao").prop("checked",false);
				$("#gravarOrdenacao").css("display","none");
				$("#cancelarOrdenacao").css("display","none");
				
				var lista = [];
				
				$("#divListaCategorias").find(".identificadorCategoria").each(function(){
					lista.push($(this).val());
				});
				$("#ordenacaoCategorias").val(lista);
				var local = $("#hfreGravarOrdenacao").prop("href");
				$("#listaCategoriaForm").prop("action",local);
				$("#listaCategoriaForm").submit();
			});
		  
		  $("#novaCategoria").click(function(){
		  	document.location="menuCarrosselNovaCategoria.html";
		  });
		  */
		  $("#gerenciarSubMenu").click(function(){
				var categoriaSelecionada = $("#categoriaIdSelecionado").val();
				
				var act = $("#hrefGerenciarSubMenu").prop("href") + "/" + categoriaSelecionada;

				$("#listaCategoriaForm").prop("action", act);
				
				$("#listaCategoriaForm").submit();
		  });		  
		  /*
		$("#editarCategoria").click(function(){
			var categoriaSelecionada = $("#categoriaIdSelecionado").val();
						
			var act = $("#hrefEditarCategoria").prop("href") + "/" + categoriaSelecionada;
			
			$("#listaCategoriaForm").prop("action", act);
			
			$("#listaCategoriaForm").submit();
		});
		
		$("#excluirCategoria").click(function(){
			var categoriaSelecionada = $("#categoriaIdSelecionado").val();
			
			var act = $("#hrefExcluirCategoria").prop("href") + "/" + categoriaSelecionada;
			
			$("#listaCategoriaForm").prop("action", act);
			
			$("#listaCategoriaForm").submit();
		});
	  */
		$("#preVisualizar").click(function(){
			abreVisualizarCarrossel();
		});		  

		function listarMenuCarrossel(){
			var local=$("#hrefCategoria").prop("href");
			var segmento=$("#comboSegmento").find('option:selected').val();
			var dispositivo=$("#comboDispositivo").find('option:selected').val();
			var ambiente=$("#comboAmbiente").find('option:selected').val();
			
			if(ambiente!="" && ambiente!="0" && segmento!="" && segmento!="0" && dispositivo!="" && dispositivo!="0"){

				$.ajax({url:local,
					data:{ambienteMenu:ambiente, segmentoMenu:segmento, dispositivoMenu:dispositivo},
					success:function(result){
				    $("#divListaCategorias").html(result);
				    $("#modificarOrdenacaoDiv").css("display","block");
					if(dispositivo=="3") {
						$(".imgDesktopPreview").css("display","none");
					} else {
						$(".imgSmartphonePreview").css("display","none");
					}
				    atualizaAcaoClickCategoria();
				}, error:function(xhr){
				  alert("Erro ao carregar as categorias: " + xhr.status + " " + xhr.statusText);
				}});
				
			}else{
				limparSelecaoCategoria();
				$("#divListaCategorias").html("<div style='width:100%;text-align:center'>Selecione um ambiente, uma categoria e um dispositivo.</div>");
			}
		}

		function abreVisualizarCarrossel(){
			var local=$("#hrefPopupPreview").prop("href");
						  
			var left  = ($(window).width()/2)-(1200/2),
				top   = ($(window).height()/2)-(650/2),
				popup = window.open (local, "popupCarrossel", "width=1200, height=650, top="+top+", left="+left+", resizable=yes,scrollbars=yes");  
		}	
		
		$("#comboSegmento").change(function(){
			listarMenuCarrossel();
		});
		
		$("#comboDispositivo").change(function(){
			listarMenuCarrossel();
		});
		  	
		$("#comboAmbiente").change(function(){
			listarMenuCarrossel();
		});
		
	  $("document").ready(function(){
		  $(".menuCarrosselItem").parent().css("border","1px solid #aaaaaa");
		  
		  $("#comboSegmento option[value=" + $("#segmentoSelecionado").val() +"]").attr("selected","selected") ;
		  $("#comboDispositivo option[value=" + $("#dispositivoSelecionado").val() +"]").attr("selected","selected") ;
		  $("#comboAmbiente option[value=" + $("#ambienteSelecionado").val() +"]").attr("selected","selected") ;
		  
		  $("#comboSegmento option[value='TODOS']").remove();
		  $("#comboDispositivo option[value='TODOS']").remove();
		  
		  listarMenuCarrossel();
	  });