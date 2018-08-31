$(function() {
	
	  	showHideButton = function(action){
		    $("#btoEditar").css("display",action);
			$("#btoExcluir").css("display",action);
			$("#btoPreVisualizar").css("display",action);
			$("#btoDetalhar").css("display",action);
	  	};	
	
		removerItensSegmento = function(){
		  	$("#comboSegmento option[value='TODOS']").remove();
			$("#comboSegmento option[value='TODOS_CORRENTISTAS']").remove();
			$("#comboSegmento option[value='TODOS_NAO_CORRENTISTAS']").remove();
			$("#comboSegmento option[value='NAO_CORRENTISTA_HABITACAO']").remove();
		};
	
		showHideButton("none");
		removerItensSegmento();
		
		$("#comboSegmento").change(function(){	
			getListaResultAjax();
		});
		
		
		getListaResultAjax = function(){
			var segmento = $("#comboSegmento").find('option:selected').val();
			var dominioSegmento = obterDominioSegmento(segmento);
			var url = $("#hrefMenuFavorito").prop("href");
	
			if(segmento != 'SEL'){
			    $.ajax({url  : url,
		    		data : {sgto: dominioSegmento},
		    		cache: false,
		    		success: function(result)
		            {
		    			$("#divListaMenuFavorito").html(result);	    			
			    		//Carregar carousel    
		    			carregarCarouselMenuFavorito(".prevCarousel",".nextCarousel", 6, 104, ".jcarousel", ".container-jcarousel");
		    		    //Atualiza os itens para serem manipulados.
		    		    atualizarActionItem();
		    		},
		            error:function(xhr)
		            {
		            	alert("Erro ao carregar Menu Favoritos " + xhr.status + " " + xhr.statusText);
		            }
		        });			
			}else{
				showHideButton("none");
				$("#divListaMenuFavorito").html("<div style='width:100%;text-align:center'><hr/>Selecione um Segmento.</div>");
			}
		};	

		obterDominioSegmento = function(segto){
			if(segto == "PF"){return 4;}
			else if(segto == "PJ"){return 5;}
			else if(segto == "GOV"){return 6;}
			else if(segto == "NAO_CORRENTISTA_CARTAO"){return 7;}
			else if(segto == "NAO_CORRENTISTA_CIDADAO"){return 8;}
		};
	
		atualizarActionItem = function atualizaAcaoClickCategoria(){
  			$(".menuFavoritoItem").click(function () {
  				$(".menuFavoritoItem").parent().css("border","1px solid #FFFFFF");
  				$(this).parent().css("border","2px solid red");

  				$("#menuFavoritoImagemSelecionado").val($(this).find(".identImageMenuFavorito").prop("src"));
  				$("#menuFavoritoTituloSelecionado").val($(this).find(".identTituloMenuFavorito").html());
  				$("#menuFavoritoIdSelecionado").val($(this).find(".identIdMenuFavorito").val());
   			});	  			
  		};
  		
  		tratarResultAjaxAction = function (lengthResult){
  			if(lengthResult > 0){
    			showHideButton('inline');
		    }else{
		    	showHideButton('none');
		    }
  		};

  		$(".action").click(function(){
  			var idSelecionado = $("#menuFavoritoIdSelecionado").val();
  			if(idSelecionado == ""){
  				$("#btoInf").click();
  			}else{
  				var idBto = $(this).attr("id");  				
  				var typeAction = $("#href_"+idBto).attr("typeAction");
  				var actionMethod = $("#href_"+idBto).attr("method");
  				if(typeAction == "EXCLUIR"){ 					
  					 $("#exclude-form").attr("action", "./"+idSelecionado+"/"+actionMethod+"/"+$("#comboSegmento").val());
  					 $("#btoModalExcluir").click();
  				}else{
  					var action = $("#href_"+idBto).prop("href");
		  			document.location = action+"/"+idSelecionado+"/"+actionMethod;
  				}
  			}	
  		});
  		
  		$(".preview").click(function(){   			
  			var segmento = $("#comboSegmento").find('option:selected').val();
  			var dominioSegmento = obterDominioSegmento(segmento);
  			var url = $("#hrefPreviewMenuFavorito").prop("href");

			$.ajax({url  : url,
	    		data : {sgto: dominioSegmento},
	    		cache: false,
	    		success: function(result)
	            {
	    			$("#divPreviewMenuFavorito").html(result);
	    			$("#txtSegto").text("Segmento : " +$("#comboSegmento option:selected").text()); 
		    		//Carregar carousel    
	    			carregarCarouselMenuFavorito(".prevCarouselPreview",".nextCarouselPreview", 8, 104, ".jcarouselPreview", ".container-jcarouselPreview");
	    			$("#btoModalPreview").click();
	    		},
	            error:function(xhr)
	            {
	            	alert("Erro ao carregar Menu Favoritos " + xhr.status + " " + xhr.statusText);
	            }
	        });		

  		});

  	  $("document").ready(function(){
  		  var comboSegto = $("#segmentoSelecionado").val();
  		  if(comboSegto != ""){
			  $("#comboSegmento option[value=" +comboSegto+"]").attr("selected","selected") ;
			  getListaResultAjax();
  		  }
	  });
  	  
  	  carregarCarouselMenuFavorito = function(nameClassPrev, nameClassNext, numberVisible, width, typeClassCarousel, typeClassContainer){
		  //Carrossel : Objeto a ser manipudado pelo plugin jcarousel.
		    var jcarousel = $(typeClassCarousel);
		    //Trata a exibição dos botões
		    tratarResultAjaxAction(jcarousel.length);
		    // Define a largura dos ítens do carrossel.
		    jcarousel.on('jcarousel:reload jcarousel:create', function () {
		        // calcula a largura dos ítems.
		        var numberVisibleItens = numberVisible;// número de items visíveis no carrossel.
		        var widthItem = width;// largura em pixel de cada ítem (100px do conteúdo + 4px de espaço).
		        var widthItems = widthItem * numberVisibleItens;// largura total dos items.
		        $(typeClassContainer).css('width', widthItems);
		        // define a largura de cada ítem.
		        jcarousel.jcarousel('items').css('width', widthItem + 'px');
		    });
		    // Retorna no carrossel utilizando o controlador lateral à esquerda.
		    $(nameClassPrev).click(function() {
		        jcarousel.jcarousel('scroll', '-=6');
		    });
		    // Avança no carrossel utilizando o controlador lateral à direita.
		    $(nameClassNext).click(function() {
		        jcarousel.jcarousel('scroll', '+=6');
		    });
		    //function jQuery
		    jcarousel.jcarousel();
  	  };
  	  
		$(".detail").click(function(){
  			var action = $("#href_btoDetalhar").prop("href");
  			var segmento = $("#comboSegmento option:selected").val(); 
  			var dominioSegmento = obterDominioSegmento(segmento);
  			document.location = action+"/"+ dominioSegmento +"/" + $("#comboSegmento option:selected").val();		
   		});

 });
	
	


