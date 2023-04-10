/**
 * Ejemplo de uso del método de ciclo de vida
 * en componente Class y el hook de ciclo de
 * vida en componente funcional.
 */

import React, { Component } from 'react'
import { useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea renderizado en DOM')
    }

    render() {
        return (
        <div>
            <h1>DidMount</h1>
        </div>
        )
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea renderizado en DOM')
    }, [])

    return(
        <div>
            <h1>DidMount</h1>
        </div>
    )
}