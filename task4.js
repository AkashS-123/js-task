//Task 1 — Basic Function
//Create a function called welcomeUser.
Requirements:
Accept name
Print:
Welcome Naveen
Example:
welcomeUser("Naveen")   // Output: "Welcome Naveen"
    function welcomeUser(name) {
        console.log(`Welcome ${name}`);
    }
    welcomeUser("Naveen");  // Output: "Welcome Naveen" 


//Task 2 — Parameter + Return
//Create a function squareNumber.
Requirements:
Accept one number
Return square value
Example:
squareNumber(5)
Output:
25      // Example:
    function squareNumber(num) {
        return num * num;
    }
    console.log(squareNumber(5));  // Output: 25    


//Task 3 — Object Function
Create an object:
{
   name : "Rahul",
   salary : 50000
}
Requirements:
Create a function:
employeeBonus(bonus)
Output:
Rahul
55000       // Example:
    let employee = {
        name: "Rahul",
        salary: 50000
    };
    function employeeBonus(bonus) {
        return employee.salary + bonus;
    }
    console.log(employee.name);  // Output: "Rahul"
    console.log(employeeBonus(5000));  // Output: 55000


//Task 4 — Scope Checking
//Inside a function:
Create var
Create let
Create const
Requirements:
Try accessing them outside block
Observe which works and which gives error       // Example: 
    function scopeCheck() {
        var varVariable = "I am a var variable";
        let letVariable = "I am a let variable";
        const constVariable = "I am a const variable";
    }
    scopeCheck();
    console.log(varVariable);  // Output: "I am a var variable"
    console.log(letVariable);  // Error: letVariable is not defined
    console.log(constVariable);  // Error: constVariable is not defined


//Task 5 — Arrow Function
//Convert this into arrow function:
function add(a,b){
   console.log(a+b);
}       // Example:
    const add = (a, b) => {
        console.log(a + b);
    };
    add(10, 20);  // Output: 30 


//Task 6 — Callback Function
//Create:
//multiply
//calculator
//Requirements:
//calculator should accept:
callback function
two numbers
Example:
calculator(multiply,5,2)
Output:
10      // Example: 
    function multiply(x, y) {
        return x * y;
    }
    function calculator(callback, num1, num2) {
        return callback(num1, num2);
    }
    console.log(calculator(multiply, 5, 2));  // Output: 10 


//Task 7 — Generator Function
//Create generator function offers.
Requirements:
Yield:
"50% OFF"
"Free Delivery"
"Cashback"
Use:
next()
to print values one by one.     // Example:
    function* offers() {
        yield "50% OFF";
        yield "Free Delivery";
        yield "Cashback";
    }
    const offerGenerator = offers();
    console.log(offerGenerator.next().value);  // Output: "50% OFF"
    console.log(offerGenerator.next().value);  // Output: "Free Delivery"
    console.log(offerGenerator.next().value);  // Output: "Cashback"
    console.log(offerGenerator.next().value);  // Output: undefined 


//Task 8 — Default Parameter
Create:
student(name,course="JavaScript")
Requirements:
If course not passed,
default should become "JavaScript".     // Example:
    function student(name, course = "JavaScript") {
        console.log(`Name: ${name}, Course: ${course}`);
    }
    student("Rahul");  // Output: "Name: Rahul, Course: JavaScript"
    student("Rahul", "Python");  // Output: "Name: Rahul, Course: Python"


//Task 9 — Currying
Create currying function for multiplication.
Example:
multi(2)(3)(4)
Output:
24      // Example:
    function multi(a) {
        return function(b) {
            return function(c) {
                return a * b * c;
            };
        };
    }
    console.log(multi(2)(3)(4));  // Output: 24 


//Task 10 — Spread Operator
Merge these arrays:
[1,2,3]
[4,5,6]
Final Output:
[1,2,3,4,5,6]       // Example:
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const mergedArray = [...array1, ...array2];
    console.log(mergedArray);  // Output: [1, 2, 3, 4, 5, 6]    


//Task 11 — Object Spread
Merge two objects:
{name:"Navi"}
{role:"Developer"}
Final Output:
{
  name:"Navi",
  role:"Developer"
}       // Example:
    const object1 = { name: "Navi" };
    const object2 = { role: "Developer" };
    const mergedObject = { ...object1, ...object2 };
    console.log(mergedObject);  // Output: { name: "Navi", role: "Developer" }


//Task 12 — Rest Operator
Create function:
numbers(...num)
Requirements:
Print all numbers
Print total sum
Example:
numbers(1,2,3,4)
Output:
[1,2,3,4]
10      // Example:
    function numbers(...num) {
        console.log(num);  // Output: [1, 2, 3, 4]
        const sum = num.reduce((acc, curr) => acc + curr, 0);
        console.log(sum);  // Output: 10
    }
    numbers(1, 2, 3, 4);    


//Mini Challenge 🔥
//Create one small Student Management System using:
function
callback
object
array
spread operator
rest operator
Features:
Add student
Print students
Calculate marks
Add bonus marks  
   // Example:
    const students = [];
    function addStudent(name, marks) {
        students.push({ name, marks });
    }
    function printStudents() {
        console.log(students);
    }
    function calculateTotalMarks() {
        return students.reduce((total, student) => total + student.marks, 0);
    }
    function addBonusMarks(bonus) {
        students.forEach(student => student.marks += bonus);
    }
    addStudent("Rahul", 85);
    addStudent("Navi", 90);
    printStudents();  // Output: [{ name: "Rahul", marks: 85 }, { name: "Navi", marks: 90 }]
    console.log(calculateTotalMarks());  // Output: 175
    addBonusMarks(5);
    printStudents();  // Output: [{ name: "Rahul", marks: 90 }, { name: "Navi", marks: 95 }]
    






