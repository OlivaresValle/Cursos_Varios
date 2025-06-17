// Personaje de TV

let nombre = "Tanjiro";
let anime = "Kimetsu no Yaiba";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Kimetsu no Yaiba",
    edad: 16,
}

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13; // Modificar una propiedad

personaje['edad'] = 16; // Modificar una propiedad

delete personaje.anime; // Eliminar una propiedad 

console.log(personaje);