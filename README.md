# Gestión de productos

El proyecto es una aplicación web que permite a los usuarios gestionar sus productos.

#### Pasos para ejecutar la aplicación :

1. Clona o descarga el proyecto.
2. En la raíz del proyecto, copia y pega el archivo 'database.sql' en tu cliente
de base de datos (MySQL Workbench, PHPMyAdmin, HeidiSQL, etc), y ejecútalo.

##### Iniciar el servidor backend :

1. Abre el proyecto en una terminal como bash o cmd, y dirigete a la carpeta 'server'.
3. Crea un archivo .env en raíz y agrega las variables de entorno. Las variables a utilizar
las puedes visualizar en 'server/config/env.js'.
2. Ejecuta el comando 'npm install' y después 'npm run serve'. Si el proceso se ejecutó
correctamente visualizarás en consola un mensaje como "Servidor corriendo...".

##### Iniciar el servidor frontend :

1. Abre el proyecto en una terminal como bash o cmd, y dirigete a la carpeta 'client'.
2. Ejecuta el comando 'npm install' y después 'npm run dev'. Si el proceso se ejecutó
correctamente visualizarás en consola un mensaje como "Local: http://localhost...".

Abre un navegador y escribe en la parte de URL: localhost:5173, si todo ha salido bien verás un formulario de inicio de sesión. Los usuarios y contraseñas vienen en el archivo 'database.sql'
que está en raíz del proyecto, justo antes del 'INSERT INTO `user`'.

**Nota:**
Asegúrate de tener NodeJS instalo y un SGBD como MySQL.
