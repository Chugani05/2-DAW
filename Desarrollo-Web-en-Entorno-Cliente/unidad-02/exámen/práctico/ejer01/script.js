// Función para manejar el cambio de selección
document.querySelectorAll('input[name="animal"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const checkboxContainer = document.getElementById('checkboxContainer');
        const selectedAnimals = document.getElementById('selectedAnimals');
        selectedAnimals.innerHTML = ''; // Limpiar el texto seleccionado

        // Limpia el contenedor de checkboxes
        checkboxContainer.innerHTML = '';

        // Crea checkboxes según la opción seleccionada
        if (this.value === 'perros') {
            ['chiguagua', 'pastor alemán', 'mason'].forEach(animal => {
                createCheckbox(animal);
            });
        } else if (this.value === 'gatos') {
            ['persa', 'angora', 'siamés'].forEach(animal => {
                createCheckbox(animal);
            });
        }
    });
});

// Función para crear checkboxes
function createCheckbox(animal) {
    const checkboxContainer = document.getElementById('checkboxContainer');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = animal.slice(0, 3); // Usar las 3 primeras letras
    checkbox.id = animal;

    const label = document.createElement('label');
    label.htmlFor = animal;
    label.textContent = animal;

    checkbox.addEventListener('change', updateSelectedAnimals);

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement('br'));
}

// Función para actualizar el texto de animales seleccionados
function updateSelectedAnimals() {
    const selectedAnimals = document.getElementById('selectedAnimals');
    const checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');
    const selected = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.nextSibling.textContent);
    selectedAnimals.textContent = selected.length > 0 ? selected.join(', ') : '';
}