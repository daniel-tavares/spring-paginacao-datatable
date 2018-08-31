$("#btSelecionar").click(function(){
	var selecionado = $(".radioServicos:checked");
	
	if(selecionado.length==1){
		// pegando o nome na tabela (segunda td da tabela)
		var itemTabela = $(".radioServicos:checked").parent().parent().find("td")[1].innerHTML;
		window.opener.inserirItemLista(itemTabela);
		window.close();
	}else{
		alert("Necessário selecionar um item.")
	}
});

$("#btCancelar").click(function(){
	window.close();
});

