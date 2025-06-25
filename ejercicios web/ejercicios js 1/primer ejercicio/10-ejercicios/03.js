
//mi solución
function callback(fn,...rest){
    fn(...rest)
}

// solucion ideal es basicamente lo mismo

function log(...args){
    console.log(args);
}

callback(log,1,2,3,4);

// otra forma de ponerlo
callback((args)=>{
    console.log(args),1,2,3,4
})