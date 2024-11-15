# Instalación de vsFTP en Ubuntu server
<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## Contenido


## Instalación de vsFTPd
En la maquina servidor instalamos vsFTP mediente el siguiente comando:

```sh
sudo apt install vsftpd
```

También podemos instalar `net-tools`, que nos permite lanzar `ifconfig`, este nos devuelve la información de nuestra red.
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

Y lo cambiamos para que se vea igual que en la siguiente imagen:
<div align=center>
    <img src="./imgs/img01.png" alt="1">
</div>

> [!NOTE]
> Cuidado con los espacios!! Si la alineación no está bien, no funcionara.

Para aplicar los cambios realizados, ejecutamos el siguiente comando:
```sh
sudo netplan apply
```

### Accedemos al fichero de configuración `vsftpd` mediente el sigueinte comando:

```sh
sudo nano /etc/vsftpd.conf
```

Y cambiamos las siguientes configuraciones:

```sh
# cambiamos
anonymous_enable=YES

# añadimos
anon_root=/srv/ftp/anonimo

# descomentamos
write_enable=YES
local_unmask=022
```