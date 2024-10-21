# Examen UD1-Control de versiones

1. Los sistemas de control de versiones utilizan una arquitectura cliente-servidor en donde el servidor guarda la(s) versión(es) actual(es) del proyecto y su historia ¿Verdadero o falso?

__Verdadero__ <br> Falso

2. ¿ Para que sirve el archivo .gitignore ?

__Para ignorar los archivos que introduzcas dentro del archivo .gitignore__ <br> Para poder subir archivos ignorados <br> Para ignorar a git y hacer que no haga commit <br> Para crear etiquetas en git

3. ¿ Qué es la rama master ?

__Es la rama principal de un repositorio__ <br> Es la rama secundaria del usuario principal <br> Es la rama que se guardan los ficheros <br> Es la rama del administrador

4. Indica cuales de los siguientes son estados en los que se pueden encontrar los archivos, de un proyecto integrado con Git.

__Confirmado__ <br> __Preparado__ <br> Inmutable <br> __Modificado__

5. ¿Cuál es el comando utilizado para listar los cambios (commits) que han producido en el repositorio?

git init <br> git status <br> git tag <br> __git log__

6. Git trae una herramienta llamada git config que permite obtener y establecer variables de configuración que controlan el aspecto y funcionamiento de Git. ¿Verdadero o falso?

__Verdadero__ <br> Falso 

7. El comando _______________ muestra cómo se encuentran los archivos de nuestro proyecto en relación al repositorio del servidor.

git add <br> __git status__ <br> git clone <br> git cvs

8. Los sistemas de control de versiones son programas que permiten...

__Gestionar un repositorio de archivos y sus distintas versiones__ <br> Insertar comentarios en el código fuente de las aplicaciones <br> Compilar aplicaciones web <br> Documentar aplicaciones

9. ¿ Para qué se usa git ?

Para poder trabajar con códigos de otros usuarios y modificarlos <br> Para poder descargar código <br> Para modificar código y actualizarlo <br> __Para trabajar en equipo de una manera mucho más simple y óptima cuando estamos desarrollando software__

10. ¿ Para qué sirve el botón Fork en GitHub ?

__Copia un repositorio albergado a otra cuenta (para contribuir)__ <br> Copia commits de repositorios albergados en GitHub <br> Copia todos los repositorios de una cuenta de GitHub <br> Para hacer una copia de un repositorio que creaste

11. ¿ Qué es el HEAD en git?

Es el puntero de los commits que se han creado <br> __Es un puntero al commit que está restaurado en el directorio de trabajo__ <br> Es la ruta del repositorio local <br> Es la cabezera del repositorio

12. Atajo que proporciona git, si quieres saltarte el área de preparación.

git commit <br> __git commit -a__ <br> git commit -m <br> git rm --cached readme.txt

13. Git fue inicialmente diseñado y desarrollado por _____________________.

Kevin Mitnick <br> __Linus Torvalds__ <br> Richard Stallman <br> Stephen Wozniak

14. ¿Qué comando es necesario para crear un repositorio?

git add <br> git status <br> __git init__ <br> git config

15. Lista todas las ramas (branches) disponibles localmente.

__git branch__ <br> git branch -r <br> git log <br> git status

16. ¿ Para qué sirve el comando git log --online?

__Muestra la historia de commit de una rama__ <br> Muestra los convencional commits que has realizado <br> Muestra los logs en una línea en la terminal <br> Muestra el último commit hecho

17. Las tres secciones principales de un proyecto de Git son: Directorio de trabajo (working directory), Area de preparación (staging area) y el Repositorio (repository).

__Verdadero__ <br> Falso

18. En el caso de ya tener una copia de un proyecto usando git clone, podemos actualizar a la última versión con:

git add <br> __git pull__ <br> git branch <br> git log

19. ¿Con qué comando se cambia de rama en git ?

git branch move nombreDelaRama <br> __git checkout nombreDelaRama__ <br> git branch nombreDelaRama <br> git branch active nombreDelaRama

20. En el ____________ se almacena información información acerca de lo que va a ir en tu próxima revisión (commit).

Directorio de trabajo <br> Directorio Git <br> __Área de preparación__ <br> Repositorio

21. Un sistema de control de versiones permite:

__Recuperar versiones anteriores del proyecto__ <br> __Ver históricos de cambios y comentarios__ <br> Únicamente el trabajo de un desarrollador en un momento determinado sobre un proyecto <br> __Que varios clientes puedan sacar copias del proyecto al mismo tiempo__

22. ¿ Para qué sirve el comando git diff ?

Muestra el último cambio de los ficheros de trabajo <br> Muestra los cambios en todos los ficheros no modificados del directorio de trabajo <br> __Muestra las diferencias entre el directorio de trabajo y la zona de intercambio temporal__ <br> Muestra los cambios en todos los ficheros borrados del directorio de trabajo

23. Git es un software de control de versiones centralizado.

Verdadero <br> __Falso__

24. Si deseas obtener una copia de un repositorio Git existente en GitHub, el comando que necesitas es :

__git clone__ <br> git commit <br> git add <br> git log

25. ¿Cómo se sube el contenido de tu rama principal del repositorio local al repositorio remoto ?

git commit -m "Subir archivos" <br> git pull origin master <br> __git push origin master__ <br> git log origin master

26. ¿Cuál de los siguientes comandos crea una nueva rama local llamada "develop", y cambia a ella directamente?

git add develop <br> git checkout -- develop <br> git checkout develop <br> __git checkout -b develop__

27. En sistemas de control de versiones un __________ es el lugar en donde se almacenan las revisiones.

conflicto <br> parche <br> __repositorio__ <br> cambio

28. La herramienta de control de versiones no soluciona el ____________, sólo informa de su existencia.

__conflicto__ <br> parche <br> cambio <br> repositorio

29. ¿ Que es GitHub ?

Es un programa para diseñar proyectos <br> Un repositorio remoto para subir contenido <br> __Es un sistema de gestión de proyectos y control de versiones de código__ <br> Es una plataforma para desarrollar código

30. ¿Cuales son las instrucciones principales que permiten la identificación de un usuario para poder realizar un commit?

git config --global user.whoame <br> __git config --global user.email "example@example.com"__ <br> __git config --global user.name "Fulanito"__ <br> git config --global user.mail "example@example.com"

31. Para añadir contenido al área de preparación (staging area), utilizo el siguiente comando:

git diff <br> git commit <br> git push <br> __git add__

32. ¿ Qué hace el comando git show ?

__Muestra metadatos de commit y diferencias con el commit anterior__ <br> Muestra todos los commits creados <br> Muestra el las etiquetas de los commits <br> Muestra todos los repositorios que has creado