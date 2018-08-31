$("#btnExportar").click(
	function(){
		exportarArquivo();
	}
)

function exportarArquivo(){
	var local=$("#hrefExportar").prop("href");
	$("#ajaxSpinDiv").show();
	$.ajax({url:local, data:{},
	  success:function(result){  
		  $("#ajaxSpinDiv").hide();		  
		  window.location = local;
	}, error:function(xhr){
		$("#ajaxSpinDiv").hide();
		alert("Erro ao baixar o arquivo: " + xhr.status + " " + xhr.statusText);
	}});

}
