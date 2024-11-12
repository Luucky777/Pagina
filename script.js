// Manejar el inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir el envío del formulario

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simular autenticación básica (solo para fines educativos)
    if (username === "admin" && password === "1234") {
        // Mostrar la sección del producto
        document.getElementById("product-section").style.display = "block";

        // Ocultar el formulario de inicio de sesión
        document.getElementById("login-form").style.display = "none";
    } else {
        // Mostrar mensaje de error
        const errorElement = document.getElementById("login-error");
        errorElement.textContent = "Usuario o contraseña incorrectos.";
    }
});

// Manejar la compra del producto
document.getElementById("purchaseForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir el envío del formulario

    const price = document.getElementById("price-input").value;

    // Mostrar el mensaje de agradecimiento
    const thankYouSection = document.getElementById("thank-you-section");
    const purchaseMessage = document.getElementById("purchase-message");

    purchaseMessage.textContent = `Tu compra fue de ${price} dólares.`;
    thankYouSection.style.display = "block";

    // Ocultar la sección del producto
    document.getElementById("product-section").style.display = "none";
});
