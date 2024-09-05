// Validación de formulario
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (e) {
        let valid = true;

        // Validar cada campo
        const campos = ["nombre", "email", "asunto", "mensaje"];
        campos.forEach(function (campo) {
            const input = document.getElementById(campo);
            if (input.value.trim() === "") {
                valid = false;
                input.classList.add("is-invalid");
            } else {
                input.classList.remove("is-invalid");
                input.classList.add("is-valid");
            }
        });

        // Si algún campo es inválido, prevenir el envío
        if (!valid) {
            e.preventDefault();
            alert("Por favor, completa todos los campos.");
        }
    });
});

// Desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Confirmación de envío
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío por defecto para mostrar el mensaje

    alert("Gracias por contactarnos. Hemos recibido tu mensaje.");
    this.submit(); // Envía el formulario después de mostrar el mensaje
});
