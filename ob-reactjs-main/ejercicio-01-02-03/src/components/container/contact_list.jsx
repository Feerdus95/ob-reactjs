import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contact('Default name','Default surname','Default e-mail', false);
    const defaultContact2 = new Contact('Pipo','Pescador','pipes@chotmail.com', true);

    return (
        <div>
            <div>
                <h1>
                    Tus contactos:
                </h1>
                <h3>
                    <ContactComponent contact={ defaultContact }></ContactComponent>
                </h3>
                <h3>
                    <ContactComponent contact={ defaultContact2 }></ContactComponent>
                </h3>
            </div>
        </div>
    );
};

export default ContactListComponent;
