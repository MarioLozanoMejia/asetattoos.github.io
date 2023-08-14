const imagenInput = document.getElementById('imagenInput');
const imagenContenedor = document.getElementById('imagenContenedor');
const especificacionesImagen = document.getElementById('especificacionesImagen');

imagenInput.addEventListener('change', mostrarImagen);

function mostrarImagen() {
    const file = imagenInput.files[0];
    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            const imagen = new Image();
            imagen.src = reader.result;
            imagenContenedor.innerHTML = '';
            imagenContenedor.appendChild(imagen);
            obtenerEspecificaciones(imagen);
        });

        reader.readAsDataURL(file);
    }
}

function obtenerEspecificaciones(imagen) {
    const img = new Image();
    img.src = imagen.src;
    img.onload = function() {
        const ancho = img.width;
        const alto = img.height;

        especificacionesImagen.innerHTML = `
            <p>Tamaño: ${ancho} x ${alto}</p>
            <p>Altura: ${alto}</p>
            <p>Anchura: ${ancho}</p>
        `;
    };
}
