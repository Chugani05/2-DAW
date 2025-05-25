# Unidad 01: Documentación y control de versiones.

<div align=center>
    <img src="../../extras/vinilo.gif" alt="vinilo" width="60%">
</div>

## Contenido
1. [Introducción a la Documentación de Aplicaciones Web](#1-introducción-a-la-documentación-de-aplicaciones-web)
2. [Herramientas para Documentación](#2-herramientas-para-documentación)
3. [Control de Versiones](#3-control-de-versiones)
4. [Herramientas de Control de Versiones](#4-herramientas-de-control-de-versiones)
5. [Flujos de Trabajo con Git](#5-flujos-de-trabajo-con-git)
6. [Integración Continua (CI) y Despliegue Continuo (CD)](#6-integración-continua-ci-y-despliegue-continuo-cd)
7. [Buenas Prácticas de Control de Versiones](#7-buenas-prácticas-de-control-de-versiones)
8. [Conclusiones](#8-conclusiones)

## 1. Introducción a la Documentación de Aplicaciones Web
### Propósito de la documentación:
- Facilitar la comprensión del código para otros desarrolladores.
- Asegurar que los usuarios y otros involucrados entiendan cómo usar la aplicación.
- Servir como guía para el mantenimiento y futuras actualizaciones.

### Tipos de documentación:
- **Documentación técnica:** Describe el funcionamiento interno de la aplicación.
- **Documentación de usuario:** Guía al usuario final sobre cómo interactuar con la aplicación.
- **Documentación de API:** Explica cómo interactuar con la interfaz de programación de aplicaciones (API).

### Mejores prácticas:
- Utilizar comentarios en el código.
- Generar documentación de manera continua, no solo al final del proyecto.
- Incluir ejemplos prácticos.

## 2. Herramientas para Documentación
### Markdown:
- Formato ligero de texto con estilo que permite escribir documentación fácilmente.
- Usado en GitHub, GitLab, y otros repositorios de código.
- **Ventajas:** fácil de leer y escribir, soportado por muchas herramientas.

### Generadores de documentación automática:
- Ejemplo: **Sphinx** (para proyectos en Python), **JSDoc** (para JavaScript).
- Permiten generar documentación HTML a partir de comentarios en el código.

## 3. Control de Versiones
### ¿Qué es el control de versiones?
- Sistema que permite llevar un registro de los cambios realizados en un conjunto de archivos a lo largo del tiempo.
- Facilita la colaboración entre varios desarrolladores y el manejo de versiones de código.

### Ventajas del control de versiones:
- Recuperación fácil de versiones anteriores del proyecto.
- Trabajo colaborativo sin sobrescribir el trabajo de otros.
- Historial completo de los cambios.

## 4. Herramientas de Control de Versiones
### Git:
- Sistema de control de versiones distribuido.
- Permite que cada desarrollador tenga una copia local del repositorio.

#### Comandos básicos:
- `git init`: Inicializa un repositorio.
- `git add`: Agrega archivos al área de preparación.
- `git commit`: Registra los cambios.
- `git push`: Envía cambios al repositorio remoto.
- `git pull`: Obtiene cambios del repositorio remoto.

### GitHub / GitLab / Bitbucket:
- Plataformas para almacenar repositorios Git de manera remota.
- Permiten gestionar ramas, realizar pull requests, y realizar revisiones de código.

## 5. Flujos de Trabajo con Git
### Flujo básico de trabajo:
1. Clonar el repositorio.
2. Crear una nueva rama para trabajar en una característica o corrección.
3. Realizar cambios y confirmar (`commit`).
4. Empujar los cambios a la rama remota.
5. Crear un pull request o merge request para integrar los cambios en la rama principal (master/main).

### Flujos avanzados:
- **Git Flow:** Un flujo de trabajo estructurado con ramas específicas para desarrollo, producción, y características.
- **Feature branching:** Crear una rama por cada característica nueva o bug fix.

### Resolución de conflictos:
- Ocurre cuando dos desarrolladores realizan cambios en la misma parte del código. Es importante revisar y resolver estos conflictos manualmente.

## 6. Integración Continua (CI) y Despliegue Continuo (CD)
### CI/CD:
- **Integración Continua:** Proceso donde se automatizan las pruebas y validación del código cada vez que se realiza un commit.
- **Despliegue Continuo:** Automatiza el proceso de despliegue de las nuevas versiones de la aplicación a los servidores de producción.

### Herramientas comunes:
- **Jenkins:** Herramienta de automatización de código abierto para integración continua.
- **Travis CI / CircleCI:** Servicios en la nube para CI/CD.

## 7. Buenas Prácticas de Control de Versiones
- **Mensajes de commit claros y descriptivos.**
- **No almacenar archivos binarios grandes en el repositorio.**
- **Usar `.gitignore` para excluir archivos no deseados.**
- **Realizar commits frecuentes y pequeños.**
- **Revisar y gestionar las ramas de manera organizada.**

## 8. Conclusiones
- La documentación y el control de versiones son esenciales para el desarrollo colaborativo de aplicaciones web.
- Facilitan la mantenibilidad, la integración de nuevas funcionalidades y la resolución de problemas.
- El uso adecuado de herramientas como Git, GitHub, y plataformas de CI/CD optimiza el flujo de trabajo y asegura la calidad del software.

