# PROYECTO BUSCADOR DE PELÍCULAS

En este tercer reto técnico hemos de realizar un buscador de películas.

## OBJETIVOS

Se nos pide tener dos 2 áreas distinguidas: la de usuario y la de películas.
En la de usuario podremos darnos de alta, ver el perfil del usuario, dar de baja al usuario y loguearnos en la base de datos. Como extra, podemos dar dos roles a los usuarios: user o admin.
Por otro lado, en la de películas, hemos de ser capaces de hacer una búsqueda por el título, por el id y una búsqueda total de toda la lista de películas. Como extra, en este caso podremos filtrarlas por actor y por género.

### PLANTEAMIENTO

Con el patrón de MVC en mente he procedido a ordenar las carpetas internas en una aplicación principal, que enlaza todos los demás componentes y dividir en dos carpetas principales, películas (movie) y usuarios (user). 
Ambas contienen su propia carpeta de controller, model y router, para así ajustarse al patrón mencionado.

### TECNOLOGÍAS

- JavaScript
- Express
- MongoDB
- Mongoose