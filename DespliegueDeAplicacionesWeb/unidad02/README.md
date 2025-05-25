# Unidad 02: Implantación de arquitecturas web.

<div align=center>
  <img src="../../extras/vinilo.gif" alt="vinilo" width="60%">
</div>

## Contenido
1. [Introducción a las Arquitecturas Web](#1-introducción-a-las-arquitecturas-web)
2. [Tipos de Arquitecturas Web](#2-tipos-de-arquitecturas-web)
3. [Modelo Cliente-Servidor](#3-modelo-cliente-servidor)
4. [Arquitectura en Capas](#4-arquitectura-en-capas)
5. [Arquitectura sin Servidor (Serverless)](#5-arquitectura-sin-servidor-serverless)
6. [Microservicios](#6-microservicios)
7. [Contenedores y Orquestación](#7-contenedores-y-orquestación)
8. [Factores para Elegir una Arquitectura Web](#8-factores-para-elegir-una-arquitectura-web)
9. [Conclusiones](#9-conclusiones)

## 1. Introducción a las Arquitecturas Web
### ¿Qué es una arquitectura web?
- La arquitectura web es el diseño estructural de los componentes de una aplicación web, cómo se comunican entre sí, y cómo se implementan en la infraestructura.
- Abarca la organización de las aplicaciones, los servidores, las bases de datos, y los servicios involucrados en el funcionamiento de la web.

### Objetivos de la implantación de arquitecturas web:
- Optimizar el rendimiento, la escalabilidad y la seguridad de la aplicación.
- Asegurar la disponibilidad y confiabilidad del sistema.
- Facilitar el desarrollo y mantenimiento de aplicaciones.

## 2. Tipos de Arquitecturas Web
### **Monolítica:**
- Todo el código de la aplicación está contenido en una única unidad (servidor).
- Ventajas: Simplicidad en el desarrollo y despliegue inicial.
- Desventajas: Difícil de escalar, gestionar y mantener a medida que crece.

### **Basada en Servicios:**
- La aplicación se divide en componentes independientes que interactúan entre sí.
- Cada servicio puede tener su propio ciclo de vida, escalabilidad y despliegue.

## 3. Modelo Cliente-Servidor
### Características:
- **Cliente:** Interactúa con el usuario final, envía solicitudes al servidor.
- **Servidor:** Procesa las solicitudes del cliente, gestiona la lógica de negocio y envía respuestas al cliente.
- Comúnmente utilizado en aplicaciones web tradicionales donde el navegador es el cliente y el servidor maneja las peticiones HTTP.

### Ventajas:
- Separación de responsabilidades.
- Escalabilidad y mantenimiento de cada parte de la arquitectura por separado.

## 4. Arquitectura en Capas
### Definición:
- La aplicación se divide en diferentes capas con responsabilidades específicas, tales como:
  - **Capa de presentación:** Interfaz de usuario.
  - **Capa de lógica de negocio:** Procesamiento de datos y reglas de negocio.
  - **Capa de persistencia:** Almacenamiento de datos en bases de datos.

### Ventajas:
- Separación de responsabilidades, facilitando el mantenimiento.
- Permite actualizar una capa sin afectar a las otras.

### Ejemplo:
- Aplicaciones web tradicionales con arquitectura de tres capas (Frontend, Backend, Base de datos).

## 5. Arquitectura sin Servidor (Serverless)
### Características:
- En lugar de gestionar servidores, los servicios de computación se gestionan de forma automática y se ejecutan en función de la demanda.
- Utiliza servicios en la nube como AWS Lambda, Azure Functions, y Google Cloud Functions.
  
### Ventajas:
- Reducción de costos al pagar solo por el uso real de recursos.
- Escalabilidad automática según la demanda.
- Menos carga administrativa, ya que no es necesario gestionar la infraestructura.

### Desventajas:
- Complejidad en el control de flujos y dependencias.
- Latencia adicional en la invocación de funciones.

## 6. Microservicios
### Definición:
- Una arquitectura que divide una aplicación en servicios pequeños e independientes, cada uno responsable de una función o negocio específico.
- Los microservicios se comunican entre sí a través de APIs (generalmente REST o GraphQL).

### Ventajas:
- Escalabilidad independiente de cada servicio.
- Flexibilidad para usar diferentes tecnologías para diferentes servicios.
- Tolerancia a fallos: Si un microservicio falla, el resto puede seguir funcionando.

### Desventajas:
- Complejidad en la gestión de múltiples servicios.
- Requiere una buena estrategia de comunicación entre servicios.

## 7. Contenedores y Orquestación
### **Contenedores:**
- Los contenedores son entornos ligeros y portátiles que permiten ejecutar aplicaciones de manera aislada y coherente en diferentes entornos.
- **Docker** es una de las herramientas más populares para crear contenedores.

### **Orquestación:**
- Herramientas como **Kubernetes** permiten gestionar, escalar y automatizar el despliegue de contenedores en ambientes de producción.
- Garantizan la alta disponibilidad y el manejo eficiente de recursos.

### Ventajas de los contenedores:
- Consistencia entre entornos de desarrollo, prueba y producción.
- Escalabilidad y eficiencia.

## 8. Factores para Elegir una Arquitectura Web
### Consideraciones clave:
- **Escalabilidad:** ¿La arquitectura puede manejar un aumento en la carga de usuarios o datos?
- **Rendimiento:** ¿Cómo afecta la arquitectura al tiempo de respuesta y al rendimiento general?
- **Mantenimiento:** ¿Cuánto esfuerzo se necesita para mantener y actualizar la aplicación?
- **Costo:** ¿Qué tan rentable es la implementación de la arquitectura elegida?
- **Seguridad:** ¿La arquitectura asegura los datos y previene vulnerabilidades?

## 9. Conclusiones
- No existe una solución única para todas las aplicaciones web. La elección de la arquitectura depende de las necesidades específicas del proyecto.
- Las arquitecturas como los microservicios, la arquitectura en capas, y los contenedores son populares debido a su flexibilidad, escalabilidad y facilidad de mantenimiento.
- La elección de la arquitectura debe tener en cuenta el rendimiento, la escalabilidad, la seguridad y el costo de implementación.

