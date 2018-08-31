$(function() {
	
	$("#col2_filter").limit('60', '#col2_filterLeft');
	$("#col3_filter").limit('60', '#col3_filterLeft');

	removerItensSegmento = function(){
	  	$("#comboSegmento option[value='TODOS']").remove();
		$("#comboSegmento option[value='TODOS_CORRENTISTAS']").remove();
		$("#comboSegmento option[value='TODOS_NAO_CORRENTISTAS']").remove();
		$("#comboSegmento option[value='NAO_CORRENTISTA_HABITACAO']").remove();
	};

	removerItensSegmento();
	
	$(".uploadImage").change(function(){		
		  var altura = $(this).attr("altura");
		  var largura = $(this).attr("largura");
		  var tamanhoFile = $(this).attr("tamanhoFile");
		  var extensaoFile = $(this).val().split('.').pop().toLowerCase();
		  var id_file = '#'+$(this).attr('id');
		  var action = $(this).attr("actionValue");
		  var src_img_blank= "../../resources/images/img_indisponivel.jpg";
		  
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
	
	
});
