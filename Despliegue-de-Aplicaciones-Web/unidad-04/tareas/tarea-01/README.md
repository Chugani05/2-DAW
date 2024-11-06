# Instalar de proFTP
<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## Contenido
- [Instalación del Servidor FTP]()
- [Configuración del Servidor FTP]()
- [Conexión al Servidor FTP]()
- [Conexión desde el Navegador]()
- [Conexión desde FileZilla]()
- [Modificaciones en la Configuración]()
- [Creación de Usuarios Virtuales]()
- [Conexión con el Usuario Virtual]()

## Instalación del Servidor FTP
### Actualizar el sistema
```bash
sudo apt-get update
```

### Instalar ProFTPD
```bash
sudo apt-get install proftpd
```

### Verificar el estado del servidor
```bash
service proftpd status
```

<div align=center>
  <img src="./imgs/img01.png" alt="comprobación desde terminal">
</div>

### Consultar la versión de ProFTPD
```bash
proftpd -v

# OUTPUT: ProFTPD Version 1.3.8b
```

### Verificar los usuarios creados durante la instalación
```bash
cat /etc/passwd
```

<div align=center>
  <img src="./imgs/img02.png" alt="usuarios creados en la instalación">
</div>

### Listar los archivos de configuración de ProFTPD
```bash
ls /etc/proftpd
```

<div align=center>
  <img src="./imgs/img03.png" alt="ficheros creados en la instalación">
</div>

----

### Hacer una copia de seguridad del archivo de configuración
```bash
cp /etc/proftpd/proftpd.conf /etc/proftpd/proftpd.conf.copia
```

## Configuración del Servidor FTP
### Editar el archivo de configuración
```bash
nano /etc/proftpd/proftpd.conf
```

### Limpiar el archivo de comentarios y líneas en blanco
```bash
vi /etc/proftpd/proftpd.conf

:g/^/s*#/d

:g/^$/d
```

Guardar y salir con `:wq`.

### Revisar el archivo de usuarios restringidos
```bash
cat /etc/ftpusers
```

## Conexión al Servidor FTP
### Conexión desde el Terminal

## Conexión desde el Navegador
En el navegador abrimos el siguente enlace: `ftp://dirección_ip_servidor_FTP`.

## Conexión desde FileZilla
Si no tienes instalado FileZilla, puedes ver como se hace la instalación en la [anterior tarea](../../../unidad-03/tareas/tarea-07/README.md#instalación-de-filezilla). 

Configurar servidor, nombre de usuario, contraseña y puerto (21).

## Modificaciones en la Configuración
### Modificar proftpd.conf
```bash
nano /etc/proftpd/proftpd.conf
```
Cambiar ServerName y otras configuraciones según se requiera.

### Verificar registros de acceso
```bash
tail -n 15 /var/log/proftpd/proftpd.log

tail -n 15 /var/log/proftpd/xfer.log
```

### Agregar mensajes de bienvenida y error
```bash
AccessGrantMSG "Bienvenido al servidor FTP de (mi_nombre)"

AccessDenyMSG "Error de entrada a mi servidor FTP"
```

### Modificar DefaultRoot
```bash
DefaultRoot ~
```

### Reiniciar el servicio para aplicar cambios
```bash
service proftpd reload
```

## Creación de Usuarios Virtuales
### Incluir módulos en proftpd.conf
```bash
Include /etc/proftpd/modules.conf

Require ValidShell off

AuthUser File /etc/proftpd/ftpd.passwd
```

### Crear directorio para el usuario:
```bash
mkdir /var/ftp/carpetauser1JSR
```

### Crear archivo de contraseñas
```bash
touch /etc/proftpd/ftpd.passwd
```

### Crear un usuario virtual
```bash
ftpasswd --passwd --name=user1JSR --uid=3000 --gid=3000 --home=/var/ftp/
```

### Desbloquear el usuario
```bash
ftpasswd --passwd --name=user1JSR --unlock
```

### Crear un archivo de prueba en el directorio del usuario
```bash
cd /var/ftp/carpetauser1JSR

nano pn.txt
```

## Conexión con el Usuario Virtual
```bash
Servidor: ip_servidor
Nombre de usuario: user1JSR
Contraseña: la que se configuró.
```
