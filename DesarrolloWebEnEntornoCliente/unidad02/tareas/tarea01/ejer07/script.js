/* ¿Cuántos segundos han pasado desde que naciste? ¿y minutos? ¿y horas? ¿y días? 
Implementar una función que dada una fecha cualquiera en formato “yyyy-mm-dd”, devuelva cuánto tiempo ha pasado desde esa fecha. 
La función aceptará un segundo parámetro para indicar en qué unidad se quiere obtener el resultado: ‘d’ → días, ‘h’ → horas, ‘m’ → minutos y ‘s’ → segundos. 
Si no es ninguna de estas unidades, se mostrará un error. */

function calculate_time_from_date(date, format) {
    let now = new Date();
    let birthdate = new Date(date);
    let time = now - birthdate;
    let result = "";

    switch (format) {
        case 'd':
            result = "Han pasado " + Math.round(time / (1000 * 60 * 60 * 24)) + " días desde " + date;
            break;
        case 'h':
            result = "Han pasado " + Math.round(time / (1000 * 60 * 60)) + " horas desde " + date;
            break;
        case 'm':
            result = "Han pasado " + Math.round(time / (1000 * 60)) + " minutos desde " + date;
            break;
        case 's':
            result = "Han pasado " + Math.round(time / 1000) + " segundos desde " + date;
            break;
        default:
            result = "ERROR: Formato no válido. Debe ser 'd', 'h', 'm' o 's'.";
            break;
    }
    return result;
}

function displayResult() {
    const dateInput = document.getElementById("dateInput").value;
    const formatInput = document.getElementById("formatInput").value;

    if (!dateInput || !formatInput) {
        alert("Por favor, ingresa una fecha válida y selecciona una unidad.");
        return;
    }

    const result = calculate_time_from_date(dateInput, formatInput);
    document.getElementById("result").innerText = result;
}