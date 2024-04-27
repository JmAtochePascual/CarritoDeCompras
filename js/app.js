// Variables
const carritoElement = document.querySelector('#carrito');
const listaCursosElement = document.querySelector('#lista-cursos');
const contenedorCarritoElement = document.querySelector('#lista-carrito tbody');
const botonVaciarCarritoElement = document.querySelector('#vaciar-carrito');

// Cargar Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  listaCursosElement.addEventListener('click', obtenerCursoElement);
});



// Funciones
const obtenerCursoElement = (event) => {
  event.preventDefault();

  if (event.target.classList.contains('agregar-carrito')) {
    const cursoElement = event.target.parentElement.parentElement;
  }
};


