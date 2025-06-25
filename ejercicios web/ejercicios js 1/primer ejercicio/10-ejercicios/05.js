// mi solución (funciona)
// function ordenar(texto,fn){
//  let textoarray = texto.split('');
//  textoarray.splice(textoarray.indexOf(' '),1)
//  textoarray.sort((a,b) =>{
//     if(a > b)
//         return 1;
//     if(b>a)
//         return -1;
//     return 0;
//  })
//  fn(textoarray);
// }

//solucion ideal
function ordenar(texto,fn){
    let resultado = texto.toLowerCase().split('').filter(letra => letra != ' ').sort().join('');
    fn(resultado);
}

ordenar('hola mundo',console.log)