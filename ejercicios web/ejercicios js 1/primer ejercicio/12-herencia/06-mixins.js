function mixin(Ctr, ...args){
    Object.assign(Ctr.prototype,...args)
}


let vuela = {
    vuela(){
        console.log('volando');
    }
}

let nada = {
    nada(){
        console.log('nadando');
    }
}

let bano = {
    bano(){
        console.log('llendo al baño');
    }
}

let camina = {
    camina(){
        console.log('caminando');
    }
}


// vuela, nada, camina, va al baño
function Pato(){
    this.name = 'Patito';
}
mixin(Pato,vuela,nada,bano,camina)
let Pat = new Pato();

// camina, nada, va al baño
function Perro(){}
mixin(Perro,nada,bano,camina)

let Pe = new Perro();
// nada, va al baño
function Pez(){}
mixin(Pez,nada,bano);

let p = new Pez();
//vuela pero no nada, camina ni va al baño
function Avion(){}
mixin(Avion, vuela);

console.log(Avion.prototype, new Avion())
