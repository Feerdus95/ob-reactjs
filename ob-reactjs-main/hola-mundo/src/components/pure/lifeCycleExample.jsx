/**
 * Ejemplo de componente tipo Class que dispone
 * de los métodos de ciclo de vida.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
  
    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }
  
    componentWillUnmount(){
        console.log('WILLMOUNT: Antes del montaje del componente')
    }
    componentDidMount(){
        console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de renderizarlo')
    }
    componentWillReceiveProps(nextProps){
        console.log('WILLRECEIVEPROPS: Si va a recibir nuevas props')
    }
    shouldComponentUpdate(nextProps, nextState){
        // return true || false. Controla si el componente debe o no actualizarse.
    }
    componentWillUpdate(nextProps, nextState){
        console.log('WILLUPDATE: Justo después de actualizarse')
    }
    componentWillUnmount(){
        console.log('WILLUNMOUNT: Justo antes de desaparecer ')
    }

    return(){
        return(
            <div>
                
            </div>
        )
    }
}
