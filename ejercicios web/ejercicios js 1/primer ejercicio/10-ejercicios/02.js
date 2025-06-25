const obj = {
    nombre: 'Nicolas',
};

function extender(usuario){
 const metodos ={
    login (){console.log('Iniciando Sesión', this.nombre)},
    logout (){console.log('Cerrando Sesión', this.nombre)}
 }
return Object.assign(usuario,metodos)
}

const usuario = extender(obj);

console.log(usuario);
usuario.login();