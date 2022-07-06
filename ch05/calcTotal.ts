import { Cart } from "types";
export function calcTotal(cart: Cart) {
  const total = cart.reduce((acc, { price }) => {
    return acc + price;
  }, 0);
  return total;
}
