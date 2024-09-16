/*Implementar el control de 3 variables (a, b, c) para que se muestre un mensaje de error cuando se produzca alguna de las siguientes situaciones: 
a) Al menos una de las 3 variables es negativa 
b) Las tres variables son iguales a 0 
c) Las suma de las 3 variables es mayor que 10 Y las tres variables son diferentes*/

let a = -2;
let b = 3;
let c = -1;

if (a < 0 || b < 0 || c < 0) {
    console.error("Error: Al menos una de las variables es negativa.")
} 
else if (a === 0 && b === 0 && c === 0) {
    console.error("Error: Las tres variables son iguales a 0.")
} 
else if ((a + b + c) > 10 && a !== b && b !== c && a !== c) {
    console.error("Error: La suma de las tres variables es mayor que 10 y las variables son diferentes entre sí.");
} 
else {
    console.error("Las variables son válidas.")
    }
