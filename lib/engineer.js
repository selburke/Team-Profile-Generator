class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Engineer';
    }
 }

 module.exports = Engineer