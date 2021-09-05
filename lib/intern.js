class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
 }

 module.exports = Intern