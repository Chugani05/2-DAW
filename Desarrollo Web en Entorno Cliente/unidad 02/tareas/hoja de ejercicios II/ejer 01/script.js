/* Realizar una función que indicando un texto y un carácter
(ambos obligatorios, comprobar que el segundo parámetro es realmente un único caracter),
nos diga cuántas veces aparece el carácter en el texto. */

function count_char(text, char) {
    let count = 0;
    if (char.length !== 1) {
        console.error("El argumento 'char' debe ser solo un carácter!");
        document.getElementById("result").innerText = "Error: El argumento 'char' debe ser solo un carácter!";
        return;
    } else {
        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i) === char) {
                count += 1;
            }
        }
    }
    document.getElementById("result").innerText = `El carácter '${char}' aparece ${count} veces en el texto.`;
}

function processInput() {
    const text = document.getElementById("inputText").value;
    const char = document.getElementById("inputChar").value;
    count_char(text, char);
}