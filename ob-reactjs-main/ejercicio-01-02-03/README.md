# Ejercicio 01-02-03 del Curso de ReactJS de OB

Proyecto hecho con [Create React App](https://github.com/facebook/create-react-app).

## Descripción:

Para este primer reto de programación en React vamos a poner en practica lo aprendido hasta ahora para crear dos componentes.

## Cada uno de estos componentes tendrá sus propias características.

### Componente A:
**Este componente va a tener disponer un Contacto(crea una clase para ello), que va a contar con las siguientes características:**

    Nombre: que será un String.
    Apellido: también un String.
    Email: de nuevo un String.
    Conectado: será un booleano que nos indicará si la persona está conectada o no.

## Componente B:
**Por otro lado, tenemos el componente B que va a recibir por props un contacto y va a poder cambiar su estado de conectado a desconectado y viceversa.**

## Renderización de los componentes:

    Si el contacto está conectado, se debe mostrar: Contacto En Línea.
    Si el contacto no está conectado, se debe mostrar: Contacto No Disponible.
    El Componente A debe ser renderizado dentro del componenet App.js del proyecto.
    El Componente B debe ser renderizado desde el componte A y recibir los props adecuadamente.