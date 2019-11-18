# TodoGatos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

Te presento una  tienda virtual (Frontend) con la tematica de venta de utencilios y accesorios para gatos,  donde podras ver el resultado desplegado en firebase en el siguiente  link:

`<link>` : <https://todogatos-4758d.firebaseapp.com/>

El diseño fue realizado con Angular, y esta moduladizado para no dejar toda la carga al app.module.ts.

####El proyecto esta dividido en los siguientes componentes:
                
+ app
    + Contact
	+ Core
	+ Home
	+ Shared
	+ Layout
	+ material
	+ page-not-found
	+ product
	+ app-routing.module.ts	
	+ app.component.html	
	+ app.component.scss	
	+ app.component.spec.ts	
	+ app.component.ts	
	+ app.module.ts
+ assets
+ environments 
+ favicon.ico
+ index.html
+ main.ts
+ polyfills.ts
+ styles.scss


El diseño del proyecto en su mayoría esta en la carpeta app. 
Acontinuación hablaremos un poco más de esta carpeta:

#### Contact
Como su nombre lo indica tiene el contenido de la ruta de contacto, es decir sus componentes html, css, y ts. 
#### Core
En core se creo un modelo para el array de porductos y unos servicios que son el detalle del producto, y el servicio del carro donde escuchamos cuando agreguen productos al botón del carrito.

#### home
En el home representa la página principal de la tienda,  tenemos el componente banner que es donde utilizamos la libreria swiper para llamar las imagenes y el componente home llama al banner y en el ts se realiza el slide animado.
#### Shared
En shared tenemos lo componentes que son compartidos, que son  header y el footer, aqui se realiza el diseño de ellos.
#### Layout
Aquí tenemos el control de unir el footer y header en todas las paginas, es decir lo que rutas como home products y contact siempre deben mantener un header y un footer.

#### Material
Es el modulo de librerias que se creo especificamente para llamar cuando se necesite, en este caso se utilizó para el header, y productos. Aqui se puede crear numerosos componentes si quieres más info revisa la página https://material.angular.io/components/categories

#### page-not-found
 cuando la ruta sea la incorrecta direccionará aquí. 
#### Product
 Está dividido en 3 componentes, product-detail: detalle del producto (cuando damos clic en ver detalle), product: diseño en caja de los productos, imagenes titulos. Products: donde creamos todos los productos y los llamamos.


app-routing.module.ts: donde se enruta todo el proyecto. 


