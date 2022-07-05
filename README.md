# Estructuras de datos y algorítmos en JavaScript
## 1 JavaScript - Un vistazo rápido
JS es un lenguage muy poderoso. Es el lenguage más polular en el mundo y uno de los lenguages más prominentes en Internet. 

JS no es solo un lenguage usado en el Frontend. También puede ser usado en el Backend, y Node.js es la tecnología responsable de esto. El número de paquenes de módulos de node también crece exponencialmente.

JS debe estar en tu curriculum si quieres ser un desarrollador web.

En este capítulo, aprenderás la sintáxis y algunos fundamentos básicos de JS, entonces podemos empezar desarrollando  nuestras propias estruturas de datos y algorítmos. 
Lo que cubriremos:
- Levantar nuestro entorno de desarrollo.
- JS básico.
- Estructuras de control.
- Funciones.
- Programación orientada a objetos en JS.
- Depuración y herramientas.
- Introducción a ECMAScript 5 y ECMAScript 7.

### Estructuras de datos y algorítmos en JS
En este libro, aprenderás sobre las estructuras de datos y algorítmos más usados. Sin embargo, ¿Por qué usar JS para aprender sobre estructuras de datos y algorítmos? Ya hemos respondido a esta pregunta. JS es muy popular y adecuado para aprender estructuras de datos porque es un lenguage funcional. También, puede ser una forma divertida de aprender algunas cosas nuevas como esta es diferente aprenderlas con un lenguje estandar.

Aprender sobre estrutura de datos y algorítmos es muy importante. La primera razón es que pueden resolver la mayoría de los problemas comunes eficientemente. Esto hará una diferencia en la calidad del código fuente que escribes en el futuro ( incluyendo el rendimiento, si eliges una estrutura de datos equivocada, dependiendo del escenario, es posible que tenga algunos problemas de rendimiento ). Segundo, los algorítmos también se estudian en la universidad con la introducción a ciencias de la computación. Y tercero, si estás planeando encontrar un buen empleo en alguna empresa de tecnología, las estruturas de datos y los algoritmos son el tema principal de las preguntas en las entrevistas.

### Levantemos el entorno de desarrollo
Para hacerlo, necesitamos tener Node.js instalado. Ve a https://nodejs.org/, descarga e instala Nodejs. Luego, abre una terminal y corre el siguiente comando:
```
sudo npm install http-server -g
```

Este comando instalará http-server, El cual es un servidor de JS. Para iniciar el servidor y correr los ejemplos del libro en la terminal, cambia al directorio donde se encuentre el código fuente del libro y escribe ````http-server````.

Para ejecutar los ejemplos, abre el navegador y accede al localhost en el puerto especificado por el http-server.

### JavaScript Básico
Antes de entrar de lleno en las diversas estructuras de datos y algoritmos, Daremos un vistazo rápido al leguaje JS. Esta sección presentará los requisitos básicos para implementar los algorítmos que crearemos en las capítulos sub siguientes.

Para empezar, revisemos las dos formas en que podemos usar código de JS en una página HTML:
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8' />
  </head>
  <body>
    <script>
      alert( 'Hola mundo' );
    </script>
  </body>
</html>
```

La primera manera se muestra en el código anterior. Necesitamos crear un archivo de HTML y escribir este código en él. En este ejemplo, estamos declarando una etiqueta script dentro del archivo de HTML y, a su vez, dentro de la etiqueta script, tenemos código de JS.

Para el segungo ejemplo, necesitamos crear un archivo de JS ( podemos guardarlo como 01-HelloWorld.js ) y, dentro de este archivo, insertaremos el siguiente código:
```
alert( 'Hola mundo' );
```

Luego, nuestro archivo de HTML se verá algo similar a esto:
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8' />
  </head>
  <body>
    <script src='01-HelloWorld.js'>
    </script>
  </body>
</html>
```

El segundo ejemplo muestra cómo insertar un archivo de JS dentro de un archivo HTML.

Al ejecutar cualquiera de estos dos ejemplos, la salida será la misma. Sim embargo, el segundo ejemplo es una mejor práctica.
> Puedes encontrar JS incluido declarado o código JS dentro de la etiqueta head en algunos ejemplos en internet. Como buena práctica, incluiremos cualquier código de JS al final de la etiqueta del body. De esta manera, el HTML será analizado por el navegador y luego se cargaran los scripts, Esto aumenta el rendimiento de la página.

### Variables
Las variables guardan información que puede ser establecida, actualizada y recuperada cada vez que sea necesario. Los valores que son asignados a una varible pertenece a un tipo. En JS, los tipos permitidos son numbers, strings, booleans, funciones y objetos. También tenemos el undefined y el null, junto con Arrays, fechas y expresiones regulares.
> 




