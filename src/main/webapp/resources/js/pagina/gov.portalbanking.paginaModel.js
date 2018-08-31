$('#radioSaibaMais').click(function() {
	$("#divSaibaMais").show('fast');
	$("#divHorarios").hide('fast');

	$("#btnAlterarSaibaMais").show('fast');
	$("#btnAlterarHorarios").hide('fast');
	$("#btnVisualizarSaibaMais").show('fast');
	$("#btnVisualizarHorarios").hide('fast');

	// $("#horariosTxt").val('');
});

$('#radioHorarios').click(function() {
	$("#divSaibaMais").hide('fast');
	$("#divHorarios").show('fast');

	$("#btnAlterarHorarios").show('fast');
	$("#btnAlterarSaibaMais").hide('fast');
	$("#btnVisualizarHorarios").show('fast');
	$("#btnVisualizarSaibaMais").hide('fast');

	// $("#saibaMaisTxt").val('');
});

$('#checkboxTermosContratos').click(function() {
	if (this.checked) {
		$("#divTermosContratos").show('fast');
	} else {
		$("#divTermosContratos").hide('fast');
	}
});
