# Unidad 05: Servivios de red implicados en el despliegue de una aplicación web.

<div align=center>
    <img src="../../extras/vinilo.gif" alt="vinilo" width="80%">
</div>

## Contenido
1. [Introducción a los Servicios de Red en el Despliegue de Aplicaciones Web](#1-introducción-a-los-servicios-de-red-en-el-despliegue-de-aplicaciones-web)
2. [DNS (Domain Name System)](#2-dns-domain-name-system)
3. [HTTP/HTTPS (Hypertext Transfer Protocol / Secure)](#3-httphttps-hypertext-transfer-protocol-secure)
4. [Servidores Web](#4-servidores-web)
5. [Equilibradores de Carga (Load Balancers)](#5-equilibradores-de-carga-load-balancers)
6. [Redes de Entrega de Contenidos (CDN)](#6-redes-de-entrega-de-contenidos-cdn)
7. [Firewalls y Seguridad en Redes](#7-firewalls-y-seguridad-en-redes)
8. [VPN (Virtual Private Network)](#8-vpn-virtual-private-network)
9. [Conclusiones](#9-conclusiones)

## 1. Introducción a los Servicios de Red en el Despliegue de Aplicaciones Web
- Los servicios de red son fundamentales para el acceso, comunicación y seguridad de las aplicaciones web en Internet.
- Estos servicios permiten que las aplicaciones sean accesibles, seguras y eficientes desde cualquier lugar del mundo.
- En el despliegue de aplicaciones web, se deben configurar varios servicios de red para asegurar la disponibilidad, el rendimiento y la protección de los sistemas.

## 2. DNS (Domain Name System)
### ¿Qué es DNS?
- **DNS** es un sistema de nombres de dominio que convierte los nombres de dominio legibles por humanos (ejemplo: `www.ejemplo.com`) en direcciones IP legibles por las máquinas (ejemplo: `192.168.1.1`).
- Permite que los usuarios accedan a las aplicaciones web utilizando nombres fáciles de recordar en lugar de direcciones IP numéricas.

### Funciones de DNS:
- **Resolución de nombres**: Traducir un nombre de dominio a una dirección IP.
- **Redirección de tráfico**: Dirigir el tráfico a diferentes servidores o servicios según la configuración de DNS.

### Tipos de registros DNS:
- **A**: Mapea un nombre de dominio a una dirección IPv4.
- **AAAA**: Mapea un nombre de dominio a una dirección IPv6.
- **CNAME**: Alias de un dominio.
- **MX**: Registros de intercambio de correo.

## 3. HTTP/HTTPS (Hypertext Transfer Protocol / Secure)
### ¿Qué es HTTP?
- **HTTP** es el protocolo de comunicación que se utiliza para transmitir datos a través de la web. Permite la comunicación entre el cliente (navegador) y el servidor web.

### ¿Qué es HTTPS?
- **HTTPS** es una versión segura de HTTP que utiliza **SSL/TLS** para encriptar los datos transferidos entre el cliente y el servidor.
- **HTTPS** es esencial para asegurar la privacidad y la integridad de la información transmitida, especialmente en aplicaciones web que manejan datos sensibles como contraseñas o pagos.

### Diferencia entre HTTP y HTTPS:
- **HTTP** no cifra los datos, lo que puede permitir que los datos sean interceptados por atacantes.
- **HTTPS** cifra toda la información, lo que la hace más segura para la transmisión de datos confidenciales.

## 4. Servidores Web
### ¿Qué es un Servidor Web?
- Un **servidor web** es un software que almacena y entrega páginas web a los navegadores a través de Internet utilizando HTTP o HTTPS.
- Los servidores web más comunes son **Apache**, **Nginx**, y **IIS (Internet Information Services)**.

### Funcionamiento básico de un servidor web:
1. El cliente (navegador) realiza una solicitud HTTP.
2. El servidor web recibe la solicitud y la procesa.
3. El servidor web responde con los archivos solicitados (por ejemplo, HTML, CSS, JavaScript).

### Configuración de un servidor web:
- Los servidores web deben ser configurados para manejar múltiples solicitudes, manejar errores, servir contenido estático y dinámico, y asegurar el tráfico con HTTPS.
- Configuración de puertos: Generalmente, los servidores web escuchan en los puertos **80 (HTTP)** y **443 (HTTPS)**.

## 5. Equilibradores de Carga (Load Balancers)
### ¿Qué es un Equilibrador de Carga?
- Un **equilibrador de carga** distribuye el tráfico de red entre múltiples servidores para garantizar que ningún servidor se sobrecargue.
- Aumenta la disponibilidad y escalabilidad de las aplicaciones web al repartir las solicitudes de los clientes de manera equilibrada.

### Tipos de equilibrio de carga:
- **Round Robin**: Distribuye las solicitudes de manera secuencial entre los servidores.
- **Least Connections**: Envia las solicitudes al servidor con menos conexiones activas.
- **IP Hash**: Distribuye las solicitudes según el hash de la IP del cliente.

## 6. Redes de Entrega de Contenidos (CDN)
### ¿Qué es una CDN?
- Una **CDN (Content Delivery Network)** es una red de servidores distribuidos que entregan contenido web (como imágenes, archivos JavaScript, y videos) a los usuarios desde el servidor más cercano geográficamente.
- Esto mejora el tiempo de carga y reduce la latencia, proporcionando una experiencia de usuario más rápida y eficiente.

### Beneficios de usar una CDN:
- **Reducción de latencia**: Al almacenar contenido en servidores cercanos al usuario final.
- **Escalabilidad**: Permite manejar grandes volúmenes de tráfico sin afectar el rendimiento.
- **Seguridad**: Algunos proveedores de CDN ofrecen protección contra ataques DDoS (Distributed Denial of Service).

## 7. Firewalls y Seguridad en Redes
### ¿Qué es un Firewall?
- Un **firewall** es un sistema de seguridad de red que monitorea y controla el tráfico entrante y saliente de una red según reglas de seguridad predeterminadas.
- Los firewalls son esenciales para proteger las aplicaciones web contra accesos no autorizados y ataques maliciosos.

### Tipos de firewalls:
- **Firewall de red**: Protege redes completas controlando el tráfico entre diferentes redes.
- **Firewall de aplicación**: Protege las aplicaciones web de ataques específicos, como inyecciones SQL y cross-site scripting (XSS).

### Buenas prácticas de seguridad en redes:
- Usar firewalls para filtrar el tráfico.
- Implementar autenticación segura (como autenticación de dos factores).
- Usar VPNs para proteger las comunicaciones internas.

## 8. VPN (Virtual Private Network)
### ¿Qué es una VPN?
- Una **VPN (Virtual Private Network)** crea una conexión segura y encriptada entre dos puntos a través de Internet, permitiendo a los usuarios acceder a una red privada de manera remota.

### Funciones principales de una VPN:
- **Privacidad**: Cifra el tráfico y oculta la IP del usuario.
- **Seguridad**: Protege la información transmitida a través de redes no seguras (como redes Wi-Fi públicas).
- **Acceso remoto**: Permite a los empleados acceder a recursos internos de la empresa desde ubicaciones remotas.

## 9. Conclusiones
- Los servicios de red son fundamentales para el despliegue exitoso de aplicaciones web, ya que permiten la comunicación, la transferencia de datos y la seguridad.
- La correcta configuración de servicios como DNS, HTTP/HTTPS, servidores web, balanceadores de carga y CDN es esencial para garantizar la disponibilidad, el rendimiento y la seguridad de la aplicación web.
- La implementación de firewalls y VPNs también ayuda a proteger las aplicaciones contra accesos no autorizados y posibles ciberamenazas.

