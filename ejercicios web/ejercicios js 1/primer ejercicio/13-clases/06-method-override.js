class Entidad{
    constructor(id){
        this.id = id;
        this.created_ad= new Date();
    }

    save(){
        console.log('save en Entidad');
    }
}

class User extends Entidad{
    constructor(name){
        super(1);
        this.name= name;
    }

    save(){
        super.save();
        console.log('save en usuario');
    }
}

const u = new User('Chanchito feliz');