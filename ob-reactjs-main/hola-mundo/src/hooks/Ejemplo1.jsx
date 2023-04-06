/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo f(x), acceder a su
 * estado privado a través de un hook y modificarlo
 * 
 */

import React, { useState } from 'react'


function Ejemplo1() {

    // Valor inicial p/ contador
    const valorInicial = 0;
    
    // Valor inicial p/ Persona
    const personaInicial = {
        nombre: 'Martín',
        email: 'martinmartinezmartinetti@algomail.com'
    }

    /**
    * VALORINICIAL y PERSONA INICIAL deben ser parte del estado del componente,
    * para poder gestionar su cambio y que este se vea reflejado en la vista
    * del componente.
    * 
    * const[nombreVariable,funcionParaCambiar] = useState(valorInicial)
    * 
    */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función p/ actualizar el estado privado del contador
     */

    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * Función p/ actualizar el estado de persona en el componente
     */

    function actualizarPersona(){
        setPersona(
            {
                nombre:'Jacinto',
                email: 'jacinto_aa@algomail.com'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>Contador: { contador }</h2>
            <h2>Datos de la persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h4>E-mail: {persona.email}</h4>
            {/*Blque de botones para actualizar el estado*/}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    )
}

export default Ejemplo1


