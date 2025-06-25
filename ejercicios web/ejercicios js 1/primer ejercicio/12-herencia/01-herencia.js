function User(){
    this.name = 'Hola Mundo';
}

function Product(){
    this.name = 'Producto';
}

function Entidad(){}

Entidad.prototype.save = function(){
    console.log('guardando',this.name);
}

Entidad.prototype.validate = function(){
    console.log('validando',this.name);
}

// implementar herencia utilizando prototipos
// 1ra forma

// asignar prototipo
// User.prototype = Entidad.prototype;
// // modificar prototipo constructor
// User.prototype.constructor = User;
// se crea un objeto vacio y se vincula con user
// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = User;


Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);

const user = new User();
const product = new Product();
console.log(user)