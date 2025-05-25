# Unidad 03: Configuración y administración de servidores web.

<div align=center>
  <img src="../../extras/data.gif" alt="data" width="100%">
</div>

## Contenido
1. [Introducción a los Servidores Web](#1-introducción-a-los-servidores-web)
2. [Tipos de Servidores Web](#2-tipos-de-servidores-web)
3. [Configuración Básica de un Servidor Web](#3-configuración-básica-de-un-servidor-web)
4. [Administración de Servidores Web](#4-administración-de-servidores-web)
5. [Servidores Web Populares](#5-servidores-web-populares)
6. [Seguridad en Servidores Web](#6-seguridad-en-servidores-web)
7. [Monitorización y Mantenimiento](#7-monitorización-y-mantenimiento)
8. [Conclusiones](#8-conclusiones)

## 1. Introducción a los Servidores Web
### ¿Qué es un servidor web?
- Un servidor web es un software y hardware que gestiona las solicitudes HTTP de los usuarios y entrega contenido web, como archivos HTML, CSS, JavaScript, imágenes, etc.
- El servidor interpreta las solicitudes, obtiene los recursos solicitados y los envía al navegador del cliente.

### Funciones principales:
- Recibir solicitudes HTTP o HTTPS.
- Procesar y entregar contenido estático o dinámico.
- Asegurar el acceso adecuado a los recursos del sistema.

## 2. Tipos de Servidores Web
### **Servidores Web Estáticos:**
- Sirven contenido estático (archivos HTML, imágenes, CSS) sin procesamiento adicional.
- Ejemplo: **Nginx**, **Apache HTTP Server**.

### **Servidores Web Dinámicos:**
- Además de entregar contenido estático, procesan aplicaciones dinámicas, como PHP, Python, Ruby, etc.
- Ejemplo: **Apache con mod_php**, **Nginx con FastCGI**.

### **Servidores Reverse Proxy:**
- Actúan como intermediarios entre los clientes y los servidores de aplicaciones.
- Mejoran la seguridad, el rendimiento y permiten balanceo de carga.
- Ejemplo: **Nginx**, **HAProxy**.

### **Servidores Web en la Nube:**
- Ofrecen servidores web gestionados y escalables en la nube.
- Ejemplo: **Amazon Web Services (AWS)**, **Google Cloud Platform (GCP)**.

## 3. Configuración Básica de un Servidor Web
### Instalación:
1. **Instalar el servidor web:**
   - En **Ubuntu/Debian**: `sudo apt install apache2`
   - En **CentOS/Fedora**: `sudo yum install httpd`

2. **Iniciar el servidor web:**
   - `sudo systemctl start apache2` (Apache en Ubuntu/Debian)
   - `sudo systemctl start httpd` (Apache en CentOS/Fedora)

3. **Configurar puertos y acceso:**
   - Verificar que el servidor escucha en el puerto adecuado (por lo general, el puerto 80 para HTTP y 443 para HTTPS).
   - Abrir puertos en el firewall si es necesario:
     - `sudo ufw allow 80,443/tcp` (Ubuntu)

### Archivos de configuración:
- **Apache:** `/etc/apache2/apache2.conf`, `/etc/apache2/sites-available/000-default.conf`
- **Nginx:** `/etc/nginx/nginx.conf`, `/etc/nginx/sites-available/default`

## 4. Administración de Servidores Web
### **Gestión de Sitios Web:**
- **Apache:**
  - Crear nuevos archivos de configuración para cada sitio: `/etc/apache2/sites-available/mi_sitio.conf`
  - Activar un sitio con `sudo a2ensite mi_sitio.conf` y recargar con `sudo systemctl reload apache2`.
  
- **Nginx:**
  - Crear un archivo de configuración en `/etc/nginx/sites-available/mi_sitio`.
  - Habilitar el sitio creando un enlace simbólico en `/etc/nginx/sites-enabled/`.

### **Gestión de Logs:**
- **Apache:** Los logs de acceso y error se encuentran en `/var/log/apache2/access.log` y `/var/log/apache2/error.log`.
- **Nginx:** Los logs se encuentran en `/var/log/nginx/access.log` y `/var/log/nginx/error.log`.

### **Gestión de Módulos:**
- **Apache:** Activar o desactivar módulos con `a2enmod` y `a2dismod`.
- **Nginx:** Configurar módulos mediante el archivo de configuración principal (`nginx.conf`).

## 5. Servidores Web Populares
### **Apache HTTP Server:**
- Uno de los servidores web más populares y antiguos.
- Flexible y con soporte para múltiples módulos.
- Ideal para sitios que requieren procesamiento dinámico (por ejemplo, con PHP).

### **Nginx:**
- Servidor web y proxy inverso ligero.
- Mejor rendimiento para manejar conexiones concurrentes.
- Ideal para aplicaciones web de alto tráfico.

### **LiteSpeed:**
- Servidor web de alto rendimiento con soporte para HTTP/2 y características avanzadas.
- Popular en aplicaciones web que requieren alta velocidad y seguridad.

### **Caddy:**
- Servidor web con configuración automática de HTTPS mediante Let's Encrypt.
- Facilita la administración de certificados SSL/TLS.

## 6. Seguridad en Servidores Web
### **Prácticas recomendadas de seguridad:**
- **Usar HTTPS:** Configurar SSL/TLS con certificados válidos.
  - Para Apache: Usar el módulo `mod_ssl`.
  - Para Nginx: Configurar `ssl_certificate` y `ssl_certificate_key` en el archivo de configuración.

- **Actualizaciones regulares:** Mantener el servidor web y el sistema operativo actualizados.
  - `sudo apt update && sudo apt upgrade` (Ubuntu/Debian).

- **Configurar cortafuegos:** Asegurarse de que solo los puertos necesarios (80, 443) estén abiertos.
  - `sudo ufw allow 80,443/tcp` (Ubuntu).

- **Desactivar servicios innecesarios:** Limitar la superficie de ataque desactivando módulos o servicios no utilizados.

- **Protección contra ataques comunes:**
  - **Prevención de ataques DDoS:** Configurar limitación de conexiones o usar servicios como Cloudflare.
  - **Protección contra ataques de fuerza bruta:** Usar herramientas como `fail2ban` para bloquear intentos de acceso no autorizados.

## 7. Monitorización y Mantenimiento
### **Herramientas de Monitorización:**
- **Netdata:** Proporciona monitoreo en tiempo real del servidor.
- **Zabbix:** Sistema de monitoreo empresarial para aplicaciones web.
- **Prometheus + Grafana:** Solución avanzada para la recolección y visualización de métricas.

### **Mantenimiento:**
- **Optimización de rendimiento:** Usar herramientas como **mod_deflate** para comprimir archivos y mejorar el rendimiento.
- **Respaldos regulares:** Realizar copias de seguridad de los archivos y bases de datos para evitar pérdidas de datos.
- **Logs de error:** Monitorear los archivos de log para detectar posibles problemas de rendimiento o seguridad.

## 8. Conclusiones
- La correcta configuración y administración de servidores web es fundamental para garantizar el buen funcionamiento de una aplicación web.
- Es importante seguir buenas prácticas de seguridad, realizar mantenimiento regular y usar herramientas de monitoreo para asegurar la disponibilidad y el rendimiento del servidor.
- Elegir el servidor adecuado (Apache, Nginx, etc.) depende de las necesidades específicas de la aplicación y el tráfico esperado.

