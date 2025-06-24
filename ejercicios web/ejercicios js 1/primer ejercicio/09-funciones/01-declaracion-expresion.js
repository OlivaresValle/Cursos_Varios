console.log(resta); // Hoisting -> Izar o levantar

// Declaración de funciones: Function Declaration


// Funcion nombrada -> named function
function suma(){
    console.log('sumando .....')
}

// Función anónima -> Anonymous function
// function (){
//     console.log('función anonima')
// }

// Expresión de funciones -> function expression 
// Expresión de función anónima
let resta = function () { // Anonymous function expression
    console.log('restando');
}

let multiplica = function multi () { // named function expression
    console.log('restando');
}

const divide = () =>{ // anonima
    console.log('dividiendo');
}

