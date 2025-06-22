/**
 * Crear un algoritmo que tome un array de pares 
 * y devuelva un array de objetos.
 */

let pairs = [
    [1,{ name: 'Nicolas'}],
    [2,{ name: 'Felipe'}],
    [3,{ name: 'Chanchito'}],
];

// Mi solución ayudado con copilot
// function toCollection(arr){
//     let resultado = [];
//     for (idx in arr){
//         let elemento = arr[idx];
//         let objeto = {
//             id : elemento[0],
//             name: elemento[1].name
//         }
//         resultado[idx] = [objeto] 
//     }
//     return resultado;
// }


// solución ideal
function toCollection(arr){
    let collection =[];
    for (idx in arr){
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);