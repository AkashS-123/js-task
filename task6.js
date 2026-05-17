// 1. Student Attendance System
// Create two arrays:
// presentStudents
// absentStudents
// Merge both arrays using spread operator
// Add one new student at last
// Print final array
        //code:
let presentStudents = ["navin", "karthik", "giri"];
let absentStudents = ["gokul", "swetha", "varsha"];

let allStudents = [...presentStudents, ...absentStudents];

allStudents.push("Grace");

console.log(allStudents);
//------------------------------------------------------------------------------------------------------------------------------

// 2. E-Commerce Cart
// Create object for mobile details
// Create another object for charger details
// Merge both objects using spread operator
// Add deliveryDate property
// Print final object
        //code:
let mobileDetails = {
    brand: "Google",
    model: "Pixel 8 Pro",
    price: 79999
};

let chargerDetails = {
    type: "Fast Charger",
    compatibility: "Universal"
};

let cartDetails = { ...mobileDetails, ...chargerDetails };

cartDetails.deliveryDate = "2025-07-01";

console.log(cartDetails);
//------------------------------------------------------------------------------------------------------------------------------

// 3. Food Delivery App
// Create function named orderFood()
// Accept multiple food items using rest operator
// Print:
// Total items ordered
// First item
// Last item
        //code:
function orderFood(...foodItems) {
    console.log(`Total items ordered: ${foodItems.length}`);
    console.log(`First item: ${foodItems[0]}`);
    console.log(`Last item: ${foodItems[foodItems.length - 1]}`);
}

orderFood("Dosa", "Briyani", "Idly", "Parotta");
//------------------------------------------------------------------------------------------------------------------------------

// 4. Employee Salary Filter
// Create array of employee objects
// Filter employees whose salary is above 50000
// Print filtered employees
        //code:
let employees = [
    { name: "Swetha", salary: 60000 },
    { name: "Shalu", salary: 45000 },
    { name: "Udaya", salary: 55000 },
    { name: "Siva", salary: 40000 }
];

let highSalaryEmployees = employees.filter(employee => employee.salary > 50000);

console.log(highSalaryEmployees);
//------------------------------------------------------------------------------------------------------------------------------

// 5. Online Game Score Board
// Create array of scores
// Use reduce()
// Find total score of all players
// Print final total
        //code:
let scores = [150, 200, 250, 300];

let totalScore = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`Total score of all players: ${totalScore}`);
//------------------------------------------------------------------------------------------------------------------------------
