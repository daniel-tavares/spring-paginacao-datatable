			
			$(".menuCarrosselItem").click(function () {
				$(".menuCarrosselItem").parent().css("border","1px solid #aaaaaa");
				$(this).parent().css("border","2px solid red");
				
				$("#catSelecionada").html("Categoria selecionada: "+$(this).children("span").html());
				
				$("#editarCategoria").css("display","block");
				$("#excluirCategoria").css("display","block");
						
			});	
			
			function limparSelecaoCategoria(){
				$(".menuCarrosselItem").parent().css("border","1px solid #aaaaaa");
				$("#catSelecionada").html("Categoria selecionada: ");
				
				$("#editarCategoria").css("display","none");
				$("#excluirCategoria").css("display","none");
			}

			var listaChanged=false;
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
		  
		  $("#ordenacao").click(function(){
		  	startSortable("");
		  	
		  	if($("#ordenacao").prop("checked")){
		  		$("#gravarOrdenacao").css("display","block");
		  		$("#cancelarOrdenacao").css("display","block");
		  		
		  		startSortable("enable");
		  	}else{
		  		$("#gravarOrdenacao").css("display","none");
		  		$("#cancelarOrdenacao").css("display","none");
		  		
		  		if(listaChanged){
			  		if(confirm("Você alterou a ordem das categorias;\nDeseja gravar e manter suas alterações?")){
			  			startSortable("disable");
			  			listaChanged=false;
			  			$("#gravarOrdenacao").click();
			  		}
			  	}
		  	}
		  });

				$("#cancelarOrdenacao").click(function(){
						startSortable("cancel");		
						listaChanged=false;	
				});

				$("#gravarOrdenacao").click(function(){
					$("#ordenacao").prop("checked",false);
					$("#gravarOrdenacao").css("display","none");
					$("#cancelarOrdenacao").css("display","none");
					alert("Gravação efetuada com sucesso.");
				});
		  
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
		  
		  /*$("#cancelar").click(function(){
			  var local=$("#cancelar").prop("href");
				document.location=local;
		  });*/
		  
			$("#editarCategoria").click(function(){
				document.location="editarCategoria.html";
			});
			
			$("#gerenciarSubMenu").click(function(){
				var local=$("#hrefGerenciarSubMenu").prop("href");
				var idCategoria = $("#idCategoriaSalva").html();
				var imagemDesktopPreview = $("#fileImagemDesktopPreview").prop("src");
				var imagemSmartphonePreview = $("#fileImagemSmartphonePreview").prop("src");
				var identificadorImagemCategoria = $("#comboDispositivo").val()=="SMARTPHONE" ? imagemSmartphonePreview : imagemDesktopPreview;
				if(identificadorImagemCategoria.indexOf("apl")!=-1) {
					$("#categoriaImagemSelecionado").val(identificadorImagemCategoria.substring(0,identificadorImagemCategoria.indexOf("/",9))+"/statics-rascunho"+identificadorImagemCategoria.substring(identificadorImagemCategoria.indexOf("/menu_carrossel"),identificadorImagemCategoria.length));
				} else {
					$("#categoriaImagemSelecionado").val(identificadorImagemCategoria);
				}
				$("#categoriaMenuCarrossel").prop("action",local+"/"+idCategoria);
				$("#categoriaMenuCarrossel").submit();
			});
			
			
			$("#excluirCategoria").click(function(){
				alert("Não é possível excluir esta categoria, pois ela tem itens de menu associados.");
			});

			$("document").ready(function(){
				  $("#comboSegmento option[value='TODOS']").remove();
				  $("#comboDispositivo option[value='TODOS']").remove();
				  
				  $("#comboDispositivo").change();
				  
				if(documentoSalvo){
					confirmarFinalSalvar();
				}
			});
			
			$("#comboDispositivo").change(function(){
				var opt = $(this).val();
				if(opt == "SMARTPHONE"){ //smartphone 
					$("#divImagemDesktop").css("display","none");
					$("#divImagemSmartphone").css("display","block");
				}else{
					$("#divImagemSmartphone").css("display","none");
					$("#divImagemDesktop").css("display","block");
				}
			});
			
			function confirmarFinalSalvar(){
				//$("#btEditarSubMenu").click();
				$("#gerenciarSubMenu").click();
				/*				
				if(confirm("Operacao realizada com sucesso.\nDeseja editar sub-menus?")){
					$("#gerenciarSubMenu").click();
				}else{
					$("#cancelar").click();
				}
				*/				
			}

		    /*$("#btSimEditarSubMenu").click(function(){
				$("#gerenciarSubMenu").click();    
		    });
		    
		    $("#btNaoEditarSubMenu").click(function(){
		    	$("#cancelar").click();    
		    });*/
			
/*			$("#btSubmit").click(function(){
				var imgSmart = $("#imagemSmartphone").val();
				var imgDesk = $("#imagemDesktop").val();
				var imgInter = $("#imagemInterna").val();
				var prevDesk = $("#fileImagemDesktopPreview").prop("src");
				var prevSmart = $("#fileImagemSmartphonePreview").prop("src");
				var prevInter = $("#fileImagemInternaPreview").prop("src");

				if($("#comboDispositivo").val()=="3"){
					if((imgSmart == undefined && prevSmart == undefined)){
						alert("Necessario selecionar uma imagem para o dispositivo.");
					}else{
						if($("#imagemSmartphone").val()=="" || $("#imagemSmartphone").val()==undefined){
							$("#imagemSmartphone").val("");
						}
						$("#categoriaMenuCarrossel").submit();
					}
				} else {
					if((imgInter == undefined && prevInter == undefined) && (imgDesk == undefined && prevDesk == undefined)){
						alert("Necessario selecionar uma imagem para os dispositivos.");					
					}else{
						if($("#imagemInterna").val()=="" || $("#imagemInterna").val()==undefined){
							$("#imagemInterna").val("");
						}
						
						if($("#imagemDesktop").val()=="" || $("#imagemDesktop").val()==undefined){
							$("#imagemDesktop").val("");
						}						
						$("#categoriaMenuCarrossel").submit();
					}
				}
			});
*/			
		
			$("#btSubmit").click(function(){
				var imgSmart = $("#imagemSmartphone").val();
				var imgDesk = $("#imagemDesktop").val();
				var imgInter = $("#imagemInterna").val();

				if($("#comboDispositivo option:selected").val()=="SMARTPHONE"){
					if((imgSmart == "" && $("#fileImagemSmartphone").val()=="")){
						$(".device").html(" Smartphone");
						$("#btoInfUploadRequired").click();
					    return;
					}else{
						$("#categoriaMenuCarrossel").submit();
					}
				} else {
					if(imgDesk == "" && $("#fileImagemDesktop").val()==""){
						$(".device").html(" Desktop");
						$("#btoInfUploadRequired").click();
					    return;
						//alert("Necessario selecionar uma imagem para os dispositivos.");					
					}else{
						$("#categoriaMenuCarrossel").submit();
					}
				}
			});
