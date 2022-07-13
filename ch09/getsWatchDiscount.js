// function getWatchDiscount(cart) {
//   let total = 0;
//   for (const name of Object.keys(cart)) {
//     const item = cart[name];
//     total += item.price;
//   }
//   return total > 100 && cart.hasOwnProperty("watch");
// }

function getWatchDiscount(cart) {
  const total = calcTotal(cart);
  const hasWatch = isInCart(cart, "watch");
  return total > 100 && hasWatch;
}
