/** 
 
-- Write a function that takes in an input, checks that input, 
and returns true or false depending on some feature of the input (what kind of number, what kind of string, what type of data it is) **/
function checkType(input) {
  console.log(typeof input);
}

checkType(9);

/** -- Write a function that takes in an input, does something to it, 
and returns the modified data (do a mathematical operation on it, do a string method to modify it, use an array method to modify an array)**/
function modifyData(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}
modifyData([5, 10, 15, 20, 25]);

// -- Write a function that takes in an array and returns the array modified in some way -- certain elements removed,
// certain elements modified in a regular way (example, every numerical value doubled, every string uppercased)

function arrModified(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].toUpperCase());
  }
}
arrModified(["rodrigo", "marquez"]);

// -- Write a function that accepts an array of objects where each object has at least
// one property with a numeric value, be able to return the total or average of the numeric values
function averageNum(arr) {
  let avg = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i].x;
  }
  avg = sum / arr.length;
  console.log(avg);
}
averageNum([{ x: 2 }, { x: 4 }, { x: 6 }, { x: 8 }]);

/** -- Write a function that accepts a string, breaks down the string into components, 
and returns an object where each component of the string has become the value of a property */

function breakDown() {}

// -- Write a function that analyzes a string, returning the results of the analysis, example, return the length of the string
function lengthStr(str) {
  return str.length;
}
console.log(lengthStr("rodrigo"));

/**  -- Write a function that analyzes a string, returning an object that contains several 
properties with information about the string, example, length, firstLetter, and lastLetter properties */

function detailStr(str) {
  let obj = { length: 0, firstLetter: "", lastLetter: "" };
  obj.length = str.length;
  obj.firstLetter = str.charAt(0);
  obj.lastLetter = str.charAt(str.length - 1);
  return obj;
}
console.log(detailStr("rodrigo"));

/**  -- Write a function that takes in a string and modifies it in some way.  
Example write a function that takes in a string and replaces every instance of the letter e with the number 3, 
and every instance of the letter i with the number 1, and every instance of the letter o with the number 0, and a with 4.  */

function modifyString(str) {
  let mStr = str.split("");
  for (let i = 0; i < mStr.length; i++) {
    if (mStr[i] == "e") {
      mStr[i] = 3;
    } else if (mStr[i] == "i") {
      mStr[i] = 1;
    } else if (mStr[i] == "o") {
      mStr[i] = 0;
    } else if (mStr[i] == "a") {
      mStr[i] = 4;
    }
  }
  console.log(mStr.join(""));
}
modifyString("rodrigo");

/** Write a function that capitalizes every other letter in the string starting with the first letter, counting blank spaces as characters.  
Try the same not counting blank spaces as characters.  Write a function that capitalizes the last letters of every word in a string. */

function capitalizeFirst(str) {
  let mStr = str.split(" ");
  for (i = 0; i < mStr.length; i++) {
    mStr[i] = mStr[i].charAt(0).toUpperCase() + mStr[i].slice(1);
  }
  console.log(mStr.join(" "));
}

capitalizeFirst("my name is rodrigo");

function capitalizeLast(str) {
  let mStr = str.split(" ");
  for (i = 0; i < mStr.length; i++) {
    let len = mStr[i].length;
    let lastChar = mStr[i].charAt(len - 1).toUpperCase();
    mStr[i] = mStr[i].slice(0, len - 1) + lastChar;
  }
  console.log(mStr.join(" "));
}

capitalizeLast("my name is rodrigo");

// /**
//  * Get Sum of People's Budget
//  * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
//  *
//  * Examples
//  *
//  * >> getBudgets([
//  *        { name: "John", age: 21, budget: 23000 },
//  *        { name: "Steve",  age: 32, budget: 40000 },
//  *        { name: "Martin",  age: 16, budget: 2700 }
//  *    ]) ➞ 65700
//  * >> getBudgets([
//  *        { name: "John",  age: 21, budget: 29000 },
//  *        { name: "Steve",  age: 32, budget: 32000 },
//  *        { name: "Martin",  age: 16, budget: 1600 }
//  *    ]) ➞ 62600
//  */

function getBudgets(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i].budget;
  }
  return total;
}
console.log(
  getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
  ])
);

// /**
//  * Get Student Top Notes
//  * Create a function named getStudentTopNotes that takes an array of students and returns an array of their top notes.
//  * If the student does not have notes then let's assume their top note is equal to 0.
//  *
//  * Examples
//  *
//  * >> getStudentTopNotes([
//  *      {
//  *         id: 1,
//  *         name: "Jacek",
//  *         notes: [5, 3, 4, 2, 5, 5]
//  *       },
//  *      {
//  *         id: 2,
//  *         name: "Ewa",
//  *         notes: [2, 3, 3, 3, 2, 5]
//  *       },
//  *      {
//  *         id: 3,
//  *         name: "Zygmunt",
//  *         notes: [2, 2, 4, 4, 3, 3]
//  *       }
//  *    ]) ➞ [5, 5, 4]
//  */
function getStudentTopNotes(arr) {
  let topNotes = [];
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (let j = 0; j < arr[i].notes.length; j++) {
      if (arr[i].notes[j] < max) continue;
      if (arr[i].notes[j] > max) {
        max = arr[i].notes[j];
      }
    }
    topNotes.push(max);
  }
  return topNotes;
}
console.log(
  getStudentTopNotes([
    {
      id: 1,
      name: "Jacek",
      notes: [5, 3, 4, 2, 5, 5],
    },
    {
      id: 2,
      name: "Ewa",
      notes: [2, 3, 3, 3, 2, 5],
    },
    {
      id: 3,
      name: "Zygmunt",
      notes: [2, 2, 4, 4, 3, 3],
    },
  ])
);

// /**
//  * TODO:
//  * Remove the Letters ABC
//  * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version.
// If the given string does not contain "a", "b", or "c", return null.
//  *
//  * Examples
//  * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
//  * >> removeABC("hello world!") ➞ null
//  * >> removeABC("") ➞ null
//  *
//  * Notes
//  * If the given string does not contain "a", "b", or "c", return null.
//  */
function removeABC(str) {
  let mStr = str.split(" ");
  for (let i = 0; i < mStr.length; i++) {
    if (mStr[i].includes("a")) {
    }
    mStr[i] =
      mStr[i].replace("a", "") ||
      mStr[i].replace("b", "") ||
      mStr[i].replace("c", "");
  }
  return mStr.join(" ");
}
console.log(removeABC("This might be a bit hard"));

// /**
//  Write a function called removeBs that takes in an array of strings and returns an array of strings with all b's removed from each string. Assume the array contains only string elements.

// Examples...

// removeBs(['abc', 'ab', 'cat', 'Bay']) // returns ['ac', 'a', 'cat', 'ay']
function removeBs(arr) {
  let mArr = [];
  for (let i = 0; i < arr.length; i++) {
    mArr.push(arr[i].toLowerCase().replace("b", ""));
  }
  return mArr;
}
console.log(removeBs(["abc", "ab", "cat", "Bay"]));

//  Write a function that accepts the top three bowling scores and returns the average.
//  1. write a function
//  2. pass in parameters
//  3. 3 scores ( variables)
//  4. return something (number)
let first = 120;
let second = 234;
let third = 90;

function avScores(first, second, third) {
  return (first + second + third) / 3;
}
console.log(avScores(first, second, third));

// Modify the function to accept an array of bowling scores and return the average
let bowlingArr = [120, 234, 90];
function bowlingAv(arr) {
  let av = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}
console.log(bowlingAv(bowlingArr));

// Write a function that accepts an array of bowling scores and returns the highest
let bowlingScores = [120, 234, 90];
function bowlingHighest(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < max) continue;
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(bowlingHighest(bowlingScores));

// Write a function that accepts an array of bowling scores and returns true if the highest score is divisible by 3 **/
let divisibleByThree = [120, 234, 90];
function highestDivisible(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < max) continue;
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  if (max % 3 == 0) {
    return true;
  } else return false;
}
console.log(highestDivisible(divisibleByThree));
