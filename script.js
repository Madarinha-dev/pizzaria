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
    alert('oi')
    var cidade = document.getElementsByName('Cidade')
    var estado = document.querySelector('select#estado').value;
    if (estado == 'Acre') {
        alert('Acre')
        var item = document.createElement('option')
        item.text = `Acre 1000`
        cidade.appendChild(item)

    }
 }

function click() {
    alert('oi')
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
