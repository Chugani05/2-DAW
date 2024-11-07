# Unidad 02 - Javascript
<div align=center>
    <img src="../../extras/data.gif" alt="data" width="100%">
</div>

## Contenido
- [Parte teórica](#parte-teórica)
    - [Conceptos Fundamentales de JavaScript](#conceptos-fundamentales-de-javascript)
    - [Objetos y Prototipos](#objetos-y-prototipos)
    - [Promesas y Manejo de Tareas Asíncronas](#promesas-y-manejo-de-tareas-asíncronas)
    - [Tipos de Datos Especiales y Estructuras](#tipos-de-datos-especiales-y-estructuras)
    - [Módulos en JavaScript (ES6)](#módulos-en-javascript-es6)
    - [Eventos Importantes y Buenas Prácticas](#eventos-importantes-y-buenas-prácticas)
- [Parte práctica](#parte-práctica)
    - [Variables y Tipos de Datos](#variables-y-tipos-de-datos)
    - [Operadores](#operadores)
    - [Estructuras de Control](#estructuras-de-control)
    - [Funciones](#funciones)
    - [Objeto](#objetos)
    - [Arrays](#arrays)
    - [Manipulación del DOM](#manipulación-del-dom)
    - [JSON](#json)
    - [Promesas y Async/Await](#promesas-y-asyncawait)
    - [Módulos](#módulos-es6)

## Parte teórica

### Conceptos Fundamentales de JavaScript

1. **JavaScript como Lenguaje de Programación:**
   - JavaScript es un lenguaje **interpretado** (no necesita ser compilado), **dinámico**, y **de tipado débil** (las variables no tienen un tipo fijo y se pueden cambiar en tiempo de ejecución).
   - Se ejecuta principalmente en navegadores web, aunque también en servidores mediante Node.js.

2. **Alcance (Scope) y Contexto de Ejecución:**
   - **Scope**: Es el contexto en el que se pueden acceder a variables y funciones.
     - **Global**: Variables definidas fuera de cualquier función o bloque. Accesibles desde cualquier parte del código.
     - **Local**: Variables definidas dentro de una función o bloque. No son accesibles fuera de este.
   - **Contexto de Ejecución (`this`)**: En el contexto global, `this` se refiere al objeto global (`window` en el navegador). En una función, su valor depende de cómo se invoque.

3. **Hoisting**:
   - JavaScript "eleva" las declaraciones de variables y funciones al inicio de su ámbito antes de ejecutar el código.
   - Funciona para **declaraciones de funciones** y **variables con `var`**, pero no con `let` ni `const`.
   - Ejemplo:
     ```javascript
     console.log(nombre); // undefined
     var nombre = "Ana";
     ```

4. **Closures**:
   - Un closure es una función que "recuerda" el ámbito donde fue creada, incluso después de que ese ámbito haya terminado.
   - Es útil para **encapsular** datos.
   - Ejemplo:
     ```javascript
     function crearContador() {
       let contador = 0;
       return function() {
         contador++;
         return contador;
       };
     }
     const miContador = crearContador();
     miContador(); // 1
     miContador(); // 2
     ```

5. **Eventos y Manipulación del DOM:**
   - El DOM (Document Object Model) representa la estructura de una página HTML como un árbol de nodos.
   - Se pueden agregar **event listeners** (escuchadores de eventos) a elementos del DOM para responder a acciones del usuario (como `click`, `input`, `submit`, etc.).
   - Ejemplo:
     ```javascript
     document.getElementById("boton").addEventListener("click", function() {
       alert("Botón clicado");
     });
     ```

6. **Modelo Asíncrono y Event Loop**:
   - JavaScript es **single-threaded**, es decir, solo ejecuta una tarea a la vez. Para manejar múltiples tareas simultáneas, utiliza el **Event Loop**.
   - El Event Loop administra una **cola de tareas** para procesar eventos y operaciones asíncronas.
   - Promesas, `async`/`await`, `setTimeout` y `setInterval` son algunas herramientas que permiten manejar tareas asíncronas.

---

### Objetos y Prototipos

1. **Creación de Objetos**:
   - Objetos en JavaScript son colecciones de pares clave-valor.
   - Ejemplo de objeto:
     ```javascript
     const persona = {
       nombre: "Luis",
       edad: 30,
       saludar: function() { console.log("Hola, soy " + this.nombre); }
     };
     persona.saludar(); // "Hola, soy Luis"
     ```

2. **Prototipos**:
   - JavaScript usa un sistema de **herencia basada en prototipos**.
   - Cada objeto tiene una propiedad `__proto__` que apunta al prototipo de su constructor.
   - Permite que los objetos hereden métodos y propiedades de otros objetos.

3. **Constructores**:
   - Los constructores crean múltiples instancias de objetos con las mismas propiedades y métodos.
   - Ejemplo:
     ```javascript
     function Persona(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
     }
     const persona1 = new Persona("Juan", 25);
     ```

---

### Promesas y Manejo de Tareas Asíncronas

1. **Promesas**:
   - Las promesas permiten ejecutar código asíncrono y manejar resultados futuros.
   - Estados de una promesa: `pending` (pendiente), `fulfilled` (cumplida) o `rejected` (rechazada).
   - Ejemplo:
     ```javascript
     const promesa = new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve("Éxito");
       }, 1000);
     });
     promesa.then(result => console.log(result)).catch(error => console.log(error));
     ```

2. **`async` y `await`**:
   - `async` y `await` son una sintaxis más sencilla para trabajar con promesas.
   - La palabra clave `async` convierte una función en una promesa, y `await` espera a que una promesa se resuelva.
   - Ejemplo:
     ```javascript
     async function obtenerDatos() {
       try {
         const datos = await fetch("https://api.example.com/datos");
         console.log(datos);
       } catch (error) {
         console.error("Error:", error);
       }
     }
     ```

---

### Tipos de Datos Especiales y Estructuras

1. **Manejo de `null` y `undefined`**:
   - `null` representa la ausencia intencional de un valor, mientras que `undefined` significa que una variable se ha declarado pero no se ha asignado ningún valor.
   - Comparaciones: `null == undefined` es `true`, pero `null === undefined` es `false`.

2. **Operador de Coalescencia Nula (`??`)**:
   - Permite asignar un valor predeterminado si el valor es `null` o `undefined`.
   - Ejemplo:
     ```javascript
     const nombre = null;
     const saludo = nombre ?? "Invitado";
     console.log(saludo); // "Invitado"
     ```

3. **Desestructuración**:
   - La desestructuración permite extraer valores de objetos o arrays fácilmente.
   - Ejemplo:
     ```javascript
     const persona = { nombre: "Ana", edad: 28 };
     const { nombre, edad } = persona;
     ```

---

### Módulos en JavaScript (ES6)

1. **Exportación e Importación**:
   - Los módulos permiten dividir el código en archivos independientes.
   - Exportar:
     ```javascript
     export const pi = 3.14;
     export function saludar() { console.log("Hola"); }
     ```
   - Importar:
     ```javascript
     import { pi, saludar } from './modulo.js';
     ```

---

### Eventos Importantes y Buenas Prácticas

1. **Eventos**:
   - **Eventos comunes**: `click`, `input`, `change`, `submit`, `mouseover`, `keydown`.
   - Para mejorar el rendimiento, intenta asignar eventos en elementos específicos, no en múltiples subelementos.

2. **Buenas Prácticas**:
   - Usa `const` y `let` en lugar de `var`.
   - Escribe código modular y evita funciones demasiado grandes.
   - Aplica el principio de "separación de preocupaciones" (Separation of Concerns): Mantén JavaScript separado de HTML y CSS tanto como sea posible.
   - Usa `===` en lugar de `==` para evitar problemas de comparación de tipo.

## Parte práctica

### Variables y Tipos de Datos

**Declaración de variables:**
- **`let`**: Define una variable cuyo valor puede cambiar. Tiene un alcance limitado al bloque en el que se define.
  ```javascript
  let edad = 25;
  edad = 26; // Se puede reasignar
  ```
- **`const`**: Define una variable de solo lectura, es decir, su valor no puede cambiar después de su inicialización. Ideal para valores constantes.
  ```javascript
  const PI = 3.14159;
  // PI = 3.14; // Error: no se puede reasignar
  ```
- **`var`**: Define una variable con alcance de función y se puede redeclarar. Se desaconseja usarlo en ES6 en adelante debido a posibles problemas de ámbito (scope).
  ```javascript
  var nombre = "Ana";
  var nombre = "Luis"; // No genera error
  ```

**Tipos de datos básicos:**
- **`string`**: Cadena de caracteres.
  ```javascript
  let saludo = "Hola";
  ```
- **`number`**: Números enteros y decimales.
  ```javascript
  let edad = 25;
  let precio = 19.99;
  ```
- **`boolean`**: Representa valores de `true` o `false`.
  ```javascript
  let esActivo = true;
  ```
- **`null`**: Indica la ausencia intencionada de valor.
  ```javascript
  let vacio = null;
  ```
- **`undefined`**: Representa una variable declarada sin valor asignado.
  ```javascript
  let sinValor;
  ```
- **`symbol`**: Tipo único e inmutable utilizado principalmente para propiedades de objeto únicas.
  ```javascript
  let simbolo = Symbol("descripcion");
  ```
- **`bigint`**: Números enteros de gran tamaño. Se usa con `n` al final.
  ```javascript
  let granNumero = 12345678901234567890n;
  ```

---

### Operadores

**Aritméticos**:
- **`+`**: Suma.
- **`-`**: Resta.
- **`*`**: Multiplicación.
- **`/`**: División.
- **`%`**: Resto de una división.
- **`**`**: Exponenciación.
  ```javascript
  let resultado = 3 ** 2; // 9
  ```

**Asignación**:
- **`=`**: Asignación simple.
- **`+=`, `-=`, `*=`, `/=`**: Operadores compuestos que combinan asignación y operación.
  ```javascript
  let x = 5;
  x += 3; // x ahora es 8
  ```

**Comparación**:
- **`==`**: Comparación de valor, sin considerar el tipo.
  ```javascript
  5 == "5"; // true
  ```
- **`===`**: Comparación estricta de valor y tipo.
  ```javascript
  5 === "5"; // false
  ```
- **`!=`** y **`!==`**: No igualdad y no igualdad estricta.
  ```javascript
  5 !== "5"; // true
  ```

**Lógicos**:
- **`&&`**: AND lógico.
- **`||`**: OR lógico.
- **`!`**: NOT lógico.
  ```javascript
  let esAdulto = true;
  let tieneID = false;
  let puedeEntrar = esAdulto && tieneID; // false
  ```

---

### Estructuras de Control

**Condicionales**:
- **`if`**: Ejecuta un bloque de código si una condición es verdadera.
  ```javascript
  if (edad > 18) {
    console.log("Eres mayor de edad.");
  }
  ```
- **`else`**: Alternativa si la condición es falsa.
  ```javascript
  if (edad > 18) {
    console.log("Eres mayor de edad.");
  } else {
    console.log("Eres menor de edad.");
  }
  ```
- **`else if`**: Para múltiples condiciones.
  ```javascript
  if (edad < 13) {
    console.log("Eres un niño.");
  } else if (edad < 18) {
    console.log("Eres un adolescente.");
  } else {
    console.log("Eres adulto.");
  }
  ```
- **`switch`**: Compara el valor con múltiples casos.
  ```javascript
  let dia = 3;
  switch(dia) {
    case 1:
      console.log("Lunes");
      break;
    case 2:
      console.log("Martes");
      break;
    default:
      console.log("Otro día");
  }
  ```

**Bucles**:
- **`for`**: Repite un bloque un número específico de veces.
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```
- **`while`**: Repite mientras la condición sea verdadera.
  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```
- **`do...while`**: Ejecuta al menos una vez, y luego repite mientras la condición sea verdadera.
  ```javascript
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  ```

---

### Funciones

**Declaración**:
- Las funciones pueden ser declaradas con `function` y ejecutadas en cualquier parte del ámbito.
  ```javascript
  function suma(a, b) {
    return a + b;
  }
  ```

**Funciones flecha (Arrow Functions)**:
- Sintaxis corta, especialmente útil para funciones anónimas.
  ```javascript
  const resta = (a, b) => a - b;
  ```

---

### Objetos

**Definición de objetos**:
- Un objeto es una colección de pares clave-valor.
  ```javascript
  const usuario = {
    nombre: "Carlos",
    edad: 30,
    saludo: function() { console.log("Hola!"); }
  };
  ```

**Acceso y métodos**:
  ```javascript
  usuario.nombre; // Carlos
  usuario.saludo(); // Hola!
  ```

---

### Arrays

**Métodos útiles**:
- `.forEach()`: Itera sobre cada elemento.
- `.map()`: Retorna un nuevo array transformado.
- `.filter()`: Retorna un nuevo array con elementos que cumplan una condición.
- `.reduce()`: Acumula un valor de izquierda a derecha.

---

### Manipulación del DOM

**Modificación de elementos**:
- Cambia el contenido y estilo de elementos en el HTML.
  ```javascript
  document.getElementById("titulo").textContent = "Nuevo Título";
  document.querySelector(".boton").style.color = "blue";
  ```

**Eventos**:
  ```javascript
  boton.addEventListener("click", () => alert("Botón presionado"));
  ```

---

### JSON

**Conversión de objetos a JSON y viceversa**:
  ```javascript
  const obj = { nombre: "Ana", edad: 20 };
  const jsonString = JSON.stringify(obj);
  const objConvertido = JSON.parse(jsonString);
  ```

---

### Promesas y Async/Await

**Promesas**:
  ```javascript
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("¡Éxito!"), 1000);
  });
  ```

**Async/Await**:
  ```javascript
  async function obtenerDatos() {
    try {
      const datos = await promesa;
    } catch (error) {
      console.error(error);
    }
  }
  ```

---

### Módulos (ES6)

**Exportar e importar**:
  ```javascript
  // En archivo modulo.js
  export const nombre = "Juan";
  // En otro archivo
  import { nombre } from "./modulo.js";
  ```