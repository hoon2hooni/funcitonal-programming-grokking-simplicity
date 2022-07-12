function removeItemByName(cart, name) {
  const idx = indexOfName(cart, name);
  if (idx !== null) {
    return removeItems(cart, idx, 1);
  }
  return cart;
}

function indexOfItem(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      return i;
    }
  }
  return null;
}

function isInCart(cart, name) {
  return indexOfItem(cart, name) !== null;
}

// function setPriceByName(cart, name, price) {
//   const cartCopy = cart.slice();
//   const index = indexOfItem(cart, name);
//   if (index !== null) {
//     cartCopy[index] = setPrice(cartCopy[index], price);
//   }
//   return cartCopy;
// }

function setPriceByName(cart, name, price) {
  const i = indexOfItem(cart, name);
  if (i !== null) {
    const item = arrayGet(cart, i);
    return arraySet(cart, i, setPrice(item, price));
  }
  return cart;
}

function arraySet(array, idx, value) {
  const copyArray = array.slice();
  copyArray[idx] = value;
  return copyArray;
}

function arrayGet(array, idx) {
  return array[idx];
}
