function objectSet(item, key, value) {
  //copyObject = Object.assign({}, item)
  const copyObject = { ...item };
  copyObject[key] = value;
  return copyObject;
}

function setPrice(item, newPrice) {
  // const itemCopy = Object.assign({}, item);
  // itemCopy.price = newPrice;
  const itemCopy = objectSet(item, "price", newPrice);
  return itemCopy;
}

function setQuantity(item, newQuantity) {
  const itemCopy = objectSet(item, "quantity", newQuantity);
  return itemCopy;
}

function objectDelete(object, key) {
  const copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}

function setPriceByName(cart, name, price) {
  const copyCart = cart.slice();
  for (let i = 0; i < cart.length; i++) {
    if (copyCart[i].name === name) {
      copyCart[i] = setPrice(copyCart[i], price);
    }
  }
  return copyCart;
}


function setQuantityByName(cart, name, quantity) {
  const copyCart = cart.slice();
  for (let i = 0; i < cart.length; i++) {
    if (copyCart[i].name === name) {
      copyCart[i] = setQuantity(copyCart[i], quantity);
    }
  }
  return copyCart;
}