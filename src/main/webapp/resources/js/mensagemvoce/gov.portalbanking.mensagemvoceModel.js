$(function() {
	
	$("#nomeIpt").limit("60", "#nomeIptLeft");
	$("#mensagemIpt").limit("4000", "#mensagemIptLeft");
	$('#dataInicio').mask("00/00/0000");
	$('#dataFim').mask("00/00/0000");
    service.datepicker();
    
    $(".novaImageUpload").change(function(){
		  var oFReader = new FileReader();
		  oFReader.readAsDataURL(this.files[0]);
		  oFReader.onload = function (oFREvent) {
			  $("#uploadPreviewNovo").attr("src",oFREvent.target.result);
		  };
	});
		
	$(".editarImageUpload").change(function(){
		  var oFReader = new FileReader();
		  oFReader.readAsDataURL(this.files[0]);
		  oFReader.onload = function (oFREvent) {
			  $("#uploadPreviewEditar").attr("src",oFREvent.target.result);
		  };
	});	
	
	$("#fileImagemPreview").css("width","");
	$("#fileImagemPreview").css("height","");
	
	
});

var image_url = "../../resources/images/img_indisponivel.jpg";
$.get(image_url)
.done(function() { 
	$("#fileImagemPreview").attr("src", image_url);
}).fail(function() { 
	$("#fileImagemPreview").attr("src", "../../"+image_url);
})

$('#segmentoSel').change(function() {
	if (this.selectedIndex != 0) {
		$('#comunidadeSel').prop( "disabled", true );
	} else {
		$('#comunidadeSel').prop( "disabled", false );
	}
});

$('#comunidadeSel').change(function() {
	if (this.selectedIndex != 0) {
		$('#segmentoSel').prop( "disabled", true );
	} else {
		$('#segmentoSel').prop( "disabled", false );
	}
});

if ($('#segmentoSel').prop('selectedIndex') != 0 && $('#segmentoSel').prop('selectedIndex') != 7) {
	$('#comunidadeSel').prop( "disabled", true );
}else if ($('#comunidadeSel').prop('selectedIndex') != 0) {
	$('#segmentoSel').prop( "disabled", true );
}

$("#btnPendenteAprovacao").on("click", function() {
	$("#add-mensagem-form").attr("action", "./pendenteAprovacao");
	$("#add-mensagem-form").submit();
});

$('#dataInicioIpt').datepicker("option", "defaultDate", new Date());

var _URL = window.URL || window.webkitURL;

$("#btnSalvar").click(function(){
	//$("#fileImage").val();
	$("#add-mensagem-form").submit();
});

$(".fileUploadFoto").change(function(){		
	  var altura = $(this).attr("altura");
	  var largura = $(this).attr("largura");
	  var tamanhoFile = $(this).attr("tamanhoFile");
	  var extensaoFile = $(this).val().split('.').pop().toLowerCase();
	  
		if($.inArray(extensaoFile, ['gif','png','jpg','jpeg']) == -1) {
			$("#fileImage").val("");
		    $("#btoInfUploadExtension").click();
		    return;
		}
	
		var file = this.files[0];
	    if(file){		  
			  var image = new Image();
			  image.onload = function (){	
				  var sizeImage =  file.size/1024;
				  if((this.width==largura && this.height==altura) && sizeImage<tamanhoFile){
						  $("#fileImagemPreview").attr("src",image.src);
				  }else{
					  	  $("#fileImage").replaceWith($("#fileImage").val('').clone(true));
						  $("#btoInfUploadSize").click();			   	  
				  }
			  };			  
			  var _URL = window.URL || window.webkitURL;	
			  image.src = _URL.createObjectURL(file);
	   }; 
});

