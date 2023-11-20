function itComputer(price) {
  var pcPrice = 50000;
  var ipsPrice = 25000;
  var othersPrice = 38000;
  var totalPrice = pcPrice + ipsPrice + othersPrice;
  return totalPrice;
}
var fullPrices = itComputer(5);
var allPrice = fullPrices + 120000;
var finalPrice = allPrice / 5;

console.log(finalPrice);
