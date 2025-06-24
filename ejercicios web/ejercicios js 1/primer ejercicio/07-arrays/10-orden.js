// let numeros = [15,10, -3];

// numeros.sort();
// numeros.reverse();

// console.log(numeros);

// let letras = ['z','a','d'];

// letras.sort();

// console.log(letras);

// let conMayusculas = ['Z','d','a']

// conMayusculas.sort((a,b) =>{
//     /**
//      * a antes que b => -1
//      * b antes que a => 1
//      * si son iguales => 0
//      */

//     let alower = a.toLowerCase();
//     let blower = b.toLowerCase();

//     if( alower < blower){
//         return -1;
//     }
//     if( alower > blower){
//         return 1;
//     }
//     return 0;
// } );

// console.log(conMayusculas);

let usuarios = [
    {edad:15, nombre: 'Felipe'},
    {edad:25, nombre: 'Nicolas'},
    {edad:13, nombre: 'Poli'},
]

usuarios.sort((a,b)=>{
    if(a.edad < b.edad)return -1;
    if(a.edad > b.edad)return 1;
    return 0;
})

console.log(usuarios);