// Use of 'any' which can lead to type errors
let name: any = "Juan";
let age: any = "30"; // Error: Age should be a number, not a string
let isStudent: boolean = true;

// Function that takes two numbers and returns their sum
function add(a: any, b: any): any { // Use of 'any' in parameters and return type
    return a + b; // This can cause string concatenation instead of addition
}

// Using the function with mixed types
let result: any = add(10, "20"); // Error: Mixing types can cause errors

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Is student: ${isStudent}`);
console.log(`Sum result: ${result}`);

// Class with incorrect type usage
class User {
    constructor(public name: string, public age: any) { // Use of 'any'
        if (typeof age !== 'number') {
            throw new Error("Age must be a number");
        }
    }
}

let user = new User("Ana", "25"); // Error: Age should be a number, not a string
console.log(`User: ${user.name}, Age: ${user.age}`);
