# 
<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## Contenido

## Introducción

## Configuración de Red

```conf
cd /etc/netplan

sudo nano 00-installer-config.yml
    ```
    network:
        ethernets:
            enp0s3:
                dhcp4: true
            enp0s8:
                addresses: [10.109.99.65]
        version: 2

    ```
```

## Instalación de los Paquetes

```sh
hostname
# Output: chugani-VirtualBox

sudo hostnamectl set-hostname ldapserver.chugani.local

hostname
# Output: ldapserver.chugani.local

sudo nano /etc/hosts
    ```
    127.0.1.1   ldapserver.chugani.local
    10.109.99.65    ldapserver.chugani.local
    ```

sudo apt update -y && sudo apt upgrade -y sudo apt dist-upgrade -y

sudo apt install slapd ldap-utils -y
```

## Configuración Básica del Servidor

```sh
sudo dpkg-econfigure slapd

sudo slapcat
    ```
    ```
```