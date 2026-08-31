console.log("hola mundo")

// 1. Tipos Primitivos

let tipoString = "Hola mundo";
let tipoNumber = 2026;
let tipoBoolean = true;
let tipoUndefined;
let tipoNull = null;
let tipoSymbol = Symbol("idUnico");
let tipoBigInt = 9007199254740991n;

console.log(`Tipo String: ${tipoString}`);
console.log(`Tipo Number: ${tipoNumber}`);
console.log(`Tipo Boolean: ${tipoBoolean}`);
console.log(`Tipo Undefined: ${tipoUndefined}`);
console.log(`Tipo Null: ${tipoNull}`);
console.log(`Tipo Symbol: ${tipoSymbol.toString()}`);
console.log(`Tipo BigInt: ${tipoBigInt}`);

// 2. Operaciones y Jerarquía (Parte 1)

let resultado1 = (3 - 2) * (10 / 2); // Esperado: 5
let resultado2 = 3 - 2 * 10 / 2;     // Esperado: -7
let resultado3 = (3 - 2) * 10 / 2;   // Esperado: 5

console.log(`Resultado 1: ${resultado1}`);
console.log(`Resultado 2: ${resultado2}`);
console.log(`Resultado 3: ${resultado3}`);

// 3. Incremento y Decremento (Parte 2)

resultado1--;
console.log(`resultado1-- : ${resultado1}`);

resultado2++;
console.log(`resultado2++ : ${resultado2}`);

resultado3++;
console.log(resultado3);
