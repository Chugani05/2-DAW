# Configuración usuarios, logs, SSL de vsFTP
<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## 

## Creación de usuarios

1. Creamos usuarios con su directorio personal con el siguente comando:
    ```sh
    sudo adduser nombre_usuario
    ```

2. Comprobamos que se hayan creado mediante:

    ```sh
    cat /etc/passwd
    ```

## Configuración de los usuarios
### Usuarios enjaulados en su directorio de trabajo.

1. Acceder al fichero de configuración `vsftpd`.

    ```sh
    sudo nano /etc/vsftpd.conf
    ```

2. Descomentamos en el fichero el siguente comando:

    ```sh
    # Enjaula los usuarios locales.
    chroot_local_user=YES
    ```

3. Añadimos el siguente commando:

    ```sh
    # Para que los usuarios enjaulados puedan crear ficheros en su directorio personal.
    allow_writeable_chroot=YES
    ```


### Usuarios que no estarán enjaulados en su directorio de trabajo.
1. Descomentamos en el fichero `vsftpd.conf` el siguente comando:
    ```sh
    # Activamos la lista donde meteremos los usuarios que no estarán enjaulados.
    chroot_list_enable=YES

    # La lista, que se encuenta en esta ubicación.
    chroot_list_file=/etc/vsftpd.chroot_list
    ```

2. Creamos el archivo `vsftpd.chroot_list`, que engloba a los usuarios que se pueden mover libremente. el resto estarán enjaulados:

    ```sh
    sudo nano /etc/vsftpd.chroot_list
    ```

3. Añadimos los usuarios que no queramos enjaular a esta lista.



### Usuarios a los que se les denegará el acceso al servidor

1.  Volvemos a acceder al fichero de configuración `vsftpd` como en el [apartado anterior](#usuarios-enjaulados-en-su-directorio-de-trabajo).

2.  Añadimos los siguentes commandos:

    ```sh
    # Activación de lista donde estarán los usuarios bloqueados.
    userlist_enable=YES

    # Activamos también la lista de denegación.
    userlist_ddeny=YES

    # Creamos la lista con su ubicación.
    userlist_file=/etc/vsftpd.user_list
    ```

3. Creamos el archivo `vsftpd.user_list`, que engloba a los usuarios que se les deniega el acceso:

    ```sh
    sudo nano /etc/vsftpd.user_list
    ```

4. Añadimos a los usuarios que queramos denegar el acceso al servidor a esta lista.


## Se activará el log de usuarios

1. Accedemos de nuevo al fichero de configuración `vsftpd` como en el [apartado anterior](#usuarios-enjaulados-en-su-directorio-de-trabajo).

2. Comprobamos que el siguente comando este descomentado:

    ```sh
    ftpd_banner=Bienbenidos al servidor de rc
    ```

3. Descomentamos en el fichero el siguente comando:

    ```sh
    # Los logs se guardan en este archivo de forma automatica.
    xferlog_file=/var/log/vsftpd.log
    ```


## Se cerrará la conexión después de pasados cinco minutos inactivo.

1.  Volvemos a acceder al fichero de configuración `vsftpd` como en el [apartado anterior](#usuarios-enjaulados-en-su-directorio-de-trabajo).

2.  Añadimos los siguentes commandos:

    ```sh
    idle_session_timeout=300
    ```


## Se cifrarán las conexiones SSL en el servidor.

1. Generamos un certificado autofirmado, con el que cifraremos las conexiones, mediente el siguiente comando:

    ```sh
    openssl req -x509 -nodes -newkey rsa:2048 -keyout /etc/ssl/private/vsftpd.pem -out /etc/ssl/certs/vsftpd.pem -days 365
    ```

2. Accedemos de nuevo al fichero de configuración `vsftpd` como en el [apartado anterior](#usuarios-enjaulados-en-su-directorio-de-trabajo).

3. Cambiamos los comandos en el fichero para que nos queden de la sigiente forma:

    ```sh
    rsa_cert_file=/etc/ssl/certs/vsftpd.pem
    rsa_private_key_file=/etc/ssl/private/vsftpd.pem
    ssl_enable=YES
    ```