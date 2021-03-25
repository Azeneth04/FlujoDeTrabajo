//Ejercicio de repaso Semana 1

const practica1 = 8;
const practica2 = 9;
const practica3 = 10;
const practica4 = 7;
var calificacionmenor = practica1;
var resultado = 0;

if ( practica2 < calificacionmenor ) {
    calificacionmenor = practica2;
}
else if (practica3 < calificacionmenor) {
    calificacionmenor = practica3;
}
else if (practica4 < calificacionmenor ) {
    calificacionmenor = practica4;
}

console. log (calificacionmenor);

resultado = (practica1 + practica2 + practica3 + practica4 - calificacionmenor) / 3
 console. log (resultado);

