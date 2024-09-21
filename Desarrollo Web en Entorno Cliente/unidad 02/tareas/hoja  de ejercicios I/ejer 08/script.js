/*Implementar una función hdec2hms(x) que transforme una hora en formato decimal a su equivalente en formato hh:mm:ss (en texto). 
Por ejemplo, 8.25 = “8:15:00” y 10.12 = “10:07:12”. 
Implementar también la función inversa hms2hdec(h,m,s).*/

function hdec2hms(x) {
    let hours, minutes, seconds, num_split, minutes_split;
    num_split = String(x).split('.');
    hours = num_split[0].padStart(2, '0');
    minutes = (num_split[1] * 60) / 100;
    seconds = '00';
    
    if (minutes.toString().includes('.')) {
        minutes_split = minutes.toString().split('.');
        minutes = minutes_split[0].padStart(2, '0');
        seconds = ((minutes_split[1] * 60) / 100).toString().padEnd(2, '0');
        if (seconds.toString().includes('.')) {
            seconds = seconds.toString().replace('.', '');
        }
    }
    return hours + ':' + minutes + ':' + seconds;
}

function hms2hdec(hours, minutes, seconds) {
    return (hours + (minutes / 60) + (seconds / 3600)).toFixed(2);
}

function convertDecToHMS() {
    const decimalTime = parseFloat(document.getElementById("decimalTime").value);
    if (isNaN(decimalTime)) {
        alert("Por favor, ingresa una hora en formato decimal válida.");
        return;
    }
    const resultHMS = hdec2hms(decimalTime);
    document.getElementById("hmsResult").innerText = resultHMS;
}

function convertHMSToDec() {
    const hours = parseInt(document.getElementById("hours").value);
    const minutes = parseInt(document.getElementById("minutes").value);
    const seconds = parseInt(document.getElementById("seconds").value);

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        alert("Por favor, ingresa valores válidos para horas, minutos y segundos.");
        return;
    }
    const resultDec = hms2hdec(hours, minutes, seconds);
    document.getElementById("decResult").innerText = resultDec;
}