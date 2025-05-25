# Instalar en Lamp nuestra página implementada en xampp

<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="60%">
</div>

## Contenido
- [Crear virtual host](#crear-virtual-host)
- [Copiar los ficheros a una nueva carpeta](#copiar-los-ficheros-a-una-nueva-carpeta)
- [Editar configuracion de Apache](#editar-configuracion-de-apache)
- [Instalar phpMyAdmin](#instalar-phpmyadmin)
- [Crear la base de datos en MariaDB](#crear-la-base-de-datos-en-mariadb)

## Crear virtual host

Para comenzar, es necesario configurar un Virtual Host en el archivo de hosts:

```sh
cd /etc
sudo nano hosts
```

Agrega la siguiente línea:

```sh
127.0.0.1   lamp.com
127.0.0.1   www.lamp.com
```

## Copiar los ficheros a una nueva carpeta

A continuación, crea una carpeta para la nueva página y copia todos los archivos necesarios:

```sh
sudo mkdir /var/www/html/lamp.com
sudo cp -r ~/Desktop/2-DAW/Despliegue-de-Aplicaciones-Web/unidad-03/tareas/tarea-07/ /var/www/html/lamp.com/
```

## Editar configuracion de Apache 

Ahora, edita la configuración de Apache para el nuevo Virtual Host:

```sh
cd /etc/apache2/sites-available
sudo nano lamp.com.conf
```

Agrega la siguiente configuración:

```apache
<VirtualHost *:80>
        ServerName lamp.com
        ServerAlias www.lamp.com
        ServerAdmin webmaster@lamp.com
        DocumentRoot /var/www/html/lamp.com
        <Directory /var/www/html/lamp>
                options -Indexes +FollowSymlinks
                AllowOverride All
        </Directory>
        Errorlog ${APACHE_LOG_DIR}/lamp.com-error.log
        CUSTOMLOG ${APACHE_LOG_DIR}/lamp.com-access.log combined
</VirtualHost>
```

Para habilitar el nuevo sitio, ejecuta el siguiente comando:

```sh
sudo a2ensite lamp.com
sudo systemctl reload apache2
```

<div align=center>
    <img src="./imgs/01.png" alt="proceso de creación del usuario" width="80%">
</div>

## Instalar phpMyAdmin

Instala phpMyAdmin utilizando el siguiente comando:

```sh
sudo apt install phpmyadmin
```

Crea un archivo de configuración para phpMyAdmin:

```sh
cd /etc/apache2/conf-available
sudo nano phpmyadmin.conf
```

Agrega la siguiente configuración:

```apache
Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Disallow web access to directories that don't need it
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

Habilita la configuración de phpMyAdmin:

```sh
sudo a2enconf phpmyadmin.conf
sudo systemctl reload apache2
```

## Crear la base de datos en MariaDB

Accede a MariaDB y crea una nueva base de datos:

```sql
sudo mariadb -u root
CREATE DATABASE lamp;
```

Exporta la base de de InfinityFree a phpMyAdmin:

1. Accedemos a nuestro sitio web de InfinityFree y hacemos clic en el botón de `MySQL Database`.
<div align=center>
    <img src="./imgs/03.png" alt="sitio web de InfinityFree" width="80%">
</div>

2. Esto nos llevará a otra página donde seleccionaremos `phpMyAdmin`
<div align=center>
    <img src="./imgs/04.png" alt="sitio web de InfinityFree 2" width="80%">
</div>

3. Se nos mostrará el panel de control de phpMyAdmin, donde debemos ingresar a la opción `Export`.
<div align=center>
    <img src="./imgs/05.png" alt="panel de control de phpMyAdmin en InfinityFree" width="80%">
</div>

4. En esta sección, simplemente debemos hacer clic en `Go` para exportar nuestra base de datos.
<div align=center>
    <img src="./imgs/06.png" alt="panel de control de phpMyAdmin en InfinityFree 2" width="80%">
</div>

Accede al panel de control de phpMyAdmin en la siguiente URL: `http://lamp.com/phpmyadmin`

1. Ingresamos con nuestro nombre de usuario y contraseña.
<div align=center>
    <img src="./imgs/02.png" alt="login de phpMyAdmin" width="80%">
</div>

2. Seleccionamos la base de datos que hemos creado previamente, en este caso `lamp`.
<div align=center>
    <img src="./imgs/07.png" alt="panel de control de phpMyAdmin" width="80%">
</div>

3. Accedemos a la sección de `Import`.
<div align=center>
    <img src="./imgs/08.png" alt="panel de control de phpMyAdmin 2" width="80%">
</div>

4. En esta sección, seleccionamos el archivo de la base de datos que exportamos anteriormente desde InfinityFree haciendo clic en `Browse`.
<div align=center>
    <img src="./imgs/09.png" alt="panel de control de phpMyAdmin 3" width="80%">
</div>

5. Una vez que hayamos seleccionado el archivo, desplazamos hacia abajo en la página y hacemos clic en `Import`.
<div align=center>
    <img src="./imgs/10.png" alt="panel de control de phpMyAdmin 4" width="80%">
</div>