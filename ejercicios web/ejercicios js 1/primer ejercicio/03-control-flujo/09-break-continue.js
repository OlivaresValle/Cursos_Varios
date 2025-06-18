
let i=0;
while (i<6){
    i++;
    if( i === 2){
        continue; // Salta a la siguiente iteración del bucle
    }
    if( i === 4){
        break; // Termina el bucle
    }
    console.log(i);
}