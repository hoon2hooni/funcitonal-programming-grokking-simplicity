export type Cart = { name: string; price: number }[];
export type Button = {
  item: { price: number };
  showFreeShippingIcon: () => void;
  hideFreeShippingIcon: () => void;
};
