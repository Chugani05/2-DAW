# Apache
<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## Contenido
- [¿Qué es Apache?](#qué-es-apache)
    - [Características principales de Apache](#características-principales-de-apache)
    - [Casos de uso comunes](#casos-de-uso-comunes)
- [Instalación y configuración básica](#instalación-y-configuración-básica)
- [Configuración de hosts virtuales](#configuración-de-hosts-virtuales)
- [Certificados autofirmados SSL](#certificados-autofirmados-ssl)


## ¿Qué es Apache?
Apache, oficialmente conocido como Apache HTTP Server, es un servidor web de código abierto que se utiliza para servir contenido web a través de Internet. Fue desarrollado por la Apache Software Foundation y lanzado por primera vez en 1995. Desde entonces, Apache ha sido uno de los servidores web más utilizados en el mundo, conocido por su robustez, flexibilidad y amplia gama de características.

### Características principales de Apache:
- **Código abierto**: Apache es un software de código abierto, lo que significa que es gratuito y su código fuente está disponible para que cualquier persona lo modifique y mejore.
- **Compatibilidad multiplataforma**: Apache se puede ejecutar en varios sistemas operativos, incluidos Linux, Windows y macOS.
- **Arquitectura modular**: Apache utiliza una arquitectura modular que permite a los administradores agregar o quitar características según sea necesario. Esto se logra mediante la activación de módulos que proporcionan funcionalidades adicionales, como la autenticación, el manejo de URL y la compresión.
- **Configuración flexible**: La configuración de Apache se realiza mediante archivos de texto (como `httpd.conf` y `.htaccess`), lo que permite a los administradores personalizar el comportamiento del servidor de manera sencilla.
- **Soporte para múltiples lenguajes de programación**: Apache es compatible con varios lenguajes de programación, como PHP, Python, Perl y Ruby, lo que lo hace adecuado para aplicaciones web dinámicas.
- **Manejo de conexiones concurrentes**: Apache puede manejar múltiples solicitudes simultáneamente, aunque su enfoque tradicional puede ser menos eficiente que el modelo basado en eventos de otros servidores como Nginx.

### Casos de uso comunes:
- Servir contenido estático (HTML, imágenes, CSS, JavaScript).
- Ejecutar aplicaciones web dinámicas mediante la integración con lenguajes de programación como PHP.
- Implementar configuraciones de seguridad y autenticación.
- Proporcionar redirecciones y reescrituras de URL.
- Configurar sitios virtuales para alojar múltiples dominios en un solo servidor.

En resumen, Apache es un servidor web versátil y ampliamente utilizado que ofrece una gran cantidad de características y opciones de configuración, lo que lo convierte en una opción popular para desarrolladores y administradores de sistemas en todo el mundo.


## Instalación y configuración básica

Descripción de los pasos para instalar y configurar Apache2 en un sistema Linux.

1. **Actualizar los repositorios:**
    ```bash
    sudo apt update
    ```

2. **Instalar Apache2:**
    ```bash
    sudo apt install apache2 -y
    ```

3. **Verificar la instalación:**
   ```bash
    apache2 -v
    ```

4. **Iniciar Apache2:**
    Para iniciar el servicio de Apache2, utiliza el siguiente comando:

    ```bash
    sudo systemctl start apache2
    ```

    Puedes verificar que Apache2 esté en funcionamiento con:

    ```bash
    sudo systemctl status apache2
    ```

5. **Habilitar Apache2 al inicio:**

    Para asegurarte de que Apache2 se inicie automáticamente cuando el sistema se reinicie, ejecuta el siguiente comando:

    ```bash
    sudo systemctl enable apache2
    ```

6. **Comprobar la instalación en el navegador:**
   
   Abre un navegador web y accede a `http://localhost`. Si Apache2 está funcionando correctamente, deberías ver la página predeterminada de Apache2, que indica que el servidor web está activo.

7. **Configuración básica de Apache2:**

    7.1. **Archivos principales de configuración:**

    Los archivos de configuración de Apache2 se encuentran en /etc/apache2/. Los archivos más importantes son:

    - /etc/apache2/apache2.conf: Configuración global de Apache2.
    - /etc/apache2/sites-available/: Aquí se encuentran los archivos de configuración de los sitios virtuales.
    - /etc/apache2/sites-enabled/: Contiene enlaces simbólicos a los sitios habilitados.
  
    7.2. **Habilitar el módulo mod_rewrite:**

    Para habilitar la reescritura de URLs, usa el siguiente comando:

    ```bash
    sudo a2enmod rewrite
    ```

    Luego, reinicia Apache para aplicar los cambios:

    ```bash
    sudo systemctl restart apache2
    ```

    7.3. **Configuración del archivo `000-default.conf:`**

    El archivo de configuración predeterminado para sitios en Apache es `000-default.conf`, ubicado en `/etc/apache2/sites-available/`.

    Puedes editarlo para cambiar la raíz del documento o agregar configuraciones adicionales. Para editarlo, utiliza el siguiente comando:

    ```bash
    sudo nano /etc/apache2/sites-available/000-default.conf
    ```

    Ejemplo de configuración básica:

    ```bash
    <VirtualHost *:80>
        DocumentRoot /var/www/html
        ServerName localhost
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
    </VirtualHost>
    ```

8. **Reiniciar Apache:**

    Después de realizar cambios en los archivos de configuración, debes reiniciar Apache para aplicar los cambios:

    ```bash
    sudo systemctl restart apache2
    ```

9. **Verificar la configuración:**
    ```bash
    sudo apachectl configtest
    ```

    Si todo está bien configurado, deberías ver el mensaje `Syntax OK`.

10. **Configurar el firewall:**

    Si tienes un firewall activo, asegúrate de permitir el tráfico HTTP (puerto 80) y HTTPS (puerto 443). Para permitir estos puertos en `ufw`, ejecuta los siguientes comandos:

    ```bash
    sudo ufw allow in "Apache Full"
    ```

    Verifica el estado del firewall con:

    ```bash
    sudo ufw status
    ```

11. **Verificar los logs de Apache:**

    Los logs de Apache se encuentran en `/var/log/apache2/`. Los dos logs principales son:

    - error.log: Contiene errores del servidor Apache.
    - access.log: Registra las solicitudes entrantes al servidor.
  
    Puedes revisar estos logs para solucionar problemas o verificar el estado del servidor:

    ```bash
    sudo tail -f /var/log/apache2/error.log
    sudo tail -f /var/log/apache2/access.log
    ```


## Configuración de hosts virtuales

Este apartado describe el proceso para configurar hosts virtuales en Apache para dos dominios: `prueba1.com` y `prueba2.com`.

1. **Comprobar el estado de Apache:**
    ```bash
    sudo systemctl status apache2
    ```

2. **Crear directorios para los sitios:**
    ```bash
    sudo mkdir -p /var/www/html/prueba2.com/public
    ```

3. **Crear el archivo index.html para cada sitio:**

    Crea el archivo `index.html` para el primer sitio:


    ```bash
    sudo nano /var/www/html/prueba1.com/public/index.html
    ```

    Luego, copia el archivo `index.html` para el segundo sitio:

    ```bash
    sudo cp /var/www/html/prueba1.com/public/index.html /var/www/html/prueba2.com/public/index.html
    sudo nano /var/www/html/prueba2.com/public/index.html
    ```

4. **Verificar los directorios:**
    ```bash
    cd /var/www/html

    ls -la
    # output:
    ```

5. **Cambiar permisos de los directorios:**
    ```bash
    sudo chown -R www-data: /var/www/html/pruebaX.com
    ```

6. **Crear y configurar los archivos de configuración de Apache:**

    Ve a la carpeta de sitios disponibles de Apache:

    ```bash
    cd /etc/apache2/sites-available/

    ls
    # output:
    ```

    Crea el archivo de configuración para `prueba1.com`:

    ```bash
    sudo nano prueba1.com.conf
    ```

    Contenido del archivo `prueba1.com.conf`:

    ```apache
    <VirtualHost *:80>
        ServerName prueba1.com
        ServerAlias www.prueba1.com
        ServerAdmin webmaster@prueba1.com
        DocumentRoot /var/www/html/prueba1.com/public

        <Directory /var/www/>html/prueba1.com/public>
            Options -Indexes +FollowSymLinks
            Allowoverride All
        </Directory>

        ErrorLog ${APACHE_LOG_DIR}/prueba1.com-error.log
        CustomLog ${APACHE_LOG_DIR}/prueba1.com-access.log combined
    </VirtualHost>
    ```

    Copia este archivo para `prueba2.com` y haz los cambios necesarios:

    ```bash
    sudo cp prueba1.com.conf prueba2.com.conf
    sudo nano prueba2.com.conf
    ```

7. **Habilitar los sitios:**
    ```bash
    sudo a2ensite pruebaX.com
    ```

8. **Verificar la configuración:**

    Verifica la configuración de Apache:

    ```bash
    sudo apachectl configtest
    ```

    Si hay errores, edita el archivo de configuración global de Apache:

    ```bash
    sudo nano /etc/apache2/apache2.conf
    ```

    Añade o modifica la línea ServerName:

    ```apache
    Servername localhost
    ```

    Vuelve a verificar la configuración:

    ```bash
    sudo apachectl configtest
    ```

9. **Reiniciar Apache:**
    ```bash
    sudo systemctl restart apache2
    sudo systemctl status apache2
    ```

10. **Configurar el archivo de hosts:**

    Edita el archivo de hosts para redirigir los dominios a `localhost`:

    ```bash
    sudo nano /etc/hosts
    ```

    Añade las siguientes líneas:

    ```apache
    127.0.0.1   pruebaX.com
    127.0.0.1   www.pruebaX.com
    ```

11. **Verificar la configuración:**

    ```bash
    ping pruebaX.com
    ```

Si todo está configurado correctamente, deberías ver respuestas desde `pruebaX.com` y `www.pruebaX.com`


## Certificados autofirmados SSL