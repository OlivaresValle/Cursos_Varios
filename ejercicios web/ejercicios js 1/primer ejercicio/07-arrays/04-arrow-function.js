// function hola(){
//     return 'Hola Mundo'
// }

const hola = () => {
    return 'Hola Mundo'
}

//variación solo para funciones de 1 linea
// const hola2 = () => 'Hola Mundo'

const hola2 = (mensaje) => mensaje +' Hola Mundo'

const hola3 = mensaje => mensaje +' Hola Mundo'

const resultado = hola3('Chanchito feliz')
console.log(resultado);