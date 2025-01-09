# LAMP en Ubuntu Server
<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## Contenido

## Instalación en Ubuntu Server

1. **Actualizar el sistema:**
   ```sh
   sudo apt update
   sudo apt upgrade
   ```

2. **Instalación del servidor Apache:**

    Realizamos la instalación de Apache como la hemos echo en la [anterior tarea](../tarea08/README.md#instalación-y-configuración-básica).

3. **Instalación del servidor de base de datos MaríaDB:**

    ```sh
    sudo apt install mariadb-server mariadb-client
    ```

    ```sh
    
    ```

    <div align=center>
        <img src="./imgs/" alt="comprobación del estado del servidor" width="100%">
    </div>

    ```sh
    sudo systemctl enable mariadb
    ```

    ```sh
    mariadb --version
    ```

    <div align=center>
        <img src="./imgs/" alt="comprobación de la versión del servidor" width="100%">
    </div>

