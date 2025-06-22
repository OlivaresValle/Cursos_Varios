/**
 * Crear array de longitu N, y que sus elementos sean
 * numeros del 1 hasta N.
 */

let longitud = 7;

// Mi solución
// function crearArray(n){
//     let array = [];
//     for ( let i=0; i< n; i++){
//         array[i]= i+1;
//     }
//     return array;
// }

// Solución ideal
function crearArray(n){
    if ( n <=0)
        return [];
    let arr = [];
    for (let i =0; i < n; i++){
        arr[i] = i + 1;
    }
    return arr;
}

let resultado = crearArray(longitud);
console.log(resultado);