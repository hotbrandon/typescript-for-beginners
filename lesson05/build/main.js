"use strict";
let a = "Hello";
let b = a;
// another way to cast type
// but this syntax cannot be used in JSX/TSX
let c = 'world';
const addOrConcat = (a, b, op) => {
    if (op === 'add')
        return a + b;
    return '' + a + b;
};
// we know 'concat' will always return a string
let newString = addOrConcat(2, 3, 'concat');
const img = document.querySelector('img');
img.src = "http://localhost/images/1.jpg";
// or use non-null assertion
const img1 = document.querySelector('img');
const logo = document.getElementById('logo');
logo.src = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
