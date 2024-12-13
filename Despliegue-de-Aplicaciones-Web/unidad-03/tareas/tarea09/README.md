# Nginx
<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## Contenido
- [¿Qué es Nginx?](#qué-es-nginx)
    - [Características principales de Nginx](#características-principales-de-nginx)
    - [Casos de uso comunes](#casos-de-uso-comunes)
- [Instalación y configuración básica](#instalación-y-configuración-básica)
- [Configuración de hosts virtuales](#configuración-de-hosts-virtuales)
- [Certificados autofirmados SSL](#certificados-autofirmados-ssl)


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
   ```sh
   sudo apt update
   ```

2. **Instalar Nginx:**
    ```sh
    sudo apt install nginx
    ```

3. **Verificar el estado del servicio Nginx:**
    ```sh
    sudo systemctl status nginx
    ```

4. **Probar la configuración de Nginx:**
    ```sh
    sudo nginx -t
    ```

5. **Navegar al directorio de configuración de Nginx:**
    ```sh
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
    ```sh
    cd sites-available

    ls
    # output: default
    ```

7. **Acceder al directorio `sites-enabled`:**
    ```sh
    cd sites-enabled

    ls -l
    # output:
    # total 0
    # lrwxrwxrwx 1 root root 34 Dec  3 15:28 default -> /etc/nginx/sites-available/default
    ```

8. **Ver el contenido del archivo `default`:**
    ```sh
    cat default
    ```

9. **Navegar al directorio donde se encuentran los archivos web:**
    ```sh
    cd sites-enabled

    ls -l
    # output:
    # total 0
    # lrwxrwxrwx 1 root root 34 Dec  3 15:28 default -> /etc/nginx/sites-available/default
    ```

10. **Reiniciar el servicio Nginx:**
    ```sh
    sudo systemctl restart nginx
    ```

11. **Eliminar el archivo de índice predeterminado:**
    ```sh
    sudo rm index.nginx-debian.html
    ```

12. **Crear un nuevo archivo de índice HTML:**
    ```sh
    nano index.html
    ```

13. **Reiniciar nuevamente el servicio Nginx:**
    ```sh
    sudo systemctl restart nginx
    ```

14. **Verificar el estado del servicio Nginx:**
    ```sh
    sudo systemctl status nginx
    ```

Con estos pasos, Nginx debería estar instalado y funcionando correctamente en tu sistema. Puedes acceder a tu servidor web a través de `http://localhost`.


## Configuración de hosts virtuales

Este apartado describe el proceso para configurar hosts virtuales en Nignx para tres dominios: `empresa1.com`, `empresa2.com` y `empresa3.com`.

1. **Comprobar el estado de Nginx:**
    ```sh
    sudo systemctl status nginx
    ```

2. **Crear directorios para los sitios:**
    ```sh
    sudo mkdir -p /var/www/empresaX.com/public
    ```

3. **Crear el archivo index.html para cada sitio:**

    Crea el archivo `index.html` para el primer sitio:s

    ```sh
    sudo nano /var/www/empresaX.com/public/index.html
    ```

    Añadimos el siguiente contenido al archivo:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Empresa X | Home</title>
    </head>
    <body>
        <h1>Home page of www.empresaX.com</h1>
    </body>
    </html>
    ```

    Luego, copia el archivo `index.html` para el segundo y el tercer sitio de la siguente forma, tras esto editamos el archivo como necesitemos:

    ```sh
    sudo cp /var/www/empresaX.com/public/index.html /var/www/empresaX.com/public/index.html
    sudo nano /var/www/empresaX.com/public/index.html
    ```

4. **Verificar los directorios:**
    ```sh
    cd /var/www/html

    ls -la
    # output:
    # total 12
    # drwxr-xr-x 2 root root 4096 Dec  3 15:53 .
    # drwxr-xr-x 6 root root 4096 Dec  4 15:16 ..
    # -rw-r--r-- 1 root root   30 Dec  3 15:53 index.html
    ```

5. **Cambiar permisos de los directorios:**
    ```bash
    sudo chown -R www-data: /var/www/empresaX.com
    sudo chmod -R 755 /var/www/empresaX.com
    ```

6. **Crear y configurar los archivos de configuración de Nginx:**

    Ve a la carpeta de sitios disponibles de Nginx:

    ```bash
    cd /etc/nginx/sites-available/

    ls
    # output: default
    ```

    Copia el archivo `default` a `empresaX.com.conf`:

    ```bash
    sudo cp default empresaX.com.conf
    ```

    Crea el archivo de configuración para `empresa1.com`:

    ```bash
    sudo nano empresa1.com.conf
    ```

    Contenido del archivo `empresa1.com.conf`:

    ```nginx
    listen 80;
    listen [::]:80;
    root /var/www/empresa1
    server_name empresa1.com wwww.empresa1.com
    ```

    Copia este archivo para `empresaX.com` y haz los cambios necesarios:

    ```bash
    sudo cp empresa1.com.conf empresaX.com.conf
    sudo nano empresaX.com.conf
    ```

7. **Habilitar los sitios:**
    ```bash
    sudo ln -s /etc/nginx/sites-available/empresaX.com.conf /etc/nginx/sites-enabled/

    ls -l 
    # output:
    # total 0
    # lrwxrwxrwx 1 root root 34 Dec  3 15:28 default -> /etc/nginx/sites-available/default
    # lrwxrwxrwx 1 root root 44 Dec 10 15:02 empresa1.com.conf -> /etc/nginx/sites-available/empresa1.com.conf
    # lrwxrwxrwx 1 root root 44 Dec 10 15:03 empresa2.com.conf -> /etc/nginx/sites-available/empresa2.com.conf
    # lrwxrwxrwx 1 root root 44 Dec 10 15:03 empresa3.com.conf -> /etc/nginx/sites-available/empresa3.com.conf
    ```

    Borra el archivo `default` para que no haga conflicto:

    ```bash
    sudo rm default
    ```

8. **Verificar la configuración:**

    Verifica la configuración de Nginx:

    ```bash
    sudo nginx -t
    ```

9. **Reiniciar Nginx:**
    ```bash
    sudo systemctl restart nginx
    sudo systemctl status nginx
    ```

10. **Configurar el archivo de hosts:**

    Edita el archivo de hosts para redirigir los dominios a `localhost`:

    ```bash
    sudo nano /etc/hosts
    ```

    Añade las siguientes líneas:

    ```nginx
    127.0.0.1   empresaX.com
    127.0.0.1   www.empresaX.com
    ```

11. **Verificar la configuración:**

    ```bash
    ping empresaX.com
    ```

Si todo está configurado correctamente, se debería ver desde `www.empresaX.com` y `empresaX.com`.


## Certificados autofirmados SSL