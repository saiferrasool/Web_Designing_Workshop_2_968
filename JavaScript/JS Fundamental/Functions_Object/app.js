// array data type
let numbers = [1,2,3,4,5];
console.log(numbers[0]);     // 1
console.log(numbers[1]);     // 2
console.log(numbers[2]);     // 3
console.log(numbers[3]);     // 4

// array with multiple data types
let mixedArray = [1, "Hello", true, {name : "Alice"}, [1,2,3]];
console.log(mixedArray[0]);      // 1
console.log(mixedArray[1]);      // Hello
console.log(mixedArray[2]);      // true
console.log(mixedArray[3]);      // name: "Alice"
console.log(mixedArray[4]);      // [1,2,3]

// to find the length of array
console.log(numbers.length);     // 5

// normal function with no parameters
function greet() {
    console.log("Hello, World!");
}
greet();            // Hello, World!


// normal function
function multiply(a,b) {
    return a * b;
};
console.log(multiply(10,2));    // 20

// function expression
let divide = function(a,b) {
    return a / b;
};
console.log(divide(10,2));     // 5

// normal function with expression
let add = function(a,b) {
    return a + b;
};
console.log(add(5,7));         // 12

// arrow function with no parameters
let sayHi = () => console.log("Hi!");
sayHi();        // Hi!

// arrow function with single parameters
let square = x => x * x;
console.log(square(4));        // 16

// arrow function with one parameters
const greetUser = (name) => {
    console.log(`Hello, $(name)!`);
}
greetUser("Alice");     // Hello, Alice!

// arrow function
// const add = (a,b) 

// Map on array
// map creates a new array for applying a function to each element of the original array
let newarray = [1,2,3,4,5];
let squaredArray = newarray.
map((num) => num * num);
console.log(squaredArray);         // [1,4,9,16,25]

// .map() is an array method
// It loops through each element
// Applies a function to each element
// Returns a new array
let newArray = [1,2,3,4,5];
let SquaredArray = newArray.map((num) => num * 5);
console.log(SquaredArray);       // [5,10,15,20,25]

// Filter on array
// filter creates a new array with all elements that pass the test implemented by the provided function
let evenNumbers = [1,2,3,4,5];
let filteredEvenNumbers = evenNumbers.filter(num => num % 2 === 0);
console.log(filteredEvenNumbers);         // [2,4]


// reduce an array
let sum = [1,2,3,4,5];
let total = sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);       // 15

// map reduce filter on object student marks
let students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 }
];

// map to get marks of all students
let marks = students.map(student => student.marks);
console.log(marks);          // [85,92,78]
// map to get names of all students
let names = students.map(student => student.name);
console.log(names);         // ["Alice", "Bob", "Charlie"]
// filter to get students with marks greater than 80
let topStudents = students.filter(student => student.marks > 80);
console.log(topStudents);       // [ { name: 'Alice', marks: 85 }, { name: 'Bob', marks: 92 } ]
// reduce to get total marks of all students
let totalMarks = students.reduce((acc,student) => acc + student.marks, 0);
console.log(totalMarks);        // 255