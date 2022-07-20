// Page 315

function biggestPurchasesBestCustomers(customers) {
  var bestCustomers = filter(customers, function (customer) {
    return customer.purchases.length >= 3;
  });
  var biggestPurchases = map(bestCustomers, function (customer) {
    return; //...;
  });
}

// Page 316

function biggestPurchasesBestCustomers(customers) {
  const bestCustomers = filter(customers, function (customer) {
    return customer.purchases.length >= 3;
  });
  const biggestPurchases = map(bestCustomers, function (customer) {
    return reduce(customer.purchases, { total: 0 }, (biggestSoFar, purchase) =>
      biggestSoFar.total > purchase.total ? biggestSoFar : purchase
    );
  });
  return biggestPurchases;
}

// Page 317

/// Find biggest purchase

reduce(customer.purchases, { total: 0 }, function (biggestSoFar, purchase) {
  if (biggestSoFar.total > purchase.total) return biggestSoFar;
  else return purchase;
});

/// Find biggest number

reduce(numbers, Number.MIN_VALUE, function (m, n) {
  if (m > n) return m;
  else return n;
});

/// With callback extracted

maxKey(customer.purchases, { total: 0 }, function (purchase) {
  return purchase.total;
});

function maxKey(array, init, f) {
  return reduce(array, init, (accum, init) =>
    f(biggestSoFar) > f(purchase) ? biggestSoFar : purchase
  );
}

// Page 318

function biggestPurchasesBestCustomers(customers) {
  var bestCustomers = filter(customers, function (customer) {
    return customer.purchases.length >= 3;
  });
  var biggestPurchases = map(bestCustomers, function (customer) {
    return maxKey(customer.purchases, { total: 0 }, function (purchase) {
      return purchase.total;
    });
  });
  return biggestPurchases;
}

function max(array, init) {
  return maxKey(array, init, (x) => x);
}
