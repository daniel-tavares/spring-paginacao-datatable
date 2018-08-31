function mostre(id) {

    var menu = document.getElementById("menuzinho" + id);
    var it = document.getElementById("item" + id);

    for (var i = 1; i<=5; i++) {
        //esconde todos os menus
        document.getElementById('menuzinho'+i).style.display='none';
        //volta o css de todos para o normal (nao selecionados)
	    document.getElementById('item'+i).className='menu | menu_' + i;
    }

    //exibe o menu selecionado
    menu.style.display='block';
    //altera o css do menu selecionado
    it.className = 'selecionado | selecionado_' + id;
}

function abreMenuzinho(linkComp, nomeDiv) {
    var linkOffset = $(nomeDiv).offset();
    linkOffset.top = $(linkComp).offset().top - $(nomeDiv).height() - 20
    linkOffset.left = $(linkComp).offset().left - ($(nomeDiv).width() /2)
    $(nomeDiv).show();
    $(nomeDiv).offset(linkOffset);
}

