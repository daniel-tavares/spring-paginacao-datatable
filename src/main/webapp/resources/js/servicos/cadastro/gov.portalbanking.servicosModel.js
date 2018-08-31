$(function() {
    service.datepicker();
    
    //se carregou uma lista descritiva preenchida:
    if($("#listaDesc").val()=='true'){
    	$("#listaDescritivaDiv").css("display","block");
    	
    	var valores=$("#listaDescritivaTxt").val().split(";");
    	for(var a=0;a<valores.length;a++){
    		if(valores[a]!=""){
    			adicionarItemListaDescritiva(valores[a]);
    		}
    	}
    }
});


$("#listaDesc").click(function(){
	if($("#listaDescritivaDiv").css("display")=="block"){
		$('#listaDescLimpar').click();
	}
	$("#listaDescritivaDiv").toggle("fast");
});

$('#listaDescLimpar').click(function(){
	$("#listaDescUL").html("");
	$('#listaDescritivaTxt').val("");
});

$('#listaDescNovoBT').click(function(){
    var text = $('#listaDescNovo').val();
    
	if($('#listaDescritivaTxt').val()==""){
		$('#listaDescritivaTxt').val($('#listaDescritivaTxt').val()+text);		
	}else{
		$('#listaDescritivaTxt').val($('#listaDescritivaTxt').val()+";"+text);
	}    
	adicionarItemListaDescritiva(text);
});

function adicionarItemListaDescritiva(nome){

    $('#listaDescNovo').val("");
    if(nome.length){
        $('<li />', {html: nome}).appendTo('#listaDescUL');
    }	
}