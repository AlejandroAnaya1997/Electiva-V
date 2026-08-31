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