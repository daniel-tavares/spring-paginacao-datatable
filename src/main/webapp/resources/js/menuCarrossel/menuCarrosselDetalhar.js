var listaChanged=false;

	/** Necessidade do IE10*/
	$.ajaxSetup ({cache: false});

function startSortable(opt){
	var listas=["#sortable1","#sortable2","#sortable3"];
	
	for(var a=0;a<listas.length;a++){
		if(opt!=""){
				$( listas[a] ).sortable(opt,{change: function( event, ui ) {listaChanged = true;}});
			}else{
				$( listas[a] ).sortable({change: function( event, ui ) {listaChanged = true;}});
			}			
		}		
	}  

  
	$("#visualizarMenu").change(function(){
		var ind = $("#visualizarMenu")[0].selectedIndex;
		
		$("#sortable1").css("display","none");
		$("#sortable2").css("display","none");
		$("#sortable3").css("display","none");
		
		if(ind!=0){
			$("#preVisualizar").css("display","block");
		}else{
			$("#preVisualizar").css("display","none");		  	
		}
		
		if(ind==1){
			$("#sortable1").css("display","block");
		}else if(ind==2){
			$("#sortable2").css("display","block");
		}else if(ind==3){
			$("#sortable3").css("display","block");		  	
		}
		  	
		limparSelecaoCategoria();
	});

  
	$("#preVisualizar").click(function(){
		abreVisualizarCarrossel();
	});
	
	$("#voltar").click(function(){
		document.location="index.html";
	});
	
	$("#btPublicar").click(function(){
		var local = $("#hrefPublicar").prop("href");
		var segmento=$("#comboSegmento").find('option:selected').val();
		var dispositivo=$("#comboDispositivo").find('option:selected').val();
		
		$("#menuCarrosselDetalharForm").prop("action",local);
		
		if(segmento!="" && segmento!="0" && dispositivo!="" && dispositivo!="0"){	
			$("#menuCarrosselDetalharForm").submit();
		}else{
			alert("Selecione um dispositivo e segmento antes de publicar.");
		}
	});
	
	$("#btEnviarAprovacao").click(function(){
		var local=$("#hrefEnviarAprovacao").prop("href");
		var segmento=$("#comboSegmento").find('option:selected').val();
		var dispositivo=$("#comboDispositivo").find('option:selected').val();
	
		if(segmento!="" && segmento!="0" && dispositivo!="" && dispositivo!="0"){	
			$("#menuCarrosselDetalharForm").prop("action",local);
			$("#menuCarrosselDetalharForm").submit();
		}
	});
	
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
	  
	  //$("#comboSegmento option[value=" + $("#comboSegmento").find('option:selected').val() +"]").attr("selected","selected") ;
	  //$("#comboDispositivo option[value=" + $("#comboDispositivo").find('option:selected').val() +"]").attr("selected","selected") ;		  
	  	  
	  $("#comboSegmento").val($("#segmentoSelecionado").val()).change();
	  $("#comboDispositivo").val($("#dispositivoSelecionado").val()).change();
	  $("#comboAmbiente").val($("#ambienteSelecionado").val()).change();
	  
	  $("#comboSegmento option[value='1']").remove();
	  $("#comboDispositivo option[value='1']").remove();
	  
	  //listarMenuCarrossel();
	});

function listarMenuCarrossel(){
	var local=$("#hrefDetalharMenuCarrossel").prop("href");
	var segmento=$("#comboSegmento").find('option:selected').val();
	var dispositivo=$("#comboDispositivo").find('option:selected').val();
	var ambiente  = $("#comboAmbiente").find('option:selected').val();
	
	if(ambiente!="" && ambiente!="0" && segmento!="" && segmento!="0" && dispositivo!="" && dispositivo!="0"){

		$.ajax({url:local,
			data:{ambienteMenu: ambiente, segmentoMenu:segmento, dispositivoMenu:dispositivo},
			success:function(result){
			$("#divResumoEstados").css("display","none");
		    $("#divDetalharMenuCarrossel").html(result);
		    atualizaAcaoClickDetalhes();
		}, error:function(xhr){
		  alert("Erro ao carregar o detalhamento do menu carrossel: " + xhr.status + " " + xhr.statusText);
		}});
		
		
	}else{
		$("#divResumoEstados").css("display","block");
		$("#divDetalharMenuCarrossel").html("<div style='width:100%;text-align:center'>Selecione um ambiente, uma categoria e um dispositivo.</div>");
	}
}

function atualizaAcaoClickDetalhes(){
	$(".btEnviarAprovacao").click(function(){
		var local=$(this).parent().find(".hrefEnviarAprovacao").prop("href");
		var segmento=$("#comboSegmento").find('option:selected').val();
		var dispositivo=$("#comboDispositivo").find('option:selected').val();
		var ambiente=$("#comboAmbiente").find('option:selected').val();

		if(ambiente!="0" && ambiente!="" && segmento!="" && segmento!="0" && dispositivo!="" && dispositivo!="0"){	
			$("#menuCarrosselDetalharForm").prop("action",local);
			$("#menuCarrosselDetalharForm").submit();
		}
	});
	
	$(".btAprovar").click(function(){
		var local=$(this).parent().find(".hrefAprovar").prop("href");
		var segmento=$("#comboSegmento").find('option:selected').val();
		var dispositivo=$("#comboDispositivo").find('option:selected').val();
		var ambiente=$("#comboAmbiente").find('option:selected').val();

		if(ambiente!="" && ambiente!="0" && segmento!="" && segmento!="0" && dispositivo!="" && dispositivo!="0"){	
			$("#menuCarrosselDetalharForm").prop("action",local);
			$("#menuCarrosselDetalharForm").submit();
		}
	});	

	$(".btReprovar").click(function(){
		var local=$(this).parent().find(".hrefReprovar").prop("href");
		var segmento=$("#comboSegmento").find('option:selected').val();
		var dispositivo=$("#comboDispositivo").find('option:selected').val();
		var ambiente=$("#comboAmbiente").find('option:selected').val();
		
		if(ambiente!="" && ambiente!="0" && segmento!="" && segmento!="0" && dispositivo!="" && dispositivo!="0"){
			$("#exclude-form").prop("action",local);
		//	$("#menuCarrosselDetalharForm").prop("action",local);
		//	$("#menuCarrosselDetalharForm").submit();
		}
	});	
	

	$(".btnDetalharCategoria").click(function(){
		var idCategoria = $(this).next(".identificadorCategoria").html();
		$("#abreModalDetalheCategoria").click();
		detalharCategoriaAjax(idCategoria);
	});
	
	$("#reprovarTodos").click(function(){		
		var local=$(this).parent().find(".hrefReprovarTodos").prop("href");
		$("#exclude-form").prop("action",local);
		//$("#menuCarrosselDetalharForm").prop("action",local);
		//$("#menuCarrosselDetalharForm").submit();
	});
}

function detalharCategoriaAjax(idCategoria){
	var local=$(".hrefDetalharCategoriaAjax").prop("href");

		$.ajax({url:local,
			data:{idCategoria:idCategoria},
			success:function(result){
		    $("#divDetalharCategoria").html(result);
		}, error:function(xhr){
		  alert("Erro ao carregar o detalhamento da categoria" + xhr.status + " " + xhr.statusText);
		}});
		
}	

$(".carrosselIndicador").click(function(){
	var disp = $(this).attr("dispositivo");
	var seg  = $(this).attr("segmento");
	
	$("#comboDispositivo").val(disp).change();
	$("#comboSegmento").val(seg).change();
	
	listarMenuCarrossel();
});

