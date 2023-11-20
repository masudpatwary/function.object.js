function egg(cashTaka) {
  var eggPrice = 10;
  var quantity = cashTaka / eggPrice;
  return quantity;
}

var eggs = egg(500);
console.log(eggs);

function apple(cashTaka){
  var applePrice = 30;
  var quantity = cashTaka / applePrice;
  return quantity;
}

var totalApple = apple(200);
console.log(totalApple);

function banana(budget) {
  var bananaPrice = 8;
  var quantity = budget / bananaPrice;
  return quantity;
}

var bananas = banana(500);
console.log(bananas);

function watch(cash) {
  var watchPrice = 1280;
  var quantity = cash / watchPrice;
  return quantity;
}

var totalWatch = watch(32500);
console.log(totalWatch);

