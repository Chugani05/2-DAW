/* Combate Jedi (POO)
Crea dos clases: Jedi y Sith. Cada clase debe tener atributos como nombre, nivelFuerza, y
arma. Simula un combate entre un Jedi y un Sith, donde gana el que tenga mayor nivel de fuerza. */

// Clase Jedi
class Jedi {
    constructor(nombre, nivelFuerza, arma) {
        this.nombre = nombre;
        this.nivelFuerza = nivelFuerza;
        this.arma = arma;
    }
}

// Clase Sith
class Sith {
    constructor(nombre, nivelFuerza, arma) {
        this.nombre = nombre;
        this.nivelFuerza = nivelFuerza;
        this.arma = arma;
    }
}

// Crear un Jedi y un Sith
const jedi = new Jedi('Luke Skywalker', 85, 'Sable de luz verde');
const sith = new Sith('Darth Vader', 90, 'Sable de luz rojo');

// Función para simular el combate
function combatir(jedi, sith) {
    if (jedi.nivelFuerza > sith.nivelFuerza) {
        return `${jedi.nombre} gana el combate con su ${jedi.arma}`;
    } else if (jedi.nivelFuerza < sith.nivelFuerza) {
        return `${sith.nombre} gana el combate con su ${sith.arma}`;
    } else {
        return 'Es un empate, ¡ambos tienen el mismo nivel de fuerza!';
    }
}

// Añadir evento al botón para iniciar el combate
const combatirBtn = document.getElementById('combatirBtn');
const resultadoCombate = document.getElementById('resultadoCombate');

combatirBtn.addEventListener('click', function() {
    const resultado = combatir(jedi, sith);
    resultadoCombate.textContent = resultado;
});