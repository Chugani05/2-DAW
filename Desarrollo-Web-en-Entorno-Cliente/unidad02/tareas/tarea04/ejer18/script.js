/* El plan de Joker (POO)
Crea una clase Villano con un atributo plan. Crea una instancia de Joker con un plan y crea un
método que permita cambiar el plan. */

// Definir la clase Villano
class Villano {
    constructor(nombre, plan) {
        this.nombre = nombre;
        this.plan = plan;
    }

    // Método para cambiar el plan del villano
    cambiarPlan(nuevoPlan) {
        this.plan = nuevoPlan;
    }
}

// Crear una instancia de Joker con un plan inicial
const joker = new Villano("Joker", "Causar caos en Gotham");

// Mostrar el plan actual en el DOM
const planActual = document.getElementById("planActual");
planActual.textContent += joker.plan;

// Función para cambiar el plan
function cambiarPlan() {
    const nuevosPlanes = [
        "Robar el banco central",
        "Liberar a todos los villanos de Arkham",
        "Secuestrar al alcalde",
        "Destruir la ciudad con explosivos"
    ];

    // Seleccionar un nuevo plan aleatorio
    const nuevoPlan = nuevosPlanes[Math.floor(Math.random() * nuevosPlanes.length)];

    // Cambiar el plan de Joker usando el método de la clase
    joker.cambiarPlan(nuevoPlan);

    // Actualizar el texto del plan en el DOM
    planActual.textContent = "Plan actual de Joker: " + joker.plan;
}