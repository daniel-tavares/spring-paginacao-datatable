$(function() {	
	
	$("#col2_filter").limit('60', '#col2_filterLeft');
	$("#txIndCampanha").limit('20', '#txIndCampanha');
	$("#col4_filter").limit('60', '#col4_filterLeft');
	$("#cpLink").limit('255', '#cpLinkLeft');
	$("#tpExibicaoBanner").limit('60', '#tpExibicaoBannerLeft');
	$("#msgTooltip").limit('255', '#msgTooltipLeft');
	
	/* LIMPA OS CAMPOS */
	cleanIndicadorCampanha = function(){ $("#txIndCampanha").val("");};
	cleanSgtoDispositivo = function(){	$("#segmentoSel").val("SEL"); $("#dispositivoSel").val("0");};
	cleanURL = function(){$("#cpLink").val("");};
	
	/* REMOVER ITENS QUE NÃO SÃO RELEVANTES NO SEGMENTO */
	removerItensSegmento = function(){
	  	$("#segmentoSel option[value='TODOS']").remove();
		$("#segmentoSel option[value='TODOS_CORRENTISTAS']").remove();
		$("#segmentoSel option[value='TODOS_NAO_CORRENTISTAS']").remove();
		$("#segmentoSel option[value='NAO_CORRENTISTA_HABITACAO']").remove();
	};
	removerItensSegmento();
	
	 /* TRATAMENTO BANNER PADRÃO */
    tratarCampanhaPadrao = function(isChecked){
    	if(isChecked){
    		cleanIndicadorCampanha();
           	$("#txIndCampanha").prop("disabled", true);
           	$("#segmentoSel").attr("disabled", false);
           	$("#dispositivoSel").attr("disabled", false);
    	}else{
        	$("#txIndCampanha").prop("disabled", false);;
        	cleanSgtoDispositivo();
       	 	$("#segmentoSel").attr("disabled", true);
       	 	$("#dispositivoSel").attr("disabled", true);
    	}
    };

	var checked = $("#bannerPadrao").is(":checked");
	tratarCampanhaPadrao(checked);
	
    $("#bannerPadrao").change(function() {
    	tratarCampanhaPadrao(this.checked);
    });
    
    /*TRATAMENTO UPDATE*/
    if($("#bannerPadrao").prop('disabled')){
   	 	$("#segmentoSel").attr("disabled", true);
   	 	$("#dispositivoSel").attr("disabled", true);
    } 
    /* FIM TRATAMENTO BANNER PADRÃO */
    
    /* TRATAMENTO LINK DE AQUISIÇÃO */
    if($.trim($("#cpLink").val()).length == 0){
    	$("#cpLink").prop("disabled", true);
    	$("#lnkDirecionamento").prop("checked",false);
    }else{
    	$("#cpLink").prop("disabled", false);
    	$("#lnkDirecionamento").prop("checked",true);
    }

    $("#lnkDirecionamento").change(function() {
    	cleanURL();
        if(this.checked ? $("#cpLink").prop("disabled", false) : $("#cpLink").prop("disabled", true));
    });
    /* FIM : TRATAMENTO LINK DE AQUISIÇÃO */
    
     
	$(".uploadImage").change(function(){		
		  var altura = $(this).attr("altura");
		  var largura = $(this).attr("largura");
		  var tamanhoFile = $(this).attr("tamanhoFile");
		  var extensaoFile = $(this).val().split('.').pop().toLowerCase();
		  var id_file = '#'+$(this).attr('id');
		  var action = $(this).attr("actionValue");
		  var src_img_blank= "../../../resources/images/img_indisponivel.jpg";
		  
			if($.inArray(extensaoFile, ['gif','png','jpg','jpeg']) == -1) {
				$(id_file).val("");	
				if(action == "INSERT"){
					$("#uploadfileInsertPreview").attr("src",src_img_blank);
				}
			    $("#btoInfUploadExtension").click();
			    return;
			}
		
			var file = this.files[0];
		    if(file){		  
				  var image = new Image();
				  image.onload = function (){	
					  var sizeImage =  file.size/1024;
					  if((this.width==largura && this.height==altura) && sizeImage<tamanhoFile){
						  if(action == "INSERT"){
							  $("#uploadfileInsertPreview").attr("src",image.src);
						  }else{
							  $("#uploadfileUpdatePreview").attr("src",image.src);
						  }  
					  }else{
						  $(id_file).val("");	
						  if(action == "INSERT"){
							  $("#uploadfileInsertPreview").attr("src", src_img_blank);
						  }
						  $("#btoInfUploadSize").click();			   	  
					  }
				  };			  
				  var _URL = window.URL || window.webkitURL;	
				  image.src = _URL.createObjectURL(file);
		   }; 
	 });
	
	$(".update").click(function(){
		$("#bannerPadrao").attr("disabled", false);
       	$("#txIndCampanha").prop("disabled", false);
       	$("#segmentoSel").attr("disabled", false);
       	$("#dispositivoSel").attr("disabled", false);
    	$("#ambienteSel").attr("disabled", false);
       	$("#add-bannerinferior-form").submit();       	
	});

	 $(document).ready(function() {    	
		 var padraoValue = $("#padraoValue").html();
		 if(padraoValue == '1'){
			 $("#segmentoSel").val($("#segmentoValue").html());
			 $("#dispositivoSel").val($("#dispositivoValue").html());
		 }else{
			 $("#txIndCampanha").val($("#indicadorValue").html());
		 }
	 });	 

});

