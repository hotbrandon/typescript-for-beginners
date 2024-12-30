const add = (a:number, b:number):number => {
    return a + b;
}

const subtract = function(a:number, b:number):number {
    return a - b;
}

console.log(add(3,4))
console.log(subtract(9,6))

// optional parameters must be the last on the list
const multiply = (a:number, b:number, c?:number):number => {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

// parameters with default values
const divide = (a:number=10, b:number, c:number = 1):number => {
    return a / b / c;
}
console.log(divide(undefined, 10, 2))

// rest paramaters
const addAll = (...numbers:number[]):number => {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;

    // or use reduce
    // return numbers.reduce((prev, curr) => prev + curr);
    
}

// calling addAll
console.log(addAll(1,2,3,4,5,6,7,8,9,10))
// use of the never type
// TypeScript checks all possible code paths to ensure that the function either:
// Returns a string, or
// Ends execution in a way that makes returning unnecessary (such as throwing an error).
const numberOrString = (input: any): string => {
    if (typeof input === 'string') {
        return 'string';
   
    } else if (typeof input === 'number') {
        return 'number';
    } 
    throw new Error("Invalid input");
}