/* En el siguiente bucle while tenemos que tener cuidado porque hay operaciones que pueden dar error (no puede haber raíces cuadradas de números negativos, ni divisiones por cero). 
    let result = 1, arg1, arg2, res1, res2; 
    while (result > 0) {  
        arg1 = Math.random() - 0.5;  
        res1 = Math.sqrt(arg1);  
        arg2 = Math.random();  
        res2 = res1/(arg1 + arg2);        
        result = res1 + res2;        
        console.log(result); 
    } 
a) Cambia el bucle while usando continue y break para que si hay una raíz cuadrada de un número negativo directamente pase a la siguiente iteración. En el caso de haber una división por cero, el bucle debe detenerse inmediatamente. 
b) Prueba a realizar el apartado anterior sin usar ni continue ni break. ¿Es más sencillo? 
c) Cambia el bucle while original para que se ejecute sin tener que asignar un valor inicial a la variable result. */

function ejecutarBucle() {
    let result, arg1, arg2, res1, res2;

    document.getElementById("result").innerHTML = ""; // Limpiar el resultado anterior
    
    do {
        arg1 = Math.random() - 0.5;
        arg2 = Math.random();
        let args_sum = arg1 + arg2;

        if (args_sum === 0) {
            document.getElementById("result").innerHTML += "División por cero, deteniendo el bucle.<br>";
            break; // Detiene el bucle en caso de división por cero
        }
        
        if (arg1 < 0) {
            document.getElementById("result").innerHTML += "Raíz cuadrada de número negativo, continuando a la siguiente iteración.<br>";
            continue; // Salta a la siguiente iteración en caso de raíz cuadrada negativa
        }

        res1 = Math.sqrt(arg1);
        res2 = res1 / args_sum;
        result = res1 + res2;

        document.getElementById("result").innerHTML += `Resultado: ${result}<br>`;

    } while (result > 0);
}