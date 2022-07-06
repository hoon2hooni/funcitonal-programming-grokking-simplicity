import { Cart } from "types";
import { calcTotal } from "ch05";

/**
 * 
function getFreeShipping(price: number, total: number) {
  return price + total >= 20;
}
 */

export function getFreeShipping(cart: Cart) {
  return calcTotal(cart) >= 20;
}
