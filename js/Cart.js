class Cart {

  constructor() {
    this.listCart = JSON.parse(localStorage.getItem('cart')) || [];
  };

  addToCart(product) {
    this.listCart = [...this.listCart, product];
  };

  increaseQuantity(id) {
    this.listCart.forEach(product => {
      if (product.id === id) product.cantidad++;
    });
  };

  findProduct(id) {
    return this.listCart.some(product => product.id === id);
  };

  removeProduct(id) {
    this.listCart = this.listCart.filter(product => product.id !== id);
  };

  cleanCart() {
    this.listCart = [];
  };
};

export default Cart;