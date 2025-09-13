/* Diseñar una función que acepta un argumento x y que muestre los siguientes mensajes: 
a) ‘Este es muy fácil… ¡prueba otro!’, si x es 0 
b) ‘El número es par’, si x es 2, 4 ó 6 
c) ‘El número es impar’, si x es 1, 3 ó 5 
d) ‘¡¡Sólo sé contar de 0 a 6!!’, para los demás casos */

function argumento_x(x) {
    let message = "";
    if (x === 0) {
        message = "Este es muy fácil… ¡prueba otro!";
    } else if (x === 2 || x === 4 || x === 6) {
        message = "El número es par";
    } else if (x === 1 || x === 3 || x === 5) {
        message = "El número es impar";
    } else {
        message = "¡¡Sólo sé contar de 0 a 6!!";
    }
    document.getElementById("result").innerText = message;
}

function evaluateInput() {
    const x = parseInt(document.getElementById("inputX").value);
    if (isNaN(x)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }
    argumento_x(x);
}