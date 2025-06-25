
// mi solucion
// function suma(fn, ...rest){
//  let argumento = rest;
//  let resultado = argumento.reduce((acc,el)=> acc + el)
//  return (fn(resultado))
// }

//solucion ideal 
function suma(fn,...rest){
    let resultado = rest.reduce((acc,el)=> acc+el);
    fn(resultado);
}

suma(resultado => {
    console.log(resultado);
},1,2,3,4)