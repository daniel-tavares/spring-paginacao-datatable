/** Necessidade do IE10*/
	$.ajaxSetup ({cache: false});

function listarMenuCarrossel(){
	var local=$("#hrefCategoria").prop("href");
	var segmento=$("#comboSegmento").find('option:selected').val();
	var dispositivo=$("#comboDispositivo").find('option:selected').val();
	var ambiente=$("#comboAmbiente").find('option:selected').val();

	if(ambiente!="" && ambiente!="0" && segmento!="SEL" && dispositivo!="0" && dispositivo!="" && dispositivo!="SEL"){
		$("#divMenuCarrossel").css("display","none");
		$("#divAjaxLoading").css("display","block");
		
		$.ajax({url:local,
			data:{ambienteMenu:ambiente, segmentoMenu:segmento, dispositivoMenu:dispositivo},
			success:function(result){
				$("#divMenuCarrossel").css("display","block");
				$("#divMenuCarrossel").html(result);
				$("#sortable1").css("width","950px");
				$("#divAjaxLoading").css("display","none");
				carregarCarousel(".voltar",".avancar", 3, 104, ".jcarouselPreviewMobile", ".container-jcarouselPreviewMobile");
				//$("<li>",{id:"liBlocoSubMenus"}).insertAfter($("#sortable1 li")[7]);
				$("<div>",{id:"liBlocoSubMenus"}).insertAfter($("#sortable1").last());
				$("#liBlocoSubMenus").css("width","687px");
				$("#liBlocoSubMenus").css("height","auto");
				//$("#liBlocoSubMenus").css("border","1px solid blue");				
				$("#liBlocoSubMenus").append($(".todosSubMenus"));				
				$(".listaDescritiva li").css("list-style-type","circle");
				$(".listaDescritiva li").css("font-size","10px");
				$("#sortable1").css("height",obtemAlturaMenu());
				$("#sortable2").css("width","630px");
				atualizaAcaoClique();
		    
		}, error:function(xhr){
		  alert("Erro ao carregar as categorias: " + xhr.status + " " + xhr.statusText);
		}});
		
	}else{
		$("#divMenuCarrossel").css("display","block");
		$("#divAjaxLoading").css("display","none");
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
function obtemAlturaMenu() {
	var quantidadeItensMenus = $("#sortable1 li").length;
	var larguraMenu = $('#sortable1').innerWidth();
	var larguraItemMenu = $("#sortable1 li").innerWidth();
	var quantidadeItensPorLinha = parseInt(((larguraMenu/larguraItemMenu)+"").substr(0, 1));
	var novaLinha=0;
	var resto = quantidadeItensMenus % quantidadeItensPorLinha;
	if(resto != 0) {
		novaLinha = 1;
	}
	var linhas = parseInt(((quantidadeItensMenus/quantidadeItensPorLinha)+novaLinha+"").substr(0,1));
	var altura = Math.round($("#sortable1 li").innerHeight())+10;
	return (linhas)*(altura);
}

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
		$("#liBlocoSubMenus").css("background-color","#EEE5DE");	
		
		$('.unicoSubMenu').width($('#liBlocoSubMenus').innerWidth());
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
	$(".dropdown").click(function () {
		$('.dropdown').tendina('hideAll');
	});
	$('.dropdown').tendina('destroy');
	$('.dropdown').tendina({
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

  $("#divMenuCarrossel").css("display","block");
  $("#divAjaxLoading").css("display","none");  
  
  $("#comboSegmento option[value=" + $("#segmentoSelecionado").val() +"]").attr("selected","selected") ;
  $("#comboDispositivo option[value=" + $("#dispositivoSelecionado").val() +"]").attr("selected","selected") ;
  $("#comboAmbiente option[value=" + $("#ambienteSelecionado").val() +"]").attr("selected","selected") ;

  
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
