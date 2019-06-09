# Estilet-SASS
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project.

## Base HTML

```html
<body>
  <!--HEADER-->          
  <header>
    <!--NAV-->                    
      <nav>                              
        <ul>                                        
          <li>
            <a href=””></a>
          </li>
        </ul>
      </nav>          
  </header>          
  <!--CONTENT-->
  <main id=”wrap-content”>                    
    <section>                              
      <article>                                        
        <h2>Title</h2>                                        
        <p>Lorem ipsum</p>
      </article>                              
      <article>                                        
        <h2>Title</h2>
        <p>Lorem ipsum</p>
      </article>                    
    </section>
  </main>
  <!--FOOTER-->          
  <footer></footer>
  <!--Scripts-->
  <script src=”js/scripts.js”></script>
</body>
```
## Tags HTML
A continuación muestro una estructura básica de como podría ser una página web.Toda estructura html comienza con el tag `<html>`, dentro del cual crearemos el tag `<head>`, que contiene información sobre el propio documento HTML, como por ejemplo su título, el idioma de la página y las llamadas a los css entre otras cosas.

Dentro del tag `<html>` tenemos también el tag `<body>` que es donde pondremos el contenido de la página web.

Normalmente la estructura dentro del `<body>` se divide en tres grandes bloques:

El `<header>`, que es la parte superior de la página, donde se ubican el logo y el menú por ejemplo.

Los elementos del menú suelen estar dentro de una lista. Esta lista la metemos den-tro del tag `<nav>` como este ejemplo:

```html
<nav>
  <ul>
    <li>
      <a href=”#”>Item menú</a>
    </li>
  </ul>
</nav>
```

A continuación es recomendable, aunque no obligatorio, crear un gran bloque para meter dentro el contenido de la web. En este ejemplo usamos el siguiente:

```html
<main id=”wrap-content”>
```

Aquí dentro dividiremos el contenido en `<section>` para tenerlo más ordenado. Si se trata de bloques de texto que contengan título y párrafo los insertaremos en la etiqueta `<article>`

Por último el `<footer>`, que es el cierre de la página, donde ubicaremos los textos legales por ejemplo.

## Listas

Las listas por defecto carecen de estilos en nuestra base. Para darle estilos a nues-tras listas habrá que definir una clase. Por defecto en nuestra base está creada la clase .lista que añade el símbolo - delante de cada item de la lista.

```html
<ul class=”lista”><li>Lorem ipsum</li><li>Lorem ipsum</li></ul>
```

Se traduce en lo siguiente:
- Lorem ipsum
- Lorem ipsum

Si le añadimos la clase `.square` o `.circle` hacemos que el símbolo se modifique a un cuadrado o un circulo.


## #wrap-content

El identificador `#wrap-content` lo usaremos como contenedor del contenido de nuestra web que no esté dentro del header o el footer. Este identificador viene defi-nido de la siguiente manera

```sass
#wrap-content
  padding: 30px
  margin-right: auto
  margin-left: auto
  max-width: 1440px
  overflow: hidden
```

Dependiendo del cliente se podrán modificar los parámetros de este identificador para que se ajuste lo máximo posible al diseño propuesto. Por ejemplo, nuestro `#wrap-content` está limitado a un ancho de 1440px y puede que algún cliente quiera que el contenido de su web tenga un ancho del 90% del monitor por ejemplo.

## Center

Hay ocasiones en las que necesitamos que un elemento quede centrado en medio, o bien del monitor (un modal por ejemplo) o en medio de otro elemento (una foto dentro de una caja que la contiene). Para esos casos usaremos la clase `.center-absolute`. Siempre la usaremos si el elemento al que pongamos esta clase está dentro de otro elemento que posee una posición relativa. De lo contrario no funcionará.

Si en lugar de que esté centrado en el centro lo queremos centrado en el eje de las x o de las y lo que haremos será añadir a esta clase otra que es `.x` o `.y` según la que necesitemos. Por ejemplo:

```html
<div style=”position: relative”>
  <img src=”images/foto.jpg” class=”center-absolute”>
</div>
```

De esta manera tenemos un bloque con una imagen posicionada en el centro.

Si a demás queremos que el bloque tenga unas medidas concretas y que la imagen que contiene en su interior no sobrepase este tamaño sin deformarse usaremos la clase `.center-image`. Es importante que el bloque padre a demás de tener el parámetro `position: relative` deberá tener el parámetro `overflow: hidden` para que corte la parte de la foto sobrante.

```html
<div style=”position: relative; overflow: hidden”>
  <img src=”images/foto.jpg” class=”center-image”>
</div>
```

## Parámetros de composición

Para centrar el texto: `.center`
Para usar el ancho del 100%: `.full-width`
Para usar un máximo de ancho del 100%: `.max-full-width`
Para posicionar un elemento flotando a la izquierda: `.pull-right`
Para posicionar un elemento flotando a la derecha: `.pull-left`
Si queremos que una imagen tenga un ancho del 100%: `.img-responsive`
Para ocultar un elemento unicamente en móvil: `.no-in-mobile`
Para mostrar un elemento unicamente en móvil: `.only-in-mobile`
Para ocultar un elemento unicamente en tablet: `.no-in-tablet`
Para mostrar un elemento unicamente en tablet: `.only-in-tablet`
Si queremos darle una sombra a un elemento tipo modal: `.shadow`

## Gestión de tiempo en transiciones

A la hora de hacer animaciones en nuestro proyecto (efectos `:hover` por ejemplo) te-nemos que darle un tiempo de duración de la animación. En nuestra base tenemos definidas las siguientes:

0.2 segundos:
`.two-mseconds-transition`
0.3 segundos:
`.tree-mseconds-transition`
0.5 segundos:
`.five-mseconds-transition`
0.8 segundos:
`.eight-mseconds-transition`
1 segundo:
`.ten-mseconds-transition`
2 segundos:
`.twenty-mseconds-transition`
