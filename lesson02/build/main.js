"use strict";
// Typescript can infer that myName si of type string
let myName = "Brandon";
// Type 'number' is not assignable to type 'string'.ts(2322)
// myName = 42
// declare a string variable without initializing it.
let jobTitle;
jobTitle = "Developer";
let age = 42;
let isMarried = false;
// union type
let isActive;
let text = "This jacket costs 99.99";
let regex = /\d+\.*\d+/;
let match = regex.test(text);
if (match) {
    console.log("price pattern found");
}
else {
    console.log("price pattern not found");
}
