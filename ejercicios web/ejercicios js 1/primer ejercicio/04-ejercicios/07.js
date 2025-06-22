/** 
 * Crear algoritmo que devuelva 
 * el precio del producto
 * más impuesto
 */

// Mi solución
function precioCompleto (precio, impuesto){
 let precioTotal = precio + (precio * impuesto);
 return precioTotal;
}

// Solución ideal
// es la misma que yo propuse

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);