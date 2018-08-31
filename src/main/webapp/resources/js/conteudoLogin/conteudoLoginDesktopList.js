$("#comboAmbiente").change(function(){
	var ambiente = $("#comboAmbiente").find('option:selected').val();
	
	if(ambiente!=undefined){
		document.location = $("#hrefMudarAmbiente").prop("href")+"/"+ambiente;		
	}	
	
});

$("#comboAmbiente option[value=" + $("#ambienteSelecionado").val() +"]").attr("selected","selected") ;