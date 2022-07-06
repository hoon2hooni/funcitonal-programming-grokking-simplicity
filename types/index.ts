export type Cart = { name: string; price: number }[];
export type Button = {
  item: Item;
  showFreeShippingIcon: () => void;
  hideFreeShippingIcon: () => void;
};

export type Item = { price: number; name: string };
