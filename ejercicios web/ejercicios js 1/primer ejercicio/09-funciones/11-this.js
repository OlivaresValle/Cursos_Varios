// Dentro de un objeto :this hace referencia a un objeto
// En una función this hace referencia al objeto window, en node:global
// Si se usa new hace referencia al objeto será creado

// const user = {
//     name: 'Nicolas',
//     login(){
//         console.log(this);
//     }
// };

// user.logout = function logout(){
//     console.log(this);
// }

// user.logout()

// ejemplo fallido
// function log(){
//     console.log(this);
// }

// log();

function Log(mensaje){
    this.mensaje = mensaje;
    console.log(this);
}

/**
 * se crea un objeto literal
 * se vincula este objeto a this
 * se vincula el prototipo
 * si no retorna nada, entonces retorna this
 */
const l = new Log('Hola mundo');