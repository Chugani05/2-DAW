// Función para copiar o mover datos de un JSON a sessionStorage
function json2sessionStorage(jsonData, move = false) {
    const data = JSON.parse(jsonData);
    for (const key in data) {
        if (move) {
            document.cookie = `${key}=${data[key]}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`; // Eliminar cookie
        }
        sessionStorage.setItem(key, data[key]); // Guarda en sessionStorage
    }
}

// Función inversa para mover datos de sessionStorage a JSON
function sessionStorage2json(move = false) {
    const jsonData = {};
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        jsonData[key] = sessionStorage.getItem(key);
        if (move) {
            sessionStorage.removeItem(key); // Elimina de sessionStorage
        }
    }
    return JSON.stringify(jsonData);
}

// Ejemplo de uso
const exampleData = JSON.stringify({ nombre: "Juan", edad: "30" });
json2sessionStorage(exampleData); // Copiar a sessionStorage
console.log(sessionStorage2json()); // Obtener datos en JSON
