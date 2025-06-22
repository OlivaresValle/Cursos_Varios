const saludo = "Hola Mundo!";

const despedida = new String("Chao mundo: (");
console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf("Mu")); //si es un texto que no existe devuelve -1
console.log(saludo.includes(" Mundo"));
let nuevoSaludo = saludo.replace("Mundo", "Nicolas") 
console.log(saludo.replace("Mundo", "Nicolas"));

console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());
console.log(saludo.substring(0, 4));
console.log(saludo.substr(2, 4)); //deprecado!

const espacios = "    Hola   Mundo    ";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());