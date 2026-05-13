// JavaScript Tasks – Type Casting & Flow Control

//Task 1 – Predict the Output
//Write the output and datatype for below:
console.log("10" + 5) // Output: "105", Datatype: string
console.log(10 + true) // Output: 11, Datatype: number
console.log(false + null) // Output: 0, Datatype: number
console.log("Hello" + undefined) // Output: "Helloundefined", Datatype: string
console.log([1,2] + 5) // Output: "1,25", Datatype: string


//Task 2 – Implicit Type Casting
//Create examples for:
1.String + Number // Example: console.log("The answer is " + 42); // Output: "The answer is 42", Datatype: string
2.Boolean + Number // Example: console.log(true + 1); // Output: 2, Datatype: number
3.Array + String // Example: console.log([1, 2] + " is an array"); // Output: "1,2 is an array", Datatype: string
4.Object + Number // Example: console.log({} + 5); // Output: "[object Object]5", Datatype: string
5.Null + Number // Example: console.log(null + 10); // Output: 10, Datatype: number
Print datatype using typeof.


//Task 3 – Explicit Type Casting
//Convert the following into Number:
"500"   // Example: console.log(Number("500")); // Output: 500, Datatype: number
true    // Example: console.log(Number(true)); // Output: 1, Datatype: number
false   // Example: console.log(Number(false)); // Output: 0, Datatype: number
null    // Example: console.log(Number(null)); // Output: 0, Datatype: number
"abc"   // Example: console.log(Number("abc")); // Output: NaN, Datatype: number
[100]   // Example: console.log(Number([100])); // Output: 100, Datatype: number
Print the outputs.


//Task 4 – Boolean Constructor
//Check whether below values are true or false using Boolean().
""
"javascript"
0
1
null
undefined
[]
{}  // Example: console.log(Boolean("")); // Output: false
    // Example: console.log(Boolean("javascript")); // Output: true
    // Example: console.log(Boolean(0)); // Output: false
    // Example: console.log(Boolean(1)); // Output: true
    // Example: console.log(Boolean(null)); // Output: false
    // Example: console.log(Boolean(undefined)); // Output: false
    // Example: console.log(Boolean([])); // Output: true
    // Example: console.log(Boolean({})); // Output: true


//Task 5 – Student Pass or Fail
//Take one variable:
let mark = 45
Condition:
Above 35 → Pass
Below 35 → Fail
Use if else.

        let mark = 45;
        if (mark > 35) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }   //output: "Pass"


//Task 6 – Voting Eligibility
//Create a variable:
let age = 20
Conditions:
*18 and above → Eligible
*Otherwise → Not Eligible

    let age = 20;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}   //output: "Eligible"


//Task 7 – Greatest Number
//Find greatest among 3 numbers using if else if.
//Example:
let a = 50
let b = 80
let c = 30

if (a > b && a > c) {
    console.log("A is greatest");
} else if (b > a && b > c) {
    console.log("B is greatest");
} else {
    console.log("C is greatest");
}   //output: "B is greatest"


//Task 8 – Traffic Light System
//Using switch statement:
red → stop
yellow → ready
green → go

//let signal = "red";

switch(signal) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}  //output: "Stop" (if signal is "red")


//Task 9 – Login System
//Create variables:
let username = "admin"
let password = "1234"
Conditions:
Both correct → Login Success
Otherwise → Invalid Login
Use nested if.

let username = "admin";
let password = "1234";

if (username === "admin") {

    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Invalid Password");
    }

} else {
    console.log("Invalid Login");
}  //output: "Login Success" (if username is "admin" and password is "1234")


//Task 10 – Session Finder
//Take hour value:
let hour = 14
Conditions:
1–12 → Morning
13–15 → Afternoon
16–19 → Evening
20–24 → Night
Use else if.

let hour = 14;

if (hour >= 1 && hour <= 12) {
    console.log("Morning");
} else if (hour >= 13 && hour <= 15) {
    console.log("Afternoon");
} else if (hour >= 16 && hour <= 19) {
    console.log("Evening");
} else if (hour >= 20 && hour <= 24) {
    console.log("Night");
} else {
    console.log("Invalid Hour");
}   //output: "Afternoon" (if hour is 14)


//Predict outputs without running:
console.log(true + true)    // Output: 2, Datatype: number
console.log("5" - 2)    // Output: 3, Datatype: number
console.log("5" + 2)    // Output: "52", Datatype: string
console.log(null + 1)   // Output: 1, Datatype: number
console.log(undefined + 1)  // Output: NaN, Datatype: number
console.log(Boolean(" "))   // Output: true, Datatype: boolean
console.log(Number(true))   // Output: 1, Datatype: number



            