/**
 * Created by henrique.nascimento on 09/06/2014.
 */
gov.portalbanking.service.maskMoney = function (fieldId) {
    $(fieldId).maskMoney(
        {
            prefix:'R$',
            allowNegative: false,
            thousands:'.',
            decimal:',',
            affixesStay: true
        }
    );
};