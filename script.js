
function abrir() {
    var icone = document.querySelector('div.bloco-3');
    icone.style.display = 'none';

    var menu = document.querySelector('div#menu');
    menu.style.display = 'block';

    var fundo = document.querySelector('div#azul');
    fundo.style.display = 'none';
}


function fechar0() {
    var icone = document.querySelector('div.bloco-3');
    icone.style.display = 'block';

    var menu = document.querySelector('div#menu');
    menu.style.display = 'none';
}


function fechar() {
    var menu = document.querySelector('div#menu');
    var fundo = document.querySelector('div#azul');
    fundo.style.display = 'block'
    menu.style.display = 'none'
}


function carrinho0() {
    var menu = document.querySelector('div#menu');
    menu.style.display = 'none';

    var carrinho = document.querySelector('div#carrinho');
    carrinho.style.display = 'block';

    var icones = document.querySelector('div.icones');
    icones.style.display = 'none';
}

function fecharcarrinho() {
    var icones = document.querySelector('div.icones');
    icones.style.display = 'block';

    var carrinho = document.querySelector('div#carrinho');
    carrinho.style.display = 'none';
}

function carrinho() {
    var carrinho = document.querySelector('div#carrinho');
    var fundo = document.querySelector('div#azul');
    var menu = document.querySelector('div#menu');

    menu.style.display = 'none'
    fundo.style.display = 'none'
    carrinho.style.display = 'block'
    
}


function fc() {
    var carrinho = document.querySelector('div#carrinho');
    var fundo = document.querySelector('div#azul');
    fundo.style.display = 'block'
    carrinho.style.display = 'none'
}
