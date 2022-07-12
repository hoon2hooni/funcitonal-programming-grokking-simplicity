import { addSyntheticTrailingComment } from "typescript";

// function freeTieClip(cart) {
//   let hasTie = false;
//   let hasTieClip = false;
//   for (let i = 0; i < cart.length; i++) {
//     let item = cart[i];
//     if (item.name === "tie") {
//       hasTie = true;
//     }
//     if (item.name === "tie clip") {
//       hasTieClip = true;
//     }
//   }
//   if (hasTie && !hasTieClip) {
//     let tieClip = makeItem("tie clip", 0);
//     return addItem(cart, tieClip);
//   }
//   return cart;
// }

function freeTieClip(cart) {
  const hasTie = isInCart(cart, "tie");
  const hasTieClip = isInCart(cart, "tie clip");
  if (hasTie && !hasTieClip) {
    const tieClip = makeItem("tie clip", 0);
    return addItem(cart, tieClip);
  }
  return cart;
}

function isInCart(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      return true;
    }
  }
  return false;
}
