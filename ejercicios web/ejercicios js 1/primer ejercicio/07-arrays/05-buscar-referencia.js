const usuarios = [
    { id: 1, name: 'Chanchito'},
    { id: 2, name: 'Feliz'},
]

// const resultado = usuarios.indexOf({ id: 1, name: 'Chanchito'})

const resultado = usuarios.find(usuario =>
    usuario.id === 1);

const resultado2 = usuarios.findIndex(usuario =>
    usuario.id === 1);    
console.log(resultado)