# Django Medio

## Contenido 
- [Manejo de Formularios](#manejo-de-formularios)
- [Vistas Avanzadas](#vistas-avanzadas)
- [Gestión de Archivos Estáticos y Media](#gestión-de-archivos-estáticos-y-media)

## Manejo de Formularios

* **Formularios de Django**: Utiliza `forms.py` para crear formularios que interactúan con los modelos.

  ```python
  from django import forms
  from .models import MiModelo

  class MiFormulario(forms.ModelForm):
      class Meta:
          model = MiModelo
          fields = ['campo1', 'campo2']
  ```

* **Validación de Datos**: Implementa validaciones personalizadas para asegurar la integridad de los datos ingresados.

  ```python
  def clean_campo1(self):
      data = self.cleaned_data['campo1']
      if not data.isalpha():
          raise forms.ValidationError("Este campo solo debe contener letras.")
      return data
  ```

## Vistas Avanzadas

* **Vistas Basadas en Clases (CBV)**: Aprovecha las vistas genéricas que Django ofrece para operaciones comunes como listar, crear, actualizar y eliminar objetos.([MaestrosWeb][2])

  ```python
  from django.views.generic import ListView
  from .models import MiModelo

  class MiModeloListView(ListView):
      model = MiModelo
      template_name = 'mi_modelo_lista.html'
  ```

* **Decoradores**: Utiliza decoradores como `@login_required` para restringir el acceso a ciertas vistas.

  ```python
  from django.contrib.auth.decorators import login_required

  @login_required
  def vista_protegida(request):
      # lógica de la vista
      pass
  ```

## Gestión de Archivos Estáticos y Media

* **Archivos Estáticos**: Configura la ruta de archivos estáticos (CSS, JS) en `settings.py` y utiliza `{% static %}` en templates.

  ```python
  STATIC_URL = '/static/'
  STATICFILES_DIRS = [BASE_DIR / "static"]
  ```

  En el template:

  ```html
  {% load static %}
  <link rel="stylesheet" href="{% static 'css/estilos.css' %}">
  ```

* **Archivos Media**: Maneja archivos subidos por usuarios configurando `MEDIA_URL` y `MEDIA_ROOT`.

  ```python
  MEDIA_URL = '/media/'
  MEDIA_ROOT = BASE_DIR / "media"
  ```

Asegúrate de servir archivos media en desarrollo añadiendo las siguientes líneas en `urls.py`:

```python
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # tus rutas aquí
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```
