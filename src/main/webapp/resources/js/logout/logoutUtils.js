$(function() {
	
	$("#textoMensagemIpt").limit("255", "#textoMensagemLeft");
	
	$(".uploadImage").change(function(){		
		  var altura = $(this).attr("altura");
		  var largura = $(this).attr("largura");
		  var tamanhoFile = $(this).attr("tamanhoFile");
		  var extensaoFile = $(this).val().split('.').pop().toLowerCase();
		  var id_file = '#'+$(this).attr('id');
		  
			if($.inArray(extensaoFile, ['gif','png','jpg','jpeg']) == -1) {
				$(id_file).val("");	
			    $("#btoInfUploadExtension").click();
			    return;
			}
		
			var file = this.files[0];
		    if(file){		  
				  var image = new Image();
				  image.onload = function (){	
					  var sizeImage =  file.size/1024;
					  if((this.width==largura && this.height==altura) && sizeImage<tamanhoFile){
							  $("#uploadfileUpdatePreview").attr("src",image.src);
					  }else{
						  $(id_file).val("");
						  $("#btoInfUploadSize").click();			   	  
					  }
				  };			  
				  var _URL = window.URL || window.webkitURL;	
				  image.src = _URL.createObjectURL(file);
		   }; 
	 });

});