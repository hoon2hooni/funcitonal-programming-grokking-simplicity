import { Cart } from "types";

/**
 *
 *  위 함수는 변경을 함
 */
// function removeItemByName(cart: Cart, name: string) {
//   let idx = null;
//   for (let i = 0; i < cart.length; i++) {
//     if (cart[i].name === name) {
//       idx = i;
//     }
//   }
//   if (idx !== null) {
//     cart.splice(idx, 1);
//   }
// }

function removeItemByName(cart: Cart, name: string) {
  let idx = null;
  const newCart = cart.slice();
  for (let i = 0; i < cart.length; i++) {
    if (newCart[i].name === name) {
      idx = i;
    }
  }
  if (idx !== null) {
    newCart.splice(idx, 1);
  }
  return newCart;
}
