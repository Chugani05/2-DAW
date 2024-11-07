# EXAMEN 1ª EVALUACIÓN. DESARROLLO WEB EN ENTORNO CLIENTE. NOVIEMBRE 2024
## Autora: Rashi Chugani Narwani

1) La siguiente función recibe como parámetros dos objetos que corresponden con dos elementos input de html donde el usuario ha introducido dos números. A pesar de que ya hemos comprobado que los dos inputs realmente conƟenen números válidos, el resultado obtenido no es el esperado. ¿Qué falla? ¿Cómo se podría solucionar? [2 punto]

```js
function oper (input1, input2) {
let mult = input1 * input2;
let suma = input1 + input2;
console.log(“Suma = ”, suma, “. Multiplicación = ”, mult);
}
```

**SOLUCIÓN:**

El fallo en la función `oper` es que los parámetros `input1` y `input2` son objetos de tipo `HTMLInputElement`, no números. Para obtener los valores numéricos introducidos por el usuario, se debe acceder a la propiedad `value` y convertir ese valor a un número.

```js
function oper(input1, input2) {
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    let mult = num1 * num2;
    let suma = num1 + num2;
    console.log("Suma = ", suma, ". Multiplicación = ", mult);
}
```

----

2) a. Indica algunas diferencias entre las variables declaradas con var o con let [0,25 puntos] <br>
b. ¿Cómo declaro una constante? [0,25 puntos] <br>
c. ¿y una variable global? [0,25 puntos] <br>
d. ¿Las variables globales deben ser usadas o evitadas? ¿por qué? [0,25 puntos]

**SOLUCIÓN:**

a. Hay 3 diferencias significativas:
- `var` tiene un ámbito de función, mientras que `let` tiene un ámbito de bloque.
- Las variables declaradas con `var` son elevadas al inicio de su ámbito, mientras que `let` no puede ser accedida antes de su declaración.
- `var` permite re-declarar la misma variable en el mismo ámbito, mientras que `let` no.
b. Mediante `const`, de la siguiente manera:
```js
const NOMBRE_CONSTANTE = valor;
```
c. Para declarar una variable global, se puede declarar en el ámbito global (fuera de cualquier función) o asignar una variable a window en un entorno de navegador, de la siguiente manera:
```js
// declaración en el ámbito global
var variableGlobal = valor;

// asignación de variable a window
window.variableGlobal = valor;
```
d. Las variables globales deben ser evitadas en la medida de lo posible porque pueden causar conflictos de nombres y dificultar la mantenibilidad del código. Sin embargo, en algunos casos, pueden ser útiles para almacenar configuraciones o estados que necesitan ser accesibles en múltiples partes de la aplicación.

----

3) En un código javascript uso X que aún NO está declarada (está declarada unas líneas más abajo). ¿El
código me funcionaría si la declaración de X fuera…? ¿por qué? [2 punto: 0,5 puntos por apartado] <br>
a. function X(…) { … } <br>
b. let X; <br>
c. var X; <br>
d. const X = …; <br>

**SOLUCIÓN:**

a. El código funcionaría porque las funciones son elevadas (hoisting) y se pueden usar antes de su declaración.
b. El código no funcionaría porque `let` no permite el hoisting de la variable; se produce un error de referencia.
c. El código funcionaría porque `var` permite el hoisting, aunque X no tendrá un valor asignado hasta que se inicialice.
d. El código no funcionaría porque `const` también tiene el mismo problema de hoisting que `let`.

----

4) Responde a las siguientes preguntas: <br>
a. Tengo un formulario en una web situada únicamente en la intranet y los usuarios son de <br>
confianza, ¿sería necesario validar los datos que introducen? ¿por qué? [0,25 puntos] <br>
b. Mi web ahora está disponible en Internet ¿debo ahora validar el formulario? ¿dónde lo hago, en el cliente o en el servidor? ¿por qué? [0,5 puntos] <br>
c. ¿Qué usamos para validar en general los datos de los formularios? [0,25 puntos]

**SOLUCIÓN:**

a. Aunque los usuarios sean de confianza, es recomendable validar los datos para prevenir errores de entrada o posibles vulnerabilidades.
b. Sí, se bebe validar el formulario. La validación debe hacerse tanto en el cliente como en el servidor.La validación en el servidor es crucial para la seguridad, ya que los usuarios pueden manipular el código del cliente.
c. Para validar los datos de los formularios, se pueden usar expresiones regulares, funciones de validación personalizadas o bibliotecas como `jQuery Validation` y HTML5 como `required`, `pattern`, etc.

----

5) Si estoy en el nodo con nombre node, indica qué usarías para… (tener cuidado con la diferencia entre NODO y ELEMENTO) [2 punto: 0,25 por apartado] <br>
a) Saber qué Ɵpo de nodo soy <br>
b) Obtener primer hijo de mi padre <br>
c) Obtener úlƟmo elemento de mi padre <br>
d) Obtener todos los elementos “div” que sean mis descendientes <br> 
e) Conocer el número de hijos elementos <br>
f) Conocer número de hijos nodos <br>
g) Borrarme a mí mismo (siendo compaƟble con el mayor número de navegadores posible) <br>
h) Clonarme a mí y a mis hijos <br>

**SOLUCIÓN:**

a) 
```js
console.log(node.nodeType);
```
b)
```js
let primerHijo = node.parentNode.firstChild;
```
c)
```js
let ultimoElemento = node.parentNode.lastElementChild;
```
d)
```js
let divs = node.getElementsByTagName("div");
```
e)
```js
let numeroHijosElementos = node.children.length;
```
f)
```js
let numeroHijosNodos = node.childNodes.length;
```
g)
```js
node.parentNode.removeChild(node);
```
h)
```js
let clon = node.cloneNode(true);
```

----


6) a) Si deseo almacenar unos datos localmente en el navegador (SIN enviarlos al servidor) para ser usados solo mientras dure la sesión ¿qué objeto de almacenamiento debería usar? [0,5 puntos] <br>
b) ¿y si deseo que esos datos no sean temporales sino que duren más Ɵempo, qué debería usar y hasta cuándo podría usarlo sin que expiraran? [0,5 puntos] <br>
c) Indica brevemente al menos 3 ventajas que Ɵenen estas alternaƟvas frente al uso de las cookies [1 punto]

**SOLUCIÓN:**

a. Para almacenar datos localmente en el navegador solo durante la sesión, se debe usar `sessionStorage` con el siguiente comando:
```js
sessionStorage.setItem('clave', 'valor');
```
b. Para almacenar datos que no sean temporales, se debe usar `localStorage` con el siguiente comando:
```js
sessionStorage.setItem('clave', 'valor');
```
c. 3 ventajas:
- La capacidad de almacenamiento: `localStorage` y `sessionStorage` permiten almacenar más datos (generalmente hasta 5-10 MB) en comparación con las cookies, que tienen un límite de alrededor de 4 KB.
- Simplicidad de uso: La API de `localStorage` y `sessionStorage` es más sencilla y fácil de usar que la manipulación de cookies, que requiere un formato específico.
- No se envían al servidor: Los datos en `localStorage` y `sessionStorage` no se envían automáticamente en cada solicitud HTTP, lo que mejora el rendimiento y reduce el tráfico innecesario.
