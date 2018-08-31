$(function(){
	
	$("input[type=checkbox]").change(function(){
		var count = verificarChecked();
		if(count > 0){
			$("#publicar").attr("disabled", false);
		}else{
			$("#publicar").attr("disabled", true);
		}
	});
	
	
	verificarChecked = function(){
		var count = 0;
		$("#entidades input[type=checkbox]").each(function(){
			if($(this).is(":checked")){				
				count ++;
			}
		});
		return count;
	};
	
	$(".checkedTodos").change(function(){
		if($(this).is(":checked")){
			selecionarTodos();
		}else{
			cleanTodos();
		};
	});
	
	selecionarTodos = function(){
		$("#entidades input[type=checkbox]").each(function(){
			$(this).prop("checked", true);
			$(this).prop("disabled", true);
		});
		$("#publicar").attr("disabled", false);
	};
	
	cleanTodos = function(){
		$("#entidades input[type=checkbox]").each(function(){
			$(this).prop("checked", false);
			$(this).prop("disabled", false);
		});
		$("#publicar").attr("disabled", true);
	};
	
	$("#publicar").click(function(){
		var htmlConteudo = "";
		$("#entidades input[type=checkbox]").each(function(){
			if($(this).is(":checked")){
				htmlConteudo = htmlConteudo + "<label> - "+ $(this).attr("entidade") +"</label><br/>";
			}
		});
		$("#conteudo_publicar").html(htmlConteudo);
		$("#btoPublicar").click();
	});

	
	
	$("#publicarConteudo").click(function(){
		var url = $("#hrefpublicar").prop("href");
		var entidades = [];
		$("#entidades input[type=checkbox]").each(function(){
			if($(this).is(":checked")){
				entidades.push($(this).attr("path"));
			}
		});
		postPublicacaoAjax(url, entidades);
	});
	
	postPublicacaoAjax = function(url, entidades){
	    $.ajax({
	    	
		    	url: url,
		    	data : JSON.stringify(entidades),		         
				dataType: 'json',
				type: 'POST',				
				cache : false,
		        async : true,
		        timeout: 180,
		        contentType : "application/json; charset=UTF-8",
	    		success: function(msg)
		            {
	    				cleanAjax();
	    				$(".alert-success").html(msg.mensagem);
	    				$("#btoSucesso").click();
		    			
		    		},
	            error:function(xhr)
		            {
		            	alert("Tempo excedido na chamada do publicador " + xhr.status + " " + xhr.statusText);
		            }
        });			
	};

	cleanAjax = function(){
		cleanTodos();
		$(".checkedTodos").prop("checked",false);
	};
});