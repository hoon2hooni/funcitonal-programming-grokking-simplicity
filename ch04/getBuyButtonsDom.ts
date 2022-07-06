import { Button } from "types";
export function getBuyButtonsDom(): Button[] {
  return [
    {
      item: { price: 1000, name: "무야호" },
      showFreeShippingIcon,
      hideFreeShippingIcon,
    },
    {
      item: { price: 1000, name: "무야호" },
      showFreeShippingIcon,
      hideFreeShippingIcon,
    },
  ];
}

function showFreeShippingIcon() {
  console.log("I am free");
}

function hideFreeShippingIcon() {
  console.log("I am not free");
}
