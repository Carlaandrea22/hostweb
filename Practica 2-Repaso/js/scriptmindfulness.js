// Función para mostrar un mensaje de bienvenida al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    alert('¡Bienvenido a la página de Mindfulness!');
});

// Función para cambiar el color de fondo del formulario al pasar el mouse
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('mouseover', function() {
        form.style.backgroundColor = '#f0f8ff'; // Color de fondo al pasar el mouse
    });

    form.addEventListener('mouseout', function() {
        form.style.backgroundColor = ''; // Restaura el color de fondo original
    });
});

// Función para mostrar un mensaje de éxito al enviar el formulario
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío real del formulario para demostración
        alert('¡Gracias por tu comentario! Te responderemos pronto.');
        form.reset(); // Opcional: Resetea el formulario después de mostrar el mensaje
    });
});
