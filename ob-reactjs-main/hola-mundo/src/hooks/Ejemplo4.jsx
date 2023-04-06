/**
 * Ejemplo p/ entender el uso de props.children
 */

import React from 'react'

const Ejemplo4 = (props) => {
  return (
    <div>
        <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
        <h2>
            Nombre: { props.nombre }
        </h2>
        {/* props.children imprime por defecto todo lo que esté entre
        las etiquetas de apertura y cierre de este componente, desde
        el componente de orden superior */}
        { props.children }
    </div>
  )
}

export default Ejemplo4