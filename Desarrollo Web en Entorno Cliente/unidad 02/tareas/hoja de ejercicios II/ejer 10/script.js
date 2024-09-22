/* Diseñar una función que detecte palíndromos, es decir, 
frases que se lean igual de izquierda a derecha o de derecha a izquierda. 
Por ejemplo: "Roma ni se conoce sin oro ni se conoce sin amor". */

function isPalindrome() {
    const text = document.getElementById('textInput').value;
    let fixedText = text.toLowerCase().replace(/ /g, '');
    let reverseText = fixedText.split('').reverse().join('');
    let resultado = '';

    if (fixedText === reverseText) {
        resultado = 'El texto dado SÍ es un palíndromo.';
    } else {
        resultado = 'El texto dado NO es un palíndromo.';
    }

    // Mostrar el resultado en el HTML
    document.getElementById('resultado').innerHTML = resultado;
}