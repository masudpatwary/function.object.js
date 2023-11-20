// task 1

function foo() {
//   console.log("foo");
  bar();
}
foo();

function bar() {
//   console.log("bar");
}

// task number 2

function makeAvg(number1, number2, number3) {
  var numbers = number1 + number2 + number3;
  var avg = numbers / 3;
  return avg;
}

// console.log(numbers);

var avgMark = makeAvg(25, 35, 80);
// console.log(avgMark);

// solv

function avgArr(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  const avg = total / arr.length;
  return avg;
}

const numArr = [10, 41, 6, 5, 56, 5, 55, 24];
const result = avgArr(numArr);
// console.log(result);

// task 3

function oddEven(number) {
  let masud = "";
  if (number % 2 == 0) {
    masud = "This is number is Even";
  } else {
    masud = "This is number is Odd";
  }
  return masud;
}

// var result = oddEven(52);
// console.log(result);

// task 5

function signal(color) {
  var notice = "";
  if (color == "red") {
    notice = "if you are try to cross the road, you maybee danger";
  } else if (color == "yellow") {
    notice = "you should be stop";
  } else if (color == "green") {
    notice = "you should cross the road";
  }
  return notice;
}

// var result = signal("yellow");
// console.log(result);




function animalsCounts(count) {
  var animal1 = count;
  var animal2 = count * 2;
  var animal3 = animal1 + animal2;
  var totalCount = animal1 + animal2 + animal3;
  return totalCount;
}
var totalAnimals = animalsCounts(2);
// console.log(totalAnimals);
