function suma(a,b){
    console.log(arguments); // Imprimir los argumentos pasados a la función
    return a+b;
}

let resultado = suma(5,6); // Llamada a la función con un argumento
console.log(resultado); // Imprimir el resultado de la función
console.log(typeof suma); // Tipo de dato del resultado
