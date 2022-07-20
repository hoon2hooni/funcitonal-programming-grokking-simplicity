/// It's your turn

function shoesAndSocksInventory(products) {
  var inventory = 0;
  for (var p = 0; p < products.length; p++) {
    var product = products[p];
    if (product.type === "shoes" || product.type === "socks") {
      inventory += product.numberInInventory;
    }
  }
  return inventory;
}

function shoesAndSocksInventory(products) {
  const shoesAndSocks = filter(
    products,
    (product) => product.type === "shoes" || product.type === "socks"
  );
  const inventories = map(
    shoesAndSocks,
    (shoesAndSocks) => shoesAndSocks.inventory
  );
  return reduce(inventories, 0, plus);
}
