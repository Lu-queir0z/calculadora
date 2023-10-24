let operador = "";
let numero1;
let numero2;
let resultado;

function calculadora(){

    //entrada do operador seleionado
    operador = document.querySelector('#slcOperador').value;
    
    //alert('operador selecionado foi ' + operador)

    //verifica se é o operador de soma
    if (operador == '+') {
        //alert('voce escolheu o operdor soma ')
        somar();
    }

    //verifica se é o operador de subtração
    if (operador == '-') {
        //alert('voce escolheu o operdor subtração ')
        subtrair();
    }

    //verifica se é o operador de multiplicação
    if (operador == '*') {
        //alert('voce escolheu o operdor multiplicação ')
        multiplicar();
    }

    //verifica se é o operador de divisão
    if (operador == '/') {
        //alert('voce escolheu o operdor divisão ')
        dividir();
    }
}

function somar(){

    //entrada de dado NUMERO 1
        numero1 = parseInt(document.querySelector('#NUMERO1').value);
    //entrada de numero 2
        numero2 = parseInt(document.querySelector('#NUMERO2').value);
    //processamento somar
        resultado = numero1 + numero2;
    //saida (valor da soma)
        document.querySelector('#resultado').innerHTML = resultado;
    }

function subtrair(){

    //entrada de dado NUMERO 1
        numero1 = parseInt(document.querySelector('#NUMERO1').value);
    //entrada de numero 2
        numero2 = parseInt(document.querySelector('#NUMERO2').value);
    //processamento subtrair
        resultado = numero1 - numero2;
    //saida (valor da subtrair)
    document.querySelector('#resultado').innerHTML = resultado;
}

function multiplicar(){

    //entrada de dado NUMERO 1
        numero1 = parseInt(document.querySelector('#NUMERO1').value);
    //entrada de numero 2
        numero2 = parseInt(document.querySelector('#NUMERO2').value);
    //processamento multiplicação
        resultado = numero1 * numero2;
    //saida (valor da multiplicação)
    document.querySelector('#resultado').innerHTML = resultado;
}

function dividir(){

    //entrada de dado NUMERO 1
        numero1 = parseInt(document.querySelector('#NUMERO1').value);
    //entrada de numero 2
        numero2 = parseInt(document.querySelector('#NUMERO2').value);
    //processamento dividir
        resultado = numero1 / numero2;
    //saida (valor da divisão)
    document.querySelector('#resultado').innerHTML = resultado;
}

//tratamento das imagens dos operadores
let select = document.querySelector('#slcOperador');

select.addEventListener('change',function(){

    let imgOperacao = document.querySelector('#imgOperacao');
    let op = select.options[select.selectedIndex].value;

    if(op == '+'){
        imgOperacao.setAttribute('src','img calculadora/adicionar.png');
    }

    if(op == '-'){
        imgOperacao.setAttribute('src','img calculadora/subtracao.png');
    }

    if(op == '*'){
        imgOperacao.setAttribute('src','img calculadora/multiplicacao.png');
    }

    if(op == '/'){
        imgOperacao.setAttribute('src','img calculadora/divisao.png');
    }
});

//funçao de limpar formulario
function limpar(){

    document.querySelector('#NUMERO1').value = '';
    document.querySelector('#NUMERO2').value = '';
    document.querySelector('#resultado').innerHTML = '-';
    
}