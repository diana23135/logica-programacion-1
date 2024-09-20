const prompt = require('prompt-sync')();

// Solicita tres números al usuario
let numero1 = parseFloat(prompt("Ingresa el primer número: "));
let numero2 = parseFloat(prompt("Ingresa el segundo número: "));
let numero3 = parseFloat(prompt("Ingresa el tercer número: "));

if (numero1 === numero2 && numero2 === numero3) {
    console.log("Los tres números son iguales:", numero1);
} else {

    let numeros = [numero1, numero2, numero3];

    let numerosOrdenadosMenorMayor = [...numeros].sort((a, b) => a - b);
    
    let numerosOrdenadosMayorMenor = [...numeros].sort((a, b) => b - a);

    // Identifica el número menor, del centro y el mayor
    let menor = numerosOrdenadosMenorMayor[0];
    let medio = numerosOrdenadosMenorMayor[1];
    let mayor = numerosOrdenadosMenorMayor[2];

    // Muestra los números en la consola
    console.log("Números de menor a mayor:", numerosOrdenadosMenorMayor);
    console.log("Números de mayor a menor:", numerosOrdenadosMayorMenor);
    console.log("El número mayor es:", mayor);
    console.log("El número del centro es:", medio);
    console.log("El número menor es:", menor);
}
