# Instalación de vsFTP en Ubuntu server
<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## Contenido
- [Contenido](#contenido)
- [Instalación de vsFTPd](#instalación-de-vsftpd)
- [Comandos utiles](#comandos-utiles)
- [Configuración del servidor](#configuración-del-servidor)
  - [Empezamos creando un fichero `netplan`, acedemos a este mediante el siguiente comando:](#empezamos-creando-un-fichero-netplan-acedemos-a-este-mediante-el-siguiente-comando)
  - [Accedemos al fichero de configuración `vsftpd` mediente el sigueinte comando:](#accedemos-al-fichero-de-configuración-vsftpd-mediente-el-sigueinte-comando)
- [Creación de usuarios locales engaulados en su directorio, exepto el `administrador`](#creación-de-usuarios-locales-engaulados-en-su-directorio-exepto-el-administrador)
  - [Añadiendo los usuarios](#añadiendo-los-usuarios)
  - [Configuración de los usuarios](#configuración-de-los-usuarios)
- [Creación de usuarios locales que no pueden conectarse al servidir FTP](#creación-de-usuarios-locales-que-no-pueden-conectarse-al-servidir-ftp)


## Instalación de vsFTPd

1. En la maquina servidor instalamos vsFTP mediente el siguiente comando:

    ```sh
    sudo apt install vsftpd
    ```

2. También podemos instalar `net-tools`, que nos permite lanzar `ifconfig`, este nos devuelve la información de nuestra red.
    ```sh
    sudo apt-get install net-tools
    ```


## Comandos utiles

- Ver estado:
    ```sh
    sudo service vsftpd status
    ```

- Apagar:
    ```sh
    sudo service vsftpd stop
    ```

- Arrancar:
    ```sh
    sudo service vsftpd start
    ```

- Reiniciar:
    ```sh
    sudo service vsftpd restart
    ```


## Configuración del servidor
### Empezamos creando un fichero `netplan`, acedemos a este mediante el siguiente comando:

```sh
sudo nano /etc/netplan/00-installer-config.yaml
```

1. Y lo cambiamos para que se vea igual que en la siguiente imagen:

<div align=center>
    <img src="./imgs/img01.png" alt="1">
</div>

> [!NOTE]
> Cuidado con los espacios!! Si la alineación no está bien, no funcionara.

2. Para aplicar los cambios realizados, ejecutamos el siguiente comando:

    ```sh
    sudo netplan apply
    ```

### Accedemos al fichero de configuración `vsftpd` mediente el sigueinte comando:

```sh
sudo nano /etc/vsftpd.conf
```

1. Y cambiamos las siguientes configuraciones:

    ```sh
    # Cambiamos. El usuario anonymous puede conectarse y descargar ficheros, estará enjaulado.
    anonymous_enable=YES

    # Añadimos. Un directorio a los usuarios anonymous, al conectarse se les redirigira automaticamente a ese directorio..
    anon_root=/srv/ftp/anonimo

    # Descomentamos. Los usuarios locales pueden conectar y subir/descargar ficheros. 
    write_enable=YES
    local_unmask=022
    ```

> [!IMPORTANT]
> Tras hacer una modificación en cualquier archivo, hay que hacer un restart como ya indicamos [anteriormente](#comandos-utiles).


## Creación de usuarios locales engaulados en su directorio, exepto el `administrador`
### Añadiendo los usuarios

1. Vamos a crear 2 usuarios con su directorio personal con el siguente comando:
    ```sh
    # Creamos un usuario llamado `Alex`
    sudo adduser alex

    # Creamos un usuario llamado `Dom`
    sudo adduser dom
    ```

2. Comprobamos que se hayan creado mediante:

    ```sh
    cat /etc/passwd
    ```

### Configuración de los usuarios
1.  Volvemos a acceder al fichero de configuración `vsftpd` como en el apartado [anterior](#accedemos-al-fichero-de-configuración-vsftpd-mediente-el-sigueinte-comando).

2. Descomentamos en el fichero los siguentes comandos:

    ```sh
    # Enjaula los usuarios locales.
    chroot_local_user=YES

    # Activamos la lista donde meteremos los usuarios que queramos enjaular.
    chroot_list_enable=YES

    # La lista, que se encuenta en esta ubicación.
    chroot_list_file=/etc/vsftpd.chroot_list
    ```

3. Añadimos el siguente commando:

    ```sh
    # Para que los usuarios enjaulados puedan crear ficheros en su directorio personal.
    allow_writeable_chroot=YES
    ```

4. Creamos el archivo `vsftpd.chroot_list`, que engloba a los usuarios que se pueden mover libremente. el resto estarán enjaulados:

    ```sh
    sudo nano /etc/vsftpd.chroot_list
    ```


## Creación de usuarios locales que no pueden conectarse al servidir FTP