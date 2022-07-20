function average(numbers) {
  return reduce(numbers, 0, plus) / numbers.length;
}

function plus(n, m) {
  return n + m;
}

function averagePurchaseTotals(customers) {
  return map(customers, customerPurchaseAverage);
}

function customerPurchaseAverage(customer) {
  const purchaseTotals = map(customer.purchases, (purchase) => purchase.total);
  return average(purchaseTotals);
}
