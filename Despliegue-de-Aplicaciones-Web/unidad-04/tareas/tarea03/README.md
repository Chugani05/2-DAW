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

### Configuración de los usuarios
### Los usuarios, usuario1 y usuario6, estarán enjaulados en su directorio de trabajo.


### Los usuarios, usuario 2 y usuario5 no estarán enjaulados en su directorio de trabajo.


### A los usuarios, usuario3 y usuario4, se les denegará el acceso al servidor


## Se activará el log de usuarios


## Se cerrará la conexión después de pasados cinco minutos inactivo.


## Se cifrarán las conexiones SSL en el servidor.