const person = {
    firstname: "Rigo",
    lastname:"Desmond",
    age: 20,
    tel:"32453454"
}

// for in loop for objects
// for(let i in person){
//     console.log(i + "->"+ person[i])
// }

// dot notation e.g person.name
// bracket notation e.g person[name]

// for(let i in person){
//     if(i == "age"){
//         person[i] = person.age + 5
//     }
// }
// delete person.firstname
// console.log(person)

// write a js program to get the length of an object
// let leng = 0;
// for(let i in person){
//     leng++;
// }
// console.log(leng)

console.log(Object.values(person).length)
