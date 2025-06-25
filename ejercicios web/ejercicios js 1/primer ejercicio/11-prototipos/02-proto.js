function User(){
    this.name = 'hola Mundo';
    this.logger = function (){
        // método de instancia
        console.log('loggeando...');
        this.login();
    }
}
// método de prototipo
User.prototype.login = function (){
    console.log('iniciando sesión', this.name);
    this.logger();
}
const user1 = new User();
const user2 = new User();

User.prototype.toString = function (){
    console.log('Usuario:', this.name)
}
console.log(user1)