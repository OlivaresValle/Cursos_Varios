
let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
}

for (let prop in user) {
    console.log('La propiedad es: ' + prop + ', y su valor es: ' + user[prop]);
}

let animales = ['Chanchito Feliz', 'Dragón', 'Canguro']
for (let indice in animales) {
    console.log('El índice es: ' + indice + ', y su valor es: ' + animales[indice]);
}