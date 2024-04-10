document.addEventListener("DOMContentLoaded",function(){
    const añadirCarrito = document.querySelectorAll(".añadir-carrito");
    const listaCarrito = document.querySelector(".carrito-items");
    const carritoTotal = document.getElementById("carrito-total-id");
    const abrirCarrito = document.getElementById("carrito-boton-id");
    const carritoPanel = document.getElementById("carrito-panel-id");
    const cerrarCarrito = document.getElementById("carrito-cerrar-id");
    
    let carritoTotalValor = 0;

    añadirCarrito.forEach(button => {
        button.addEventListener("click" , function(){
            const nombreProducto = button.getAttribute("data-name");
            const precioProducto = parseInt(button.getAttribute("data-price"));

            const carritoItem = document.createElement("li");
            carritoItem.classList.add("carrito-item");
            carritoItem.textContent = `${nombreProducto} - $${precioProducto}`;

            listaCarrito.appendChild(carritoItem);

            carritoTotalValor += precioProducto;
            carritoTotal.textContent = carritoTotalValor;

            carritoPanel.style.display = "block";
        });
    });

    abrirCarrito.addEventListener("click" , function(){
        carritoPanel.classList.toggle("active");
    });

    cerrarCarrito.addEventListener("click", function(){
        carritoPanel.style.display = "";
        carritoPanel.classList.remove("active");
        
    });
});