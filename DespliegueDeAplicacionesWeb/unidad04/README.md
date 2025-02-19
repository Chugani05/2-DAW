# Unidad 04 - Instalación y administración de servidores de transferencia de archivos.
<div align=center>
    <img src="../../extras/data.gif" alt="data" width="80%">
</div>

## Contenido
1. [Introducción a los Servidores de Transferencia de Archivos](#1-introducción-a-los-servidores-de-transferencia-de-archivos)
2. [Tipos de Servidores de Transferencia de Archivos](#2-tipos-de-servidores-de-transferencia-de-archivos)
3. [Instalación y Configuración de Servidores FTP](#3-instalación-y-configuración-de-servidores-ftp)
4. [Instalación y Configuración de Servidores SFTP](#4-instalación-y-configuración-de-servidores-sftp)
5. [Administración de Servidores de Transferencia de Archivos](#5-administración-de-servidores-de-transferencia-de-archivos)
6. [Seguridad en Servidores de Transferencia de Archivos](#6-seguridad-en-servidores-de-transferencia-de-archivos)
7. [Monitorización y Mantenimiento de Servidores de Transferencia de Archivos](#7-monitorización-y-mantenimiento-de-servidores-de-transferencia-de-archivos)
8. [Conclusiones](#8-conclusiones)

## 1. Introducción a los Servidores de Transferencia de Archivos
### ¿Qué es un servidor de transferencia de archivos?
- Un servidor de transferencia de archivos es un sistema que permite a los usuarios transferir archivos entre computadoras a través de redes.
- Los protocolos más comunes para la transferencia de archivos son **FTP**, **SFTP** y **FTPS**.
- Estos servidores permiten el acceso remoto a archivos y son esenciales en entornos empresariales y de desarrollo.

### Funciones principales:
- **Almacenamiento de archivos** para su acceso remoto.
- **Transferencia de archivos** entre sistemas.
- **Gestión de acceso** a través de autenticación de usuarios.

## 2. Tipos de Servidores de Transferencia de Archivos
### **FTP (File Transfer Protocol):**
- **FTP** es el protocolo más antiguo para la transferencia de archivos entre máquinas en una red.
- Usa los puertos 21 (control) y 20 (datos) por defecto.
- No proporciona encriptación de datos ni de contraseñas.

### **SFTP (SSH File Transfer Protocol):**
- **SFTP** es un protocolo seguro que utiliza SSH para cifrar la transferencia de archivos.
- Se utiliza comúnmente cuando se requiere alta seguridad y cifrado.

### **FTPS (FTP Secure):**
- **FTPS** es una extensión de FTP que permite cifrado de datos y control mediante SSL/TLS.
- Se utiliza para proteger la transferencia de archivos en redes inseguras.

## 3. Instalación y Configuración de Servidores FTP
### **Instalación de un Servidor FTP (vsftpd) en Ubuntu/Debian:**
1. Instalar el servidor FTP:
   ```bash
   sudo apt update
   sudo apt install vsftpd
   ```
   
2. Iniciar y habilitar el servicio:
   ```bash
   sudo systemctl start vsftpd
   sudo systemctl enable vsftpd
   ```
   
3. Configuración básica:
   - Editar el archivo de configuración de `vsftpd`:
     ```bash
     sudo nano /etc/vsftpd.conf
     ```
   - Configurar parámetros como:
     - `anonymous_enable=NO` (Desactivar acceso anónimo)
     - `local_enable=YES` (Habilitar acceso a usuarios locales)
     - `write_enable=YES` (Permitir escritura en directorios)
   
4. Reiniciar el servidor FTP:
   ```bash
   sudo systemctl restart vsftpd
   ```

### **Configuración de usuarios FTP:**
- Crear un usuario específico para FTP:
  ```bash
  sudo useradd -m ftpuser
  sudo passwd ftpuser
  ```

## 4. Instalación y Configuración de Servidores SFTP
### **Instalación de un Servidor SFTP (OpenSSH) en Ubuntu/Debian:**
1. Instalar OpenSSH Server (si no está instalado):
   ```bash
   sudo apt update
   sudo apt install openssh-server
   ```

2. Asegurarse de que el servicio SSH está activo:
   ```bash
   sudo systemctl status ssh
   ```

3. Configuración de acceso de usuarios:
   - Para acceder a SFTP, los usuarios deben tener acceso SSH.
   - No es necesario realizar configuraciones adicionales para habilitar SFTP, ya que es parte del servidor SSH.

4. Configuración de directorios:
   - Puedes restringir el acceso de un usuario SFTP a un directorio específico mediante la configuración de chroot:
     - Editar `/etc/ssh/sshd_config` y agregar:
       ```bash
       Match User ftpuser
       ChrootDirectory /home/ftpuser
       ForceCommand internal-sftp
       AllowTcpForwarding no
       ```

5. Reiniciar el servicio SSH:
   ```bash
   sudo systemctl restart ssh
   ```

## 5. Administración de Servidores de Transferencia de Archivos
### **Gestión de usuarios y permisos:**
- Asegurarse de que solo los usuarios autorizados tengan acceso.
- Asignar permisos adecuados a los directorios para evitar acceso no autorizado.

### **Logs y auditoría:**
- **FTP**: Los registros suelen encontrarse en `/var/log/vsftpd.log` o `/var/log/syslog`.
- **SFTP**: Los registros de acceso SSH se encuentran en `/var/log/auth.log`.
  
### **Backup de archivos:**
- Es importante realizar copias de seguridad de los archivos transferidos para prevenir pérdidas de datos.

## 6. Seguridad en Servidores de Transferencia de Archivos
### **Encriptación de la conexión:**
- **SFTP** y **FTPS** proporcionan encriptación de datos, mientras que **FTP** no cifra la información, lo que puede ser riesgoso.

### **Control de acceso:**
- **Autenticación de usuarios:** Asegurar que solo usuarios autenticados puedan acceder a los servidores FTP/SFTP.
- **Firewall:** Configurar el firewall para restringir accesos a puertos no necesarios.
  - Usar `ufw` en Ubuntu: 
    ```bash
    sudo ufw allow ssh
    sudo ufw allow ftp
    ```

### **Deshabilitar FTP anónimo:**
- Asegurarse de que **FTP anónimo** esté deshabilitado en la configuración del servidor.

### **Cifrado de contraseñas:**
- En **SFTP**, las contraseñas se cifran automáticamente mediante SSH.
- En **FTP**, es recomendable usar **FTPS** para encriptar la conexión.

## 7. Monitorización y Mantenimiento de Servidores de Transferencia de Archivos
### **Herramientas de Monitorización:**
- **Nagios** y **Zabbix** pueden ser configurados para monitorear servidores FTP/SFTP.
- **Logwatch** para analizar logs y generar reportes de actividad.

### **Mantenimiento de archivos y espacio:**
- Monitorear el uso de disco en los servidores para evitar quedarse sin espacio, especialmente cuando se almacenan grandes cantidades de archivos.
- Realizar limpieza periódica de archivos no utilizados.

### **Actualizaciones de seguridad:**
- Asegurarse de que el software de servidor FTP/SFTP esté actualizado con los últimos parches de seguridad.

## 8. Conclusiones
- La instalación y configuración adecuada de servidores de transferencia de archivos es crucial para garantizar una transferencia segura y eficiente de datos.
- Elegir entre FTP, SFTP o FTPS dependerá de las necesidades de seguridad y la infraestructura.
- La seguridad y el mantenimiento continuo del servidor son fundamentales para evitar vulnerabilidades y asegurar el acceso adecuado a los archivos.
