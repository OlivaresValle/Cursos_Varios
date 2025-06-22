// sin user ... ni Object.assign

let obj1 = { id:1, name: 'chanchito'};

// mi solución
function crearCopia(obj){
    let copia={}
    for (let llave in obj){
        copia[llave] = obj[llave];
    }
    return copia
}

// solución ideal es la misma que hice

let obj2 = crearCopia(obj1);
console.log({obj1,obj2});