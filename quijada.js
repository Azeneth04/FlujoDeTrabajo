//Ejercicio
//Dado un número, separarlo en centenas, decenas y unidades,
//Intercambiar la posición entre las centenas y las unidades
//e imprimir el número final.

var numeroCompleto = 738;
if ( numeroCompleto <= 999 && numeroCompleto > 99) {
    var centenas = parseInt ( numeroCompleto / 100);
    console. log ( centenas );
    var decenas = parseInt ( (numeroCompleto % 100) / 10);
    console. log (decenas);
    var unidades = (numeroCompleto % 100) - (decenas*10);
    console. log (unidades);
}
else {
    console. log ("Ingresa un número de 3 cifras");
}

//Haciendo un cambio 