/* Los poderes de los superhéroes (POO)
Crea una clase Superheroe con atributos como nombre, poder, y nivel. Crea una función
que recorra una lista de superhéroes y devuelva el nombre del más poderoso. */

// Clase Superheroe
class Superheroe {
    constructor(nombre, poder, nivel) {
        this.nombre = nombre;
        this.poder = poder;
        this.nivel = nivel;
    }
}

// Crear varios superhéroes
const superHeroes = [
    new Superheroe('Superman', 'Fuerza sobrehumana', 100),
    new Superheroe('Batman', 'Inteligencia y estrategia', 85),
    new Superheroe('Wonder Woman', 'Fuerza y agilidad', 95),
    new Superheroe('Flash', 'Velocidad extrema', 90),
    new Superheroe('Aquaman', 'Control del agua', 80)
];

// Función para encontrar el superhéroe más poderoso
function encontrarMasPoderoso(superHeroes) {
    let heroeMasPoderoso = superHeroes[0];

    for (let i = 1; i < superHeroes.length; i++) {
        if (superHeroes[i].nivel > heroeMasPoderoso.nivel) {
            heroeMasPoderoso = superHeroes[i];
        }
    }

    return heroeMasPoderoso.nombre;
}

// Evento al hacer clic en el botón
const buscarBtn = document.getElementById('buscarBtn');
const resultado = document.getElementById('resultado');

buscarBtn.addEventListener('click', function() {
    const masPoderoso = encontrarMasPoderoso(superHeroes);
    resultado.textContent = `El superhéroe más poderoso es: ${masPoderoso}`;
});