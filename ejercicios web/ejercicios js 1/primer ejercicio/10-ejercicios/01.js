const obj = {
    nombre: 'Nicolas',
};

function Extender (){
    this.login = () =>{
        console.log("Iniciando Sesión",this.nombre);
    }
    this.logout = () =>{
        console.log("Cerrando Sesión", this.nombre);
    }
}

Extender.call(obj);
console.log(obj);
obj.login()
obj.logout()