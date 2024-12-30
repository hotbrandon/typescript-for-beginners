"use strict";
// Typescript infers it's a string[]
let fruitsArray = ["apple", "banana", "orange"];
// ok
fruitsArray[3] = "grapes";
// error
// fruitsArray[4] = 88
//Typescript infers it's a (string | number | boolean)[]
let mixedArray = ["John", 34, true];
// adding an element to the beginning of an array
mixedArray.unshift("Wick");
// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
let ourTuple;
ourTuple = [5, false, 'Coding is fun'];
let user1 = {
    id: 1,
    firstName: "Brandon",
    lastName: "Huang",
    dateOfBirth: new Date("1988-12-16")
};
console.log(user1);
const getUserInfo = (user) => {
    return `${user.firstName} ${user.lastName}`;
};
console.log(getUserInfo(user1));
// enums
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West"; // 3
})(Direction || (Direction = {}));
