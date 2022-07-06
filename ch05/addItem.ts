import { Cart, Item } from "types";
// export function addItem(cart: Cart, name: string, price: number) {
//   const newCart = [
//     ...cart,
//     {
//       name,
//       price,
//     },
//   ];
//   return newCart;
// }

export function addItem(cart: Cart, item: Item) {
  return addElementLast(cart, item);
}

export function makeCartItem(name: string, price: number) {
  return {
    name,
    price,
  };
}

function addElementLast<T extends U[], U>(array: T, element: U) {
  const newArray = [...array, element];
  return newArray;
}
