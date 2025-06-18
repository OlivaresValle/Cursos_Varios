
/**
 * Nombre: ancho x alto
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */

// Mi solución
// function nombreResolucion(ancho, alto){
//     switch (ancho !=0 && alto !=0){
//         case (ancho >= 7680 && alto >= 4320):
//             return "8K"
//         case (ancho >= 3840 && alto >= 2160):
//             return "4K"
//         case (ancho >= 2560 && alto >= 1440):
//             return "WQHD"
//         case (ancho >= 1920 && alto >= 1080):
//             return "FHD"
//         case (ancho >= 1280 && alto >= 720):
//             return "HD"
//         default: 
//             return "Resolución desconocida";
//     }
// }

// Solución ideal
function nombreResolucion(ancho, alto) {
     if (ancho >= 7680 && alto >= 4320) {
         return "8K";
     } else if (ancho >= 3840 && alto >= 2160) {
         return "4K";
     } else if (ancho >= 2560 && alto >= 1440) {
         return "WQHD";
     } else if (ancho >= 1920 && alto >= 1080) {
         return "FHD";
     } else if (ancho >= 1280 && alto >= 720) {
         return "HD";
     } else {
         return "Resolución desconocida";
     }
 }

let nombre = nombreResolucion(3840, 2160);
console.log(nombre);