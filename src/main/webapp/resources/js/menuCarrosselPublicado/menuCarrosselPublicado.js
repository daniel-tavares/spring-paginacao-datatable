$("#btnRepublicar").click(function(){
	var segmento=$("#comboSegmento").find('option:selected').val();
	var dispositivo=$("#comboDispositivo").find('option:selected').val();
	var ambiente=$("#comboAmbiente").find('option:selected').val();
	
	$("#segmentoMenu").val(segmento);
	$("#dispositivoMenu").val(dispositivo);
	$("#ambienteMenu").val(ambiente);
	
	$("#carrosselPublicado-form").prop("action","menuCarrosselPublicadoRepublicar");
	$("#carrosselPublicado-form").submit();
});


$("#btnVoltar").click(function(){
	
	$("#carrosselPublicado-form").prop("action","menuCarrosselPublicado");
	$("#carrosselPublicado-form").submit();	
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
		    $("#divMenuCarrossel").html(result);
		    
		    var dataAlteracao = $("#divMenuCarrossel").find(".dataAlteracaoAjax").val();
		    var usuarioAlteracao = $("#divMenuCarrossel").find(".usuarioAlteracaoAjax").val();
		    
		    $("#dataAlteracao").html(dataAlteracao);
		    $("#usuarioAlteracao").html(usuarioAlteracao);

		    if(dataAlteracao!=undefined){
		    	$("#publicacaoMenu").css("display","block");
		    }else{
		    	$("#publicacaoMenu").css("display","none");
		    }
		    carregarCarousel(".voltar",".avancar", 3, 104, ".jcarouselPreviewMobile", ".container-jcarouselPreviewMobile");
		    atualizaAcaoClique();
			carregaTendina();
		}, error:function(xhr){
		  alert("Erro ao carregar as categorias: " + xhr.status + " " + xhr.statusText);
		  $("#publicacaoMenu").css("display","none");
		}});
		
	}else{
		$("#publicacaoMenu").css("display","none");
		$("#divMenuCarrossel").html("<div style='width:100%;text-align:center'>Selecione um ambiente, uma categoria e um dispositivo.</div>");
	}
	
}
carregarCarousel = function(nameClassPrev, nameClassNext, numberVisible, width, typeClassCarousel, typeClassContainer){
	  //Carrossel : Objeto a ser manipudado pelo plugin jcarousel.
	    var jcarousel = $(typeClassCarousel);
	    //Trata a exibição dos botões
	    //tratarResultAjaxAction(jcarousel.length);
	    // Define a largura dos ítens do carrossel.
	    jcarousel.on('jcarousel:reload jcarousel:create', function () {
	        // calcula a largura dos items.
	        var numberVisibleItens = numberVisible;// número de items visíveis no carrossel.
	        var widthItem = width;// largura em pixel de cada ítem (100px do conteúdo + 4px de espaço).
	        var widthItems = widthItem * numberVisibleItens;// largura total dos items.
	        
	        $(typeClassContainer).css('width', widthItems);
	        // define a largura de cada ítem.
	        jcarousel.jcarousel('items').css('width', widthItem + 'px');
	    });
	    // Retorna no carrossel utilizando o controlador lateral à esquerda.
	    $(nameClassPrev).click(function() {
	        jcarousel.jcarousel('scroll', '-=1');
	        $("#liBlocoSubMenus").hide();
	    });
	    // Avança no carrossel utilizando o controlador lateral à direita.
	    $(nameClassNext).click(function() {
	        jcarousel.jcarousel('scroll', '+=1');
	        $("#liBlocoSubMenus").hide();
	    });
	    // Evento executado ao final do scroll.
	    jcarousel.on('jcarousel:animateend', function(event, carousel) {
	    	scrolled = false;
	    });
	    //function jQuery
	    jcarousel.jcarousel({
	        wrap: 'circular',
	        animation: {
	            duration: 500// duração (em milissegundos) do scroll.
	        }});

	    //jcarousel.jcarousel();
};

function atualizaAcaoClique(){
	
	$(".menuCarrosselItem").click(function () {
		if ($('.unicoSubMenu').hasClass("masonry")) {
			$('.unicoSubMenu').masonry('destroy');
		}
		$(".menuCarrosselItem").parent().removeClass("categoriaMarcada");
		$(this).parent().addClass("categoriaMarcada");
		
		var obj = $(".cat_"+$(this).find(".identificadorCategoria").val());
		
		$(".itens").css("display","none");
		$(obj).css("display","block");
		
		$('.unicoSubMenu').width("auto");
		$('.unicoSubMenu').masonry({
			 itemSelector: '.submenuBlocos'
		});
		
	});	
	//$(".itemMenu").each(function(){$(this).parent().find(".listaDescritiva").html($(this).html().replace(";","<br/>"))});
	$(".itemMenu").each(function(){
		var valor = $(this).html();
		var label = valor.split(";")[0];
		var listaDesc = valor.split(";");
		$(this).parent().find(".nomeItem").html(label);
		if(listaDesc.length>1){

			for(var a=1; a<listaDesc.length; a++){
				adicionarItemListaDescritiva($(this).parent().find(".listaDescritiva"),listaDesc[a]);				
			}
		}
	});
}
function carregaTendina() {
	$(".dropdownTendina").click(function () {
		$('.dropdownTendina').tendina('hideAll');
	});
	$('.dropdownTendina').tendina('destroy');
	$('.dropdownTendina').tendina({
		// enable slide down/up animations
		animate: true,

		// animation speed
		speed: 500,

		// open menus on mouse hover
		onHover: false,

		// the delay after which Tendina will open menus on hover. 
		hoverDelay: 200,

		// The active menu that will be open when a new Tendina menu is created. 
		// activeMenu: '.my-active-category'
		// or activeMenu: $('.my-active-category')
		activeMenu: null,

		// Callback that will be executed once any menu/submenu has been opened.
		openCallback: function($clickedEl) {
		  console.log($clickedEl);
		},

		// Callback that will be executed once any menu/submenu has been closed.
		closeCallback: function($clickedEl) {
		  console.log($clickedEl);
		}
	});		
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

function adicionarItemListaDescritiva(who, nome){

    if(nome.length){
        $('<li />', {html: nome}).appendTo(who);
    }	
}

$("document").ready(function(){
  $(".menuCarrosselItem").parent().css("border","1px solid #aaaaaa");
  
  $("#comboSegmento option[value=" + $("#segmentoMenu").val() +"]").attr("selected","selected") ;
  $("#comboDispositivo option[value=" + $("#dispositivoMenu").val() +"]").attr("selected","selected") ;
  $("#comboAmbiente option[value=" + $("#ambienteMenu").val() +"]").attr("selected","selected") ;
	  
  listarMenuCarrossel();
  
  //se carregou uma lista descritiva preenchida:
  $(".listaDescritiva").each(function(){
	  var valores=$(this).parent().find(".valoresListaDescritiva").split(";");
	  for(var a=0;a<valores.length;a++){
		  if(valores[a]!=""){
			  adicionarItemListaDescritiva($(this).parent().find(".itensListaDescritiva"),valores[a]);
		  }
	  }	  
  });  
  
});		