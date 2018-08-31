
	/** Necessidade do IE10*/
	$.ajaxSetup ({cache: false});

function atualizaClique(){
	
	$(".carrosselIndicador").click(function(){
		var disp = $(this).attr("dispositivo");
		var seg  = $(this).attr("segmento");
		
		var act = $("#quadroResumoCarrosselForm").prop("action");
		act+=seg+"/"+disp;
		
		$("#quadroResumoCarrosselForm").prop("action",act);
		$("#quadroResumoCarrosselForm").submit();
	});
	
}

$(document).ready(function(){
	carregarQuadroResumoAjax();
});

$("#comboAmbiente").change(function(){
	carregarQuadroResumoAjax();
});

function carregarQuadroResumoAjax(){
	var ambiente = $("#comboAmbiente").val();
	
	if(ambiente!=""){
		var local=$("#hrefQuadroResumoAjax").prop("href");

		var segmento = $("#segmentoSelecionado").val();
		var dispositivo = $("#dispositivoSelecionado").val();	
		
		$.ajax({url:local,
		  data:{ambienteMenu:ambiente, segmentoMenu:segmento, dispositivoMenu:dispositivo},
		  success:function(result){
		  $("#divQuadroResumoCarrossel").html(result);
		  atualizaClique();
		}, error:function(xhr){
		  alert("Erro ao carregar o quadro resumo" + xhr.status + " " + xhr.statusText);
		}});
	}else{
		$("#divQuadroResumoCarrossel").html("Selecione um ambiente para visualizar o quadro resumo.");
	}	
		
}	