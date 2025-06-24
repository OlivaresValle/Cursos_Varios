
//mi solucion
// function paraAbsoluto(arr){
//     for (numero in arr){
//         if (arr[numero]< 0){
//             arr[numero] = arr[numero ]* -1;
//         }
//     }
//     return arr;
// }

// solución ideal
function paraAbsoluto(arr){
    return arr.map( n => Math.abs(n));
}

const ns= [-2,3,5,-15];
const absolutos = paraAbsoluto(ns);

console.log(absolutos);