import React, { useState } from 'react'

const loggedStyle = {
    color: 'green'
}

const unloggedStyle = {
    color: 'red',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    // Generar estado p/ el componente y así controlar
    // si el usuario está o no logueado.
    const [logged, setLogged] = useState(false);
    const greetingUser = () => (<p>Hola, {props.name}</p>);
    const pleaseLogin = () => (<p>Please login</p>);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ? 
                greetingUser() 
                : 
                pleaseLogin()
            }
            <button onClick={() => {
                console.log('Botón clickeado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    )
}

export default GreetingStyled