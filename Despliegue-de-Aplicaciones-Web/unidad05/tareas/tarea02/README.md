# Instalar servidor LDAP en Ubuntu

<div align="center">
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## Contenido

- [¿Qué es LDAP?](#qué-es-ldap)  
- [Configuración de Red](#configuración-de-red)  
- [Instalación de los Paquetes](#instalación-de-los-paquetes)  
- [Configuración Básica del Servidor](#configuración-básica-del-servidor)

## ¿Qué es LDAP?

LDAP (Lightweight Directory Access Protocol) es un protocolo estándar para acceder a servicios de directorio distribuidos. Se utiliza para organizar información sobre usuarios, equipos, permisos y otros recursos en redes informáticas, permitiendo una administración centralizada y eficiente.

## Configuración de Red

1. Accede al directorio de configuración de red:  

    ```bash
    cd /etc/netplan
    ```

2. Edita el archivo de configuración:  

    ```bash
    sudo nano 00-installer-config.yml
    ```

3. Define la configuración de red:

    ```yaml
    network:
        ethernets:
            enp0s3:
                dhcp4: true
            enp0s8:
                addresses: [10.109.99.65]
        version: 2
    ```

4. Guarda los cambios y aplica la configuración de red:

    ```bash
    sudo netplan apply
    ```

## Instalación de los Paquetes

1. Verifica el nombre del host actual:  

    ```bash
    hostname

    # OUTPUT: chugani-VirtualBox
    ```


2. Cambia el nombre del host:

    ```bash
    sudo hostnamectl set-hostname ldapserver.chugani.local
    ```

3. Confirma el cambio del nombre del host:  

    ```bash
    hostname

    # OUTPUT: ldapserver.chugani.local
    ```

4. Edita el archivo `/etc/hosts`:

    ```bash
    sudo nano /etc/hosts
    ```

5. Añade las siguientes líneas:

    ```
    127.0.1.1   ldapserver.chugani.local
    10.109.99.65    ldapserver.chugani.local
    ```

6. Actualiza e instala los paquetes necesarios:  

    ```bash
    sudo apt update -y && sudo apt upgrade -y && sudo apt dist-upgrade -y
    sudo apt install slapd ldap-utils -y
    ```

## Configuración Básica del Servidor

1. Configura `slapd`:  

    ```bash
    sudo dpkg-reconfigure slapd
    ```

    Sigue las instrucciones del asistente para definir el nombre de dominio y contraseña de administrador.

2. Verifica la instalación:  

    ```bash
    sudo slapcat
    ```

    Esto mostra la configuración básica del servidor LDAP:

    ```
    ```

