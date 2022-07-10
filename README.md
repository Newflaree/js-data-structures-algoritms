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
> A pesar de que JS tiene diferentes tipos de variables disponible, no es un lenguage de tipado estricto como C/C++, C# o Java. En los lenguages tipados, tenemos que declarar el tipo de varible junto con la declaración (En Java, por ejemplo, para declarar una variable entera, usamos ìnt num = 1;). En JS, sólo necesitamos usar la palabra reservada var, y no necesitamos declarar el tipo de varible. Por esta razón, JS no es estrictamente tipado.

El siguiente es un ejemplo de como se usan variables en JS
```
var num = 1; //{1}
num = 3; // { 3 }
var price = 1.5; //{3}
var name = 'Patrick'; //{4}
var trueValue = true; //{5}
var nullVar = null; //{6}
var und; //{7}
```

* En la línea { 1 }, tenemos un ejemplo de cómo declarar una variable en JS (Estamos declarando un número). A pesar de que no es necesario utilizar la palabra reservada var al declararla, es una buena práctica siempre especificar cuando declaramos una nueva variable.
* En la línea { 2 }, actualizamos una variable existente, JS no es un lenguage fuertemente tipado. Esto significa que puedes declarar una variable, inicializarla como un número, y luego actualizarla como un string o otro tipo de dato. Asignar un valor a una variable que es diferente al tipo original no es una buena práctica.
* En la línea { 3 }, también declaramos un número, pero esta vez es un demimal de punto flotante. En la línea { 4 }, declaramos un string, en la línea { 5 }, declaramos un boolean. En la línea { 6 }, declaramos un valor null, y en la línea { 7 }, declaramos un undefined. Un valor null significa que no hay valor, y undefined significa una variable que fue declarada pero aún no se le asigna valor. Echa un vistazo a lo siguiente:
```
console.log( "num: " + num );
console.log( "name: " + name );
console.log( "trueValue: " + trueValue );
console.log( "price: " + price );
console.log( "nullVar: " + nullVar );
console.log( "und: " + und );
```

Si queremos ver el valor de cada variable que declaramos, podemos usar console.log() para hacerlo, como se indica en el fragmento de código anterior.
> Tenemos 3 maneras de dar salida a las  variables en JS que podemos usar con los ejemplos de este libro. El primero es el alert( 'Mi texto aquí' ), el cual muestra una ventana de alerta en el navegador, el segundo es el console.log('Mi texto aquí'), Que emite texto en la consola de las herramientas de depuración (Google Developer Tools o Firebug, dependiendo del navegador que esté usando). La tercena manera es emitir el valor directamente en la página HTML que está siendo renderizada por el navegador usando document.write('Mi texto aquí'). Puedes usar la opción que te haga sentir más cómodo.

El método console.log también acepta más que argumentos. En vez de console.log('num: ' + num), también puedes usar console.log('num: ', num).

Vamos a discutir funciones y objetos más adelante en este capítulo.


### Alcance de una variable.
El alcance se refiere a dónde una variable puede acceder en el algoritmo (También puede ser una función cuando trabajamos con alcance de las funciones). Hay variables locales y globales.

Revisemos un ejemplo:
```
var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
  var myVariable = 'local';
  return myVariable;
}

function myOtherFunction() {
  myOtherVariable = 'local';
  return myOtherVariable;
}

console.log( myVariable ); //{1}
console.log( myFunction() ); //{2}

console.log( myOtherVariable ); //{3}
console.log( myOtherFunction ); //{4}

console.log( myOtherVariable ); //{5}
```

* La línea {1} emitie 'global' porque nos estamos refiriendo a una variable global.
* La línea {2} emitie 'local' porque declaramos la variable 'myVariable' dentro de la función 'myFunction' como una variable local, Entonces el alcan solo estará dentro de 'myFunction'.
* La línea {3} emite 'global' porque nos estamos refiriendo a la varibale global llama 'myOtherVariable' que fue inicializada en la segunda línea del ejemplo.
* La línea {4} emite 'local'. Dentro de la función 'myOtherFunction', hacemos referencia a la variable global 'myOtherVariable' y asignamos el valor 'local' a esta porque no estamos declarando la variable usando la palabla reservada var.
* Por esta razón, la línea {5} emite 'local' (Porque cambiamos el vamor de la variable dentro de 'myOtherFunction').

Es posible que escuche que las variables globales en JS son malas y esto es cierto. Por lo general, la calidad del código fuente de JS se mide por la cantidad de variables y funciones globales (Un gran número es malo). Entonces, siempre que sea posible, intenta evitar las variables globales.


### Operadores.
Necesitamos los operadores a la hora de realizar cualquier operación en un lenguage de programación. JS también tiene operadores aritméticos, de asignación, de comparación, lógicos, bit a bit y unarios, entre otros. Echemos un vistazo a estos:
```
var num = 0; //{1}
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;

num += 1; //{2}
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log( 'num == 1: ', (num == 1) ); // {3}
console.log( 'num === 1: ', (num === 1) );
console.log( 'num != 1: ', (num != 1) );
console.log( 'num > 1: ', (num > 1) );
console.log( 'num < 1: ', (num < 1) );
console.log( 'num >= 1: ', (num >= 1) );
console.log( 'num <= 1: ', (num <= 1) );

console.log( 'true && false: ', (true && false) ); //{4}
console.log( 'true || false: ', (true || false) );
console.log( '!true: ', (!true) );
```

En la línea {1}, tenemos los operadores aritméticos. En la siguiente tabla, tenemos los operadores y su descripción:
| Operadores aritméticos | Descripción |
|------------------------|-------------|
| +                      | Adición     |
| -                      | Sustracción |
| *                      | Multiplicación     |
| /                      | División     |
| %                      | Módulo ( residuo de la división )     |
| ++                     | Incrementar     |
| --                     | Decrementar     |


