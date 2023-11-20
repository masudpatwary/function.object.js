var mobile = {
  brand: "samsung",
  price: 43000,
  color: "black",
  storeg: "128 gb",
  ram: "8gb",
  status: "official",
};

// var phone = Object.keys(mobile);
// console.log(phone);

// var phone = Object.values(mobile);
// console.log(phone);

// for (var i = 0; i < phone.length; i++) {
//   var popertyName = phone[i];
//   var popertyValue = phone[popertyName];
//   console.log(popertyName, popertyValue);
// }

// for (var popertyName in mobile) {
//   var value = mobile[popertyName];
//   console.log(popertyName, value);
// }

for (var popertyName in mobile) {
  var value = mobile[popertyName];
  console.log(popertyName, value);
}
