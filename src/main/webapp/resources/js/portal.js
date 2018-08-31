var gov = {};
gov.portalbanking = {};
gov.portalbanking.service = {};
var service = gov.portalbanking.service;

//Funções para utilização do metisMenu (menu com dropdown)
/*$(function() {
	$('#side-menu').metisMenu();
});

$(function() {
  $(window).bind("load resize", function() {
      width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
      if (width < 768) {
          $('div.sidebar-collapse').addClass('collapse');
      } else {
          $('div.sidebar-collapse').removeClass('collapse');
      }
  });
});*/

$("#campanha_menu").click(function(){
	$("#campanha_submenu").toggle("slow");
	trocarCssToggle("campanha");
});

$("#menu_carrossel").click(function(){
	$("#menu_carrossel_submenu").toggle("slow");
	trocarCssToggle("carrossel");
});

$("#menu_servicos").click(function(){
	$("#menu_servicos_submenu").toggle("slow");
	trocarCssToggle("servicos");
});

$("#menu_produtos").click(function(){
	$("#menu_produtos_submenu").toggle("slow");
	trocarCssToggle("produtos");
});

$("#menu_conteudoLogin").click(function(){
	$("#menu_conteudoLogin_submenu").toggle("slow");
	trocarCssToggle("conteudoLogin");
});


trocarCssToggle = function(idCssStyle){	
	var cssRight="glyphicon glyphicon-circle-arrow-right";
	var cssDown = "glyphicon glyphicon-circle-arrow-down";
	var idCss = "#"+idCssStyle;

	if($(idCss).hasClass(cssRight)){
		$(idCss).removeClass(cssRight);
		$(idCss).addClass(cssDown);
	}else{
		$(idCss).removeClass(cssDown);
		$(idCss).addClass(cssRight);
	}
};

$(function () {
	  $('[data-toggle="popover"]').popover({
		  html : true, 
		  content: function() {
			  return $('#teste1').html();
		  }
	  })
	})
	

$("#preVisualizar2").click(function(){abreVisualizarCarrossel2()});

function abreVisualizarCarrossel2(){
	var local=$("#hrefPopupPreview2").prop("href");
	var w  = ($(window).width()),
		h   = ($(window).height()),
		popup = window.open (local, "popupCarrossel", "fullscreen=yes, width="+w+", height="+h+", top=0, left=0, resizable=yes,scrollbars=yes");  
}	

$(document).ready(function() { 
	$("[id$=biente] option[value='Todos']").remove();
	$("[id$=bienteSel] option[value='SEL']").remove();
});

