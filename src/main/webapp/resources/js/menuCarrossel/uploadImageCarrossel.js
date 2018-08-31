$(function() {
	
	$(".fileUploadFotoCarrossel").each(function(index, value){
		var previewImage = $(this).attr("previewImg");
		$(previewImage).css("width",$(this).attr("largura"));
		$(previewImage).css("height",$(this).attr("altura"));		
	});

	$(".fileUploadFotoCarrossel").change(function(){		
		  var altura = $(this).attr("altura");
		  var largura = $(this).attr("largura");
		  var tamanhoFile = $(this).attr("tamanho");
		  var previewImage = $(this).attr("previewImg");
		  var idFileUploadImage = $(this).attr("id");
		  var extensaoFile = $(this).val().split('.').pop().toLowerCase();
		  
			if($.inArray(extensaoFile, ['gif','png','jpg','jpeg']) == -1) {					
				$("#"+idFileUploadImage).val("");
			    $("#btoInfUploadExtension").click();
			    return;
			}
		
			var file = this.files[0];
		    if(file){		  
				  var image = new Image();
				  image.onload = function (){	
					  var sizeImage =  file.size/1024;
					  if((this.width==largura && this.height==altura) && sizeImage<tamanhoFile){
							  $(previewImage).attr("src",image.src);
					  }else{
						  	  $("#"+idFileUploadImage).replaceWith($("#"+idFileUploadImage).val('').clone(true));
						  	  $("#largura").text(altura+"px");
						  	  $("#altura").text(largura+"px");
						  	  $("#tamanho").text(tamanhoFile+"kb");
							  $("#btoInfUploadSize").click();			   	  
					  }
				  };			  
				  var _URL = window.URL || window.webkitURL;	
				  image.src = _URL.createObjectURL(file);
		   }; 
	});
});
	

