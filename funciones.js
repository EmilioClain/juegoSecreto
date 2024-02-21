/*
// 1) Saludar
function saludar(){
    console.log('¡Hola mundo!');
    return;
}

saludar();

// 2) Nombre en función
function hola(nombre){
    console.log(`¡Hola ${nombre}!`);
    return;
}

hola('Emilio');

// 3 y 4 se pueden hacer de cualquier forma hecha por ellos

// 3) Regresa el doble del número
let resultado = doble(8);
console.log('El doble de tu número es:', resultado);
function doble(numero){
    return numero * 2;
}

// 4) Sacar el promedio de tres números
function promedio(num1, num2, num3){
    let res = (num1 + num2 + num3) / 3;
    console.log('El promedio es:', res);
    return;
}

promedio(5,25,45);

// 5) Número mayor que otro
function mayor(num4, num5){
    if(num4 == num5){
        return 'Los números son iguales';
    }else{
        if(num4 < num5){
            return num5;
        }else{
            return num4;
        }
    }
    
}

let numeroMayor = mayor(45, 45);
console.log(numeroMayor);

function encontrarMayor(a, b){
    return a > b ? a : b;  // Mejor forma de ocupar comparadores sencillos de dos cosas
}

let grande = encontrarMayor(11, 8);
console.log(grande)

// 6) Multiplicar un número por sí mismo (Haremos las dos formas)
function cuadrado(num6){
    let mismo = num6 * num6;
    console.log('El cuadrado de tu número es', mismo);
}

cuadrado(5);

function elevar(num7){
    return num7 * num7;
}

let juan = elevar(66);
console.log(`El elevado por si mismo es ${juan}`);



// 1) Calcular IMC
function IMC(altura, peso){
    return peso / (altura * altura);
}

console.log(IMC(1.68, 65));


// 2) Factorial del número anterior 
// Nos ayudaron
function factorial(numero){
    if(numero === 0 || numero === 1){
        return 1;
    } else{
        return numero * factorial(numero - 1);
    }
}

let otroNumero = 5
let resultados = factorial(otroNumero);
console.log(`El factorial de ${otroNumero} es ${resultados}`)


// 3) Cambiar dólares a reales
function cambio(cantidad){
    return `Tienes ${cantidad * 4.8} reales`;
}

console.log(cambio(56));


// 4) área y perímetro de una sala
function perimetro(valor1, valor2){
    return (valor1 *2) + (valor2 * 2);
}

function area(valor1, valor2){
    return valor1 * valor2;
}

console.log(`Tu sala tiene un perímetro de ${perimetro(6,8)} metros y un área de ${area(6,8)} metros cuadrados`);


// 5) Área circular
let pi = 3.14
function perimetroCirculo(radio){
    return pi *  (2 * radio);
}

function areaCirculo(radio){
    return pi * (radio * radio);
}

console.log(`Tu sala circular tiene un perímetro de ${perimetroCirculo(9)} metros 
y un área de ${areaCirculo(9)} metros cuadrados`);

// 6) Tabla de multiplicar
function mestraTablaDeMultiplicar(nuevoNumero){
    for(var i = 1; i <= 10; i++){
        var otroResultado = nuevoNumero * i;
        console.log(nuevoNumero + 'x' + i + '=' + otroResultado);
    }
}

let num = 7;
mestraTablaDeMultiplicar(num);
*/


// 1) Lista genérica
let listaNormal = [];
console.log(listaNormal);

// 2-3) Lenguajes de programación
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
console.log(lenguajesDeProgramacion);

console.log(lenguajesDeProgramacion.push('Ruby', 'GoLang'));
console.log(lenguajesDeProgramacion);

// 4) Funcion que muestre los lenguajes de programación
function muestraLenguajes (){
    return lenguajesDeProgramacion;
}

console.log(muestraLenguajes());

// 5) Función que muestra en orden inverso
function lenguajesInversos (){
    return lenguajesDeProgramacion.reverse();
}
console.log(lenguajesInversos());

// 6) Calcular promedio de una lista de números
let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function promedioDeLista(){

}


// 7) Número grande y número pequeño
function grandePequeño (){
    return listaNumeros[0, listaNumeros.length - 1];
}

console.log(`Tu número grande y tu número pequeño son ${grandePequeño()}`);


// 8) Suma de todos los elementos de una lista


// 9) Dar la posición de unm número en la lista, si no está, arrojar -1

// 10) Función que una dos listas del mismo tamaño y sume sus elementos uno a uno 

// 11) Dada una lsita de números, que devuelva el cuadrado de cada uno

