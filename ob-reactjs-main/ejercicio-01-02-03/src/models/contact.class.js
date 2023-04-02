export class Contact {
    name = '';
    surname = '';
    email = '';
    connection = false;

    constructor(name, surname, email, connection){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.connection = connection;
    }
}