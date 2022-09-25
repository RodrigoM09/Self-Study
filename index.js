let arr = [21, 2, 11, 12, 13, 14, 15];

// for (let i = 0; i < arr.length; i++) {
//   //displays each item in the array
// //   console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

for (let i = 0; i < arr.length; i++) {
  // will display items equal to or greater than 13.
  if (arr[i] >= 13) {
    // console.log(arr[i]);
  }
}

for (let i = 0; i < arr.length; i++) {
  //skips value given in if statement
  if (arr[i] == 13) continue;
  //   console.log(arr[i]);
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] == 13) break;
}

//push will add to the back of the array
console.log(arr.push(100));
console.log(arr);

//will take item off the back of the array
arr.pop();
console.log(arr);

arr.splice(2, 0, 200);
// (first is position, second is delete, third is data added)
console.log(arr);

arr.splice(2, 1);
// (first is position, second is data to be deleted)
console.log(arr);

arr.unshift(21);
//adds to begining of array
console.log(arr);

arr.shift();
//removes data from begining of array
console.log(arr);

arr.sort((a, b) => a - b);
// will sort array in assending order
console.log(arr);

arr.sort((a, b) => b - a);
// will sort array in decending order
console.log(arr);

let newArr = [5, 11, 19, 1, 14];
let a = 10;
let b = 20;
let c = a;
a = b;
b = c;
console.log(a, b, c);

// sorts array in assending order
for (let i = 1; i < newArr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (newArr[i] < newArr[j]) {
      let r = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = r;
    }
  }
}
console.log(newArr);

let newObj = [
  { X: 10, Y: "Rodrigo" },
  { X: 21, Y: "Marquez" },
];
console.log(newObj[1].Y);

let arrTwo = { X: [1, 2, 3, 4, 5], Y: [6, 7, 8, 9, 10] };
console.log(arrTwo.Y);

arrTwo.Z = "Rodrigo";
console.log(arrTwo);
console.log(arrTwo["Y"]);
delete arrTwo["Y"];
console.log(arrTwo);

let objTwo = { Z: { X: "rodrigo", Y: "marquez" } };
console.log(objTwo.Z.Y);

let objThree = { X: 10, Y: "Rodrigo" };
let anyName = Object.entries(objThree);
// converts object data to array
let [key, value] = Object.entries(objThree);
console.log(anyName);
console.log(key, value);
for (let i = 0; i < anyName.length; i++) {
  for (let j = 0; j < anyName[i].length; j++) {
    if (anyName[i][j] == "Y") {
      console.log(anyName[i][j + 1]);
    }
  }
}

let x = 2;
// if (x == 1) {
//   console.log("x = 1", x);
// } else if (x == 2) {
//   console.log("x = 2", x);
// } else {
//   console.log("else", x);
// }

switch (x) {
  case 1:
    console.log("x = 1", x);
    break;

  case 2:
    console.log("x = 2", x);
    break;

  default:
    console.log("else", x);
    break;
}

// simple function to be written as arrow
// function name() {
//   console.log("rodrigo");
// }
// name();
// //Arrow Function
// const firstName = () => console.log("marquez");
// firstName();

//Javascript Hoisting
z = 1;
console.log(z);
var z;

// .map acts like loop, when we need to modify array
let anyArray = [1, 2, 3, 4, 5];
anyArray.map((item, index) => console.log(item * 2, index));

// typeof
console.log(typeof z);

//callback function passing through function
function lastName(lm) {
  console.log(lm);
}
function firstName(fm, lm, testCallback) {
  testCallback(lm);
  console.log(fm);
}
// firstName("rodrigo", "marquez", lastName);

// setInterval(() => lastName("rigo"), 3000);

let newPromise = new Promise(function (resolve, reject) {
  let i = false;
  if (i) {
    resolve("ok");
  } else reject("error");
});
newPromise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);
