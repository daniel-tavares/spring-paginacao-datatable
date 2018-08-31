$(function() {
    $("#col2_filter").limit('32', "#col2_filterLeft");
});

$('#tipoSel').on('change', function () {				
	
	var url = $('#hrefCombos').prop('href');
	
	 $('#operacaoSel').children('option:not(:first)').remove();
	 
	 var dados = {'tipoSel' : $('#tipoSel').val()};
	 
	 if($('#tipoSel').val()!=''){
		$.ajax({
            url : url,
            data : $.param(dados),
            cache: false,
            dataType : 'json',
			type: 'GET',
            
            success : function(retorno) {
                var listaSidec = retorno;
                
                $(listaSidec).each(function() {
                	$('#operacaoSel').append($("<option>").attr('value',this.id).text(this.id));
				});
                
                $('#operacaoSel').removeAttr('disabled');
            },
            error : function(request, textStatus, errorThrown) {
                alert(request.status + ', Error: ' + request.statusText);
            }
        });
	 }else{
			$('#operacaoSel').attr('disabled', 'disabled')
		}
		
}).change();