		var _URL = window.URL || window.webkitURL;		
		
		$(".fileUploadFoto").each(function(index, value){
			$($(this).attr("previewImg")).css("width",$(this).attr("largura"));
			$($(this).attr("previewImg")).css("height",$(this).attr("altura"));
		});
		
		
		//$($(".fileUploadFoto").attr("previewImg")).css("width",$(".fileUploadFoto").attr("largura"));
		//$($(".fileUploadFoto").attr("previewImg")).css("height",$(".fileUploadFoto").attr("altura"));
		
		$(".fileUploadFoto").change(function (e) {
		    var file;
		    var img;
		    var modoValidacao = $(this).attr('modoValidacao');
		    var thisId = '#'+$(this).attr('id');
		    var altura = $(this).attr('altura');
		    var largura = $(this).attr('largura');
		    var tamanhoArq = $(this).attr('tamanho');
    		var extensao = $(this).val().split('.').pop().toLowerCase();
				var previewImg=$(this).attr('previewImg');
				
				$(previewImg).attr("blankImg",$(previewImg).attr("src"));
				
				if($.inArray(extensao, ['png']) == -1) {
				    alert('Arquivo deve ser uma imagem no formato: png.');
				    $(previewImg).attr("src","");
				    return;
				}
    		
		    if ((file = this.files[0])) {
		      img = new Image();
		      img.onload = function () {
					
			if(modoValidacao=="maximo"){
				if((this.width<=largura && this.height<=altura) && file.size<tamanhoArq){
					$(previewImg).attr("src",img.src);
					$(previewImg).css("width",img.width);
					$(previewImg).css("height",img.height);
				}else{
					$(thisId).prop('value','');
					$(previewImg).attr("src","" );	       	
					alert('A imagem ultrapassa:\nLargura: '+largura+'px e Altura: '+altura + 'px\nTamanho maximo de arquivo: '+tamanhoArq+"KB");
				}				
			}else{
				if((this.width==largura && this.height==altura) && file.size<tamanhoArq){
					$(previewImg).attr("src",img.src);
				}else{
					$(thisId).prop('value','');
					$(previewImg).attr("src","" );	       	
					alert('A imagem deve ter exatos:\nLargura: '+largura+'px e Altura: '+altura + 'px\nTamanho maximo de arquivo: '+tamanhoArq+"KB");
				}					
			}		

		    };
				
				img.src = _URL.createObjectURL(file);
		    if($(this).val()=='' || $(this).val()==undefined){
		    	$(previewImg).attr("src",$(previewImg).attr("blankImg") );
		    }
		        
		   }
		    
		});	
		
