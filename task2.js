// function bagan(bagan1) {
//   //   const total = num + num * 2 + num + num * 2;
//   const pat = bagan1;
//   const pat1 = pat * 2;
//   const pat2 = pat1 + pat1;
//   const total = pat2 + pat + pat;
//   return total;
// }

// const total = bagan(2);
// console.log(total);

function abareg(bara) {
  let total = 0;

  for (let index = 0; index < bara.length; index++) {
    total = total +  bara[index];
  }
  const avr = total / bara.length;
  return avr;
}

const total = abareg([7, 5]);
console.log(total);
