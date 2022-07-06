import { shoppingCart } from "const";
import { Cart } from "types";

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

export function calcTotal(cart: Cart) {
  const total = cart.reduce((acc, { price }) => {
    return acc + price;
  }, 0);
  return total;
}
