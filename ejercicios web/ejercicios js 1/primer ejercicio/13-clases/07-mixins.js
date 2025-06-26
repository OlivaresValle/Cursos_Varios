const Entidad = {
    save(){
        console.log('save en Entidad');
    }
}

const Actualizar = {
    Update(){
        console.log('actualizando en Entidad');
    }
}


class User{
    constructor(name){
        this.name= name;
    }

    save(){
        console.log('guardando en usuario');
    }
}

const nuevoproto = Object.assign({},Entidad,Actualizar);
Object.setPrototypeOf(User.prototype,Entidad);

const u = new User('Chanchito feliz');
u.save();