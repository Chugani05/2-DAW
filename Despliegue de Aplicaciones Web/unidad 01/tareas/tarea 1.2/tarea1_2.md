# Trabajando con Git y MarkDown II

## Contenidos
- [Comandos utilizados](#comandos-utilizados)

### Comandos utilizados
Los unicos comandos que he utilizado hasta ahora han sido los siguientes:

1. Creación de la rama v0.2 y posicionamiento de carpeta de trabajo en esta rama:
```bash
git branch v0.2
git checkout v0.2
```

2. Añadiendo fichero 2.txt:
```bash
echo 2.txt
git add 2.txt
git commit -m "añadiendo fichero a rama v0.2"
```

3. Creación de una rama remota v0.2 y subir los cambios:
```bash
git push origin v0.2
```

4. Merge directo:
```bash
# posicionarte en la rama master
git checkout main

# hacer el merge
git merge v0.2
```

5. Merge con conflicto:
```bash
# añadiendo contenido al fichero de la rama master y hacer el commit
nano 1.txt
git add 1.txt
git commit -m "añadiendo contenido al fichero en la rama main"

# añadiendo contenido al fichero de la rama v0.2 y hacer el commit
git checkout v0.2
nano 1.txt
git add 1.txt
git commit -m "añadiendo contenido al fichero en la rama v0.2"

# se hace el merge desde la rama master
git checkout main
git merge v0.2
```

6. Listado de ramas:
```bash
git branch --no-merged
```

7. Arreglar el conflicto anterior y hacer un commit:
```bash
git add 1.txt
git commit -m "resolucion de conflicto"
```
<div align=center>
    <img src="./imgs/resolution.png" alt="resolution"/>
</div>

8. Barrando rama v0.2:
```bash
# creación del tag
git tag v0.2

# borrado de rama 
git branch -d v0.2
push origin --delete v0.2
```
<div align=center>
    <img src="./imgs/deletion.png" alt="deletion"/>
</div>

9. Listado de cambios listando los distintos commits con sus ramas y sus tags:
<div align=center>
    <img src="./imgs/list.png" alt="list"/>
</div>