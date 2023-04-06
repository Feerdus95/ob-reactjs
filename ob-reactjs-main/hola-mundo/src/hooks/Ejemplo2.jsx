/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()       ->  Identificar elementos dentro de vista.
 * - useEffect()    ->  Controlar cambios en vista.
 */

import React, { useState, useRef, useEffect } from 'react'

const Ejemplo2 = () => {

    /**
    * Crear 2 contadores distintos
    * ambos en diferentes estados
    */

    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)

    /**
     * Crear una referencia con useRef() p/ asociar una variable
     * con un elemento del DOM del componente (vista HTML)
     */

    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con useEffect()
     */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro useEffect() 
     */

    //useEffect(() => {
    //       console.log('CAMBIO EN ESTADO DEL COMPONENTE');
    //       console.log('Mostrando Referencia al elemento del DOM:')
    //       console.log(miRef);
    //    }
    //)

    /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1
     * Cada vez que haya un cambio en el contador 1, se ejecuta lo 
     * que diga el useEffect(). En caso de que cambie el contador 2,
     * no habrá ejecución
     */

    /**
     * useEffect(() => {
        console.log('CAMBIO EN ESTADO DEL COMPONENTE');
        console.log('Mostrando Referencia al elemento del DOM:')
        console.log(miRef);
    }, [contador1]);
    */

    /**
     * ? Caso 3: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1 o CONTADOR 2
     * Cada vez que haya un cambio en el contador 1, se ejecuta lo que diga el useEffect().
     * Cada vez que haya un cambio en el contador 2, se ejecuta lo que diga el useEffect().
     */

    useEffect(() => {
        console.log('CAMBIO EN ESTADO DEL COMPONENTE');
        console.log('Mostrando Referencia al elemento del DOM:')
        console.log(miRef);
    },[contador1,contador2]);
    

  return (
    <div>
        <h1>*** Ejemplo de useState(), useEffect() y useRef() ***</h1>
        <h2>Contador 1: { contador1 }</h2>
        <h2>Contador 2: { contador2 }</h2>
        {/* Elemento referenciado: */}
        <h4 ref={ miRef }>
            Ejemplo de elemento referenciado
        </h4>
        {/* Botones para cambiar contadores */}
        <div>
            <button onClick={incrementar1}>Incrementar Contador 1</button>
            <button onClick={incrementar2}>Incrementar Contador 2</button>
        </div>
    </div>
  );
}

export default Ejemplo2