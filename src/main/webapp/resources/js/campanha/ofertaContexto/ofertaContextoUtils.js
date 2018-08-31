$(function() {	
	
	$("#titCampanha").limit('60', '#titCampanhaLeft');
	$("#indCampanha").limit('20', '#indCampanhaLeft');
	$("#cpLink").limit('255', '#cpLinkLeft');
	$("#msgContexto").limit('255', '#msgContextoLeft');
	$("#titBotao").limit('60','#msgLabelLeft');
	

     
    /* TRATAMENTO LINK DE AQUISIÇÃO */
    if($.trim($("#cpLink").val()).length == 0){
    	$("#cpLink").prop("disabled", true);
    	$("#lnkDirecionamento").prop("checked",false);
    	$("#labelBotao").hide();
    }else{
    	$("#cpLink").prop("disabled", false);
    	$("#lnkDirecionamento").prop("checked",true);
    	$("#labelBotao").show();
    }

    $("#lnkDirecionamento").change(function() {
    	cleanURL();
        if(this.checked){
        	$("#cpLink").prop("disabled", false);
        	$("#labelBotao").show();
        }else{	
        	$("#cpLink").prop("disabled", true);
        	$("#labelBotao").hide();
        }
    });
    
    /* FIM : TRATAMENTO LINK DE AQUISIÇÃO */

	cleanURL = function(){$("#cpLink").val("");$("#titBotao").val("");};

    
    $("#msgContexto").css({color:"black",  background:"#CEE9E8"});
    $("#titBotao").css({color:"black",  background:"#CEE9E8"});
    
	$(".update").click(function(){
		$("#indCampanha").attr("disabled", false);
    	$("#ambienteSel").attr("disabled", false);
       	$("#add-ofertaContexto-form").submit();
	});

     
});

