# Django Básico

## Contenido
- [Introducción a Django](#introducción-a-django)
- [Instalación y Configuración Inicial](#instalación-y-configuración-inicial)
  - [Instalación de Django](#instalación-de-django)
  - [Creación de un Proyecto](#creación-de-un-proyecto)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Ejecución del Servidor de Desarrollo](#ejecución-del-servidor-de-desarrollo)
- [Arquitectura MTV (Modelo-Template-Vista)](#arquitectura-mtv-modelo-template-vista)
- [Administración de Django](#administración-de-django)
  - [Interfaz de Administración](#interfaz-de-administración)
  - [Superusuario](#superusuario)

## Introducción a Django

Django es un framework web de alto nivel para Python que promueve el desarrollo rápido y un diseño limpio y pragmático. Proporciona herramientas y funcionalidades listas para usar, facilitando la creación de aplicaciones web robustas y escalables.

## Instalación y Configuración Inicial

1. **Instalación de Django**: Utiliza el siguiente comando para instalar Django:

   ```bash
   pip install django
   ```

2. **Creación de un Proyecto**: Para iniciar un nuevo proyecto, ejecuta:([gyata.ai][1])

   ```bash
   django-admin startproject nombre_proyecto
   ```

3. **Estructura del Proyecto**: Al crear un proyecto, se generan varios archivos y carpetas esenciales:

   * `manage.py`: Herramienta de línea de comandos para interactuar con el proyecto.
   * Carpeta del proyecto (`nombre_proyecto/`): Contiene configuraciones y rutas del proyecto.
   * `settings.py`: Archivo de configuración del proyecto.
   * `urls.py`: Define las rutas URL del proyecto.
   * `wsgi.py` y `asgi.py`: Puntos de entrada para servidores web compatibles.

4. **Ejecución del Servidor de Desarrollo**: Para iniciar el servidor de desarrollo y ver tu proyecto en el navegador:([gyata.ai][1])

   ```bash
   python manage.py runserver
   ```

   Accede a `http://127.0.0.1:8000/` en tu navegador para ver la página de bienvenida de Django.

## Arquitectura MTV (Modelo-Template-Vista)

Django sigue el patrón de arquitectura MTV, que se compone de:

* **Modelo (Model)**: Define la estructura de la base de datos mediante clases en `models.py`.
* **Vista (View)**: Contiene la lógica de negocio y se ubica en `views.py`.
* **Template**: Archivos HTML que presentan la información al usuario.

## Administración de Django

* **Interfaz de Administración**: Django proporciona una interfaz administrativa automática para gestionar modelos registrados.
* **Superusuario**: Crea un superusuario con el siguiente comando para acceder al panel de administración:

  ```bash
  python manage.py createsuperuser
  ```

  Luego, accede a `http://127.0.0.1:8000/admin/` e inicia sesión con las credenciales creadas.