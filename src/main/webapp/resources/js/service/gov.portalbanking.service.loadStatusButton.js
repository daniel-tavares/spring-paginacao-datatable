/**
 * Created by henrique.nascimento on 30/06/2014.
 */
gov.portalbanking.service.loadStatusButton = function (idRegistro) {
    if(idRegistro != "") {
        var url = '/portalbanking/cms/comunidades/hasAccess/' + idRegistro;
        $("#statusButton").load(url);
    }
};