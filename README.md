Aplicación esqueleto que modela cliente, se simula la DB con una lista. 

Esta aplicación es una Api rest, construida usando express con typescript, incluye pruebas unitarias hechas con jest.

Esta pieza disponibiliza 3 endpoints:
- `post clientes`  Agrega un cliente al sistema
- `get clientes` obtiene todos los clientes en el sistema
- `get client/:id`  obtiene un cliente en el sistema, segun id

Para levantar la aplicacion:
- Tener instalado node 
- Ejecutar comando `npm start`

La aplicacion se levanta en el puerto 3000, por lo tanto la ruta completa seria:

get localhost:3000/clientes

Para ejecutar los tests:
- Tener instalado node 
- Ejecutar comando `npm test`

Tambien se incluye un archivo Dockerfile, para generar una imagen docker de la aplicaccion hay que ejecutar el script `npm run docker`