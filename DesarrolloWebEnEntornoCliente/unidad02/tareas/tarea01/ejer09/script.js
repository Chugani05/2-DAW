/* Implementar una función que dada una fecha en texto (por ejemplo “2018-09-20”), devuelva la fecha juliana equivalente. 
Para realizar la suma, ten en cuenta que la fecha juliana almacena días, mientras que el tiempo_unix en javascript contiene milisegundos, por lo que hay que transformarlo en días. 
Por cierto, ¿de dónde crees que ha salido el valor 2440587.5? */

function get_julian_date(date_arg) {
    const JULIANA = 2440587.5;
    let date = new Date(date_arg);
    let unix_date = date.getTime() / (1000 * 60 * 60 * 24); // Convertir milisegundos a días
    return unix_date + JULIANA;
}

function calculateJulianDate() {
    const dateInput = document.getElementById("dateInput").value;
    const julianDate = get_juliana_date(dateInput);
    document.getElementById("result").innerText = julianDate.toFixed(4);
}

// Explicación del valor 2440587.5
// Este número representa la fecha juliana correspondiente al tiempo UNIX (1 de enero de 1970). 
// La fecha juliana cuenta días desde el 1 de enero de 4713 a.C., mientras que el tiempo UNIX 
// mide los segundos desde el 1 de enero de 1970. La conversión entre ambos es necesaria para obtener
// la fecha juliana a partir del tiempo UNIX.