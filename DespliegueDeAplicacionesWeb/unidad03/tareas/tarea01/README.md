# Confuguración de Xaamp

<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="80%">
</div>

## Contenido
- [Inicialización de Xampp](#inicialización-de-xampp)
- [Cambio de contraseña root](#cambio-de-contraseña-root)
- [Creación de nuevo usuario](#creación-de-nuevo-usuario)

## Inicialización de Xampp
### Utilizando el siguiente comando abrimos el panel de control de xampp.
```bash
sudo /opt/lampp/manager-linux-x64.run
```
<div align=center>
    <img src="./imgs/img01.png" alt="1"/>
</div>


### En la parte de `Manage Servers`, iniciamos los servidores apretando el boton de `Start all`.
<div align=center>
    <img src="./imgs/img02.png" alt="2"/>
</div>

## Cambio de contraseña root
### A continuación, en internet buscamos `localhost`, y se nos abrira esta página. Aquí pinchamos en `phpMyAdmin`.
<div align=center>
    <img src="./imgs/img03.png" alt="3"/>
</div>

### Vamos al apartado de `User accounts`.
<div align=center>
    <img src="./imgs/img04.png" alt="4"/>
</div>

### Llegados a este ponto lo que queremos hacer es darle todos los privilegios al usuario root. Asi que buscamos donde el `user name` sea `root` y el `host name` sea `localhost`, y pinchamos en `edit privileges`.
<div align=center>
    <img src="./imgs/img05.png" alt="5"/>
</div>

### Estando en esta página, pinchamos en `change password` 
<div align=center>
    <img src="./imgs/img06.png" alt="6"/>
</div>

### Añadimos una contraseña a nuestro usuario root. Esto nos dará un error que correguiremos a continuación.
<div align=center>
    <img src="./imgs/img07.png" alt="7"/>
</div>

### Lo primero es ir a la pane de control de Xampp pinchar en `Open Application Folder`
<div align=center>
    <img src="./imgs/img09.png" alt="9"/>
</div>

### Se abre esta carpeta, en la que abrimos el archivo seleccionado `config.inc.php`.
<div align=center>
    <img src="./imgs/img10.png" alt="10"/>
</div>

### Dentro del fichero buscamos `$cfg['Server'][$i]['password'] = '';` y dentro de las comillas vacias ponemos la contraseña que le hayamos puesto al usuario root.
<div align=center>
    <img src="./imgs/img11.png" alt="11"/>
</div>

### Para acabar de arreglar el error, reiniciamos los servidores con el boton `Restart all`. Esto arregla el error en la página de localhost.
<div align=center>
    <img src="./imgs/img08.png" alt="8"/>
</div>

## Creación de nuevo usuario
### Volvemos al aprtado de `User accounts` y creamos un usuario nuevo. En la parte del `login information`, en `user name` ponemos en nombre del usuario, en `host name` cambiamos a `local` y ponemos `localhost`de nombre del host, y añadimos la contraseña del usuario. En la parte de `Datebase for user account` hacemos tick en `create a database with same name and grant all privileges`.
<div align=center>
    <img src="./imgs/img12.png" alt="12"/>
</div>

### Hacemos tick en la parte de `Data`y `Structure`.
<div align=center>
    <img src="./imgs/img13.png" alt="13"/>
</div>

### Llegados a este punto, ya tenemos el usuario creado. Lo último que nos queda por hacer es cambiar una cosa en el fichero de configuración.
<div align=center>
    <img src="./imgs/img14.png" alt="14"/>
</div>

### Dentro del fichero buscamos `$cfg['Server'][$i]['auth-type'] = 'configure';` y dentro de las ultimas comillas cambiamos y ponemos `http`.
<div align=center>
    <img src="./imgs/img11.png" alt="15"/>
</div>

### Desde ahora, cada vez que queramos entrar a `localhost` nos preguntara que usuario es con el que queremos entrar.
<div align=center>
    <img src="./imgs/img15.png" alt="16"/>
</div>