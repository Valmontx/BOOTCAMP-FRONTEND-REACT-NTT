// cart counter

let cartCounter: number = 0;

export function incrementCartCounter(): void {
   cartCounter++
   const cartCount = document.getElementById("cart-counter");
   if (cartCount) {
      cartCount.textContent = String(cartCounter);
   }
}





