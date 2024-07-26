// Importar
import { listaDeCursos } from "./app.js";
import { contenedorCarritoElement } from "./elemtos.js";


// obtener curso
const obtenerCurso = (event) => {
  event.preventDefault();

  // Verificar si el elemento seleccionado contiene la clase agregar-carrito
  if (event.target.classList.contains('agregar-carrito')) {

    const cardElement = event.target.parentElement.parentElement;

    // Crear objeto con la información del curso
    return {
      imagen: cardElement.querySelector('img').src,
      titulo: cardElement.querySelector('h4').textContent,
      precio: cardElement.querySelector('.precio span').textContent,
      id: cardElement.querySelector('a').getAttribute('data-id'),
      cantidad: 1
    };
  }
};


// Listar cursos
const listarCursos = () => {

  // Limpiar html
  limpiarHtml();

  listaDeCursos.forEach(curso => {
    const { imagen, titulo, precio, cantidad, id } = curso;

    // Crear fila
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>
        <img src="${imagen}" width="100">
      </td>
      <td>${titulo}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>
      <td>
        <a href="#" class="borrar-curso" data-id="${id}">X</a>
      </td>
    `;

    // Agregar fila al tbody
    contenedorCarritoElement.appendChild(fila);
  });
};


// Actualizar storage
const actualizarStorage = () => localStorage.setItem('cursos', JSON.stringify(listaDeCursos));

// Verificar si el curso ya fue agregado
const verificarCurso = (curso) => listaDeCursos.some(cursoExistente => cursoExistente.id === curso.id);


// Limpiar html
const limpiarHtml = () => {
  while (contenedorCarritoElement.firstChild) {
    contenedorCarritoElement.removeChild(contenedorCarritoElement.firstChild);
  }
};

export {
  obtenerCurso,
  verificarCurso,
  listarCursos,
  actualizarStorage
}