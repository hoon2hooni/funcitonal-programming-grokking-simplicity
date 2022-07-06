import { Button } from "types";

let shippingCartTotal = 100000;

function showFreeShippingIcon() {
  console.log("I am free");
}

function hideFreeShippingIcon() {
  console.log("I am not free");
}

function getBuyButtonsDom(): Button[] {
  return [
    { item: { price: 1000 }, showFreeShippingIcon, hideFreeShippingIcon },
    { item: { price: 1000 }, showFreeShippingIcon, hideFreeShippingIcon },
    { item: { price: 1000 }, showFreeShippingIcon, hideFreeShippingIcon },
  ];
}

function updateShippingIcons() {
  const buyButtons = getBuyButtonsDom();
  for (const button of buyButtons) {
    const { item } = button;
    if (getFreeShipping(item.price, shippingCartTotal)) {
      button.showFreeShippingIcon();
    } else {
      button.hideFreeShippingIcon();
    }
  }
}

function getFreeShipping(price: number, total: number) {
  return price + total >= 20;
}
