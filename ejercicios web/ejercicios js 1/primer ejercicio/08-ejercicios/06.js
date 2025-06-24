// tienes que usar reduce

// mi solucion
// function dividePorTipo(arr){
//     return {
//         boolean: arr.reduce((acc,el) => typeof el ==='boolean' ? el : acc,0),
//         number: arr.reduce((acc,el) => typeof el ==='number' ? el : acc,0),
//         string: arr.reduce((acc,el) => typeof el ==='string' ? el : acc,0),
//         objecto: arr.reduce((acc,el) => typeof el ==='object' ? el : acc,0),
//     }
// }

//solucion ideal
function dividePorTipo(arr){
    return arr.reduce((acc,el)=>{
        let llave = typeof el;

        acc[llave] = acc[llave]? acc[llave] : [];
        acc[llave].push(el);
        return acc;
    },{})
}

const miArray = [
    "Hola",
    12,
    true,
    "Mundo",
    {},
    {id:15},
    ['lala'],
]

let arr = dividePorTipo(miArray);
console.log(arr);