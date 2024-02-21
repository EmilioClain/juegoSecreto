/*
let titulo = document.querySelector('h1');
titulo.innerHTML ='Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa un número del 1 al 10';
*/

// Simplificamos más la función 
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);  // Se cambia por el parámetro de elemento y se cambia el nombre de la variable
    elementoHTML.innerHTML = texto;  // Se cambia por texto
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        // Se activa el botón de jugar de nuevo 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        // El usuario no acertó
        if (numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es mayor');
        } else{
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja(){
    // otra forma de obtener el elemento por document y el ID
    /*
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    */

    // Forma reducida de dar valor
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1; // Eliminamos la variable y solo le damos return
    // Si el número generado está incluido en la lista

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números (se cierra el juego)
    if(listaNumerosSorteados.length == numeroMaximo){
      asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');  
    } else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


// Esta función se crea para evitar poner las funciones o variables una por una
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego(){
    // Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    condicionesIniciales();
    // Generar el número aleatorio
    condicionesIniciales();
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de 'Nuevo juego'
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
     
}


// Llamamos a la función desde JS.
condicionesIniciales();
