# Actividad 3: Mejora de Accesibilidad en Elementos de Bootstrap y WAI-ARIA
<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="60%">
</div>

## Contenido
- [Descripción](#descripción)
- [Cambios Realizados](#cambios-realizados)

## Descripción
Este proyecto tiene como objetivo mejorar la accesibilidad de elementos comunes de Bootstrap mediante la implementación de los principios WAI-ARIA. Los cambios realizados permiten que los elementos sean más comprensibles y utilizables para usuarios con tecnologías de asistencia como lectores de pantalla.

## Cambios Realizados
A continuación, se describen las mejoras implementadas en cada elemento:

### 1. Modal
- **Atributos agregados**: `role="dialog"`, `aria-labelledby`, `aria-describedby`.
- **Mejora**: Estos atributos identifican el modal como un cuadro de diálogo y describen su contenido y título para lectores de pantalla.
- **Enlace**: [Estructura](./ejers/ejer01.html)

### 2. Dropdown (Menú desplegable)
- **Atributos agregados**: `role="menu"`, `aria-haspopup="true"`, `aria-expanded`, `role="menuitem"`.
- **Mejora**: Define el propósito del menú desplegable y permite que los lectores de pantalla informen si el menú está abierto o cerrado.
- **Enlace**: [Estructura](./ejers/ejer02.html)

### 3. Alert (Alerta)
- **Atributos agregados**: `aria-live="assertive"`, `aria-atomic="true"`.
- **Mejora**: Notifica de forma inmediata los mensajes importantes a los usuarios, asegurando que los lectores de pantalla no omitan el contenido de la alerta.
- **Enlace**: [Estructura](./ejers/ejer03.html)

### 4. Checkbox
- **Atributos agregados**: `role="checkbox"`, `aria-checked`, `aria-labelledby` y `tabindex`.
- **Mejora**: Asegura que el checkbox sea identificable por lectores de pantalla, informe su estado dinámico, esté asociado con su etiqueta y sea navegable por teclado.
- **Enlace**: [Estructura](./ejers/ejer04.html)

### 5. Breadcrumb
- **Atributos agregados**: `aria-label` y `aria-current`.
- **Mejora**: Permite a los lectores de pantalla identificar el breadcrumb como un bloque de navegación y resalta la página actual, mejorando la orientación del usuario.
- **Enlace**: [Estructura](./ejers/ejer05.html)
