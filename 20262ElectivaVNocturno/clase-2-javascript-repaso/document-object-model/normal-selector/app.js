let elemento = document.getElementById("mi-elemento")
elemento.textContent = "Hola, mundo"

elemento.style.color = "blue"

var elementos = document.getElementsByClassName("mi-clase");

        for (var i = 0; i < elementos.length; i++) {
            elementos[i].textContent = "Hola, mundo!"; // Cambia el texto
            elementos[i].style.color = "green";        // Cambia el color a verde
        }

const parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = "Hola Mundo";
    parrafos[i].style.backgroundColor = "Yellow"; // fondo amarillo
    parrafos [i].style.border = "1px solid black"; // Borde solido de 1px
}
