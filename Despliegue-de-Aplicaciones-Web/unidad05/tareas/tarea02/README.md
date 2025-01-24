# 
<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## Contenido

## Introducción

## Configuración de Red

```
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

hostname
# Output: chugani-VirtualBox

sudo hostnamectl set-hostname ldapserver.chugani.local
hostname

# Output: ldapserver.chugani.local

```