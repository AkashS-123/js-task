//Task 1 — Student Registration Form
//Create a program using:
// prompt()
// variables (let, const)
// console.log()
// Requirements:
// Ask student name
// Ask department
// Ask age
// Print all details using template string
   
            //Code:
let studentName = prompt("Enter your name:");
let department = prompt("Enter your department:");
let age = prompt("Please enter your age:");

console.log(`Welcome ${studentName}`);
console.log(`Department: ${department}`);
console.log(`Age: ${age}`);
// --------------------------------------------------------------------------------------------------------------------------------------

//Task 2 — ATM Withdrawal System
// Use:
// if else
// comparison operators
// logical operators
// Requirements:
// User balance = 10000
// Ask withdrawal amount
// If amount <= balance → "Transaction Successful"
// Else → "Insufficient Balance"
// Bonus:
// Minimum withdrawal = 100

            //Code:
let balance = 10000;
let withdrawalAmount = prompt("Enter the amount you want to withdraw:");

if (withdrawalAmount >= 100 && withdrawalAmount <= balance) {
    console.log("Transaction Successful");
} else if (withdrawalAmount < 100) {
    console.log("Minimum withdrawal amount is 100");
} else {
    console.log("Insufficient Balance");
}
// --------------------------------------------------------------------------------------------------------------------------------------

// Task 3 — Swiggy Discount Checker
// Use:
// ternary operator
// Requirements:
// If order amount > 499
// Show:
// "Free Delivery Available"
// Else:
// "Delivery Charges Applied"
            //Code:
let orderAmount = prompt("Enter your order amount:");

let discountMessage = orderAmount > 499 ? "Free Delivery Available" : "Delivery Charges Applied";
console.log(discountMessage);
// --------------------------------------------------------------------------------------------------------------------------------------

// Task 4 — Instagram Login System
// Use:
// nested if
// Requirements:
// Correct username = "admin"
// Correct password = "1234"
// Conditions:
// If username correct → ask password
// If password correct → Login Success
// Else → Wrong Password
// Else → Invalid Username
            //Code:
let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

if (username === "admin") {
    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    }
} else {
    console.log("Invalid Username");
}
// --------------------------------------------------------------------------------------------------------------------------------------

// Task 5 — Traffic Signal System
// Use:
// switch statement
// Requirements:
// Input:
// red / yellow / green
// Output:
// STOP
// READY
// GO
            //Code:
let signalColor = prompt("Enter the traffic signal color (red, yellow, green):").toLowerCase();

switch (signalColor) {
    case "red":
        console.log("STOP");
        break;
    case "yellow":
        console.log("READY");
        break;
    case "green":
        console.log("GO");
        break;
    default:
        console.log("Invalid signal color");
}
// --------------------------------------------------------------------------------------------------------------------------------------

// Task 6 — Employee Salary Calculator
// Use:
// function
// parameters
// return
// Requirements:
// Create function salaryCalculation
// Basic salary + bonus
// Return total salary
// Example:
// salaryCalculation(25000,5000)
// Output:
// 30000
        // Code:
function salaryCalculation(basicSalary, bonus) {
    return basicSalary + bonus;
}

let totalSalary = salaryCalculation(25000, 5000);
console.log(totalSalary); // Output: 30000
// --------------------------------------------------------------------------------------------------------------------------------------

// Task 7 — E-Commerce Cart Total
// Use:
// Array
// for loop
// Requirements:
// Store product prices inside array:
// [100,200,300,400]
// Find:
// Total price
// Average price
        // Code:
let productPrices = [100, 200, 300, 400];
let totalPrice = 0;

for (let i = 0; i < productPrices.length; i++) {
    totalPrice += productPrices[i];
}

let averagePrice = totalPrice / productPrices.length;

console.log("Total Price: " + totalPrice);
console.log("Average Price: " + averagePrice);
// --------------------------------------------------------------------------------------------------------------------------------------

// Task 8 — WhatsApp Contact Book
// Use:
// Object
// for in loop
// Requirements:
// Store:
// name
// phone
// status
// Print all details dynamically.
        // Code:
let contact = {
    name: "John Doe",
    phone: "+1234567890",
    status: "Online"
};

for (let key in contact) {
    console.log(`${key}: ${contact[key]}`);
}
// --------------------------------------------------------------------------------------------------------------------------------------

// Task 9 — Movie Ticket Booking
// Use:
// function
// callback function
// Requirements:
// Create:
// bookTicket()
// payment()
// After booking complete,
// callback payment function automatically.
        // Code:
function bookTicket(movieName, callback) {
    console.log(`Booking ticket for ${movieName}...`);
    // Simulate booking process
    setTimeout(() => {
        console.log("Ticket booked successfully!");
        callback();
    }, 2000);
}

function payment() {
    console.log("Processing payment...");
    // Simulate payment process
    setTimeout(() => {
        console.log("Payment successful!");
    }, 2000);
}

// Example usage:
bookTicket("Inception", payment);
// --------------------------------------------------------------------------------------------------------------------------------------

// Task 10 — Food Delivery Time Tracker
// Use:
// Generator Function
// Requirements:
// Show order stages one by one:
// Order Confirmed
// Preparing Food
// Out for Delivery
// Delivered   
        // Code:
function* orderTracker() {
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}

const tracker = orderTracker();

console.log(tracker.next().value); // Order Confirmed
console.log(tracker.next().value); // Preparing Food
console.log(tracker.next().value); // Out for Delivery
console.log(tracker.next().value); // Delivered
// --------------------------------------------------------------------------------------------------------------------------------------