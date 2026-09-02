console.log("=== PARTE 1: NÚMEROS ALEATORIOS ===");

// 1. Generar número aleatorio entre 0 y 10 (decimal)
const aleatorioDecimal = Math.random() * 10;
console.log("Aleatorio entre 0 y 10 (decimal):", aleatorioDecimal);

// 2. Generar número entero aleatorio entre 0 y 10
const aleatorioEntero = Math.floor(Math.random() * 11);
console.log("Entero aleatorio entre 0 y 10:", aleatorioEntero);

// 3. Función para generar número entero aleatorio entre min y max
function obtenerAleatorioEnRango(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Entero aleatorio entre 5 y 15:", obtenerAleatorioEnRango(5, 15));

console.log("\n=== PARTE 2: REDONDEO, POTENCIAS Y RAÍCES ===");

// 1. Funciones de redondeo (usando como ejemplo 4.7)
const numero = 4.7;
console.log(`Redondeo estándar (Math.round) de ${numero}:`, Math.round(numero));
console.log(`Redondeo hacia arriba (Math.ceil) de ${numero}:`, Math.ceil(numero));
console.log(`Redondeo hacia abajo (Math.floor) de ${numero}:`, Math.floor(numero));

// 2. Cálculo de potencias
console.log("4 elevado a la 3 (4^3):", Math.pow(4, 3));
console.log("5 elevado a la 2 (5^2):", Math.pow(5, 2));
console.log("5 elevado a la -2 (5^-2):", Math.pow(5, -2));

// 3. Cálculo de raíces cuadradas
console.log("Raíz cuadrada de 9:", Math.sqrt(9));
console.log("Raíz cuadrada de 64:", Math.sqrt(64));
console.log("Raíz cuadrada de 25:", Math.sqrt(25));