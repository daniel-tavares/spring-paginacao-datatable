$(".menuCarrosselItem").click(function () {
	//$(".menuCarrosselItem").css("border","1px solid blue");
	//$(this).css("border","1px solid blue");
	
	$("#catSelecionada").html("Categoria selecionada: "+$(this).children("span").html());
	$("#menuPrincipal").css("display:block");
	
	$("#subMenu").toggle();
});	

$(".detalharServico").click(function(){
	var local=$("#hrefDetalharServicoAjax").prop("href");
	var idServico = $(this).html();
	$.ajax({url:local,
		data:{idServico:idServico},
		success:function(result){
	    $("#divDetalharServico").html(result);
	    $("#abreModalDetalharServico").click();
	}, error:function(xhr){
	  alert("Erro ao carregar o detalhamento do servico" + xhr.status + " " + xhr.statusText);
	}});
}); 