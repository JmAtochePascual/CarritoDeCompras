import Cart from "./Cart.js";
import { getObjectProductOfCard, showCarInHtml } from "./ui.js";

const cart = new Cart();

const init = (event) => {
  event.preventDefault();

  if (!event.target.classList.contains('agregar-carrito')) return;

  const producto = getObjectProductOfCard(event.target.parentElement.parentElement);

  if (cart.findProduct(producto.id)) {
    cart.increaseQuantity(producto.id);
  } else {
    cart.addToCart(producto);
  };

  showCarInHtml();
};

export {
  cart,
  init,
}