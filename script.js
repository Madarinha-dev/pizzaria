function menu() {
    var menu = document.querySelector('div#menu');
    var fundo = document.querySelector('div#azul');
    fundo.style.display = 'none'
    menu.style.display = 'block'
}

function fechar() {
    var menu = document.querySelector('div#menu');
    var fundo = document.querySelector('div#azul');
    fundo.style.display = 'block'
    menu.style.display = 'none'
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
