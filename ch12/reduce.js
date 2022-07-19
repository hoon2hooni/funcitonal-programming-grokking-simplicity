function countAllPurchases(customers) {
  var total = 0;
  forEach(customers, function (customer) {
    total = total + customer.purchases.length;
  });
  return total;
}

function concatenateArrays(arrays) {
  var result = [];
  forEach(arrays, function (array) {
    result = result.concat(array);
  });
  return result;
}

function customersPerCity(customers) {
  var cities = {};
  forEach(customers, function (customer) {
    cities[customer.address.city] += 1;
  });
  return cities;
}

function biggestPurchase(purchases) {
  var biggest = { total: 0 };
  forEach(purchases, function (purchase) {
    biggest = biggest.total > purchase.total ? biggest : purchase;
  });
  return total;
}

/// Replaced with callback

function countAllPurchases(customers) {
  return reduce(customers, init, (total, customer) => {
    return total + customer.purchases.length;
  }
}

function reduce(array, init, cb) {
  let accum = init;
  forEach(array, function (el) {
    accum = cb(accum, el)
  });
  return accum;
}


function min(numbers) {
  reduce(numbers, Number.MAX_VALUE, (m, n) => {
    return m < n ? m : n
  }
}