const botonNumeros = document.getElementsByName('numero');
const botonOpera = document.getElementsByName('opera');
const botonIgual = document.getElementsByName('igual')[0];
const botonBorrar = document.getElementsByName('delete')[0];
var result = document.getElementById('result');
var opActual = '';
var opAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
})

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
})

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
})

botonBorrar.addEventListener('click', function(){
    limpiar();
    actualizarDisplay();
})

function calcular(){
    var calculo;
    const anterior = parseFloat(opAnterior);
    const actual = parseFloat(opActual);
    if(isNaN(anterior) || isNaN(actual)){
        return;
    }
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '*':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        case 'x^y':
            calculo = Math.pow(anterior, actual);
            break;
        case 'y√x':
            calculo = Math.pow(anterior, (1 / actual));
            break;
        default:
            return;
    }
    opActual=calculo;
    operacion=undefined;
    opAnterior='';
}

function agregarNumero(num){
    opActual = opActual.toString() + num.toString();
    actualizarDisplay();
}

function limpiar(){
    opActual='';
    opAnterior='';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value=opActual;
}

function selectOperacion(op){
    if(opActual === ''){
        result
    }else{
        calcular();
    }
    operacion=op.toString();
    opAnterior=opActual;
    opActual='';
}

