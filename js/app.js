// Variables
const carritoElement = document.querySelector('#carrito');
const listaCursosElement = document.querySelector('#lista-cursos');
const contenedorCarritoElement = document.querySelector('#lista-carrito tbody');
const botonVaciarCarritoElement = document.querySelector('#vaciar-carrito');
let carritoCursos = [];





// Cargar Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  listaCursosElement.addEventListener('click', obtenerCursoElement);
});



// Funciones
const obtenerCursoElement = (event) => {
  event.preventDefault();

  if (event.target.classList.contains('agregar-carrito')) {
    const cursoElement = event.target.parentElement.parentElement;
    crearCurso(cursoElement);
  }
};





const crearCurso = (cursoElement) => {

  const curso = {
    imagen: cursoElement.querySelector('img').src,
    titulo: cursoElement.querySelector('h4').textContent,
    precio: cursoElement.querySelector('.precio span').textContent,
    id: cursoElement.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  };

  validarAgregado(curso);
};





const validarAgregado = (curso) => {
  const existe = carritoCursos.some(cursoElement => cursoElement.id === curso.id);

  existe ? incrementarCantidad(curso) : agregarCurso(curso);
}





const incrementarCantidad = (curso) => {
  carritoCursos.forEach(cursoElement => {
    if (cursoElement.id === curso.id) {
      cursoElement.cantidad++;
    }
  });

  console.log(carritoCursos);
};





const agregarCurso = (curso) => {
  carritoCursos = [...carritoCursos, curso];

  console.log(carritoCursos);
}