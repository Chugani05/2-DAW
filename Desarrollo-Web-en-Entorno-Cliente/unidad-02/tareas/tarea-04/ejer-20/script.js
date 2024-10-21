/* El duelo entre magos (POO)
Crea dos clases Mago y Hechizo. Cada mago debe tener un hechizo asignado y al invocar el
hechizo, el que tenga mayor poder gana el duelo. */

// Definir la clase Hechizo
class Hechizo {
    constructor(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
}

// Definir la clase Mago
class Mago {
    constructor(nombre, hechizo) {
        this.nombre = nombre;
        this.hechizo = hechizo;
    }

    // Método para invocar el hechizo
    invocarHechizo() {
        return this.hechizo.poder;
    }
}

// Crear dos hechizos
const hechizoFuego = new Hechizo("Bola de Fuego", 75);
const hechizoHielo = new Hechizo("Rayo de Hielo", 60);

// Crear dos magos
const mago1 = new Mago("Gandalf", hechizoFuego);
const mago2 = new Mago("Saruman", hechizoHielo);

// Función para iniciar el duelo
function iniciarDuelo() {
    const resultado = document.getElementById("resultado");

    // Invocar hechizos de los dos magos
    const poderMago1 = mago1.invocarHechizo();
    const poderMago2 = mago2.invocarHechizo();

    // Determinar quién gana
    if (poderMago1 > poderMago2) {
        resultado.textContent = `${mago1.nombre} gana el duelo con su ${mago1.hechizo.nombre} (${poderMago1} de poder).`;
    } else if (poderMago2 > poderMago1) {
        resultado.textContent = `${mago2.nombre} gana el duelo con su ${mago2.hechizo.nombre} (${poderMago2} de poder).`;
    } else {
        resultado.textContent = "¡Es un empate!";
    }
}