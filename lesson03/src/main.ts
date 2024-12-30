// Typescript infers it's a string[]
let fruitsArray = ["apple", "banana","orange"]
// ok
fruitsArray[3] = "grapes"
// error
// fruitsArray[4] = 88

//Typescript infers it's a (string | number | boolean)[]
let mixedArray = ["John", 34, true]
// adding an element to the beginning of an array
mixedArray.unshift("Wick")


// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding is fun'];

// objects
type  User = {
    id:number,
    firstName: string,
    lastName:string,
    dateOfBirth: Date,
    married?:boolean
}

let user1:User = {
    id:1,
    firstName:"Brandon",
    lastName: "Huang", 
    dateOfBirth: new Date("1988-12-16")
}

console.log(user1)

const getUserInfo = (user: User) => {
    return `${user.firstName} ${user.lastName}`
}

console.log(getUserInfo(user1))

// enums
enum Direction {
    North,    // 0
    East,     // 1
    South,    // 2
    West      // 3
}