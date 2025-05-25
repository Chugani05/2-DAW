# Instalación de Xampp

<div align=center>
    <img src="../../../../extras/vinilo.gif" alt="vinilo" width="100%">
</div>

## Contenido
- [Instalación](#instalación)
- [Comprobación](#comprobación)

## Instalación
### Se descarga la version de Xampp correspondiente para nuestro dispositivo, en mi caso Linux.
<div align=center>
    <img src="./imgs/img1.png" alt="1"/>
</div>

### A continuación cambiamos los permisos del archivo para que este funcione con el siguiente comando:
```bash
sudo chmod +x xampp-linux-*-installer.run
```

### Tras esto se ejecuta el instalador, en este hay que pulsar el boton `Forwrd` o `Next` hasta que se termine la instalación.
<div align=center>
    <img src="./imgs/img3.png" alt="2"/>
</div>
<div align=center>
    <img src="./imgs/img2.png" alt="3"/>
</div>
<div align=center>
    <img src="./imgs/img7.png" alt="4"/>
</div>

### Utilizando el siguiente comando abrimos el panel de control de xampp.
```bash
sudo /opt/lampp/manager-linux-x64.run
```
<div align=center>
    <img src="./imgs/img4.png" alt="5"/>
</div>

### Para comprobar que Xampp está funcionando correctamente nos fijamos en los servidores y los ponemos en marcha.
<div align=center>
    <img src="./imgs/img5.png" alt="6"/>
</div>

### En conclusión, Xampp está funcionando bien, por eso se inicializand eforma rapida.
<div align=center>
    <img src="./imgs/img6.png" alt="7"/>
</div>

## Comprobación
### Nos vamos al directorio `/opt/lampp/htdocs/test`, pero ante sde ello creamos la carpeta 'test' con `mkdir test`.

### Con el comando `nano test.php` accedemos al editor de texto de nano y pegamos el siguiente código para mostrar un _Hola Mundo_.
```php
<html>
    <head>
        <title>Test PHP</title>
    </head>
    <body>
        <?php echo '<p>Hola mundo</p>'; ?>
    </body>
</html>
```

### Tras iniciar los servidores desde el panel de control de Xampp, accedemos al sitio web desde `localhost/test/test.php`.
<div align=center>
    <img src="./imgs/img8.png" alt="8"/>
</div>