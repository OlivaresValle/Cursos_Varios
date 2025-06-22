/** 
 * Crear algoritmo que devuelva cantidad
 * de números positivos de un array.
 */

let array = [2, 5, 7, 15, -5, -100, 55];

// Mi solución
function cuantosPositivos(arr){
    let positivos = 0;
    for (numeros of arr){
        if ( numeros > 0){
            positivos++;
        }
    }
    return positivos;
}

// Solución ideal
// es la misma que yo propuse

let resultado = cuantosPositivos(array);
console.log(resultado);