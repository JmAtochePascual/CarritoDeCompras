

// Cargar Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  listaCursosElement.addEventListener('click', obtenerCursoElement);
  carritoElement.addEventListener('click', EliminarCurso);
  botonVaciarCarritoElement.addEventListener('click', vaciarCarrito);

  obtenerCarritosStorage();
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
  mostrarCarrito();
};





const agregarCurso = (curso) => {
  carritoCursos = [...carritoCursos, curso];
  mostrarCarrito();
}





const mostrarCarrito = () => {
  limpiarCarrito();

  carritoCursos.forEach(curso => {
    const { imagen, titulo, precio, cantidad, id } = curso;

    const row = document.createElement('tr');
    row.innerHTML = `
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

    contenedorCarritoElement.appendChild(row);
  });

  actualizarStorage(carritoCursos);
}





const limpiarCarrito = () => {
  while (contenedorCarritoElement.firstChild) {
    contenedorCarritoElement.removeChild(contenedorCarritoElement.firstChild);
  }
}





const EliminarCurso = (event) => {
  event.preventDefault();

  if (event.target.classList.contains('borrar-curso')) {
    const id = event.target.getAttribute('data-id');
    carritoCursos = carritoCursos.filter(curso => curso.id !== id);
    mostrarCarrito();
  }
};





const vaciarCarrito = () => {
  carritoCursos = [];
  mostrarCarrito();
}





const actualizarStorage = (carritoCursos) => {
  localStorage.setItem('cursos', JSON.stringify(carritoCursos));
}


const obtenerCarritosStorage = () => {
  const carritos = localStorage.getItem('cursos');
  carritoCursos = JSON.parse(carritos);
  mostrarCarrito();
}