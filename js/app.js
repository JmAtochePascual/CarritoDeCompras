// Importar modulos
import {
  listaCursosElement,
} from "./elemtos.js";

import {
  obtenerCurso,
  verificarCurso,
} from "./funciones.js";


// Variables
let listaDeCursos = [];


// funcion que inicia la aplicación
const init = (event) => {

  // obtener curso
  const curso = obtenerCurso(event);

  // verificar si el curso ya fue agregado
  const existeCurso = verificarCurso(curso);

  // si el curso ya fue agregado aumentar la cantidad si no agregarlo
  existeCurso ? aumentarCantidadCurso(curso.id) : agregarCurso(curso);

  console.log(listaDeCursos);
};


// Agregar curso al carrito
const agregarCurso = (curso) => listaDeCursos = [...listaDeCursos, curso];


// Aumentar cantidad de curso
const aumentarCantidadCurso = (id) => {
  listaDeCursos.forEach(cursoExistente => cursoExistente.id === id ? cursoExistente.cantidad++ : null);
}


// cargar eventos
document.addEventListener('DOMContentLoaded', () => {

  // Obtener curso
  listaCursosElement.addEventListener('click', init);
});


export {
  listaDeCursos
}