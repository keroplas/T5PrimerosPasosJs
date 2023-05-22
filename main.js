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



variables.innerHTML +=`<h2>FUNCIONES</H2>`;
console.log("FUNCIONES");

function addNombre(newNombre) {
    console.log("Hola "+newNombre)
    variables.innerHTML += `<h3>Hola ${newNombre}</h3>`;
}
addNombre("David");


function suma(numero1, numero2) {
    resultado = (numero1 + numero2)
    return (resultado);
}

console.log("La suma es " + suma (5,4));
variables.innerHTML += `<h3>La suma es ${resultado}</h3>`;


function verPar(numero) {
    if (Number.isInteger(numero/2)) {
        console.log(`El numero ${numero} es par`);
        variables.innerHTML += `<h3>El numero ${numero} es par</h3>`;
    } else {
        console.log(`El numero ${numero} es impar`)
        variables.innerHTML += `<h3>El numero ${numero} es impar</h3>`;
    }
}

verPar(3);
verPar(8);