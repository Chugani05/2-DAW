/* La Batalla de los Cinco Ejércitos (POO)
Crea una clase Ejercito con atributos como nombre, numeroSoldados, y fuerza.
Instancia cinco ejércitos y simula una batalla comparando la fuerza de cada ejército. */

// Definición de la clase Ejercito
class Ejercito {
    constructor(nombre, numeroSoldados, fuerza) {
        this.nombre = nombre;
        this.numeroSoldados = numeroSoldados;
        this.fuerza = fuerza;
    }
}

// Crear cinco ejércitos
const ejercitos = [
    new Ejercito('Hombres de Valle', 5000, 70),
    new Ejercito('Elfos del Bosque Negro', 8000, 85),
    new Ejercito('Enanos de la Montaña Solitaria', 3000, 90),
    new Ejercito('Orcos de las Montañas Nubladas', 7000, 60),
    new Ejercito('Águilas de las Montañas', 500, 100)
];

// Función para simular la batalla
function simularBatalla() {
    let ganador = ejercitos[0]; // Asignamos el primer ejército como posible ganador

    // Comparar la fuerza de cada ejército
    for (let i = 1; i < ejercitos.length; i++) {
        if (ejercitos[i].fuerza > ganador.fuerza) {
            ganador = ejercitos[i]; // El ejército con mayor fuerza es el nuevo ganador
        }
    }

    // Mostrar el resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `¡El ejército ganador es el <strong>${ganador.nombre}</strong> con una fuerza de <strong>${ganador.fuerza}</strong>!`;
}

// Añadir evento al botón para iniciar la batalla
const startBattleBtn = document.getElementById('startBattleBtn');
startBattleBtn.addEventListener('click', simularBatalla);