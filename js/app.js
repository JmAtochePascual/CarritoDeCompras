// Importar modulos
import {
  listaCursosElement
} from "./elemtos.js";

import { obtenerCurso } from "./funciones.js";



// funcion que inicia la aplicación
const init = (event) => {

  // obtener curso
  const curso = obtenerCurso(event);

};

// cargar eventos
document.addEventListener('DOMContentLoaded', () => {

  // Obtener curso
  listaCursosElement.addEventListener('click', init);
});