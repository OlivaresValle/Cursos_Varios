let punto = {
    x: 10,
    y: 15,
};

let referencia = Object.assign(punto, {z: 20, x:1});
let clonePunto = Object.assign({}, punto, {z: 20, x:1});
 // console.log(punto, clonePunto); // {x: 10, y: 15, z: 20}

 // console.log(referencia); // {x: 1, y: 15, z: 20} - referencia al objeto original

let copiaPunto = Object.assign({}, punto);
// console.log(copiaPunto, punto); // {x: 1, y: 15, z: 20}

let copia3 = { ...punto };
// console.log(copia3);

let copia4 = {};
for (let llave in punto){
    copia4[llave] = punto[llave];
}
console.log(copia4); // {x: 1, y: 15, z: 20}