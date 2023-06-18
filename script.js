function delivery() {
    var link = document.querySelector('div#link')
    var form = document.querySelector('form#form')
    var login = document.querySelector('div#formulario')
    var icone = document.querySelector('div#delivery')
    var maps = document.querySelector('div#googlemaps')


    // ===== aqui abri o 'delivery' =====
    // - precisa de javascript no formulario pra ele mostrar so as cidades
    //   do estado que ele escolheu.

    login.style.display = 'block'
    form.style.display = 'block'
    link.style.display = 'block'


    // ====== aqui fecha 'buscar na loja' caso esteja aberto ======
    // - por enquanto nada
    maps.style.display = 'none'
}

function buscar() {

    var link = document.querySelector('div#link')
    var form = document.querySelector('form#form')
    var login = document.querySelector('div#formulario')
    var maps = document.querySelector('div#googlemaps')

    // ===== aqui fica a sessao q desliga o "delivery" =====
    login.style.display = 'none'
    form.style.display = 'none'
    link.style.display = 'none'

    // ===== aqui vai mostras tudo do icone 'buscar na loja' =====
    // - A parte visual do formulario.
    // - Função de javascript no formulario.
    maps.style.display = 'block'

    
}

function abrirwhatsapp() {
    var estado = document.querySelector('select#estado').value;
    var cidade = document.querySelector('select#cidade').value;
    var rua = document.querySelector('input#rua').value;
    var numero = document.querySelector('input#numero').value;
    var endereco = document.querySelector('select#endereco').value;
    var menssagem = document.querySelector('textarea#area-de-texto').value;
    var url = "https://wa.me/558188830927?text="
        + "*Formulario de contato*" + "%0a"
        + "%0a"
        + "*Estado*: " + estado + "%0a"
        + "*Cidade*: " + cidade + "%0a"
        + "*Rua*: " + rua + "%0a"
        + "*Número*: " + numero + "%0a"
        + "*Endereço*: " + endereco + "%0a"
        + "*Menssagem* :" + menssagem;
    window.open(url, '_black').focus();
}

function estado() {
    var oi = document.querySelector('select#cidade')
    
}



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
    var fundoo = document.querySelector('div.bloco-2');
    fundoo.style.display = 'none';
    fundo.style.display = 'none';
    barra.style.display = 'block';
}

function fechar_aba_comecar_pedido() {
    var barra = document.querySelector('div#menu');
    var fundo = document.querySelector('div.bloco-3');
    var fundoo = document.querySelector('div.bloco-2');
    fundoo.style.display = 'block';
    
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
