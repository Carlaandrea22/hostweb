// Mostrar la fecha actual
document.addEventListener('DOMContentLoaded', function() {
    const fechaActual = new Date().toLocaleDateString();
    document.getElementById('fechaActual').textContent = 'Fecha: ' + fechaActual;
});

// Agregar y eliminar elementos de la lista
document.getElementById('agregarItem').addEventListener('click', function() {
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = 'Nuevo Elemento';
    nuevoItem.classList.add('list-group-item');
    document.getElementById('miLista').appendChild(nuevoItem);
});

document.getElementById('eliminarItem').addEventListener('click', function() {
    const lista = document.getElementById('miLista');
    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    }
});

// Cambiar el tema de la página
document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
    const footer = document.querySelector('footer');
    footer.classList.toggle('bg-dark');
    footer.classList.toggle('bg-light');
});