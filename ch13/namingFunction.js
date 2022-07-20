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

// after naming it

function biggestPurchasesBestCustomers(customers) {
  const bestCustomers = selectBestCustomers(customers);
  const biggestPurchases = getBiggestPurchases(bestCustomers);
  return biggestPurchases;
}

function selectBestCustomers(customers) {
  return filter(customers, function (customer) {
    return customer.purchases.length >= 3;
  });
}
function getBiggestPurchases(customers) {
  return map(customers, getBiggestPurchase);
}

function getBiggestPurchase(customer) {
  return maxKey(customer.purchases, { total: 0 }, function (purchase) {
    return purchase.total;
  });
}

//콜백에 이름 붙이기

function selectBestCustomers(customers) {
  return filter(customers, isGoodCustomer);
}

function isGoodCustomer(customer) {
  return customer.purchases.length >= 3;
}

function getBiggestPurchase(customer) {
  return maxKey(customer.purchases, { total: 0 }, getPurchaseTotal);
}

function getPurchaseTotal(purchase) {
  return purchase.total;
}
