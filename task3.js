//Looping Statements
1. Print Numbers
Print numbers from 1 to 20 using a for loop.    // Example:
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }   // Output: 1, 2, 3, ..., 20


//2. Odd Numbers
Print all odd numbers from 1 to 50. // Example:
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }   // Output: 1, 3, 5, ..., 49


//3. Multiplication Table
Print the multiplication table of 7.
Example:
7 x 1 = 7
7 x 2 = 14  // Example:
    let number = 7;
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }   // Output:
        // 7 x 1 = 7
        // 7 x 2 = 14
        // ...
        // 7 x 10 = 70


//4. Reverse Counting
Using while loop, print numbers from 20 to 1.   // Example:
    let count = 20;
    while (count >= 1) {
        console.log(count);
        count--;
    }   // Output: 20, 19, 18, ..., 1   


//5. Sum of Numbers
Find the total sum of numbers from 1 to 100.    // Example:
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);   // Output: 5050


//6. Array Loop
Loop through this array and print all values.
let fruits = ["apple","banana","orange","grapes"]   // Example:
    let fruits = ["apple", "banana", "orange", "grapes"];
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }   // Output: apple, banana, orange, grapes


//7. Count Even Numbers
Count how many even numbers are present between 1 to 50.    // Example:
    let evenCount = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            evenCount++;
        }
    }
    console.log(evenCount);   // Output: 25 


//8. Star Pattern
Print this pattern using loops:
*
**
***
****
*****   // Example:
    let rows = 5;
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }   // Output:
        // *
        // **
        // ***
        // ****
        // *****



//Functions
//9. Simple Function
Create a function named welcome() that prints:
Welcome to JavaScript   // Example:
    function welcome() {
        console.log("Welcome to JavaScript");
    }
    welcome();  // Output: "Welcome to JavaScript"


//10. Function with Parameter
Create a function that accepts a name and prints:
Hello Naveen    // Example:
    function greet(name) {
        console.log(`Hello ${name}`);
    }
    greet("Naveen");  // Output: "Hello Naveen"


//11. Add Two Numbers
Create a function that takes 2 numbers and returns the addition.
Example:
add(10,20)
Output:
30  // Example:
    function add(num1, num2) {
        return num1 + num2;
    }
    console.log(add(10, 20));  // Output: 30


12. Salary Bonus
Create a function that adds bonus to employee salary.
Example:
salary = 50000
bonus = 5000
Output:
55000   // Example:
    function calculateSalaryWithBonus(salary, bonus) {
        return salary + bonus;
    }
    let salary = 50000;
    let bonus = 5000;
    console.log(calculateSalaryWithBonus(salary, bonus));  // Output: 55000


//13. Object Loop
Print all keys and values using for in.
let student = {
    name : "Rahul",
    course : "JavaScript",
    marks : 95
}       // Example:
    let student = {
        name: "Rahul",
        course: "JavaScript",
        marks: 95
    };
    for (let key in student) {
        console.log(`${key}: ${student[key]}`);
    }   // Output:
        // name: Rahul
        // course: JavaScript
        // marks: 95


//14. Find Largest Number
Create a function to find the largest number between two values.
Example:
largest(10,50)
Output:
50      // Example:
    function largest(num1, num2) {
        return num1 > num2 ? num1 : num2;
    }
    console.log(largest(10, 50));  // Output: 50


//15. Mini Employee Task
Create an employee object and print:
Employee Name
Department
Salary
Salary after bonus
Using:
object
function
parameter
console.log()       // Example:
    let employee = {
        name: "John Doe",
        department: "Engineering",
        salary: 60000
    };
