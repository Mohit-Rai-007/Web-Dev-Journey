// Variables are containers for storing data values.
// In JavaScript, you can declare variables using var, let, or const.

// Using 'let' to declare a variable (preferred for most cases)
let name = "Alice"; // 'name' stores the string "Alice"

// Using 'var' (older way, avoid if possible)
var age = 25; // 'age' stores the number 25

// Using 'const' for values that should not change
const PI = 3.14159; // 'PI' stores the value of pi and cannot be changed

// You can change the value of variables declared with 'let' or 'var'
name = "Bob"; // Now 'name' stores "Bob"
age = 30;     // Now 'age' stores 30

// But you cannot change a 'const' variable
// PI = 3.14; // This will cause an error

// Variables can store different types of data
let isStudent = true;      // Boolean
let score = 99.5;          // Number (can be integer or float)
let city = "New York";     // String
let colors = ["red", "blue", "green"]; // Array
let person = { firstName: "John", lastName: "Doe" }; // Object

// Output variables to the console
console.log(name);    // Bob
console.log(age);     // 30
console.log(PI);      // 3.14159
console.log(isStudent); // true
console.log(colors);    // ["red", "blue", "green"]
console.log(person);    // { firstName: "John", lastName: "Doe" }