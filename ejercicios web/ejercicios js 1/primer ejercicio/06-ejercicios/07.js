let objeto = {name: "Nicolas"};

//mi solución
// function agregarId(obj){
//     obj.id = Math.random()
// }

// solución ideal
function agregarId(obj){
    if (typeof obj === 'object'){
        obj.id = Math.random();
    }
    return obj;
} 

agregarId(objeto);
console.log(objeto);