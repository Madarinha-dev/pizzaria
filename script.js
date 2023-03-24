
function abrir_index() {
    var menu = document.querySelector('div#menu');
    menu.style.display = 'block';

    var fundo = document.querySelector('div#azul');
    fundo.style.display = 'none';
}

function fechar_x_index() {
    var menu = document.querySelector('div#menu');
    var fundo = document.querySelector('div#azul');
    fundo.style.display = 'block';
    menu.style.display = 'none';
}

function carrinho_index() {
    var carrinho = document.querySelector('div#carrinho');
    var fundo = document.querySelector('div#azul')
    var menu = document.querySelector('div#menu')
    menu.style.display = 'none'
    fundo.style.display = 'none'
    carrinho.style.display = 'block'
}


function fechar_carrinho_index() {
    var carrinho = document.querySelector('div#carrinho');
    var fundo = document.querySelector('div#azul');
    fundo.style.display = 'block';
    carrinho.style.display = 'none';
}

function abrir_aba_comecar_pedido() {
    var barra = document.querySelector('div#menu');
    var fundo = document.querySelector('div.bloco-3');
    fundo.style.display = 'none';
    barra.style.display = 'block';
}

function fechar_aba_comecar_pedido() {
    var barra = document.querySelector('div#menu');
    var fundo = document.querySelector('div.bloco-3');
    fundo.style.display = 'block';
    barra.style.display = 'none';
}

function abrir_carrinho_comecar_pedido() {
    var carrinho = document.querySelector('div#carrinho');
    var fundo = document.querySelector('div.icones')
    carrinho.style.display = 'block';
    fundo.style.display = 'none';
}

function fechar_carrinho_comecar_pedido() {
    var carrinho = document.querySelector('div#carrinho');
    var fundo = document.querySelector('div.icones');
    carrinho.style.display = 'none';
    fundo.style.display = 'block';
}
