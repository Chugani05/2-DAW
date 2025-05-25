# Django Avanzado

## Contenido
- [Integración de APIs con Django REST Framework (DRF)](#integración-de-apis-con-django-rest-framework-drf)
  - [Instalación](#instalación)
  - [Serializadores](#serializadores)
    - [Tipos de serializadores](#tipos-de-serializadores)
  - [Creación de Vista basada en ViewSet](#creación-de-vista-basada-en-viewset)
  - [Enrutamiento con Routers](#enrutamiento-con-routers)
  - [Personalización del serializador](#personalización-del-serializador)
- [Resumen del flujo completo para crear una API](#resumen-del-flujo-completo-para-crear-una-api)


## Integración de APIs con Django REST Framework (DRF)

Django REST Framework (DRF) permite crear APIs RESTful de forma rápida y sencilla. A continuación, el flujo completo con explicaciones y ejemplos prácticos.

### Instalación

```bash
pip install djangorestframework
```

Agrega `'rest_framework'` a `INSTALLED_APPS` en `settings.py`:

```python
INSTALLED_APPS = [
    ...
    'rest_framework',
]
```


### Serializadores

Los **serializadores** permiten convertir objetos de Django (como modelos) en datos JSON para ser usados en una API, y viceversa.

#### Tipos de serializadores

1. **Serializer simple** (definido manualmente):

```python
from rest_framework import serializers

class UsuarioSerializer(serializers.Serializer):
    nombre = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    activo = serializers.BooleanField(default=True)
```

2. **ModelSerializer** (el más usado: crea un serializador basado en un modelo de Django):

```python
from rest_framework import serializers
from .models import Cliente

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'  # o una lista ['id', 'nombre', 'email']
```


### Creación de Vista basada en ViewSet

```python
from rest_framework import viewsets
from .models import Cliente
from .serializers import ClienteSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
```


### Enrutamiento con Routers

Django REST Framework puede generar automáticamente las URLs de las vistas con un **router**:

```python
from rest_framework import routers
from .views import ClienteViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'clientes', ClienteViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
```

Esto generará endpoints como:

* `GET /api/clientes/` → lista de clientes
* `POST /api/clientes/` → crear cliente
* `GET /api/clientes/1/` → detalle
* `PUT /api/clientes/1/` → actualizar
* `DELETE /api/clientes/1/` → eliminar


### Personalización del serializador

Puedes modificar campos, validaciones, e incluso agregar campos personalizados.

```python
class ClienteSerializer(serializers.ModelSerializer):
    nombre_completo = serializers.SerializerMethodField()

    class Meta:
        model = Cliente
        fields = ['id', 'nombre', 'apellido', 'nombre_completo', 'email']

    def get_nombre_completo(self, obj):
        return f"{obj.nombre} {obj.apellido}"
```

También puedes validar datos:([MaestrosWeb][2])

```python
    def validate_email(self, value):
        if not value.endswith("@miempresa.com"):
            raise serializers.ValidationError("El email debe ser corporativo.")
        return value
```

## Resumen del flujo completo para crear una API

1. Definir el modelo en `models.py`.
2. Crear un serializador en `serializers.py`.
3. Crear una vista (ViewSet) en `views.py`.
4. Registrar la vista en `urls.py` con un router.