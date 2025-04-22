import { cart, init } from "./app.js";

const contentProductsHtml = document.querySelector('#lista-cursos');
const cartListHtml = document.querySelector('#lista-carrito tbody');
const buttonClearCartHtml = document.querySelector('#vaciar-carrito');

const getObjectProductOfCard = (element) => {
  return {
    imagen: element.querySelector('img').src,
    titulo: element.querySelector('h4').textContent,
    precio: element.querySelector('.precio span').textContent,
    id: element.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  };
};

const showCarInHtml = () => {

  cleanCartInHtml();

  cart.listCart.forEach(curso => {
    const { imagen, titulo, precio, cantidad, id } = curso;

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

    cartListHtml.appendChild(fila);
  });

  updateLocalStorage();
};

const cleanCartInHtml = () => {
  while (cartListHtml.firstChild) {
    cartListHtml.removeChild(cartListHtml.firstChild);
  };
};

const deleteProductFromHtml = (event) => {
  event.preventDefault();

  if (!event.target.classList.contains('borrar-curso')) return;

  const id = event.target.getAttribute('data-id');
  cart.removeProduct(id);
  showCarInHtml();
};

const cleanCart = () => {
  cart.cleanCart();
  showCarInHtml();
};

const updateLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart.listCart));
};

document.addEventListener('DOMContentLoaded', () => {
  showCarInHtml();
  contentProductsHtml.addEventListener('click', init);
  cartListHtml.addEventListener('click', deleteProductFromHtml);
  buttonClearCartHtml.addEventListener('click', cleanCart);
});

export {
  getObjectProductOfCard,
  showCarInHtml,
};