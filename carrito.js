document.addEventListener("DOMContentLoaded", function () {
    const añadirCarrito = document.querySelectorAll(".añadir-carrito");
    const listaCarrito = document.querySelector(".carrito-items");
    const carritoTotal = document.getElementById("carrito-total-id");
    const abrirCarrito = document.getElementById("carrito-boton-id");
    const carritoPanel = document.getElementById("carrito-panel-id");
    const cerrarCarrito = document.getElementById("carrito-cerrar-id");

    let carritoItems = JSON.parse(localStorage.getItem("carritoItems")) || [];
    let carritoTotalValor = JSON.parse(localStorage.getItem("carritoTotalValor")) || 0;

    const saveLocal = () => {
        localStorage.setItem("carritoItems", JSON.stringify(carritoItems));
        localStorage.setItem("carritoTotalValor", JSON.stringify(carritoTotalValor));
    };

    const renderCartItems = () => {
        listaCarrito.innerHTML = ""; 
        carritoItems.forEach(item => {
            const carritoItem = document.createElement("li");
            carritoItem.classList.add("carrito-item");
            carritoItem.textContent = `${item.nombre} - $${item.precio}`;
            listaCarrito.appendChild(carritoItem);
        });
        carritoTotal.textContent = carritoTotalValor;
        carritoPanel.style.display = carritoItems.length > 0 ? "block" : "none"; 
    };

    renderCartItems();

    añadirCarrito.forEach(button => {
        button.addEventListener("click", function () {
            const nombreProducto = button.getAttribute("data-name");
            const precioProducto = parseInt(button.getAttribute("data-price"));

            carritoItems.push({ nombre: nombreProducto, precio: precioProducto });

            carritoTotalValor += precioProducto;

            saveLocal();
            renderCartItems();
        });
    });

    abrirCarrito.addEventListener("click", function () {
        carritoPanel.classList.toggle("active");
    });

    cerrarCarrito.addEventListener("click", function(){
        carritoPanel.style.display = "";
        carritoPanel.classList.remove("active");
        saveLocal();
    });
});



