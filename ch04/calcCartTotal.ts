import { shoppingCart } from "./const";
import { Cart } from "./types";

function setCartTotalDom() {
  /** */
}
function updateShippingIcons() {
  /** */
}
function updateTaxDom() {
  /** */
}
let shippingCartTotal = 0;

export function calcCartTotal() {
  shippingCartTotal = calcTotal(shoppingCart);
  setCartTotalDom();
  updateShippingIcons();
  updateTaxDom();
}
function calcTotal(cart: Cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    total += item.price;
  }
  return shippingCartTotal;
}
