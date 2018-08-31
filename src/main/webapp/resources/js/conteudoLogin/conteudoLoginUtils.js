$(function() {
	cleanURL = function(){$("#cpLink").val("");};
	
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

});