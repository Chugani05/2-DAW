## Introducción	
    Este proyecto es un backend. Compuesto, básicamente, de:
        - Un docker que contiene una BBDD de Mongodb y un servidor para acceder a Mongo
        - Un servidor Express para accder al Docker
        - Existe la funcionalidad de confirmacion de correos usando [Nodemailer](https://www.nodemailer.com/)
        - Paralelamente hay un Servicio para registrar en BBDD.

## Operaciones sobre BBDD Mongodb
    Puede realizar:

    - Registro de usuario
        Puede hacer pruebas con POSTMAN haciendo POST a la url <http://localhost:4000/api/auth/register> y pasar el usuario como raw, formato JSON, por ejemplo:

          {"username":"Pepe","email":"pepe@correo.com","password":"123445678"}

    - Login
        Puede hacer pruebas con POSTMAN haciendo POST a la url <http://localhost:4000/api/auth/login> y pasar el usuario como raw, formato JSON, por ejemplo:
        
            {"email":"pepe@correo.com","password":"123445678"}

    - Recuperación de usuarios
        Puede recuperarlos accediendo por un navegador a la url http://localhost:4000/api/users o en POSTMAN haciendo un GET a la url http://localhost:4000/api/users

## Operaciones extras
    Las siguientes operaciones extras están comentadas por si en futuras aplicaciones sean necesarias.
    - Envío de email para confirmar el registro --> controllers/authContrller.js línea 38 y 81.
    - Uso de Json Web Token (JWT) --> para transmitir datos entre front y end de forma segura. En la aplicación se envía el JWT al front.

## Arrancar Docker de BBDD Mongodb
docker compose up --build -d

Puedes usar Mongodb Compasss para verificar que la BBDD del DOcker está corriendo.
Conección para Mongodb Compass: mongodb://WittCode:MySecurePassword@localhost:27017/mydb

## Arrancar la aplicación
npm run start

## Comprobar el backend
Desde POSTMAN haces un GET a http://localhost:4000/api/users que muestra todos los usuarios.