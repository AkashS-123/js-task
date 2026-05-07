// Section 1: Variables (1–8)

//1.What is the output?
var a = 10;
a = 15;
console.log(a);  //ans=15

//2.What happens here?
let b = 20;
//let b = 30; //ans= b is already declared

//3.What is the output?
const c = 50;
console.log(c); //ans=50

//4.Identify error:
const x = 10;
x = 20; //ans=Constant variable.

//5.Output?
var p = 5;
var p = 10;
console.log(p); //ans=10

//6.Output?
let q = 25;
q = q + 10;
console.log(q); //ans=35

//7.Output?
const r = 7;
console.log(r + 3); //ans=10

//8.Fill correct keyword:
//___ a = 10; //ans=var 


//Section 2: Console Methods (9–12)
//9. Which method prints normal output?   //ans=console.log()
//10. Which method shows warning?   //ans=console.warn()
//11. Which method shows error?   //ans=console.error()
//12. What does this do?   //ans=clears the console.
//console.clear();

//Section 3: Data Types (13–18)

//13. Output?
let a = "hello";
console.log(typeof a); //ans=string

//14. Output?
let b = 100;
console.log(typeof b); //ans=number

//15. Output?
let c = false;
console.log(typeof c); //ans=boolean

//16. Output?
let d;
console.log(d); //ans=undefined

//17. What is type of null? //ans=object
//18. Convert string to number: //ans=Number("25")
"25"

//Section 4: Arrays (19–24)

//19.Create array of 3 fruits. //ans=let fruits = ["lime", "mango", "cherry"];

//20 Output?
let arr = ["a","b","c"];
console.log(arr[1]); //ans=b

//21 Output?
let arr = ["x","y","z"];
console.log(arr[arr.length-1]);  //ans=z

//22 How to get first element?  //ans=arr[0]

//23 Output?
let arr = ["apple","banana"];
console.log(arr.length);  //ans=2

//24 Add new element to array. //ans=arr.push("orange");


//Section 5: Objects (25–28)

//25. Create object with name & age.  //ans=let person = {name: "Naveen", age: 30};

//26. Output?
let obj = {name:"Naveen"};
console.log(obj.name);  //ans=Naveen

//27. Output?
let obj = {
  fruits: ["apple","banana"]
};
console.log(obj.fruits[1]);  //ans=banana

//28. How to access last element inside object array?  //ans=obj.fruits[obj.fruits.length-1]


//Section 6: Arithmetic Operators (29–32)

//29. Output?
console.log(5 + 3);  //ans=8

//30. Output?
console.log(10 % 3);  //ans=1

//31. Output?
console.log(2 ** 3);  //ans=8   

//32. Output?
console.log(10 / 2);  //ans=5


//Section 7: Increment / Decrement (33–36)

//33. Output?
let a = 5;
a++;
console.log(a);  //ans=6

//34. Output?
let b = 5;
let c = b++;
console.log(b, c);  //ans=6, 5

//35. Output?
let x = 5;
let y = ++x;
console.log(x, y);  //ans=6, 6

//36. Output?
let m = 3;
let n = m--;
console.log(m, n);  //ans=2, 3


//Section 8: Comparison & Logical (37–39)

//37. Output?
console.log(5 == "5");  //ans=true

//38. Output?
console.log(5 === "5");  //ans=false

//39. Output?
console.log(true && false || true);  //ans=true


//Section 9: Ternary (40)

//40. Output?
5 > 3 ? console.log("Yes") : console.log("No");  //ans=Yes









