function setTaxDom(total: number) {}
let shoppingCartTotal = 100000;

function updateTaxDom() {
  setTaxDom(calcTax(shoppingCartTotal));
}
function calcTax(amount: number) {
  return amount * 0.1;
}
