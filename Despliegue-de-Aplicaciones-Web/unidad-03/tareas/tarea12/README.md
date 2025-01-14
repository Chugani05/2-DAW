# Instalar en Lamp nuestra página implementada en xampp
<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## Contenido

## Crear virtual host 
```sh
cd etc
sudo nano hosts
127.0.0.1   lamp.com
```

## Crear carpeta de nueva pagina y copiar todos los ficheros
```sh
sudo mkdir var/www/html/lamp.com
sudo cp * var/www/html/lamp.com
```
## Editar configuracion de apache 
```sh
cd etc/apache2/sites-available
sudo nano lamp.com.conf

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
## Habilitar el sitio
```sh
sudo a2ensite lamp.com
```

# Instalar phpmyadmin
## Instalar
```sh
sudo apt install phpmyadmin
```
## Crear fichero de configuracion para apache
```sh
sudo cd etc/apache2/conf-enabled
sudo nano phpmyadmin.conf

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
## Habilitar configuracion
```sh
sudo a2enconf phpmyadmin.conf
```

# Base de datos
## Crear base de datos en MariaDB
```sql
sudo mariadb -u root
CREATE DATABASE phpmyadmin;
```
## Configurar accesso de usuario

```sql
GRANT ALL PRIVILEGES   ON *.*   TO 'developer';
```
## Acceder al panel de control, crear tabla de usuarios

http://lamp.com/phpmyadmin

![1.png](1.png)

## Comprobar que todo funciona bien
![2.png](2.png)
![3.png](3.png)