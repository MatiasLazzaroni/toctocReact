


# Carpinteria TocToc Web
El proyecto trata de una e-commerce para un taller de carpinteria realizado con ReactJs. La idea es brindar todo el servicio de venta y atencion por la app, asi el taller puede enfocarce mas en sus trabajos.

## Git

- git clone https://github.com/MatiasLazzaroni/toctocReact
- cd . toctoc
- npm install
- npm start

## Componentes

- NavBar
- Cart - CartWidget
- FormularioCompra
- ItemDetail - ItemDetailConteiner
- Item - ItemList - ItemListContainer

Al iniciarlo se van a encontrar con un proyecto en proceso. En primer lugar un NavBar con el logo y 3 accesos a: **Inicio, Nosotros y Productos.**
La misma al estar en proceso, unicamente en la seccion **Inicio** se va a ver el logo de la empresa, la seccion **Nosotros** queda vacia y el enfoque esta en **Productos**. En esta última tiene una pequeña descripcion de la sección, debajo 4 iconos con ilustraciones (en proceso) para seleccionar los productos por categoria, debajo de esta se encuentran todos los productos sin filtrar.
Para acceder a un producto, se debe hacer click en el boton "ver detalle", se abre un componente con las propiedades de ese producto (titulo, subtitulo, descripcion, precio, modos de pagos, etc).
El usuario puede elegir la cantidad, una ves seleccionado se borra el contador y aparece el boton "finalizar", este cumple la funcion de agregar el producto al carrito. Cuando esto ocurre, aparece el icono carrito en la parte izquierda del NavBar con la cantidad de productos enumerados y se abre el componente Cart, ahi se encuentra con el producto seleccionado con su subprecio, debajo una barra negra donde se muestra el total de los productos seleccionados, cada barra tiene la opcion de eliminar de forma individual los productos o borrar todo con el icono de barra negra. Debajo del listado tiene dos opciones, volver a la seccion productos o generar orden. En esta ultima al hacer click se entra al componente FormularioCompra, un simple formulario donde se debe completar los datos del usuario y al lado del mismo, una breve muestra del o los productos seleccionados. Una vez finalizado se da al boton enviar y aparece el mensaje de finalizacion con el numero de ID de la orden de compra. Al quitar el mensaje aparece un mensaje, el formulario desaparece y figura un mensaje de agradecimiento.

<<<<<<< HEAD
## Variables de entorno

Para poder iniciar el proyecto tienen que configurar las variables de entorno, les dejo un archivo de ejemplo ".env.example":

REACT_APP_FIREBASE_apiKey

REACT_APP_FIREBASE_authDomain

REACT_APP_FIREBASE_projectId

REACT_APP_FIREBASE_storageBucket

REACT_APP_FIREBASE_messagingSenderId

REACT_APP_FIREBASE_appId

## Autor

Matias Lazzaroni


