const usuarios = [
    { edad:15, nombre: 'Nico',plan:'premium'},
    { edad:13, nombre: 'Chanchito',plan:'free'},
    { edad:32, nombre: 'Fernanda',plan:'free'},
    { edad:25, nombre: 'Felipe',plan:'gold'},
]

//mi solución
// function getPaidUsers(usrs){
//  const usuariospagados= usrs.filter( u => u.plan !== 'free')
//  return usuariospagados
// }

//solucion ideal
function getPaidUsers(usrs){
    return usrs.filter(u => u.plan !== 'free')
}

console.log(getPaidUsers(usuarios))