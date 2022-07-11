function blackFridayPromotionSafe(cart) {
  const cartCopy = deepCopy(cart);
  blackFridayPromotion(cartCopy);
  return deepCopy(cartCopy);
}
