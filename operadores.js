//operador de adicion (+)
var operandoN1 = 5000;
var operandoN2 = 22000
var resultado = operandoN1 + operandoN2

console. log ("-El resultado de tu suma es:" + resultado);

//operador de multiplicación (*)
var operandoN3 = 12;
var operandoN4 = 2;
var resultado2 = 12 * 2;
console.log( "-El resultado de tu multiplicación es:" + resultado2 );

//Operador de división (/)
var resultado3 = operandoN1 / operandoN4;
console.log("-El resultado de tu división es:" + resultado3)

//Operador de incremento (++)
resultado3++;
console. log ("incrementando la variable resultado3:" + resultado3);

//Operadores de asignación
//Operador =
operandoN1 = operandoN2;
console. log (operandoN1);

//Operador +=
//Forma completa:
//operandoN3 = operandoN3 + operandoN4
//Forma resumida
operandoN3 += operandoN4;
console. log (operandoN3);


//operadores de comparación

// == puedo poner "5" "cinco" y 5 y saldrá que es igual
var nComparacion1 = 5;
var nComparacion2 = "5";
var resultadoComparacion = (nComparacion1 == nComparacion2);
console. log ("== " + resultadoComparacion);

//para poner === y salga verdadera la comparación, 
//tengo que poner dos cosas del mismo tipo
// como por ejemplo: 5 y 5 -- "cinco" y "cinco" --o-- "5" y "5"

var Comparacion1 = "azeneth";
var comparación2 = "azeneth";
var RComparacion = (Comparacion1 === comparación2);
console. log ("=== " + RComparacion);

//!== aquí me dice que es verdadera la comparación 
//si es de diferente tipo o totalmente diferente, 
//pero si es igual esta mal

//el siguente será falso
var Comparacion3 = "Quijada";
var comparación4 = "Quijada";
var RComparacion3 = (Comparacion3 !== comparación4);
console. log ("!== " + RComparacion3);
//Este sera verdadero
var Comparacion5 = "8900";
var comparación6 = 80;
var RComparacion4 = (Comparacion5 !== comparación6);
console. log ("!== " + RComparacion4);


//Operadores Lógicos
var operadorL1 = 5;
var operadorL2 = 20;
var operadorL3 = 30;

//Operador && ("AND" o "Y")
var resultadoOperadorL = (operadorL1 < operadorL2 ) && (operadorL2 < operadorL3  );

console. log ( "resultado del operador Y es: " + resultadoOperadorL);

//Operador || ("OR" o "O")
//si las dos o solo una se cumple sera verdadero
//pero si ninguna o una no se cumple sera falso

var resultadoOperadorLo = ( operadorL1 < operadorL2 ) || (operadorL2 < operadorL3  )
console. log ("El resultado del operador O es: " + resultadoOperadorLo);

//Operadores Logicos
//Resultados del operador && - se lee como "Y"

//verdadero && verdadero --> verdadero
//true && false --> false
//false && true --> false
//false && false --> false

//Resultado operador || - se lee como "O"
//verdadero || verdadero --> true
//falso || verdadero --> true
//falso || falso --> false
//verdadero || verdadero --> true

//Operación de negación !
//lods verdaderos los conviente en falso y viseversa
var resultadoOperadorLN = !resultadoOperadorLo;
console.log ("El resultado del operación de Negación es: " + resultadoOperadorLN);
