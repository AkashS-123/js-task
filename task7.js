// 1. API Task - User Names Uppercase

// API:
// https://jsonplaceholder.typicode.com/users

// Fetch all users.

// Use map()
// Convert all usernames to UPPERCASE.

// Print new array.
        //code :
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const uppercaseUsernames = users.map(user => user.username.toUpperCase());
    console.log(uppercaseUsernames);
  })
  .catch(error => console.error('Error fetching users:', error));
//------------------------------------------------------------------------------------------------------------------------

// 2. API Task - Expensive Products

// API:
// https://fakestoreapi.com/products

// Fetch products.

// Use filter()
// Print products price greater than 100.
        //code :
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    const expensiveProducts = products.filter(product => product.price > 100);
    console.log(expensiveProducts);
  })
  .catch(error => console.error('Error fetching products:', error)); 
  //------------------------------------------------------------------------------------------------------------------------
  
  // 3. Date Concept Task - Digital Clock

// Create one Date object.

// Print:
// current hours
// current minutes
// current seconds

// Output Example:
// 10 : 45 : 30
        //code :
const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log(`${hours} : ${minutes} : ${seconds}`);
//------------------------------------------------------------------------------------------------------------------------

// 4. String Concept Task - Username Checker

// Create one string:
// "   Naveen Kumar   "

// Remove spaces using trim().

// Convert into uppercase.

// Check string includes "KUMAR".

// Print final output.
        //code :
let username = "   Naveen Kumar   ";
username = username.trim();
username = username.toUpperCase();

if (username.includes("KUMAR")) {
  console.log("The username includes 'KUMAR'.");
} else {
  console.log("The username does not include 'KUMAR'.");
}   
//------------------------------------------------------------------------------------------------------------------------

// 5. Array Concept Task - Student Rank System

// Create one array:
// [450, 300, 700, 200, 900]

// Sort marks high to low.

// Print top 3 marks only using slice().
        //code :
const marks = [450, 300, 700, 200, 900];
marks.sort((a, b) => b - a); // Sort in descending order
const top3Marks = marks.slice(0, 3); // Get top 3 marks
console.log(top3Marks);
//------------------------------------------------------------------------------------------------------------------------
 
 