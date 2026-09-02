document.addEventListener("DOMContentLoaded", () => {

    // Seleccionar elementos .destacado y cambiar fondo a amarillo ---
    const btnEjercicio1 = document.getElementById("ejercicio1");
    if (btnEjercicio1) {
        btnEjercicio1.addEventListener("click", () => {
            const destacados = document.querySelectorAll(".destacado");
            destacados.forEach(elemento => {
                elemento.style.backgroundColor = "yellow";
            });
        });
    }

    // Seleccionar <a> en #menu y agregar la clase 'activo' ---
    const btnEjercicio2 = document.getElementById("ejercicio2");
    if (btnEjercicio2) {
        btnEjercicio2.addEventListener("click", () => {
            const enlacesMenu = document.querySelectorAll("#menu a");
            enlacesMenu.forEach(enlace => {
                enlace.classList.add("activo");
            });
        });
    }

    // Seleccionar <img> con atributo 'alt' y agregar borde azul ---
    const btnEjercicio3 = document.getElementById("ejercicio3");
    if (btnEjercicio3) {
        btnEjercicio3.addEventListener("click", () => {
            const imagenesAlt = document.querySelectorAll("img[alt]");
            imagenesAlt.forEach(img => {
                img.style.border = "3px solid blue";
            });
        });
    }

    // Seleccionar <li> impares de .tareas y poner en negrita ---
    const btnEjercicio4 = document.getElementById("ejercicio4");
    if (btnEjercicio4) {
        btnEjercicio4.addEventListener("click", () => {
            const tareasImpares = document.querySelectorAll(".tareas li:nth-child(odd)");
            tareasImpares.forEach(li => {
                li.classList.add("negrita");
            });
        });
    }

    // Función para desmarcar checkboxes marcados ---
    const btnEjercicio5 = document.getElementById("ejercicio5");
    function desmarcarCheckboxes() {
        const checkboxesMarcados = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxesMarcados.forEach(checkbox => {
            checkbox.checked = false;
        });
    }
    if (btnEjercicio5) {
        btnEjercicio5.addEventListener("click", desmarcarCheckboxes);
    }

    // Lista de tareas dinámica ---
    const btnAgregarTarea = document.getElementById("btn-agregar-tarea");
    const contenedorLista = document.getElementById("lista-tareas");
    let contadorTareas = 1;

    if (btnAgregarTarea && contenedorLista) {
        btnAgregarTarea.addEventListener("click", () => {
            // 2. Verificar o crear el elemento <ul>
            let ul = contenedorLista.querySelector("ul");
            if (!ul) {
                ul = document.createElement("ul");
                contenedorLista.appendChild(ul);
            }

            // Crear <li> con número consecutivo y añadir al <ul>
            const nuevoLi = document.createElement("li");
            nuevoLi.textContent = `Tarea ${contadorTareas}`;
            ul.appendChild(nuevoLi);

            contadorTareas++;
        });
    }
});