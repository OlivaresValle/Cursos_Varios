/**
 * crear algoritmo que tome un array de 
 * objetos y devuelva un array de pares
 */

let array = [{
    id:1,
    name: 'Nicolas',
},{
    id: 2,
    name: 'Felipe',
},{
    id: 3,
    name: 'Chanchito',
}];

// El par es un array de arrays
let pares = [
    [1,{id: 1, name: 'Nicolas'}],
    [2,{id: 2, name: 'Felipe'}],
    [3,{id: 3, name: 'Chanchito'}],
];

// Mi solución
// function toPairs(arr){
//     let resultado = [];
//     let contador = 1;
//     let indice = 0;
//     for ( let posicion of arr){
//         resultado[indice] = [contador, posicion];
//         contador++;
//         indice++;
//     }
//     return resultado;
// }


// resultado ideal
function toPairs(arr){
    let pairs =[];
    for (idx in arr){
        let elemento = arr[idx];
        pairs[idx]= [elemento.id, elemento];
    }
    return pairs;
}
let resultado = toPairs(array);
console.log(resultado);