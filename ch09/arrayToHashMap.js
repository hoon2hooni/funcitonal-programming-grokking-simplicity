function addItem(cart, item) {
  return objectSet(cart, item.name, item);
}
function calcTotal(cart) {
  let total = 0;
  for (const name of Object.keys(cart)) {
    const item = cart[name];
    total += item.price;
  }
  return total;
}
