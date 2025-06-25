// 1ra forma de programas

let nombre = 'hola';
let apellido = 'mundo';

function getNombreCompleto(nombre, apellido){
    return [nombre,apellido].join('');
}

let fullname= getNombreCompleto (nombre,apellido);

// 2da forma (encapsulacion)

// const user = {
//     nombre: 'hola',
//     apellido: 'mundo',
//     getNombreCompleto(){
//         return [this.nombre,this.apellido].join(' ')
//     }
// };

// console.log(user,getNombreCompleto());

// Abstracción - consta en con los nombre determinar que hace cada metodo

const user = new User();
user.password = 'Chanchito feliz';
user.save();

// Herencia
User
Restaurante
Motociclista

//Polimorfismo

function validaEntidad(entidad){
    //....
    entidad.save()
}
