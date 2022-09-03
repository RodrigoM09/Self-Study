let arr = [5,10,15,20,25]

//WHILE LOOP!! ///////////////////

// let i = 0;
// while(i < arr.length){
//     console.log(arr[i]);
//     i++;
// };

// DO WHILE LOOP!! //////////////

// let i = 0;
// do {
//     console.log(arr[i]);
//     i++;
// } while (i < arr.length);



// FOR LOOP!! ///////////////////

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// FOR IN LOOP /////////////////////

// for (let i in arr){
//     console.log(arr[i]);
// }

// FOR OF LOOP /////////////////////

// for (let i of arr) {
//     console.log(i)
// }

// FOR EACH ///////////////////////

// arr.forEach((val) => {console.log(val)});

let it = arr[Symbol.iterator]();
console.log(it.next());