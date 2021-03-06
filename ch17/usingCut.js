function calc_cart_total(cart, callback) {
  var total = 0;
  cost_ajax(cart, function (cost) {
    total += cost;
  });
  shipping_ajax(cart, function (shipping) {
    total += shipping;
    callback(total);
  });
}

// With Cut()

function calc_cart_total(cart, callback) {
  var total = 0;
  done = justOnce(2, () => callback(total));

  cost_ajax(cart, function (cost) {
    total += cost;
    done();
  });

  shipping_ajax(cart, function (shipping) {
    total += shipping;
    done();
  });
}
