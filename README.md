# EjercicioReact

Autor: María Quintairos Fernández

RESUMEN:

Este es un proyecto sobre una aplicación sobre gestión de eventos desarrollado con React, TypeScript y distintos programas de Firebase. La aplicación permite ver los eventos que ofrecemos y solicitar algunos, así como manejar la autenticación de usuarios mediante Firebase.

Tecnologías utilizadas
React: Biblioteca de JavaScript para construir interfaces de usuario.
TypeScript: Superset de JavaScript que añade tipado estático.
Firebase: Plataforma de desarrollo de aplicaciones web y móviles.
Firestore: Base de datos NoSQL de Firebase.
Firebase Auth: Servicio de autenticación de Firebase.


QUE NECESITAS:

Antes de comenzar con la instalación, asegúrate de tener instalados los siguientes programas en tu computadora:

Node.js (v16 o superior recomendado)
npm
Cuenta en Firebase para acceder a los servicios de Firebase (Firestore y Firebase Auth)

Pasos para la Instalación:

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

1. Clonar el repositorio
Primero, clona el repositorio del proyecto en tu máquina local:

git clone https://github.com/quingtairos/EjercicioReact
cd AppWebEventos

2. Instalar las dependencias
A continuación, instala las dependencias del proyecto usando npm:

npm install

3. Configurar Firebase
Necesitarás configurar Firebase para que tu aplicación pueda interactuar con Firestore y Firebase Auth. Para esto, sigue los pasos a continuación:

Accede a tu consola de Firebase.
Crea un nuevo proyecto o usa un proyecto existente.
Habilita Firestore y Firebase Authentication:
En la consola de Firebase, selecciona el proyecto.
Ve a la sección de Firestore Database y haz clic en Crear base de datos. Configura Firestore según las necesidades de tu aplicación.
En la sección de Authentication, habilita el método de autenticación que prefieras (por ejemplo, correo electrónico/contraseña, Google, etc.).
Obtener las credenciales de Firebase:
En la consola de Firebase, ve a Configuración del proyecto (ícono de engranaje en la esquina superior izquierda).
En la sección de Tus aplicaciones, selecciona la aplicación web (el ícono de "web").
Copia la configuración del SDK de Firebase, que debería verse algo así:

javascript
Copiar
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

4. Configurar Firebase en el proyecto:
Crea un archivo llamado .env en la raíz de tu proyecto y agrega las claves de configuración de Firebase que obtuviste en el paso anterior. Debería lucir algo así:

REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID

5. Iniciar el servidor de desarrollo:
Una vez configurado todo, puedes iniciar el servidor de desarrollo con el siguiente comando:

npm start

(Este comando lanzará la aplicación en http://localhost:3000 en tu navegador).

COMO USAR FIREBASE:

Firebase Auth
La aplicación permite la autenticación de usuarios a través de Firebase Auth.
Los usuarios pueden registrarse y acceder con el método de autenticación que hayas configurado en Firebase (por ejemplo, correo electrónico y contraseña, o autenticación con Google).
Firestore
Los datos de los eventos son almacenados en Firestore.
Puedes agregar, eliminar y editar eventos a través de la interfaz de usuario proporcionada.
Dependencias
Este proyecto utiliza las siguientes dependencias principales:

react: Biblioteca principal para construir la interfaz de usuario.
react-dom: Proporciona la interfaz entre React y el DOM.
react-router-dom: Manejo de rutas para navegar entre diferentes vistas.
firebase: SDK de Firebase para interactuar con Firestore y Firebase Auth.
typescript: Superset de JavaScript que añade tipado estático.
@types/react, @types/react-dom: Tipos de TypeScript para las bibliotecas de React.
Despliegue
Para desplegar la aplicación en un entorno de producción (por ejemplo, Firebase Hosting), sigue estos pasos:

Instala Firebase CLI (si no lo tienes):

npm install -g firebase-tools
Inicia sesión en tu cuenta de Firebase:

firebase login
Inicializa tu proyecto Firebase (si aún no lo has hecho):

firebase init
Selecciona Hosting durante la inicialización y configura los archivos que quieres que Firebase hospede.

Despliega la aplicación:


firebase deploy

Y LISTO!!!
