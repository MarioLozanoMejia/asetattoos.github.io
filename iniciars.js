document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Aquí debes verificar las credenciales en el backend (simulado aquí)
    if (username === "admin" && password === "admin123") {
        // Redirigir a la página de administradores
        window.location.href = "agretatu.html";
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
});
