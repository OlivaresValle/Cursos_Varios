const ahora = new Date();
// console.log(ahora);

// Mes - Dia - Año
const fecha = new Date('December 11 1986 14:15 GMT-0300');
console.log(fecha)

const fecha2 = new Date(1986, 11, 25, 14, 15);
const fecha3 = new Date(1986, 11, 25, 14+15, 15);
console.log(fecha3);


console.log('dateString',fecha3.toDateString());
console.log('ISOString',fecha3.toISOString());
console.log('timeString',fecha3.toTimeString());

fecha3.setFullYear(1978);
console.log(fecha3)


