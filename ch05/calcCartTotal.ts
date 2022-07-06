import { Cart } from "types";
import { updateShippingIcons, calcTotal, updateTaxDom } from "ch05";

function setCartTotalDom(cart: Cart) {
  console.log(cart);
  /** */
}

export function calcCartTotal(cart: Cart) {
  const total = calcTotal(cart);
  setCartTotalDom(cart);
  updateShippingIcons(cart);
  updateTaxDom(total);
}
