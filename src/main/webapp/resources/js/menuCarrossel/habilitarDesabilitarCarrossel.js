$(".categoria").click(function(){
	var obj = $($(this)).attr("sub");
	$("#"+obj).toggle("slow");
});

$(".chkItem").click(function(){
	$(this).next(".itemMenu").toggleClass("changedItem");
});

$("#confirmar").click(function(){
	if(confirm("Deseja realmente alterar disponibilidade dos itens?")){
		alert("Operação efetuada com sucesso.");
	}
});