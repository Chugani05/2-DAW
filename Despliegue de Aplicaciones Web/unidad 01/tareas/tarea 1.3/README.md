# Trabajando con con el Visual Studio y nuestro repositorio en Github.
<div align=center>
<img src="../../../../extras/vinilo.gif" alt="me" width="100%">
</div>

## Contenidos
- [Comandos utilizados](#comandos-utilizados)

### Comandos utilizados
1. Crear un repositorio llamado “banco” en GitHub:

En vez de crear un resositorio para esta tarea, lo que voy a hacer es crear una carpeta y hacer lo que necesite dentro de ella.

2. Clona el repositorio desde la línea de comandos:

Yo estoy utilizando mi repositorio de 2º DAW para ello y ya lo tengo clonado, pero si tuviera que hacerlo, el comando sería el siguiente:

```bash
git clone https://github.com/Chugani05/2-DAW.git
```

3. En otra carpeta, crea un proyecto llamado “banco”:
```bash
mkdir banco
cd banco
touch index.html
```

4. Copia la carpeta del proyecto a la carpeta del repositorio clonado:
```bash
cp -r /home/chugani/Desktop/blanco /home/chugani/Desktop/2-DAW/Despliegue-de-Aplicaciones-Web/unidad-01/tareas/tarea-1.3
```

5. Haz un commit y push desde Visual Studio:
```bash
git add .
git commit -m "añadiendo carpeta"
git push
```

6. Borrar del disco duro todo el código del proyecto del banco:
```bash
rm -rf /ruta/al/proyecto/banco
```

7. Clona el proyecto del banco de GitHub a local:

En vez de clonar, se puede hacer el siguiente comando, que nos asegura que el repositorio este actualizado:

```bash
git pull
```

8. Haz una modificación del código y súbelo a GitHub:

Cambiamos la extención del archivo `index.html` a `index.js` y hacemos el commit.

```bash
git add .
git commit -m "modificación del código"
git push
```