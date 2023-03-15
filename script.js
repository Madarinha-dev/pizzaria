function menu() {
    var menu = document.querySelector('div#menu');
    var fundo = document.querySelector('div#azul');
    fundo.style.display = 'none'
    menu.style.display = 'block'
}

function fechar() {
    var body = document.querySelector('body');
    var menu = document.querySelector('div#menu');
    var fundo = document.querySelector('div#azul');
    fundo.style.display = 'block'
    menu.style.display = 'none'
}

function carrinho() {
    var menu = document.querySelector('div#menu');
    var carrinho = document.querySelector('div#carrinho');
    var fundo = document.querySelector('div#azul');
    fundo.style.display = 'none'
    carrinho.style.display = 'block'
    
}

function fcarrinho() {
    var carrinho = document.querySelector('div#carrinho');
    var fundo = document.querySelector('div#azul');
    fundo.style.display = 'block'
    carrinho.style.display = 'none'
}