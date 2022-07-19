function selectBestCustomers(customers) {
  var newArray = [];
  forEach(customers, function (customer) {
    if (customer.purchases.length >= 3) newArray.push(customer);
  });
  return newArray;
}

function selectCustomersAfter(customers, date) {
  var newArray = [];
  forEach(customers, function (customer) {
    if (customer.signupDate > date) newArray.push(customer);
  });
  return newArray;
}

function selectCustomersBefore(customers, date) {
  var newArray = [];
  forEach(customers, function (customer) {
    if (customer.signupDate < date) newArray.push(customer);
  });
  return newArray;
}

function singlePurchaseCustomers(customers) {
  var newArray = [];
  forEach(customers, function (customer) {
    if (customer.purchases.length === 1) newArray.push(customer);
  });
  return newArray;
}

/// Replaced with callback
function selectBestCustomers(customers) {
  return filter(customers, (customer) => customer.purchases.length >= 3);
}

function filter(array, cb) {
  const result = [];
  forEach(array, (el) => {
    if (cb(el)) {
      result.push(el);
    }
  });
  return result;
}
