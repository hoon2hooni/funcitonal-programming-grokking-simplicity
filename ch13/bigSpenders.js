function getBigSpenders(customers) {
  const withBigPurchases = filter(customers, hasBigPurchase);
  return filter(withBigPurchases, has2OrMorePurchases);
}

function hasBigPurchase(customer) {
  return filter(customer.purchases, isBigPurchase).length > 0;
}
function isBigPurchase(purchase) {
  return purchase.total > 100;
}

function has2OrMorePurchases(customer) {
  return customer.purchases.length >= 2;
}
