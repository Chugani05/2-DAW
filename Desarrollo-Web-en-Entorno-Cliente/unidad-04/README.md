# Unidad 04 - Typescript
<div align=center>
    <img src="../../extras/data.gif" alt="data" width="100%">
</div>

## Content
- [Crear un Proyecto de TypeScript](#crear-un-proyecto-de-typescript)
- [Configuración Básica (`tsconfig.json`)](#configuración-básica-tsconfigjson)
- [Funciones y Objetos en TypeScript](#funciones-y-objetos-en-typescript)
- [Herencia](#herencia)
- [Genéricos (Generics)](#genéricos-generics)
- [Namespaces](#namespaces)
- [Manejo de Errores](#manejo-de-errores)
- [Decoradores](#decoradores)
- [Funciones Útiles](#funciones-útiles)

---

### Crear un Proyecto de TypeScript
- Para empezar, asegúrate de tener **Node.js** y **npm** instalados.
- Instala TypeScript globalmente (si aún no lo tienes):

  ```bash
  npm install -g typescript
  ```

- **Inicializar un proyecto TypeScript**:
  - Crea una carpeta para tu proyecto y navega a ella.
  - Inicializa el archivo `tsconfig.json`, que contiene la configuración de TypeScript:
  
    ```bash
    tsc --init
    ```
- Este archivo permite configurar opciones de compilación para el proyecto.

----

### Configuración Básica (`tsconfig.json`)
Algunas configuraciones comunes en `tsconfig.json` incluyen:
- **`target`**: especifica la versión de JavaScript a la que se va a compilar (por ejemplo, `es6`).
- **`module`**: establece el sistema de módulos (por ejemplo, `commonjs`, `es6`).
- **`strict`**: habilita las comprobaciones de tipo estrictas.
- **`outDir`**: especifica la carpeta de salida para los archivos `.js` compilados.

Ejemplo de un archivo `tsconfig.json` básico:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

----

### Funciones y Objetos en TypeScript
   - **Tipos de Parámetros y Retorno**:
     ```typescript
     function sumar(a: number, b: number): number {
       return a + b;
     }
     ```
   - **Parámetros Opcionales**: se usan con el símbolo `?`.
     ```typescript
     function saludar(nombre: string, edad?: number): void {
       console.log(`Hola, ${nombre}`);
     }
     ```

   - **Interfaces para Objetos**:
     ```typescript
     interface Persona {
       nombre: string;
       edad: number;
       saludar(): void;
     }

     const persona: Persona = {
       nombre: "Juan",
       edad: 30,
       saludar() {
         console.log("Hola, soy Juan");
       }
     };
     ```

----

### Herencia
TypeScript permite heredar clases con la palabra clave `extends`.

```typescript
class Animal {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }

  hacerSonido(): void {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  constructor(nombre: string) {
    super(nombre); // Llama al constructor de la clase base
  }

  hacerSonido(): void {
    console.log("Guau");
  }
}

const miPerro = new Perro("Firulais");
miPerro.hacerSonido(); // "Guau"
```

----

### Genéricos (Generics)
Los genéricos permiten crear componentes reutilizables que funcionan con diferentes tipos.

```typescript
function identidad<T>(valor: T): T {
  return valor;
}

console.log(identidad<string>("Hola")); // "Hola"
console.log(identidad<number>(10)); // 10
```

   - **Clases Genéricas**:
     ```typescript
     class Caja<T> {
       contenido: T;
       constructor(contenido: T) {
         this.contenido = contenido;
       }
     }

     const cajaDeString = new Caja<string>("Hola");
     const cajaDeNumero = new Caja<number>(123);
     ```

----

### Namespaces
Los namespaces agrupan código para evitar conflictos de nombres en archivos grandes.

```typescript
namespace Utilidades {
  export function log(mensaje: string): void {
    console.log(mensaje);
  }
}

Utilidades.log("Mensaje desde el namespace");
```

   - **Alias de namespace**:
     ```typescript
     import Utils = Utilidades;
     Utils.log("Alias en uso");
     ```

----

### Manejo de Errores
TypeScript permite manejar errores como en JavaScript, pero agrega verificación de tipos a las excepciones.

```typescript
function dividir(a: number, b: number): number | never {
  if (b === 0) {
    throw new Error("División por cero no permitida");
  }
  return a / b;
}

try {
  dividir(4, 0);
} catch (error) {
  console.error(error.message);
}
```

----

### Decoradores
Los decoradores son una característica avanzada de TypeScript que permite modificar clases y sus miembros. Se habilitan en el `tsconfig.json` con `"experimentalDecorators": true`.

   - **Decorador de Clase**:
     ```typescript
     function decoradorClase(target: Function) {
       console.log("Decorador aplicado a la clase:", target.name);
     }

     @decoradorClase
     class MiClase {}
     ```

   - **Decorador de Propiedad**:
     ```typescript
     function decoradorPropiedad(target: any, nombrePropiedad: string) {
       console.log("Decorador aplicado a la propiedad:", nombrePropiedad);
     }

     class PersonaDecorada {
       @decoradorPropiedad
       nombre: string;

       constructor(nombre: string) {
         this.nombre = nombre;
       }
     }
     ```

----

### Funciones Útiles
Algunas funciones y características útiles de TypeScript:

   - **Type Assertions (Aserciones de Tipo)**:
     - Se usan cuando el programador sabe el tipo de dato mejor que el compilador.
       ```typescript
       let valor: any = "Hola, mundo";
       let longitud: number = (valor as string).length;
       ```

   - **Union Types**:
     - Permiten que una variable tenga múltiples tipos posibles.
       ```typescript
       function imprimirId(id: number | string): void {
         console.log("ID:", id);
       }
       ```

   - **Intersection Types**:
     - Permiten combinar múltiples tipos en uno solo.
       ```typescript
       interface Persona {
         nombre: string;
       }

       interface Empleado {
         salario: number;
       }

       type PersonaEmpleado = Persona & Empleado;
       const empleado: PersonaEmpleado = { nombre: "Juan", salario: 5000 };
       ```

   - **Optional Chaining**:
     - Evita errores al intentar acceder a propiedades de valores `undefined` o `null`.
       ```typescript
       let usuario = { perfil: { nombre: "Ana" } };
       console.log(usuario?.perfil?.nombre); // "Ana"
       ```
