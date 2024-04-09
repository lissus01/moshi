// script.js
document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.carrusel-imagenes img');
    let indiceActual = 0;
  
    imagenes[0].style.opacity = 1;
    document.getElementById('siguiente').addEventListener('click', () => {
      cambiarImagen(1);
    });
  
    document.getElementById('anterior').addEventListener('click', () => {
      cambiarImagen(-1);
    });
  
    function cambiarImagen(direccion) {
      imagenes[indiceActual].style.display = 'none';
      indiceActual += direccion;
      if (indiceActual >= imagenes.length) indiceActual = 0;
      if (indiceActual < 0) indiceActual = imagenes.length - 1;
      imagenes[indiceActual].style.display = 'block';
    }
  });
  