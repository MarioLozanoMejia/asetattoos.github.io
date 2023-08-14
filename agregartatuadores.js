function agregarPersona() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const experiencia = document.getElementById("experiencia").value;
    const especialidad = document.getElementById("especialidad").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    
    const tablaBody = document.getElementById("tabla-body");
    const newRow = tablaBody.insertRow();
    newRow.innerHTML = `
        <td class="datos-tabla">${nombre}</td>
        <td class="datos-tabla">${edad}</td>
        <td class="datos-tabla">${experiencia}</td>
        <td class="datos-tabla">${especialidad}</td>
        <td class="datos-tabla">${correo}</td>
        <td class="datos-tabla">${telefono}</td>
    `;

    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("experiencia").value = "";
    document.getElementById("especialidad").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";
}