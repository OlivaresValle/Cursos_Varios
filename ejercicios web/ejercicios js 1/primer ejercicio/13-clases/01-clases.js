// asi seria sin class
// function User(name){
//     this.name = name;
//     this.instancia = function (){}
// }

// User.prototype.login = function (){
//     console.log('hola mundo');
// }


// con class 

class User{
    constructor (name) {
        this.name = name;
        this.instancia = function (){}
    }

    activo = true

    logout() {
        console.log('logout');
    }


    login(){
        console.log('Hola mundo');
    }
}
const u = new User('Chanchito Feliz');


