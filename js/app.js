import Cart from "./Cart.js";

const listOfProducts = document.querySelector('#lista-cursos');
const contentCartList = document.querySelector('#lista-carrito tbody');
const buttonClearCarList = document.querySelector('#vaciar-carrito');

const cart = new Cart();

const init = (event) => {
  event.preventDefault();

  if (!event.target.classList.contains('agregar-carrito')) return;

  const producto = getObjectProduct(event.target.parentElement.parentElement);

  if (cart.findProduct(producto.id)) {
    cart.increaseQuantity(producto.id);
  } else {
    cart.addToCart(producto);
  };

  showCartListHtml();
  updateLocalStorage();
};

const getObjectProduct = (element) => {
  return {
    imagen: element.querySelector('img').src,
    titulo: element.querySelector('h4').textContent,
    precio: element.querySelector('.precio span').textContent,
    id: element.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  };
};

const showCartListHtml = () => {

  cleanListCartHtml();

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

    contentCartList.appendChild(fila);
  });
};

const cleanListCartHtml = () => {
  while (contentCartList.firstChild) {
    contentCartList.removeChild(contentCartList.firstChild);
  };
};

const deleteProduct = (event) => {
  event.preventDefault();

  if (!event.target.classList.contains('borrar-curso')) return;

  const id = event.target.getAttribute('data-id');
  cart.removeProduct(id);
  showCartListHtml();
  updateLocalStorage();
};

const clearCart = () => {
  cart.cleanCart();
  cleanListCartHtml();
  updateLocalStorage();
};

const updateLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart.listCart));
};

document.addEventListener('DOMContentLoaded', () => {
  showCartListHtml();
  listOfProducts.addEventListener('click', init);
  contentCartList.addEventListener('click', deleteProduct);
  buttonClearCarList.addEventListener('click', clearCart);
});