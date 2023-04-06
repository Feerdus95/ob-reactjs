/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react'

/**
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre.
 */

//Inicializamos un estado vacío a rellenarse con datos del padre.
const miContexto = React.createContext(null);

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El Token es: { state.token }
            </h1>
            {/* Pintamos el Componente2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: { state.session }
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        session: 1
    }

    // Crear estado del componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
                {
                token: 'JWT0303456',
                session: sessionData.session + 1
            }
        );
    }

    return (
        <div>
            <miContexto.Provider value={sessionData}>
                { /* Todo lo que esté acá puede leer los datos de sessionData */ }
                { /* Si se actualiza, los componentes de aquí también lo actualizan */ }
                <h1>*** Ejemplo de useState() y useContext() ***</h1>
                <Componente1></Componente1>
                <button onClick={actualizarSesion}>Actualizar sesión</button>
            </miContexto.Provider>
        </div>
    )
}

