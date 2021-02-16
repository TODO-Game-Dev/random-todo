# Tutorial para git terminal 

Todo el mundo que quiera acceso a git debe usar el [git-terminal](https://git-scm.com/download/win) ya sea de forma directa (usando consola de comanos) o indirecta (usando GUI como [sourcetree](https://www.sourcetreeapp.com/) o [github desktop](https://desktop.github.com/)). Así que en este tutorial pasaremos por los puntos básicos del funcionamiento de git. 

Antes de nada vamos a repasar que es Git y para que se usa :

## Qué es Git (toston teorico)

Git es software de versión de control para ficheros, es decir, te sirve para controlar la vida de los ficheros des de que los creas, hasta que lo eliminas pasando por todas las modificaciones que se han hecho. 

Git se distribuye en repositorios que se podría traducir como proyectos, cada uno es independiente de los otros y tienen su propia gestión. En este caso el repositorio es el juego random de todo (*random_todo*). 

Hay que tener en cuenta que existen 2 repositorios simultáneos todo el tiempo, el local (guardado en tu ordenador) y el cloud (guardado en el servidor de github).  

**Branches** 

Usualmente git se trabaja en el que se llaman branches, es decir, una copia del repositorio original donde puedes trabajar sin peligro a modificar los archivos originales. Usualmente se abre una branch cuando hay una tarea que hacer, y se cierra cuando la tarea esta finalizada. No suele ser un buen síntoma si una branch pasa mucho tiempo abierta. 

Normalmente se abre una branch cuando: 

- Hay que hacer una feature nueva. 
- Hay que arreglar un bug. 
- Hay que refactorizar el codigo. 
- Hay que cambiar archivos de configuracion / sistema. 
- Se quieren hacer experimentos 
- otros.

#### Main 

Hay una branch llamada **Main** (antes era Master) y esta es la que contiene los archivos definitivos, finales u originales, y se da por sentado que esta branch es la que contiene el código funcional. Usualmente esta branch se considera sagrada ya que es el punto de referencia para todo el mundo. 

### Commits 

Una vez tenemos una branch abierta y empezamos a modificar documentos, estos no seran registrados en la versión de control local hasta que le digamos a git que los guarde. Aqui es donde aparece el termino commit. 

Podemos entender un commit como guardar el estado actual y darle un nombre significativo para en un futuro saber que cambios se han hecho. Además los commit nos pueden servir como punto de guardado por si en un futuro hacemos cambios y rompemos el juego, podemos volver hasta el punto de guardado. 

Como recordatorio, hacer un commit solo afecta al repositorio local, el servidor no se entera. 

### Push

Para este tutorial vamos a entender que un Push es mandar la información de todos los commits guardados en local al servidor para que el resto de usuarios pueda verlos.

### Pull

Del mismo modo que Push significa enviar información al servidor, Pull significa recibir información de él. Así que si alguien ha hecho cambios en nuestra branch y hacemos pull, vamos a poder ver estos cambios en local y trabajar sobre ellos. 

### Merge

Una vez nuestra branch ya esta terminado y hemos hecho todos los commits necesarios, podemos mergear nuestra branch que significa añadir todos nuestros cambios a los archivos originales. Una vez se hace un merge la branch se puede cerrar sin peligro de perder cambios, además que se considera una buena práctica cerrar las branch una vez se han mergeado

### Conflictos 

A veces cuando uno quiere hacer merge le aparecen conflictos, significa que el archivo que tu modificaste también lo modifico alguien más y por lo tanto no sabe que versión escoger como buena. 

Para solucionar estos conflictos se debe ir al fichero en concreto y allí decidir qué cambios conservar como buenos y cuáles no. 

**Se considera una muy mala práctica desechar los cambios de los otros y solo meter los tuyos, en algunas empresas esto es motivo de despido**. 

# Vamos a usar Git 

## 1. Obtener el repositorio

Lo primero de todo es poder obtener el repositorio, para ello hay que tener la url, en este caso: https://github.com/TODO-Game-Dev/random-todo.git . Una vez la tenemos, ya podemos descargarnos el repositorio en local. 

Para hacerlo vamos a cualquier carpeta de nuestro ordenador ( _C:\Users\%username%\Documents_ por ejemplo) y hacemos click derecho en un espacio vacío y seleccionamos **git bash**.

 ![git acces][gitBashAcces]

Una vez hemos seleccionado el git bash se abre el terminal y allí ya podemos escribir nuestros comandos, así que el primero va a ser clonar el repositorio a nuestro ordenador. Para hacerlos usaremos la comanda: 

```bash
git clone https://github.com/TODO-Game-Dev/random-todo.git 
cd random-todo
```

Veremos que empezara a descargar archivos y cuando termine tendra una nueva carpeta llamada **random-todo** donde se encuentra el repositorio y nos encontraremos en la brach **main**.

## 2. Cambiar de branch

Como hemos dicho anteriormente no es bueo trabajar sobre la branch main, asi que vamos a ver como podemos cambiar de branch. 

### 2.1 Branch Existentes

Si queremos ir a una branch ya existente solo hace falta usar este comando: 

```bash
git checkout <nombre_de_la_branch>
```

Por ejemplo si quisiéramos ir a la branch _tutorial_

```bash
git checkout tutorial
```

### 2.2 Crear una nueva branch

Si por contra queremos crear una branch nueva, tenemos dos opciones: 

- Crear des de la [web](https://github.com/TODO-Game-Dev/random-todo)  donde nos deja crear una nueva branch e ir al punto [anterior](#2.1 Branch Existentes) ![CreateBranch][CreateBranch]

- Crear des de la línea de comandos (Nota: esto solo nos crea la branch en local)

  ```bash
  git checkout -b <Nombre-de-la-nueva-branch>
  ```

  Siguiendo el ejemplo anterior seria: 

  ```bash
  git checkout -b tutorials
  ```

  Para informar al servidor que hemos creado esta branch deberemos hacer: 

  ```bash
  git push -u origin tutorials (o nombre de la branch en cuestion)
  ```

## 3.Ver estado de la branch y añadir ficheros

Es bueno saber en todo momento que ficheros se han modificado  y cuales son los que se guardaran si hacemos un [commit](#Commits). 

Así que para ver el estado actual tenemos el comando: 

```bash
git status
```

Este comando nos devolverá una lista de todos los ficheros modificados después del último commit. Por ahora no tenemos ninguno ya que no hemos hecho nada. 

Así que vamos a crear un fichero nuevo y le vamos a dar de nombre _Prueba.txt_. Abrimos este fichero y escribimos cualquier cosa dentro. Yo para este ejemplo voy a escribir _Hola soy un fichero de prueba_ . Guardamos y ya lo podemos cerrar. 

si volvemos a hacer el comando de git status: 

```bash
git status
	On branch gitTutorial
	Untracked files:
  		(use "git add <file>..." to include in what will be committed)
  			Prueba.txt
```

Veremos que nos sale nuestro fichero en rojo y que se encuentra debajo de __untracked files__ lo que significa que este fichero es nuevo y no se tiene en cuenta para nuestro repositorio. También podria significar que los cambios de este fichero no se guardaran. 

Para solucionar esto vamos a añadir este fichero al siguiente commit. 

```bash
git add Prueba.txt
```

Con este comando hemos añadido el fichero al siguiente commit, si ahora comprobamos el estado: 

```bash
git status
	On branch gitTutorial
	Changes to be committed:
 		 (use "git restore --staged <file>..." to unstage)
        		new file:   Prueba.txt
```

Nos dice que hay un cambio para el commit y que se trata de un fichero nuevo llamado Prueba.txt . 

### 3.1 Que pasa si añadimos algo que no queremos

Si sin quere añadimos un fichero que no queremos, o bien nos damos cuenta que el archivo contiene errores y no queremos guardarlo en el commit, siempre podemos quitarlo con: 

```bash
git restore --staged Prueba.txt
```



## 4.Commits

Para poder hacer un commit debemos tener algun fichero modificado guardado para el commit. En nuestro caso tenemos el fichero Prueba.txt que hemos creado en el [apartado anterior](#3.Ver estado de la branch y añadir ficheros) así que ya podemos hacer el commit. 

```bash
git commit -m 'Mensaje para el commit'
```

El mensaje para el commit es una descripcion de lo que hemos hecho. Es importante que sea una descripción corta, concisa y especifica de los camios. Por ejemplo en nuestro caso seria bueno: 

```bash
git commit -m 'Añadir Prueba.txt al repositorio'
```

Si ahora comprobamos el estado del repositorio veremos que nuestro fichero no esta ya que el commit ya ha guardado todos sus cambios. 

```bash
git status
	No changes.
```

## 5. Push 

Una vez tenemos todos los commits que necesitamos, o bien queremos compartir nuestro progreso con el resto de personas, debemos hacer un push. Es decir, enviar nuestros datos al servidor. Es tan fácil como hacer: 

```bash
git push
```

Es muy importante que tengamos todos los cambios de la branch en nuestro ordenador local. Imaginaos que alguien hace cambios a los ficheros en nuestra branch y no nos damos cuenta y decidimos subir los nuestros. Luego los cambios del compañoer se perderían. 
Por suerte git no permite que estas situaciones pasen y nos da error al hacer push si no tenemos todos los cambios. 

Así que una buena practica es hacer pull antes de push. 

```bash
git pull 
// si todo va bien: 
git push 
```



## 6.Hacer una pull request: 

Una vez no tengamos que añadir mas cambios en nuestra branch porque hemos terminado nuestra tarea, podemos hacer un Pull Request para mergear nuestros cambios a la branch principal **main**. Para hacerlo lo mejor es hacerlo vía web: 



![][CreatePR]

Una vez estemos dentro escogemos nuestra branch para mergar y creamos la PR

![][CreatePR2]

Una vez creada solo hace falta que los otros usuarios aprueben la PR y ya podremos mergearla sin problema. 



[gitBashAcces]: ./Assets/GitBashAccess.png
[CreateBranch]: ./Assets/CreateBranch.png
[CreatePR]: ./Assets/CreatePR.png
[CreatePR2]: ./Assets/CreatePR2.png