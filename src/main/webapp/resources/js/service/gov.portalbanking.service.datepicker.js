gov.portalbanking.service.datepicker = function () {
    $('.datePicker').datepicker({
        dateFormat: "dd/mm/yy",
        weekStart : 0,
        startDate : "-infinity",
        endDate : "+infinity",
        todayBtn : true,
        language : "pt-BR",
        multidateSeparator : ",",
        monthNames: [ "Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
        monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
        dayNamesMin: ["Dom","Seg","Ter","Qua","Qui","Sex","S&aacute;b"],
        changeMonth: true,
        changeYear: true,
        onClose: function() {
        	var reg = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(2[0-9][1-9]{2})$/;
        	var date = $(this).val();
            if(date !='' && !date.match(reg)){
            	$(this).after('<div class="msgDateError alert alert-danger" role="alert"><i class="glyphicon glyphicon-exclamation-sign"></i>'+unescape('&nbsp;Data inv&#225;lida !')+'</div>');            
            	$(this).val('');    
            	setTimeout(function(){
            		$('.msgDateError').fadeOut('600');
            	},3000);
            };
        }
    });
};