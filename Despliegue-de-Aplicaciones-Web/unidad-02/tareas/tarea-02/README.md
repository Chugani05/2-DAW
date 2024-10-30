# Instalación de servidor web Apache
<div align=center>
<img src="../../../../extras/vinilo.gif" alt="me" width="100%">
</div>

## Contenido
- [Arquitectura Web](#arquitectura-web)
- [Plataforma web](#plataforma-web)
- [Instalación de sistema operativo Ubuntu](#instalación-de-sistema-operativo-ubuntu)
    - [Instalación de Apache desde terminal](#instalación-de-apache-desde-terminal)
    - [Comprobación desde terminal](#comprobación-desde-terminal)
    - [Comprobación desde navegador](#comprobación-desde-navegador)
    - [Cambio de puerto](#cambio-de-puerto)
    - [Instalación de Tomcat](#instalación-de-tomcat)

## Arquitectura Web
_La arquitectura Web es un modelo compuesto de tres capas, ¿cuáles son y cuál es la función de cada una de ellas?_

La **arquitectura web** se basa en un modelo de tres capas, diseñadas para separar las responsabilidades y mejorar la organización del sistema. Estas capas son:

1. **Capa de presentación**: Es la interfaz de usuario, lo que el usuario final visualiza e interactúa en el navegador. Aquí se procesan los elementos visuales, permitiendo la interacción con la aplicación. Se suelen emplear tecnologías como HTML, CSS y JavaScript.

2. **Capa de lógica de negocio**: Esta capa gestiona la lógica de la aplicación. Aquí se llevan a cabo los procesos y reglas del negocio, es decir, el funcionamiento de las operaciones que necesita realizar el usuario. En el servidor, se usan lenguajes como PHP, Python o Java para construir esta capa.

3. **Capa de datos**: Es donde se almacenan los datos de la aplicación, usualmente en una base de datos. Esta capa es responsable de guardar, recuperar y gestionar la información de manera eficiente. Las bases de datos SQL, como MySQL o PostgreSQL, son ejemplos típicos en esta capa.

## Plataforma web
_Una plataforma web es el entorno de desarrollo de software empleado para diseñar y ejecutar un sitio web; destacan dos plataformas web, LAMP y WISA. Explica en qué consiste cada una de ellas._

Las plataformas web proporcionan un entorno para desarrollar y ejecutar aplicaciones web.

- **LAMP**: Es un conjunto de software de código abierto que incluye **Linux (sistema operativo), Apache (servidor web), MySQL (base de datos)** y **PHP (lenguaje de programación)**. LAMP es muy popular para aplicaciones web en Linux debido a su estabilidad y flexibilidad.
 
- **WISA**: Es una plataforma para el entorno Windows, que incluye **Windows (sistema operativo), IIS (Internet Information Services como servidor web), SQL Server (base de datos)** y **ASP.NET (marco de desarrollo web)**. WISA es ideal para entornos que prefieren soluciones Microsoft, ofreciendo integración con otros productos de esta compañía.
    
## Instalación de sistema operativo Ubuntu
_Dispones de una máquina que cuenta con el sistema operativo Ubuntu 10.04 LTS recientemente actualizado, esta máquina tiene el entorno de red configurado y, además, dispones de conexión a Internet. Además, estás trabajando con la cuenta del usuario root. Indica cada uno de los pasos, y comandos implicados en ellos, para conseguir hacer lo siguiente:_
        
### Instalación de Apache desde terminal
_Instalar el servidor web Apache desde terminal._

### Comprobación desde terminal
_Comprobar que está funcionando el servidor Apache desde terminal._

#### Comprobación desde navegador
_Comprobar que está funcionando el servidor Apache desde navegador._

### Cambio de puerto
_Cambiar el puerto por el cual está escuchando Apache pasándolo al puerto 82._

### Instalación de Tomcat
_Instalar el servidor de aplicaciones Tomcat._
