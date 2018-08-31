/** Necessidade do IE10*/
$.ajaxSetup ({cache: false});


$("#exampleInputFile").ajaxStart(function(){
	$(".txtInf").html("<div class='alert alert-info'><span>Carregando CPFs ...</span></div>");
	$("#btoInf").click();
});

function consultarCpf(){	
	var cpfs;
	var urlConsulta = $("#urlConsultaCpf").val(); 
	if($("#comunidadeId").val() != null && $.trim($("#comunidadeId").val()) != ""){
		$.ajax({
			url: urlConsulta,		
			dataType: "json",
			processData: false,
			cache: false,
			contentType: false,
			type: 'GET',

			success: function(data) {						
				var result = "";
				$.each(data, function(i, item) {
					for(j = 0; j < item.length; j++){
						result += item[j].numeroCnpjCpfCliente+"\n";
					}			    
				});			
				$('#result').html(result);			
			},

			error : function(xhr, status, error) {
				alert(xhr.responseText);			
			}

		});
	}
	
}

consultarCpf();

$(document).ready(function() {
	try{
		$("#nomeIpt").limit('60', '#nomeIptLeft');
		$("#descricaoTxt").limit('255', '#descricaoTxtLeft');
		$("#nomeArquivoInput").limit('255', '#nomeArquivoInputLeft');
	}catch(err){}
	
    service.loadStatusButton($("#comunidadeId").val());

    /*  
	 	service.maskMoney("#rendaMinimaIpt");
	    service.maskMoney("#rendaMaximaIpt");
	  	service.bootstrapDualListbox("#estadoDualList");
	    service.bootstrapDualListbox("#carteiraDualList");
	    service.datepicker();
    */

    $("#statusButton").click(function(){
         $("#add-comunidade-form").attr("action", "./statusNext");
    });
    
    
});

//UPLOAD ARQUIVO PARA PROCESSAMENTO
$("#exampleInputFile").change(function(event){
	
	 var extensaoFile = $(this).val().split('.').pop().toLowerCase();
	 if(extensaoFile != "csv" && extensaoFile != "txt"){
		 $("#btnFechar").click();
		 $("#btoInfUploadExtension").click();
		    return;
	 }
	var url = $("#uploadForm").attr("action");
	var oMyForm = new FormData();
	oMyForm.append("file", event.target.files[0]);

	var msg="";
	$.ajax({
		url: url,
		data: oMyForm,
		dataType: 'text',
		processData: false,
		contentType: false,
		type: 'POST',

		success: function(data) {
			$("#btnFechar").click();	
			if(data=="empty"){
				msg = "<div class='alert alert-danger'><span>Arquivo de CPF/CNPJ est&aacute; vazio !</span></div>";
				$(".txtInf").html(msg);
				$("#btoInf").click();
			}else{			
				location.reload(true);
			}
		},

		error : function(xhr, status, error) {
			alert(xhr.responseText);
			$('#btnFechar').click();
		}

	});	

});
/*
function prepareUpload(event) {
	// Stop form from submitting normally
	event.preventDefault();

	var url = $("#uploadForm").attr("action");
	var oMyForm = new FormData();
	oMyForm.append("file", event.target.files[0]);

	$.ajax({
		url: url,
		data: oMyForm,
		dataType: 'text',
		processData: false,
		contentType: false,
		type: 'POST',

		success: function(data) {
			alert(data);
			location.reload(true);
		},

		error : function(xhr, status, error) {
			alert(xhr.responseText);
			$('#btnFechar').click();
		}

	});	
	return false;
}*/