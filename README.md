# ISIS3710_Parcial1

## Ejecución:
1. Ejecute `npm install`.
2. Luego, ejecute `npm start`. Esto lo llevará directamente a la ventana de inicio de sesión.

## Reporte de Decisiones y Explicación del Desarrollo del Parcial:

### Antes del Parcial:

Todo comenzó el día anterior al parcial cuando opté por realizar el parcial de práctica. 
Realicé todo el parcial de práctica, lo cual me permitió definir la apariencia de mi página de inicio de sesión, 
las tarjetas (Cards), el detalle y la página principal (home).

### Durante el Parcial:

#### LOGIN:
- Tomé como referencia el diseño de inicio de sesión que había planteado para el parcial de práctica.
  Realicé un cambio importante: dividí la solicitud de correo electrónico y contraseña en dos "slides" diferentes.
  Para lograrlo, utilicé un estado (`useState`) que me permitió rastrear en qué página me encontraba, y
  el botón de clic tenía asociada una función que gestionaba el cambio entre "slides".
  
  - De esta manera, pude determinar qué renderizar en la página 0 (campos de correo electrónico)
    y en la página 1 (campo de contraseña), utilizando una etiqueta de `<label>` que lleva una variable con
   `useState` que almacena los datos ingresados de correo electrónico/usuario.

- Para validar la corrección de los datos proporcionados para el correo electrónico,
  utilicé una expresión regular (regex) que encontré en regexr.com. Para validar la contraseña,
   simplemente utilicé la propiedad `.length` para asegurarme de que tenga al menos 6 caracteres.
  Es importante destacar que toda esta información sobre la validez y el estado del correo electrónico
  y la contraseña se gestionó utilizando `useState`.

- En este punto, fue necesario configurar las rutas (routing).
 Establecí que "/" redirige a la página de inicio de sesión (`Login`) y
  "/Login" también.

#### INVENTARIO DE PARTES:
- Lo primero que hice fue cargar un archivo JSON para subir todo a github obtener el enlace "raw" con el fin de utilizarlo
  en un efecto secundario (`useEffect`) y obtener la información. Luego, pasé esta información a una
  variable inicializada como una lista vacía utilizando `useState`. Esta lista se utilizaría más adelante en
   los componentes de la página principal (`home`).

- A continuación, usé (`Cards`) que había creado en el parcial de práctica.
  Creé un componente llamado `Card` para facilitar la creación de tarjetas para cada elemento de información.

- Una vez que configuré las tarjetas, creé el componente principal llamado `home`.
  En este componente, importé el componente `Card` y recorrí las propiedades (`props.books`) ( cabe resaltar que "books" ya que no cambié mucho el código al parcial de practica)
que contenían toda la información de las tarjetas. Realicé un bucle para determinar la cantidad
de filas y luego otro bucle para organizar las columnas. Este diseño se renderizó finalmente en la pantalla.

- En este punto, establecí la ruta ("/Home") que redirigiría al nuevo componente de la página principal (`Home`).
 Además, realicé una modificación en la página de inicio de sesión (`Login`) de manera que cuando se completen
 todos los campos correctamente, el usuario sea redirigido a "/Home".

#### DETALLE DEL INVENTARIO DE PARTES:
- Inicialmente, me basé en el componente `Detail` del parcial de práctica y creé un componente llamado `Detail`
  para facilitar la visualización de los detalles de cada elemento.

- En la página principal (`Home`), agregué un identificador (ID) como una propiedad cuando creé las tarjetas.
  Este ID se asignó en función del índice al recorrer la información. Esto facilitaría la presentación de los detalles.
  Además, en `Home`, agregué un evento `onClick` a cada tarjeta para que, desde el componente hijo, se pudiera pasar
  el ID o la posición correspondiente en el JSON de la información al componente `Detail`.

- Una vez hecho esto, dentro de un `<div>`, utilicé una variable llamada `isbn` (ya que mi código no cambió mucho al parcial de practica)
  inicializada como vacía con `useState`. Hice que, cuando no estuviera vacía, se renderizara un componente `Card`
  que tomara los datos pasados por `props.books[id]`, lo que proporcionaba los datos específicos.

#### DETALLE EDITABLE DEL INVENTARIO DE PARTES:
- En el archivo `app.js`, creé una variable llamada `editable` que puede tomar valores `true` o `false` para permitir
 o no la edición. Esto se determinó mediante una función aleatoria. Esta información se pasó mediante `props` a
 `Home`, de modo que pudiera transmitirse a `Detail`.

- En el componente `Detail`, creé una función llamada `inputFields` que toma la información de las partes de los carros
   y, para cada una, crea un `<div>` que contiene una etiqueta `<label>` y un `<input>`, donde el valor (`value`)
  es el valor actual de la información. Luego, utilicé una estructura condicional (`if`) para determinar si el parámetro
  de entrada "editable" está en `true` para renderizar los campos como entradas `<input>`, o de lo contrario,
   se utilizó el formato `<p> <strong> tipo_dato: dato </p>`.

#### I18N (Internacionalización):
- Creé una carpeta llamada `locales` que contiene dos archivos: `en.json` (inglés) y `es.json` (español).
 Ambos archivos tienen las mismas claves, pero los valores asociados son diferentes según el idioma.
 Cada clave se utiliza para representar etiquetas y botones en la aplicación.

- En el archivo `index.js`, se establecieron dos variables importantes: `userLanguage` y `jsonToUse`.
 La primera variable verifica el idioma configurado en el navegador o el idioma seleccionado por el
 usuario en la aplicación. La segunda variable se utiliza para determinar qué archivo JSON debe utilizarse
 en función del idioma detectado. Si el idioma es "es-ES", se usa el archivo `es.json`;
 de lo contrario, se utiliza `en.json`.

- Luego, en cada uno de los componentes de la aplicación, se realizó un llamado a
- la función `<FormattedMessage id="" />` para cada etiqueta o botón que requiere internacionalización.
 Se pasó un `id` específico para cada componente que corresponde a una clave en el archivo JSON correspondiente.
 De esta manera, se logró la internacionalización de la aplicación.
