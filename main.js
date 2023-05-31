const contenido = document.getElementById("variables");

let datoNumero = 7;
let datoCadena = "Siete";
let datoBooleano = true;

console.log("VARIABLES");

variables.innerHTML = `<h3>El valor de la variable numérica es ${datoNumero}</h3>`;
console.log("El valor de la variable numérica es "+ datoNumero)

variables.innerHTML += `<h3>El valor de la variable cadena es ${datoCadena}</h3>`;
console.log("El valor de la variable cadena es "+ datoCadena)

variables.innerHTML += `<h3>El valor de la variable booleana es ${datoBooleano}</h3>`;
console.log("El valor de la variable booleana es "+ datoBooleano)



variables.innerHTML +=`<h2>FUNCIONES</h2>`;
console.log("FUNCIONES");

function addNombre(newNombre) {
    console.log("Hola "+newNombre)
    variables.innerHTML += `<h3>Hola ${newNombre}</h3>`;
}
addNombre("David");



let numero1 = 3;
let numero2 = 5;

function suma(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;
     return resultado;
     
}
let total = suma(numero1, numero2);

console.log(`La suma es ${total}`);
variables.innerHTML +=`<h3>La suma de ${numero1} y ${numero2} es ${total}</h3>`;




function verPar(numero) {
    if (Number.isInteger(numero/2)) {
        console.log(`El numero ${numero} es par`);
        variables.innerHTML += `<h3>El numero ${numero} es par</h3>`;
    } else {
        console.log(`El numero ${numero} es impar`)
        variables.innerHTML += `<h3>El numero ${numero} es impar</h3>`;
    }
}

verPar(5);
verPar(8);


variables.innerHTML +=`<h2>OBJETOS</h2>`;
console.log("OBJETOS");

let carro = {
    marca : 'Renault',
    modelo : 'clio',
    color : 'gris',
    puertas : 4,
    motor : {
        cilindros : 8,
        cilindrada : '1.8 cc',
    }

}
function marcaCarro () {
    console.log(`La marca del carro es ${carro.marca}`);
    variables.innerHTML +=`<h3> La marca del carro es ${carro.marca} </h3>`;
}
marcaCarro();

function puertasCarro () {
    console.log(`El numero de puertas del carro es ${carro.puertas}`);
    variables.innerHTML +=`<h3> El numero de puertas del carro es ${carro.puertas} </h3>`;
}
puertasCarro();


function anidada () {
    console.log(`El resultado de la función anidada es  ${carro.motor['cilindrada']}`);
    variables.innerHTML +=`<h3>El resultado de la función anidada es  ${carro.motor['cilindrada']}</h3>`
    
}

anidada();

variables.innerHTML +=`<h2>ARRAYS</h2>`;
console.log("ARRAYS");



let matriz = [7,9,12,43,54,32,656,43,87,67];

function imprimirNumeros () {
    for (let i= 0; i < matriz.length; i ++) {
        console.log(matriz[i]);
        variables.innerHTML += `<h3> ${matriz[i]}</h3>`;
    }
}
imprimirNumeros();


function agregarNumero (num) {
    console.log('Añadimos número');
    variables.innerHTML += "<h3>Añadimos número</h3>"
    matriz.push(num);
    imprimirNumeros();

}
agregarNumero(70);



console.log("Quitamos pares")
variables.innerHTML += "<h3>Quitamos pares</h3>"



function quitarPares(matriz) {
    return matriz.filter (
        (num) => num % 2 !== 0);
}
const impares = quitarPares(matriz);
console.log(impares);
variables.innerHTML += `<h3> ${impares} </h3>`;



console.log("Devueve el mayor")
variables.innerHTML += "<h3>Devueve el mayor</h3>"

function devolverMayor() {
    numeroMayor = matriz[0];
    for (let i = 0; i< matriz.length; i++) {
        if (matriz[i] > numeroMayor) {
            numeroMayor = matriz[i];
        }
    }
    console.log(numeroMayor);
    variables.innerHTML += `<h3> ${numeroMayor} </h3>`
}

devolverMayor();



console.log("Devueve el menor")
variables.innerHTML += "<h3>Devueve el menor</h3>"

function devolverMenor() {
    numeroMenor = matriz[0];
    for (let i = 0; i< matriz.length; i++) {
        if (matriz[i] < numeroMenor) {
            numeroMayor = matriz[i];
        }
    }
    console.log(numeroMenor);
    variables.innerHTML += `<h3> ${numeroMenor} </h3>`;
}

devolverMenor();


const texto = "En un lugar de la Mancha de cuyo nombre me acuerdo a veces"


console.log("Minusculas");
variables.innerHTML += "<h3>Minusculas</h3>";

function minusculas() {
    let textoMay = texto.toLowerCase();
    console.log(textoMay);
    variables.innerHTML += textoMay;
}
minusculas();



console.log("Mayusculas");
variables.innerHTML += "<h3>Mayusculas</h3>";

function mayusculas() {
    let textoMay = texto.toUpperCase();
    console.log(textoMay);
    variables.innerHTML += textoMay;
}
mayusculas();




matrizNombres = ["pedro", "manolo", "juan", "luis", "antonio"];

console.log("Primera letra Mayuscula");
variables.innerHTML += "<h3>Primera letra Mayuscula</h3>";


    const primeraMayus = matrizNombres.map((component) => {
        console.log(component.charAt(0).toUpperCase() + component.slice(1));
        variables.innerHTML += component.charAt(0).toUpperCase() + component.slice(1)
    })


    console.log("El DOM");
variables.innerHTML += "<h3>El Dom</h3>";

// Creamos botón que laza mensaje

const mensaje = document.querySelector("#mensaje");
function cambio() {
    mensaje.innerHTML = "Hemos pulsado";
    }

// Cambiamos color elemento html
cambiamosContenido.style.color = "green";

// Hacemos aparecer y desaparecer un texto 

const ocultar = document.querySelector("#ocultar");
const mostrar = document.querySelector("#mostrar");
const tetxoDesapacer = document.querySelector("#textoDesaparecer");

mostrar.addEventListener("click", () => {
    tetxoDesapacer.style.display = "block";
}
)

ocultar.addEventListener("click", () => {
    tetxoDesapacer.style.display = "none";
}
)

// Array de nombres e impresión


let listaNombres = ["Manolo", "Pepe", "Juan", "David", "Luis", "Arturo", "Felipe", "Antonio", "Alfonso", "Julian"];

function imprimirNombres() {
    for (let i = 0; i < listaNombres.length; i++) {
        console.log(listaNombres[i]);
        resultados.innerHTML += `<h3>${listaNombres[i]}</h3>`;
    } 
}
imprimirNombres();


// Array de números e impresión del total

let listaNumeros = [2,4,56,76,34,988,65,43,12,56,99];

function cuantosNumeros() {
    console.log(listaNumeros.length);
    resultados.innerHTML += `<h3>En la lista hay ${listaNumeros.length}números</h3>`;
    }
cuantosNumeros();

