const cartBtn = document.querySelector(".cart-btn");
const cartIcon = document.querySelector(".fas.fa-shopping-cart");

cartBtn.addEventListener("click", function() {
  // Incrementa el número de elementos en la cesta
  cartIcon.textContent++;
});
