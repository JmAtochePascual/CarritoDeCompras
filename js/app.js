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

  existeCurso ? null : agregarCurso(curso);
};


// Agregar curso al carrito
const agregarCurso = (curso) => listaDeCursos = [...listaDeCursos, curso];


// cargar eventos
document.addEventListener('DOMContentLoaded', () => {

  // Obtener curso
  listaCursosElement.addEventListener('click', init);
});


export {
  listaDeCursos
}