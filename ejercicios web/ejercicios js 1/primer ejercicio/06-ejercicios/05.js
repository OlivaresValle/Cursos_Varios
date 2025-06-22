let objeto = {
    id: 1,
    name: 'chanchito',
    login: function(){},
    logout: function (){},
}

let propiedad = 'name'

// mi solución 

// function tieneProp(obj, propiedad){
//     for(let llave in obj){
//         if (llave.includes(propiedad) === true){
//             return true
//         }
//     }
//     return false
// }


// solución ideal
function tieneProp(obj, propiedad){
    let props = Object.keys(obj);
    for (let prop of props){
        if (propiedad == prop){
            return true;
        }
    }
    return false
}

console.log(tieneProp(objeto,propiedad))