// Contador de la fecha actual
function actualizarFecha() {
    const fechaActual = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('fechaActual').textContent = fechaActual.toLocaleDateString('es-ES', opciones);
}

// Ejecutar la función de fecha al cargar la página
window.onload = function() {
    actualizarFecha();
}

// Función para agregar un ítem a una lista
function agregarItemLista(idLista, textoItem) {
    const lista = document.getElementById(idLista);
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = textoItem;
    lista.appendChild(nuevoItem);
}

// Función para eliminar el último ítem de una lista
function eliminarUltimoItemLista(idLista) {
    const lista = document.getElementById(idLista);
    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    }
}

// Función para insertar una separación
function insertarSeparacion(idElemento) {
    const elemento = document.getElementById(idElemento);
    const hr = document.createElement('hr');
    elemento.appendChild(hr);
}

// Función para crear un bloque de contenido
function crearBloque(idElemento, contenido) {
    const elemento = document.getElementById(idElemento);
    const bloque = document.createElement('div');
    bloque.className = 'bloque';
    bloque.innerHTML = contenido;
    elemento.appendChild(bloque);
}


// Agregar un ítem a una lista llamada 'miLista'
agregarItemLista('miLista', 'Nuevo ítem agregado');

// Eliminar el último ítem de una lista llamada 'miLista'
eliminarUltimoItemLista('miLista');

// Insertar una separación en un elemento con id 'miContenido'
insertarSeparacion('miContenido');

// Crear un bloque de contenido en un elemento con id 'miContenido'
crearBloque('miContenido', '<p>Este es un nuevo bloque de contenido dinámico.</p>');
