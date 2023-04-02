import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class';

const ContactComponent = ( { contact } ) => {
    return (
        <div>
            <h2>
                Nombre: { contact.name }
            </h2>
            <h3>
                Apellido: { contact.surname }
            </h3>
            <h4>
                E-mail: { contact.email }
            </h4>
            <h5>
                Estado en línea: { contact.connection ? 'Contacto en línea' : 'No disponible' }
            </h5>
        </div>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent;
