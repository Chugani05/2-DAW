# Instalación de vsFTP en Ubuntu server
<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## Contenido


## Creación de usuarios

1. Vamos a crear 6 usuarios con su directorio personal con el siguente comando:
    ```sh
    sudo adduser nombre_usuario
    ```

2. Comprobamos que se hayan creado mediante:

    ```sh
    cat /etc/passwd
    ```

## Configuración de los usuarios
### Los usuarios, usuario1 y usuario6, estarán enjaulados en su directorio de trabajo.

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


### Los usuarios, usuario 2 y usuario5 no estarán enjaulados en su directorio de trabajo.
1. Descomentamos en el fichero el siguente comando:
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

3. Añadimos a los usuarios a esta lista:

    ```sh
    usuario2
    usuario5
    ```


### A los usuarios, usuario3 y usuario4, se les denegará el acceso al servidor


## Se activará el log de usuarios


## Se cerrará la conexión después de pasados cinco minutos inactivo.


## Se cifrarán las conexiones SSL en el servidor.