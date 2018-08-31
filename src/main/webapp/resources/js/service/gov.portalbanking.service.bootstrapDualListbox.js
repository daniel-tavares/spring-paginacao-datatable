/**
 * Created by henrique.nascimento on 30/06/2014.
 */
gov.portalbanking.service.bootstrapDualListbox = function (fieldId) {
        $(fieldId).bootstrapDualListbox({
            bootstrap2Compatible : false,
            moveAllLabel : 'Mover Todos',
            removeAllLabel : 'Remover Todos', 	
            moveSelectedLabel : 'Mover Selecionado',
            removeSelectedLabel : 'Remover Selecionado',
            filterPlaceHolder : 'Filtro',
            filterSelected : '2',
            filterNonSelected : '1',
            moveOnSelect : false,
            preserveSelectionOnMove : 'all',
            helperSelectNamePostfix : '_myhelper',
            infoText: 'Mostrando todos {0}',
            infoTextEmpty: 'Lista vazia',
            infoTextFiltered: '<span class="label label-warning">Filtrado</span> {0} de {1}',
            filterTextClear: 'mostrar todos'
        }).bootstrapDualListbox('setMoveAllLabel', 'Mover Todos!')
            .bootstrapDualListbox('setRemoveAllLabel', 'Remover todos!')
            .bootstrapDualListbox('setSelectedFilter', undefined)
            .bootstrapDualListbox('setNonSelectedFilter', undefined)
            .bootstrapDualListbox('refresh');
};