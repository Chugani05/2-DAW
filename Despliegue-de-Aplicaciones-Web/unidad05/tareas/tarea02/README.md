# Instalación de un Servidor LDAP en Ubuntu

<div align="center">
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## Contenido

- [Contenido](#contenido)
- [¿Qué es LDAP?](#qué-es-ldap)
- [Instalación de LDAP en el Servidor](#instalación-de-ldap-en-el-servidor)
  - [Configuración de Red](#configuración-de-red)
  - [Instalación de los Paquetes](#instalación-de-los-paquetes)
  - [Configuración Básica del Servidor](#configuración-básica-del-servidor)
- [Gestión de la Estructura LDAP](#gestión-de-la-estructura-ldap)
  - [Crear Unidad Organizativa](#crear-unidad-organizativa)
  - [Crear Grupo](#crear-grupo)
  - [Crear Usuario](#crear-usuario)
- [Herramientas](#herramientas)
  - [Buscar en el Directorio](#buscar-en-el-directorio)
  - [Modificar Usuario](#modificar-usuario)
  - [Eliminar Usuario](#eliminar-usuario)
- [Instalación de LDAP en el Cliente](#instalación-de-ldap-en-el-cliente)
  - [Instalación](#instalación)
  - [Configuración](#configuración)
  - [Comprobación](#comprobación)
- [Iniciar sesión como usuario del servidor LDAP en el Cliente](#iniciar-sesión-como-usuario-del-servidor-ldap-en-el-cliente)

## ¿Qué es LDAP?

LDAP (Lightweight Directory Access Protocol) es un protocolo estándar para acceder a servicios de directorio distribuidos. Se utiliza para organizar información sobre usuarios, equipos, permisos y otros recursos en redes informáticas, permitiendo una administración centralizada y eficiente.

## Instalación de LDAP en el Servidor

### Configuración de Red

1. Accede al directorio de configuración de red:

    ```sh
    cd /etc/netplan
    ```

2. Edita el archivo de configuración:

    ```sh
    sudo nano 00-installer-config.yml
    ```

3. Define la configuración de red en el archivo:

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

    ```sh
    sudo netplan apply
    ```

### Instalación de los Paquetes

1. Verifica el nombre del host actual:

    ```sh
    hostname

    # OUTPUT: chugani-VirtualBox
    ```

2. Cambia el nombre del host:

    ```sh
    sudo hostnamectl set-hostname ldapserver.chugani.local
    ```

3. Confirma el cambio del nombre del host:

    ```sh
    hostname

    # OUTPUT: ldapserver.chugani.local
    ```

4. Edita el archivo `/etc/hosts`:

    ```sh
    sudo nano /etc/hosts
    ```

5. Añade las siguientes líneas:

    ```
    127.0.1.1   ldapserver.chugani.local
    10.109.99.65    ldapserver.chugani.local
    ```

6. Actualiza e instala los paquetes necesarios:

    ```sh
    sudo apt update -y
    sudo apt install slapd ldap-utils -y
    ```

### Configuración Básica del Servidor

1. Configura `slapd`:

    ```sh
    sudo dpkg-reconfigure slapd
    ```

    Sigue las instrucciones del asistente para definir el nombre de dominio y la contraseña de administrador.

2. Verifica la instalación:

    ```sh
    sudo slapcat
    ```

    Esto mostrará la configuración básica del servidor LDAP:

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

## Gestión de la Estructura LDAP

### Crear Unidad Organizativa

1. Crea un archivo `.ldif` para definir la unidad organizativa:

    ```sh
    sudo nano ou.ldif
    ```

    Contenido de `ou.ldif`:

    ```
    dn: ou=informatica,dc=ldapserver,dc=chugani,dc=local
    objectClass: top
    objectClass: organizationalUnit
    ou: informatica
    ```

2. Añade la unidad organizativa al directorio LDAP:

    ```sh
    sudo ldapadd -x -D cn=admin,dc=ldapserver,dc=chugani,dc=local -W -f ou.ldif
    ```

    Salida esperada:

    ```
    adding new entry "ou=informatica,dc=ldapserver,dc=chugani,dc=local"
    ```

3. Verifica que la unidad organizativa fue creada correctamente:

    ```sh
    sudo slapcat
    ```

    Salida esperada:

    ```
    dn: ou=informatica,dc=ldapserver,dc=chugani,dc=local
    objectClass: top
    objectClass: organizationalUnit
    ou: informatica
    structuralObjectClass: organizationalUnit
    entryUUID: cae0561a-7cd7-103f-8b73-7b1408ed7e16
    creatorsName: cn=admin,dc=ldapserver,dc=chugani,dc=local
    createTimestamp: 20250211152247Z
    entryCSN: 20250211152247.128340Z#000000#000#000000
    modifiersName: cn=admin,dc=ldapserver,dc=chugani,dc=local
    modifyTimestamp: 20250211152247Z
    ```

### Crear Grupo

1. Copia el archivo `.ldif` y edítalo para definir un grupo:

    ```sh
    sudo cp ou.ldif grp.ldif
    sudo nano grp.ldif
    ```

    Contenido de `grp.ldif`:

    ```
    dn: cn=informatica,ou=informatica,dc=ldapserver,dc=chugani,dc=local
    objectClass: top
    objectClass: posixGroup
    gidNumber: 10000
    cn: informatica
    ```

2. Añade el grupo al directorio LDAP:

    ```sh
    sudo ldapadd -x -D cn=admin,dc=ldapserver,dc=chugani,dc=local -W -f grp.ldif
    ```

    Salida esperada:

    ```
    adding new entry "cn=informatica,ou=informatica,dc=ldapserver,dc=chugani,dc=local"
    ```

3. Verifica que el grupo fue creado correctamente:

    ```sh
    sudo slapcat
    ```

    Salida esperada:

    ```
    dn: cn=informatica,ou=informatica,dc=ldapserver,dc=chugani,dc=local
    objectClass: top
    objectClass: posixGroup
    gidNumber: 10000
    cn: informatica
    structuralObjectClass: posixGroup
    entryUUID: f95b7ef0-7cd9-103f-8b74-7b1408ed7e16
    creatorsName: cn=admin,dc=ldapserver,dc=chugani,dc=local
    createTimestamp: 20250211153824Z
    entryCSN: 20250211153824.104180Z#000000#000#000000
    modifiersName: cn=admin,dc=ldapserver,dc=chugani,dc=local
    modifyTimestamp: 20250211153824Z
    ```

### Crear Usuario

1. Copia el archivo del grupo y edítalo para definir un usuario:

    ```sh
    sudo cp grp.ldif usr.ldif
    sudo nano usr.ldif
    ```

    Contenido de `usr.ldif`:

    ```
    dn: uid=dpl,ou=informatica,dc=ldapserver,dc=chugani,dc=local
    objectClass: top
    objectClass: posixAccount
    objectClass: inetOrgPerson
    objectClass: person
    cn: dpl
    uid: dpl
    ou: informatica
    uidNumber: 2000
    gidNumber: 10000
    homeDirectory: /home/dpl
    loginShell: /bin/bash
    userPassword: Cursos1
    sn: Worker
    mail: dpl@ldapserver.local
    givenName: dpl
    ```

2. Añade el usuario al directorio LDAP:

    ```sh
    sudo ldapadd -x -D cn=admin,dc=ldapserver,dc=chugani,dc=local -W -f usr.ldif
    ```

    Salida esperada:

    ```
    adding new entry "uid=dpl,ou=informatica,dc=ldapserver,dc=chugani,dc=local"
    ```

3. Verifica que el usuario fue creado correctamente:

    ```sh
    sudo slapcat
    ```

    Salida esperada:

    ```
    dn: uid=dpl,ou=informatica,dc=ldapserver,dc=chugani,dc=local
    objectClass: top
    objectClass: posixAccount
    objectClass: inetOrgPerson
    objectClass: person
    cn: dpl
    uid: dpl
    ou: informatica
    uidNumber: 2000
    gidNumber: 10000
    homeDirectory: /home/dpl
    loginShell: /bin/bash
    userPassword:: Q3Vyc29zMQ==
    sn: Worker
    mail: dpl@ldapserver.local
    givenName: dpl
    ```

## Herramientas

### Buscar en el Directorio

Para buscar información de un usuario:

```sh
ldapsearch -xLLL -b "dc=ldapserver,dc=chugani,dc=local" uid=dpl sn givenName cn
```

Salidas esperadas:

```
dn: uid=dpl,ou=informatica,dc=ldapserver,dc=chugani,dc=local
cn: dpl
sn: Worker
givenName: dpl
```

### Modificar Usuario

Para modificar un usuario, edita un archivo `.ldif` con los cambios deseados:

```sh
sudo nano changes.ldif
```

Contenido de `changes.ldif`:

```
dn: uid=dpl,ou=informatica,dc=ldapserver,dc=chugani,dc=local
changetype: modify
replace: mail
mail: newdpl@dplserver.local
```

Aplica los cambios:

```sh
sudo ldapmodify -x -D cn=admin,dc=ldapserver,dc=chugani,dc=local -W -f changes.ldif
```

### Eliminar Usuario

Para eliminar un usuario:

```sh
sudo ldapdelete -x -W -D 'cn=admin,dc=ldapserver,dc=chugani,dc=local' "uid=dpl,ou=informatica,dc=ldapserver,dc=chugani,dc=local"
```

## Instalación de LDAP en el Cliente

### Instalación

```sh
sudo apt-get install libnss-ldap libpam-ldap ldap-utils -y
```

Configura el servidor LDAP y las opciones necesarias cuando se te solicite:

1. Nos pedirá la dirección de nuestro servidor LDAP, la cual debe ser `ldap://<ip-del-server>/`.
2. También debemos indicar el nombre distinguido base con `dc=ldapserver,dc=chugani,dc=local`.
3. La versión a utilizar es la `3`
4. Make local root Database admin: `Yes`
5. Does the LDAP database require login?: `No`
6. Indicamos ahora el usuario root con `cn=admin,dc=ldapserver,dc=chugani,dc=local`

### Configuración

Edita el archivo `/etc/nsswitch.conf`:

```sh
sudo nano /etc/nsswitch.conf
```

Cambia las líneas correspondientes:

```
passwd:   files ldap
group:    files ldap
shadow:   files ldap
```

```sh
sudo getent passwd

# OUTPUT: dpl:*:2000:10000:dpl:/home/dpl:/bin/bash
```

Luego, para que el cliente cree el directorio de inicio de usuario, edita el archivo `/etc/pam.d/common-session` y añade:

```sh
session optional    pam_mkhomedir.so skel=/etc/skel umask=077
```

### Comprobación

Verifica la conexión con el servidor LDAP:

```sh
ldapsearch -x -H ldap://<ip-del-server> -b "dc=ldapserver,dc=chugani,dc=local"
```

## Iniciar sesión como usuario del servidor LDAP en el Cliente

1. **Por terminal:** Usa `sudo su - dpl`, siendo `dpl` el `uid` del usuario en el servidor LDAP.
2. **Versión gráfica:** Instala el paquete `nslcd` en el cliente:

    ```sh
    sudo apt-get install nslcd
    ```

    Luego reinicia el equipo y usa las credenciales de LDAP para iniciar sesión.