# Trabajando con Git y MarkDown II

## Contenidos

- [Comandos utilizados](#comandos-utilizados)

### Comandos utilizados
Los unicos comandos que he utilizado hasta ahora han sido los siguientes:

1. Creación de la rama v0.2 y posicionamiento de carpeta de trabajo en esta rama:
```
git branch v0.2
git checkout v0.2
```

2. Añadiendo fichero 2.txt:
```
echo 2.txt
git add 2.txt
git commit -m "añadiendo fichero a rama v0.2"
```

3. Creación de una rama remota v0.2 y subir los cambios:
```
git push origin v0.2
```

4. Merge directo:
```
// posicionarte en la rama master
git checkout main
// hacer el merge
git merge v0.2
```

5. Merge con conflicto:
```
// añadiendo contenido al fichero de la rama master y hacer el commit
nano 1.txt
git add 1.txt
git commit -m "añadiendo contenido al fichero en la rama main"
// añadiendo contenido al fichero de la rama v0.2 y hacer el commit
git checkout v0.2
nano 1.txt
git add 1.txt
git commit -m "añadiendo contenido al fichero en la rama v0.2" 
// se hace el merge desde la rama master
git checkout main
git merge v0.2
```

6. Listado de ramas:
```
git branch --no-merged
```

7. Arreglar el conflicto anterior y hacer un commit. :
```
git add 1.txt
git commit -m "resolucion de conflicto"
```
<img src="../../imgs/resolution.png" alt="resolution"/>

8. Barrando rama v0.2:
```
// creación del tag
git tag v0.2
// borrado de rama 
git branch -d v0.2
push origin --delete v0.2
```
<img src="../../imgs/deletion.png" alt="deletion"/>

9. Listado de cambios listando los distintos commits con sus ramas y sus tags:
<img src="../../imgs/list.png" alt="list"/>