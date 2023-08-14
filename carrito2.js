// Datos para la tabla de precios (esto es solo un ejemplo, puedes modificar los valores)
const precios = {
    "categoria1.jpg": {
      precio: 500,
    },
    "categoria2.jpg": {
      precio: 800,
    },
    "categoria3.jpg": {
      precio: 400,
    },
    "categoria4.jpg": {
      precio: 900,
    },
    "categoria5.jpg": {
      precio: 600,
    },
    // Agrega más categorías según tus necesidades
  };
  
  // Función para agregar elementos al carrito
  let carrito = [];
  
  function agregarAlCarrito(imagen) {
    carrito.push(imagen);
    mostrarCarritoPreview();
  }
  
  function mostrarCarritoPreview() {
    const carritoPreview = document.getElementById("carrito-preview");
    carritoPreview.innerHTML = "";
  
    for (const imagen of carrito) {
      carritoPreview.innerHTML += `
        <div class="carrito-item">
          <img src="${imagen}" alt="Tatuaje" class="carrito-imagen">
          <p>Tatuaje agregado</p>
        </div>
      `;
    }
  }
  
  // Función para calcular el precio según el área seleccionada
  function calcularPrecio() {
    const areaSeleccionada = document.getElementById("area").value;
    const precioInput = document.getElementById("precio");
    const categoriaSelect = document.getElementById("categoria");
  
    if (areaSeleccionada !== "0") {
      const imagenSeleccionada = carrito[carrito.length - 1];
      const precio = precios[imagenSeleccionada].precio;
  
      precioInput.value = precio;
  
      if (categoriaSelect.value === "0") {
        categoriaSelect.value = "Pequeño"; // Opción predeterminada
      }
    } else {
      precioInput.value = "";
      categoriaSelect.value = "0";
    }
  }
  
  // Función para mostrar el formulario
  function mostrarFormulario() {
    const formulario = document.getElementById("formulario");
    formulario.innerHTML = `
      <form id="form-tatuaje">
        <label for="nombre">Nombre completo:</label>
        <input type="text" id="nombre" required>
  
        <label for="area">Área a tatuar:</label>
        <select id="area" onchange="calcularPrecio()">
          <option value="0" disabled selected>Seleccionar área</option>
          <option value="Muñeca">Muñeca</option>
          <option value="Antebrazo">Antebrazo</option>
          <option value="Brazo completo">Brazo completo</option>
          <option value="Cuello">Cuello</option>
          <option value="Pecho">Pecho</option>
          <option value="Espalda completa">Espalda completa</option>
          <option value="Pierna">Pierna</option>
          <option value="Pierna completa">Pierna completa</option>
          <option value="Tobillo">Tobillo</option>
          <option value="Dedo">Dedo</option>
        </select>
  
        <label for="precio">Precio (MXN):</label>
        <input type="text" id="precio" readonly>
  
        <label for="telefono">Teléfono:</label>
        <input type="text" id="telefono" required>
  
        <label for="correo">Correo electrónico:</label>
        <input type="email" id="correo" required>
  
        <label for="categoria">Categoría de tatuaje:</label>
        <select id="categoria">
          <option value="0" disabled selected>Seleccionar categoría</option>
          <option value="Pequeño">Pequeño</option>
          <option value="Mediano">Mediano</option>
          <option value="Grande">Grande</option>
        </select>
  
        <label for="metodoPago">Método de pago:</label>
        <select id="metodoPago">
          <option value="0" disabled selected>Seleccionar método de pago</option>
          <option value="Tarjeta">Tarjeta de crédito/débito</option>
          <option value="Efectivo">Efectivo</option>
        </select>
  
        <button type="submit" onclick="mostrarTicket(event)">Realizar pedido</button>
      </form>
    `;
  }
  
  // Función para mostrar el ticket con los detalles del pedido
  function mostrarTicket(event) {
    event.preventDefault();
  
    const nombre = document.getElementById("nombre").value;
    const area = document.getElementById("area").value;
    const precio = document.getElementById("precio").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const categoria = document.getElementById("categoria").value;
    const metodoPago = document.getElementById("metodoPago").value;
  
    const ticket = document.getElementById("ticket");
    ticket.style.display = "block";
    ticket.innerHTML = `
      <h2>Ticket de Compra</h2>
      <p>Nombre: ${nombre}</p>
      <p>Área a tatuar: ${area}</p>
      <p>Precio (MXN): ${precio}</p>
      <p>Teléfono: ${telefono}</p>
      <p>Correo electrónico: ${correo}</p>
      <p>Categoría de tatuaje: ${categoria}</p>
      <p>Método de pago: ${metodoPago}</p>
    `;
  
    if (metodoPago === "Tarjeta") {
      ticket.innerHTML += `
        <div class="deposito">
          <p>Depositar al siguiente número de cuenta:</p>
          <p>Cuenta clave: 2121512335115</p>
          <p>Número de tarjeta: 151519285684</p>
        </div>
      `;
    }
  }
  
  // Inicialización al cargar la página
  window.onload = function() {
    mostrarCarritoPreview();
    mostrarFormulario();
  };
  