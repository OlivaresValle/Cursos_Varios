const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    {id:15},
    ['lala'],
]

//mi solución
function dividePorTipo(arr){
    return {
        numeros: arr.filter( n => typeof n === "number"),
        strings: arr.filter( n => typeof n === "string"),
        objects: arr.filter( n => typeof n ==="object")
    }
}

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);
