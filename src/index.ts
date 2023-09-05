import app from "./app";

const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/* 


### Node.js
Es un entorno de ejecución para JavaScript construido en el motor de JavaScript V8 de Chrome. Se utiliza principalmente para crear aplicaciones de servidor.

### TypeScript
Es un superset de JavaScript que añade tipado estático. Facilita el desarrollo de aplicaciones grandes y complejas.

### Express
Es un marco de aplicación web para Node.js que proporciona un conjunto robusto de características para aplicaciones web y móviles.

### Morgan
Es un middleware de registro de solicitudes HTTP para Node.js. Ayuda a registrar detalles como la dirección IP del cliente, el método de solicitud HTTP, la URL y otros detalles de la solicitud y respuesta.

### CORS
Es un paquete de middleware para habilitar CORS (Intercambio de Recursos de Origen Cruzado) en tus rutas o en tu aplicación completa.

### dotenv
Es una dependencia que permite cargar variables de entorno desde un archivo `.env` en `process.env`. Esto es útil para manejar configuraciones que varían entre entornos (desarrollo, producción, etc.).

### Sequelize
Es un ORM (Object-Relational Mapping) que te permite interactuar con bases de datos SQL de una manera más sencilla y amigable, utilizando objetos y métodos en lugar de escribir consultas SQL crudas.

### Nodemon
Es una utilidad que monitorea los cambios en tu código fuente y reinicia automáticamente tu servidor. Esto es muy útil durante el desarrollo para aplicar cambios al instante.

### SQLite
Es un motor de base de datos SQL que no requiere un proceso de servidor separado y permite acceder a la base de datos utilizando una variante no estándar del lenguaje de consulta SQL.

### Tipos (@types/...)
Estos son paquetes que contienen archivos de definición de tipos para bibliotecas JavaScript que originalmente no están escritas en TypeScript. Estos hacen posible usar estas bibliotecas de forma segura en un entorno TypeScript.

Espero que estas explicaciones te ayuden a entender mejor el propósito de cada tecnología y paquete en tu proyecto.
*/
