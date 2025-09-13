# Unidad 06 - Angular  

<div align=center>
    <img src="../../extras/data.gif" alt="data" width="100%">
</div>

## Content
- [¿Qué es Angular?](#qué-es-angular)  
- [Instalación y Crear un Proyecto](#instalación-y-crear-un-proyecto)  
- [Estructura de un Proyecto Angular](#estructura-de-un-proyecto-angular)  
- [Componentes](#componentes)  
- [Data Binding](#data-binding)  
- [Directivas](#directivas)  
- [Servicios e Inyección de Dependencias](#servicios-e-inyección-de-dependencias)  
- [Rutas (Routing)](#rutas-routing)  
- [Formularios](#formularios)  
- [Pipes](#pipes)  
- [Módulos](#módulos)  

---

### ¿Qué es Angular?  
- **Framework de JavaScript** mantenido por **Google**.  
- Basado en **TypeScript**.  
- Usado para construir **aplicaciones web de una sola página (SPA)**.  
- Usa **componentes**, **módulos** y **servicios**.  

---

### Instalación y Crear un Proyecto  
1. Instala Angular CLI:  
   ```bash
   npm install -g @angular/cli
    ```

2. Crea un nuevo proyecto:

   ```bash
   ng new mi-proyecto
   ```
3. Inicia el servidor de desarrollo:

   ```bash
   ng serve -o
   ```

---

### Estructura de un Proyecto Angular

* `src/app`: carpeta principal.

  * `app.module.ts`: módulo raíz.
  * `app.component.ts`: componente principal.
* `angular.json`: configuración del proyecto.
* `package.json`: dependencias.

---

### Componentes

Un componente tiene 3 partes: **TypeScript**, **HTML** y **CSS**.

Ejemplo:

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Mi Primera App en Angular 🚀';
}
```

```html
<!-- app.component.html -->
<h1>{{ titulo }}</h1>
```

---

### Data Binding

Formas de enlazar datos entre la clase y la vista:

* **Interpolación**:

  ```html
  <p>{{ titulo }}</p>
  ```

* **Property Binding**:

  ```html
  <img [src]="imagenUrl">
  ```

* **Event Binding**:

  ```html
  <button (click)="saludar()">Click</button>
  ```

* **Two-Way Binding** (con `ngModel`):

  ```html
  <input [(ngModel)]="nombre" placeholder="Escribe tu nombre">
  <p>Hola {{ nombre }}</p>
  ```

---

### Directivas

* **Estructurales** (alteran el DOM):

  * `*ngIf`
  * `*ngFor`

  ```html
  <p *ngIf="mostrar">Esto se muestra si 'mostrar' es true</p>
  <ul>
    <li *ngFor="let item of lista">{{ item }}</li>
  </ul>
  ```

* **De Atributo** (cambian apariencia/comportamiento):

  * `ngClass`, `ngStyle`

  ```html
  <p [ngClass]="{resaltado: esActivo}">Texto con clase dinámica</p>
  ```

---

### Servicios e Inyección de Dependencias

Los **servicios** son clases que contienen lógica reutilizable.

```typescript
// servicio: saludo.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {
  saludar(nombre: string) {
    return `Hola, ${nombre}`;
  }
}
```

Uso en un componente:

```typescript
import { Component } from '@angular/core';
import { SaludoService } from './saludo.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{ mensaje }}</h1>`
})
export class AppComponent {
  mensaje: string;
  constructor(private saludoService: SaludoService) {
    this.mensaje = this.saludoService.saludar('Ana');
  }
}
```

---

### Rutas (Routing)

Permite navegar entre componentes.

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

```html
<!-- app.component.html -->
<nav>
  <a routerLink="/">Inicio</a>
  <a routerLink="/about">Acerca de</a>
</nav>
<router-outlet></router-outlet>
```

---

### Formularios

* **Template-driven forms** (usando `ngModel`).
* **Reactive forms** (con `FormGroup`, `FormControl`).

Ejemplo (reactive forms):

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  enviar() {
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="enviar()">
  <input formControlName="email" placeholder="Email">
  <input type="password" formControlName="password" placeholder="Password">
  <button type="submit">Enviar</button>
</form>
```

---

### Pipes

Transforman datos en la vista.

Ejemplo:

```html
<p>{{ fecha | date:'dd/MM/yyyy' }}</p>
<p>{{ nombre | uppercase }}</p>
<p>{{ precio | currency:'EUR' }}</p>
```

---

### Módulos

Angular organiza la aplicación en **módulos**.

* `AppModule` es el módulo raíz.
* Puedes crear módulos adicionales para dividir la aplicación.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
