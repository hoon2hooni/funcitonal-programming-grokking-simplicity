import { Cart, Item, Button } from "types";
import { getFreeShipping, addItem, makeCartItem } from "ch05";
import { getBuyButtonsDom } from "ch04/getBuyButtonsDom";

/**
 * 
암묵적 출력과 암묵적 입력 줄이기
 */

/**
 * 
 * before function updateShippingIcons() {
  const buyButtons = getBuyButtonsDom();
  for (const button of buyButtons) {
    const { item } = button;
    const newCart = addItem(shoppingCart, item.name, item.price);
    if (getFreeShipping(newCart)) {
      button.showFreeShippingIcon();
    } else {
      button.hideFreeShippingIcon();
    }
  }
}
 */

export function updateShippingIcons(cart: Cart) {
  const buyButtons = getBuyButtonsDom();
  for (const button of buyButtons) {
    const { item } = button;
    const hasFreeShipping = getsFreeShippingWithItem(cart, item);
    setFreeShippingIcon(button, hasFreeShipping);
  }
}

function getsFreeShippingWithItem(cart: Cart, item: Item) {
  const newCart = addItem(cart, makeCartItem(item.name, item.price));
  return getFreeShipping(newCart);
}

function setFreeShippingIcon(button: Button, isShown: boolean) {
  if (isShown) {
    button.showFreeShippingIcon();
  } else {
    button.hideFreeShippingIcon();
  }
}
