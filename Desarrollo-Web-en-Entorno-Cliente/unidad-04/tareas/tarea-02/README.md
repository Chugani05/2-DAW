# Rescate en el Laberinto

## Content
- [Description](#description)
- [Structure](#structure)

## Description
"Rescate en el Laberinto" es un emocionante juego de navegador desarrollado con HTML, CSS, jQuery y TypeScript. En este juego, el objetivo del jugador es guiar a su personaje a través de un laberinto lleno de obstáculos y recompensas, gestionando su energía y el tiempo disponible para alcanzar la salida.

Características principales:

- `Control del jugador`: El jugador puede moverse en cuatro direcciones usando las teclas de flecha, gastando energía en cada movimiento.
- `Trampas y objetos especiales`: El laberinto contiene trampas que reducen la energía del jugador y objetos especiales que la recuperan, añadiendo un componente estratégico a la navegación.
- `Objetivo y limitaciones`: La misión es alcanzar la salida antes de que se agote el tiempo o la energía. Si la energía llega a cero o el temporizador se acaba, el juego termina.
- `Interfaz interactiva`: Con jQuery, el juego renderiza el laberinto y actualiza dinámicamente la información en pantalla, como la energía y el tiempo restante.

Este proyecto combina la lógica del juego con el diseño visual en una cuadrícula, utilizando una estructura de clases en TypeScript para organizar los elementos y una interfaz intuitiva que muestra el progreso del jugador. Es ideal para aprender sobre gestión de eventos, manipulación del DOM y el uso de TypeScript en aplicaciones web interactivas.

## Structure

### Creación de la Lógica con jQuery y TypeScript
   - **Namespace `LaberintoGame`**: Esto permite encapsular todas las clases y evitar conflictos con otros scripts.
   - **Clase `Celda`**: Define la estructura básica de cada elemento del laberinto. Incluye propiedades como `x`, `y` para coordenadas, y métodos opcionales si necesitas.
   - **Clase `Jugador`**: Agrega un atributo `energia` y un método `mover()`, donde cada movimiento reduce la energía. Puedes ajustar la lógica para verificar si el jugador cae en una `Trampa` o recolecta un `ObjetoEspecial`.
   - **Clases `Trampa`, `ObjetoEspecial`, `Salida`**: Heredan de `Celda`. Cada clase podría tener métodos o atributos adicionales que modifiquen la energía o activen condiciones al ser alcanzadas.

### Sistema de Laberinto con Generics
   - **Clase `Matriz<T>`**: Esta clase puede tener un array bidimensional para representar la cuadrícula. Los métodos `set()` y `get()` se pueden usar para colocar o recuperar elementos en cada posición.
   - Define tipos para cada celda (`Jugador`, `Trampa`, `ObjetoEspecial`, `Salida`) que usen la clase `Celda` como base, asegurando consistencia en el uso de Generics.

### Lógica de Juego
   - **Clase `Juego`**: Esta clase manejará toda la lógica del juego.
     - `laberinto`: un objeto de `Matriz<Celda>` para almacenar todos los elementos.
     - `jugador`: instancia de la clase `Jugador`.
     - Métodos como `inicializarLaberinto()` para añadir trampas, objetos especiales y salida.
   - **Movimiento del Jugador**: En el método `moverJugador(dx, dy)`, actualiza la posición del jugador y verifica si cae en una `Trampa` o recolecta un `ObjetoEspecial`.

### Renderizado del Laberinto con jQuery
   - **Renderizar la cuadrícula**: Usa jQuery para iterar por cada celda de `laberinto` y generar un `<div>` o `<span>` en el contenedor `#laberinto`. 
   - **Asignación de clases CSS**: Cada tipo de celda (`jugador`, `trampa`, `objeto`, `salida`) puede tener su propia clase CSS para darle estilo y distinguirla visualmente.

### Control de Eventos y Movimiento
   - **Eventos de Teclado con jQuery**: Captura el evento `keydown` y usa `moverJugador(dx, dy)` para mover al jugador. Puedes usar condiciones `if` o `switch` para determinar el desplazamiento en cada dirección (arriba, abajo, izquierda, derecha).
   - **Actualizar Interfaz**: Después de cada movimiento, usa jQuery para actualizar la posición del jugador en el contenedor `#laberinto`.

### Temporizador del Juego
   - **Temporizador**: Usa `setInterval()` en `iniciarTemporizador()` para reducir el tiempo cada segundo. Si el tiempo llega a 0, muestra un mensaje de "Juego Terminado".

### Estilo del Juego
   - **Archivo `styles.css`**: Define estilos para cada tipo de celda (jugador, trampa, objeto especial, salida). Puedes usar colores distintos (verde, rojo, amarillo, azul) y agregar bordes o sombras para darle un aspecto llamativo.