# Django Especializado

## Contenido
- [1. Optimización de Consultas y Rendimiento](#1-optimización-de-consultas-y-rendimiento)
  - [Uso de select_related y prefetch_related](#uso-de-select_related-y-prefetch_related)
  - [Indexación de Campos](#indexación-de-campos)
  - [Paginación de Resultados](#paginación-de-resultados)
- [2. Seguridad y Autenticación Avanzada](#2-seguridad-y-autenticación-avanzada)
  - [Autenticación con Tokens](#autenticación-con-tokens)
  - [Protección contra CSRF](#protección-contra-csrf)
  - [Gestión de Permisos Personalizados](#gestión-de-permisos-personalizados)
- [3. Tareas Asíncronas con Celery](#3-tareas-asíncronas-con-celery)
  - [Integración de Celery](#integración-de-celery)
  - [Ejecución de Tareas](#ejecución-de-tareas)
- [4. Integración con Bases de Datos NoSQL](#4-integración-con-bases-de-datos-nosql)
  - [Uso de MongoDB con Django](#uso-de-mongodb-con-django)
  - [Consideraciones](#consideraciones)
- [5. Despliegue y Escalabilidad](#5-despliegue-y-escalabilidad)
  - [Despliegue con Docker](#despliegue-con-docker)
  - [Uso de Gunicorn y Nginx](#uso-de-gunicorn-y-nginx)
  - [Escalabilidad Horizontal](#escalabilidad-horizontal)
- [6. Pruebas Automatizadas y CI/CD](#6-pruebas-automatizadas-y-ci-cd)
  - [Pruebas Unitarias](#pruebas-unitarias)
  - [Integración Continua](#integración-continua)
- [7. Aplicaciones Reutilizables](#7-aplicaciones-reutilizables)
  - [Creación de Paquetes Reutilizables](#creación-de-paquetes-reutilizables)
  - [Publicación en PyPI](#publicación-en-pypi)

## 1. Optimización de Consultas y Rendimiento

* **Uso de `select_related` y `prefetch_related`**: Estas funciones permiten optimizar las consultas a la base de datos al reducir la cantidad de consultas necesarias para obtener datos relacionados.

```python
  # select_related: para relaciones ForeignKey y OneToOne
  libros = Libro.objects.select_related('autor').all()

  # prefetch_related: para relaciones ManyToMany y relaciones inversas
  autores = Autor.objects.prefetch_related('libros').all()
```

* **Indexación de Campos**: Agregar índices a campos que se utilizan frecuentemente en filtros o búsquedas mejora el rendimiento de las consultas.

  ```python
  class Libro(models.Model):
      titulo = models.CharField(max_length=200, db_index=True)
  ```

* **Paginación de Resultados**: Utilizar la paginación para manejar grandes conjuntos de datos y mejorar la experiencia del usuario.

  ```python
  from django.core.paginator import Paginator

  libros_list = Libro.objects.all()
  paginator = Paginator(libros_list, 10)  # 10 libros por página
  page_number = request.GET.get('page')
  page_obj = paginator.get_page(page_number)
  ```

## 2. Seguridad y Autenticación Avanzada

* **Autenticación con Tokens**: Implementar autenticación basada en tokens para APIs utilizando Django REST Framework.

  ```bash
  pip install djangorestframework-simplejwt
  ```

  ```python
  # settings.py
  REST_FRAMEWORK = {
      'DEFAULT_AUTHENTICATION_CLASSES': (
          'rest_framework_simplejwt.authentication.JWTAuthentication',
      ),
  }
  ```

* **Protección contra CSRF**: Asegurar que las vistas que manejan formularios POST estén protegidas contra ataques CSRF.

  ```python
  from django.views.decorators.csrf import csrf_protect

  @csrf_protect
  def mi_vista(request):
      ...
  ```

* **Gestión de Permisos Personalizados**: Definir permisos personalizados para controlar el acceso a diferentes partes de la aplicación.

  ```python
  from rest_framework import permissions

  class EsAdmin(permissions.BasePermission):
      def has_permission(self, request, view):
          return request.user and request.user.is_staff
  ```

## 3. Tareas Asíncronas con Celery

* **Integración de Celery**: Permite ejecutar tareas en segundo plano, como el envío de correos electrónicos o procesamiento de datos.

  ```bash
  pip install celery
  ```

  ```python
  # proyecto/celery.py
  import os
  from celery import Celery

  os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'proyecto.settings')
  app = Celery('proyecto')
  app.config_from_object('django.conf:settings', namespace='CELERY')
  app.autodiscover_tasks()
  ```

  ```python
  # app/tasks.py
  from celery import shared_task

  @shared_task
  def enviar_correo():
      # lógica para enviar correo
      pass
  ```

* **Ejecución de Tareas**: Iniciar el worker de Celery para procesar las tareas en segundo plano.

  ```bash
  celery -A proyecto worker --loglevel=info
  ```

## 4. Integración con Bases de Datos NoSQL

* **Uso de MongoDB con Django**: Aunque Django está diseñado para trabajar con bases de datos relacionales, es posible integrarlo con MongoDB utilizando bibliotecas como Djongo o MongoEngine.

  ```bash
  pip install djongo
  ```

  ```python
  # settings.py
  DATABASES = {
      'default': {
          'ENGINE': 'djongo',
          'NAME': 'nombre_base_datos',
      }
  }
  ```

* **Consideraciones**: Al trabajar con bases de datos NoSQL, es importante tener en cuenta las diferencias en la estructura de datos y las limitaciones en las operaciones disponibles.

## 5. Despliegue y Escalabilidad

* **Despliegue con Docker**: Containerizar la aplicación para facilitar su despliegue y escalabilidad.

  ```dockerfile
  # Dockerfile
  FROM python:3.9
  ENV PYTHONDONTWRITEBYTECODE 1
  ENV PYTHONUNBUFFERED 1
  WORKDIR /code
  COPY requirements.txt /code/
  RUN pip install -r requirements.txt
  COPY . /code/
  ```

* **Uso de Gunicorn y Nginx**: Servir la aplicación Django utilizando Gunicorn como servidor WSGI y Nginx como proxy inverso.

  ```bash
  gunicorn proyecto.wsgi:application --bind 0.0.0.0:8000
  ```

* **Escalabilidad Horizontal**: Implementar balanceadores de carga y múltiples instancias de la aplicación para manejar un mayor tráfico.

## 6. Pruebas Automatizadas y CI/CD

* **Pruebas Unitarias**: Escribir pruebas para asegurar que cada componente de la aplicación funciona correctamente.

  ```python
  from django.test import TestCase
  from .models import Libro

  class LibroTestCase(TestCase):
      def setUp(self):
          Libro.objects.create(titulo="Prueba")

      def test_libro_titulo(self):
          libro = Libro.objects.get(titulo="Prueba")
          self.assertEqual(libro.titulo, "Prueba")
  ```

* **Integración Continua**: Configurar herramientas como GitHub Actions o GitLab CI/CD para automatizar pruebas y despliegues.

  ```yaml
  # .github/workflows/django.yml
  name: Django CI

  on: [push]

  jobs:
    build:

      runs-on: ubuntu-latest

      steps:
      - uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: '3.9'
      - name: Install dependencies
        run: |
          pip install -r requirements.txt
      - name: Run tests
        run: |
          python manage.py test
  ```

## 7. Aplicaciones Reutilizables

* **Creación de Paquetes Reutilizables**: Estructurar aplicaciones Django como paquetes que puedan ser reutilizados en otros proyectos.

  ```bash
  myapp/
      __init__.py
      models.py
      views.py
      templates/
      static/
      setup.py
  ```

* **Publicación en PyPI**: Subir el paquete a PyPI para compartirlo con la comunidad.

  ```bash
  python setup.py sdist
  twine upload dist/*
  ```
