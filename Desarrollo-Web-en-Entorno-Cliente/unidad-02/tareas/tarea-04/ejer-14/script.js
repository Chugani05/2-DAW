/* Thanos y las Gemas del Infinito (POO)
Crea una clase Gema con atributos como nombre y poder. Luego, crea una clase Thanos con
un método recolectarGema() que permita añadir gemas a un array y calcule el poder total. */

// Clase Gema con los atributos nombre y poder
class Gema {
    constructor(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
}

// Clase Thanos que puede recolectar gemas y calcular el poder total
class Thanos {
    constructor() {
        this.gemasRecolectadas = [];
        this.poderTotal = 0;
    }

    // Método para recolectar gemas
    recolectarGema(gema) {
        this.gemasRecolectadas.push(gema);
        this.poderTotal += gema.poder;
    }

    // Método para obtener el poder total
    obtenerPoderTotal() {
        return this.poderTotal;
    }
}

// Instancia de Thanos
const thanos = new Thanos();

// Función que permite recolectar gemas
function recolectarGema(nombre, poder) {
    const nuevaGema = new Gema(nombre, poder);
    thanos.recolectarGema(nuevaGema);
    document.getElementById('poderTotal').textContent = `Poder total de Thanos: ${thanos.obtenerPoderTotal()}`;
}