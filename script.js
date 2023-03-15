function menu() {
    var body = document.querySelector('body');
    var menu = document.querySelector('div#menu');
    menu.style.display = 'block'
}

function fechar() {
    var body = document.querySelector('body');
    var menu = document.querySelector('div#menu');
    menu.style.display = 'none'
}

function carrinho() {
    var menu = document.querySelector('div#menu');
    var carrinho = document.querySelector('div#carrinho');
    carrinho.style.display = 'block'
    menu.style.display = 'none'
}

function fcarrinho() {
    var carrinho = document.querySelector('div#carrinho');
    carrinho.style.display = 'none'
}