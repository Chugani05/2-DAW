# Instalar servidor LDAP en Ubuntu

<div align="center">
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## Contenido

- [Contenido](#contenido)
- [¿Qué es LDAP?](#qué-es-ldap)
- [Configuración de Red](#configuración-de-red)
- [Instalación de los Paquetes](#instalación-de-los-paquetes)
- [Configuración Básica del Servidor](#configuración-básica-del-servidor)
- [Crear unidad Organizativa](#crear-unidad-organizativa)
- [Crear Grupo](#crear-grupo)
- [Crear Usuario](#crear-usuario)
- [Buscar en el Directorio](#buscar-en-el-directorio)
- [Modificar Usuario](#modificar-usuario)
- [Eliminar Usuario](#eliminar-usuario)
- [Instalación LDAP en Cliente](#instalación-ldap-en-cliente)
- [Configurar Cliente Sesión Gráfica](#configurar-cliente-sesión-gráfica)

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
    sudo apt update -y
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
    dn: dc=ldapserver,dc=chugani,dc=local
    objectClass: top
    objectClass: dcObject
    objectClass: organization
    o: ldapserver.chugani
    dc: ldapserver
    structuralObjectClass: organization
    entryUUID: 02855f84-7378-103f-9fc8-ad410f59492d
    creatorsName: cn=admin,dc=ldapserver,dc=chugani,dc=local
    createTimestamp: 20250130170428Z
    entryCSN: 20250130170428.333519Z#000000#000#000000
    modifiersName: cn=admin,dc=ldapserver,dc=chugani,dc=local
    modifyTimestamp: 20250130170428Z
    ```

## Crear unidad Organizativa

## Crear Grupo

## Crear Usuario

## Buscar en el Directorio

## Modificar Usuario

## Eliminar Usuario

## Instalación LDAP en Cliente

## Configurar Cliente Sesión Gráfica