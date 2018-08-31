$(function() {
    $("#col2_filter").limit('32', "#col2_filterLeft");
});


$('#segmentoSel').on('change', function () {				
	
	var url = $('#hrefCombos').prop('href');
	
	 $('#operacaoSidecSel').children('option:not(:first)').remove();
     $('#operacaoNsgdSel').children('option:not(:first)').remove();

	if($('#segmentoSel').val() != 'SEL'){
		
		var dados = {'sgto' : $('#segmentoSel').val()};
        
		$.ajax({
            url : url,
            data : $.param(dados),
            cache: false,
            dataType : 'json',
			type: 'GET',
            
            success : function(retorno) {
                var listaSidec = retorno.listaSidec;
                var listaNsgd = retorno.listaNsgd;
                
                $(listaSidec).each(function() {
                	$('#operacaoSidecSel').append($("<option>").attr('value',this.id).text(this.id));
				});
                
                $(listaNsgd).each(function() {
                	$('#operacaoNsgdSel').append($("<option>").attr('value',this.id).text(this.id));
				});
                
                $('#operacaoNsgdSel').removeAttr('disabled');
                $('#operacaoSidecSel').removeAttr('disabled');
            },
            error : function(request, textStatus, errorThrown) {
                alert(request.status + ', Error: ' + request.statusText);
            }
        });
		
		
	}else{
		$('#operacaoSidecSel').attr('disabled', 'disabled')
		$('#operacaoNsgdSel').attr('disabled', 'disabled')
	}
	
}).change();	

$(document).ready(function() {
    setTimeout(function(){
        $('#operacaoSidecSel').val($("#selecaoComboSidec").val());
        $('#operacaoNsgdSel').val($("#selecaoComboNsgd").val());
    }, 500);
    
});



