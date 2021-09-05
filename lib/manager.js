class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getID(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return 'Manager';
    }
 }

 module.exports = Manager