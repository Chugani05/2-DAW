/*Muestra la fecha y hora actuales en formato: “DD/MM/YYYY hh:mm:ss TimeZone”*/

function showDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const dateTimeString = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${timeZone}`;
    document.getElementById("datetime").innerText = dateTimeString;

    console.log(now);
}

setInterval(showDateTime, 1000); // Actualiza cada segundo