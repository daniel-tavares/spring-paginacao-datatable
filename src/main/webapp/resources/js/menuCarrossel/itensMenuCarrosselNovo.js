
		$(".liSub").click(function(){
			if(!editando){
				liClicked(this);
			}
		});
		
		function liClicked(obj){
			$(".liSub").removeClass( "marked" );
			$(obj).toggleClass( "marked" );
			$("#editarSubMenu").css("display","block");		
			$("#excluirSubMenu").css("display","block");
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
			alert("Ordenação gravada com sucesso");
			$(".marked").removeClass("marked");
			limparSelecaoSubMenu();
		});
		
		var editando=false;
		
		$("#editarSubMenu").click(function(){
				$("#editarSubMenuBox").show("fast");
				$("#novoSubMenuBox").hide("fast");
				$("#tituloEditarSubMenu").val($(".marked").text());
				editando=true;			
		});

		$("#cancelarEditarSubMenu").click(function(){
			$("#editarSubMenuBox").hide("fast");
			editando=false;
		});
	  
	  
			$("#novoItemMenu").click(function(){
				document.location="itensMenuCarrosselNovo.html";
			});
			
			$("#cancelarSubMenu").click(function(){
				$("#novoSubMenuBox").hide("fast");
				editando=false;
			});
			
			$("#salvarSubMenu").click(function(){
				if($("#tituloSubMenu").val()!=""){
					$("#novoSubMenuBox").hide("fast");
					inserirItemLista($("#tituloSubMenu").val());				
					$("#tituloSubMenu").val("");
					editando=false;
				}else{
					alert("Necessário digitar um título para o submenu.");
				}				
			});
			
			$("#salvarEditarSubMenu").click(function(){
				if($("#tituloEditarSubMenu").val()!=""){
					$(".marked").text($("#tituloEditarSubMenu").val());
					$(".marked").addClass("liChanged");
					$("#editarSubMenuBox").hide("fast");
					editando=false;
				}else{
					alert("Necessário digitar um título para o submenu.");
				}				
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
			}
			
			function inserirItemLista(titulo){
				$("#listSubmenu").append('<li class="liSub liChanged">'+titulo+'</li>');
				var obj = $(".liSub").last();
				$(obj).click(function(){if(!editando){liClicked(this)}});
			}
			
			$("#preVisualizar").click(function(){
				abreVisualizarCarrossel();
			});		  
		  
		  $("#detalhar").click(function(){
				document.location="menuCarrosselDetalhar.html";
			});
		  
		    
