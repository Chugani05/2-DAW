/* Construye una fecha a partir del texto “02/04/2015”. 
Muestra la fecha con console.log, ¿qué obtienes? Prueba ahora con “2015-04-02”. 
¿Cómo podrías crear una fecha con el texto “April 02, 2015”? */

function mostrarFechas() {
    let fecha1 = new Date("02/04/2015");
    console.log("Fecha 1 (\"02/04/2015\"): ", fecha1);
    document.getElementById("result").innerHTML += `Fecha 1 ("02/04/2015"): ${fecha1} <br>`;

    let fecha2 = new Date("2015-04-02");
    console.log("Fecha 2 (\"2015-04-02\"): ", fecha2);
    document.getElementById("result").innerHTML += `Fecha 2 ("2015-04-02"): ${fecha2} <br>`;

    let fecha3 = new Date("April 02, 2015");
    console.log("Fecha 3 (\"April 02, 2015\"): ", fecha3);
    document.getElementById("result").innerHTML += `Fecha 3 ("April 02, 2015"): ${fecha3} <br>`;
}