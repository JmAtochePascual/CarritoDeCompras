// Importar modulos
import { carritoElement, listaCursosElement } from "./elemtos.js";
import { actualizarStorage, listarCursos, obtenerCurso, verificarCurso, } from "./funciones.js";


// Variables
let listaDeCursos = JSON.parse(localStorage.getItem('cursos')) || [];


// funcion que inicia la aplicación
const init = (event) => {

  // obtener curso
  const curso = obtenerCurso(event);

  // si no es un curso salir
  if (!curso) return;

  // verificar si el curso ya fue agregado
  const existeCurso = verificarCurso(curso);

  // si el curso ya fue agregado aumentar la cantidad si no agregarlo
  existeCurso ? aumentarCantidadCurso(curso.id) : agregarCurso(curso);

  // listar cursos en el carrito de compras 
  listarCursos();

  // actualizar storage
  actualizarStorage();
};


// Agregar curso al carrito
const agregarCurso = (curso) => listaDeCursos = [...listaDeCursos, curso];


// Aumentar cantidad de curso
const aumentarCantidadCurso = (id) => {
  listaDeCursos.forEach(cursoExistente => cursoExistente.id === id ? cursoExistente.cantidad++ : null);
}


// Eliminar curso
const eliminarCurso = (event) => {
  event.preventDefault();

  if (event.target.classList.contains('borrar-curso')) {
    const cursoId = event.target.getAttribute('data-id');
    listaDeCursos = listaDeCursos.filter(curso => curso.id !== cursoId);
    listarCursos();
  }

  // actualizar storage
  actualizarStorage();
};


// cargar eventos
document.addEventListener('DOMContentLoaded', () => {
  // Obtener curso
  listaCursosElement.addEventListener('click', init);
  carritoElement.addEventListener('click', eliminarCurso);
  listarCursos();
});


export {
  listaDeCursos
}