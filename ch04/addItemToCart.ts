import { calcCartTotal } from "./calcCartTotal";
import { Cart } from "./types";
type AddItemToCart = (name: string, price: number) => void;

let shoppingCart = [
  { name: "무야호", price: 10000 },
  { name: "무야호", price: 10000 },
  { name: "무야호", price: 10000 },
  { name: "무야호", price: 10000 },
];

const addItemToCart: AddItemToCart = (name, price) => {
  shoppingCart = addItem(shoppingCart, name, price);
  calcCartTotal();
};
function addItem(cart: Cart, name: string, price: number) {
  const newCart = [
    ...cart,
    {
      name,
      price,
    },
  ];
  return newCart;
}
