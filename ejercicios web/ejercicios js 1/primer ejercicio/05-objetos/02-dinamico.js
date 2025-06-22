const user = { id:1 };

user.name = 'Nicolas';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

// para eliminar propiedades de un objeto
delete user.name;
delete user.guardar;
console.log(user);

// const user1 = Object.freeze({ id: 1}); // Object.freeze evita que se puedan agregar, eliminar o modificar propiedades
const user1 = Object.seal({ id: 1}); // Object.seal evita que se puedan eliminar propiedades, pero sí se pueden modificar
user1.name = 'Nico';
console.log(user1); // { id: 1 }

