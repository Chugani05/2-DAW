# Nginx
<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## Contenido
- [¿Qué es Nginx?](#qué-es-nginx)
    - [Características principales de Nginx](#características-principales-de-nginx)
    - [Casos de uso comunes](#casos-de-uso-comunes)
- [Instalación y configuración básica](#instalación-y-configuración-básica)


## ¿Qué es Nginx?
Nginx es un servidor web de código abierto que se utiliza para servir contenido web, manejar solicitudes HTTP y HTTPS, y actuar como un proxy inverso. Fue creado por Igor Sysoev y lanzado por primera vez en 2004. Desde entonces, se ha convertido en uno de los servidores web más populares del mundo, conocido por su alto rendimiento, estabilidad, bajo consumo de recursos y capacidad para manejar una gran cantidad de conexiones concurrentes.

### Características principales de Nginx:
- **Alto rendimiento**: Nginx es capaz de manejar miles de conexiones simultáneas, lo que lo convierte en una opción ideal para sitios web de alto tráfico.
- **Bajo consumo de recursos**: A diferencia de otros servidores web, Nginx utiliza un enfoque asíncrono y basado en eventos, lo que le permite manejar múltiples solicitudes con un uso mínimo de memoria y CPU.
- **Proxy inverso**: Nginx puede actuar como un proxy inverso, redirigiendo solicitudes a otros servidores y equilibrando la carga entre ellos.
- **Soporte para múltiples protocolos**: Además de HTTP y HTTPS, Nginx también puede manejar protocolos como TCP y UDP.
- **Configuración flexible**: La configuración de Nginx se realiza mediante archivos de texto, lo que permite a los administradores personalizar el comportamiento del servidor de manera sencilla.
- **Módulos**: Nginx admite módulos que permiten ampliar sus capacidades, como la autenticación, el almacenamiento en caché y la compresión de archivos.

### Casos de uso comunes:
- Servir contenido estático (imágenes, CSS, JavaScript).
- Actuar como un proxy inverso para aplicaciones web.
- Equilibrar la carga entre varios servidores.
- Implementar SSL/TLS para asegurar las conexiones.
- Almacenar en caché respuestas para mejorar el rendimiento.

En resumen, Nginx es una herramienta poderosa y versátil que se utiliza ampliamente en la industria para servir aplicaciones web y gestionar tráfico de red de manera eficiente.

## Instalación y configuración básica
A continuación se detallan los pasos para instalar y configurar Nginx:

1. **Actualizar el sistema:**
   ```bash
   sudo apt update
   ```

2. **Instalar Nginx:**
    ```bash
    sudo apt install nginx
    ```

3. **Verificar el estado del servicio Nginx:**
    ```bash
    sudo systemctl status nginx
    ```

4. **Probar la configuración de Nginx:**
    ```bash
    sudo nginx -t
    ```

5. **Navegar al directorio de configuración de Nginx:**
    ```bash
    cd /etc/nginx

    ls -l
    # output: 
    # total 68
    # drwxr-xr-x 2 root root 4096 Sep 10 14:27 conf.d
    # -rw-r--r-- 1 root root 1125 Nov 30  2023 fastcgi.conf
    # -rw-r--r-- 1 root root 1055 Nov 30  2023 fastcgi_params
    # -rw-r--r-- 1 root root 2837 Nov 30  2023 koi-utf
    # -rw-r--r-- 1 root root 2223 Nov 30  2023 koi-win
    # -rw-r--r-- 1 root root 5465 Nov 30  2023 mime.types
    # drwxr-xr-x 2 root root 4096 Sep 10 14:27 modules-available
    # drwxr-xr-x 2 root root 4096 Sep 10 14:27 modules-enabled
    # -rw-r--r-- 1 root root 1446 Nov 30  2023 nginx.conf
    # -rw-r--r-- 1 root root  180 Nov 30  2023 proxy_params
    # -rw-r--r-- 1 root root  636 Nov 30  2023 scgi_params
    # drwxr-xr-x 2 root root 4096 Dec  3 15:28 sites-available
    # drwxr-xr-x 2 root root 4096 Dec  3 15:28 sites-enabled
    # drwxr-xr-x 2 root root 4096 Dec  3 15:28 snippets
    # -rw-r--r-- 1 root root  664 Nov 30  2023 uwsgi_params
    # -rw-r--r-- 1 root root 3071 Nov 30  2023 win-utf
    ```

6. **Acceder al directorio `sites-available`:**
    ```bash
    cd sites-available

    ls
    # output: default
    ```

7. **Acceder al directorio `sites-enabled`:**
    ```bash
    cd sites-enabled

    ls -l
    # output:
    # total 0
    # lrwxrwxrwx 1 root root 34 Dec  3 15:28 default -> /etc/nginx/sites-available/default
    ```

8. **Ver el contenido del archivo `default`:**
    ```bash
    cat default
    ```

9. **Navegar al directorio donde se encuentran los archivos web:**
    ```bash
    cd sites-enabled

    ls -l
    # output:
    # total 0
    # lrwxrwxrwx 1 root root 34 Dec  3 15:28 default -> /etc/nginx/sites-available/default
    ```

10. **Reiniciar el servicio Nginx:**
    ```bash
    sudo systemctl restart nginx
    ```

11. **Eliminar el archivo de índice predeterminado:**
    ```bash
    sudo rm index.nginx-debian.html
    ```

12. **Crear un nuevo archivo de índice HTML:**
    ```bash
    nano index.html
    ```

13. **Reiniciar nuevamente el servicio Nginx:**
    ```bash
    sudo systemctl restart nginx
    ```

14. **Verificar el estado del servicio Nginx:**
    ```bash
    sudo systemctl status nginx
    ```

Con estos pasos, Nginx debería estar instalado y funcionando correctamente en tu sistema. Puedes acceder a tu servidor web a través de `http://localhost`.