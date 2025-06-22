function Punto(x, y){
    this.x = x;
    this.y = y;
    this.dibujar = function(){ console.log('Dibujando ...');}
}

// const Point = new Function('x', 'y',`this.x = x;
//     this.y = y;
//     this.dibujar = function(){ console.log('Dibujando ...');}
//     `);

// const p = new Point(1, 2);   
// console.log(p); 

// se extiende el objeto punto con la funcion Punto
let punto = { z: 7 };
//let p = Punto.call(punto, 1, 2);
Punto.apply(punto, [1, 2]);
console.log(punto);
