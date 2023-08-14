function agregarPersonaadmin() {
    const nombre = document.getElementById("nombre").value;
    const Rol = document.getElementById("Rol").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const Contraseña = document.getElementById("Contraseña").value;
    
    const tablaBody = document.getElementById("tabla-body");
    const newRow = tablaBody.insertRow();
    newRow.innerHTML = `
        <td class="datos-tabla">${nombre}</td>
        <td class="datos-tabla">${Rol}</td>
        <td class="datos-tabla">${correo}</td>
        <td class="datos-tabla">${telefono}</td>
        <td class="datos-tabla">${Contraseña}</td>
    `;

    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("Rol").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("Contraseña").value = "";
}