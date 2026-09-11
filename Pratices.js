/*let name='Arslan khan';
let age = 23;
age=24;
let cgpa=3.01;
let isStudent=true;
let city='Rawalpindi';

console.log(name);
console.log(age);
/*console.log(cgpa);
console.log(isStudent);
console.log(city);

let x = "10";
let y = 5;

console.log(typeof x);
console.log(typeof y);
console.log(x + y); */
// let car={
//     brand:"Toyota",
//     model:"carola",
//     year:2022,
//     color:"white"
// }
// let Nyear=2024;
// let Ncolor="Black";
// car.price=5000000;
// car.year=Nyear;
// car.color=Ncolor;
// delete car.color;
// console.log(car);
// console.log(car.brand);
// console.log(car.model);

                           // Start Function

                                // Add two number

// let add=(a,b)=>{
//     let sum=0;
//     sum=a+b;
//     return sum;
// }
// console.log(add(10,20));

                                 //Square
//  let square=a=> a*a
//  console.log(square(9));

                               //problem
// u are given a student's name and marks.
// Write an arrow function called checkResult that takes the student's name and marks as parameters.
// The function should check:
// If marks are 50 or above → return "Arslan has passed"
// If marks are below 50 → return "Arslan has failed"

// let checkResult=(name,marks)=>{
//     console.log(marks>50 ? "Student is passed ":"student is failed");
// }
// checkResult("Arslan",50);


// You are given a list of products with their prices.
// Write an arrow function called checkProducts that:
// Takes the product list as a parameter.
// Uses a loop to check every product.
// Uses a ternary operator to decide:
// Price greater than or equal to 1000 → "Expensive"
// Price less than 1000 → "Affordable"
// Display the product name, price, and result.

// let product = [
//     { name: 'Laptop', price: 5000 },
//     { name: 'Mouse', price: 500 },
//     { name: 'keyboard', price: 1800 },
//     { name: 'Hardisk', price: 3000 }
// ];

// let checkProduct = prod => {

//     for (let item of prod) {

       
//         console.log(
//             item.name,
//             item.price,
//             item.price >= 1000 ? "Expensive" : "Affordable"
//         );
//     }
// }
// console.log(checkProduct(product))



// You are given a list of employees with their name, salary, and years of experience.
// Write an arrow function called calculateBonus that:
// Takes the employee list as a parameter.
// Uses a loop to check every employee.
// Uses a ternary operator:
// If experience is 3 years or more → "Bonus Eligible"
// Otherwise → "Not Eligible"
// Display the employee's name, experience, and result.
// Use only what you've studied:
// Array → Object → Arrow Function → Loop → Ternary Operator



// let employee = [
//     { name: 'Arslan', Salary: 50000 , Experience: 5 },
//     { name: 'Asad', Salary: 35000 , Experience: 1},
//      { name: 'Kamrna', Salary: 25000 , Experience: 6},
//      { name: 'Ali', Salary: 45000 , Experience: 2}
// ];

// let calculateBonus= emp=>{
//     for(let item of emp){
//        console.log(
//         item.name,
//         item.Experience,
//         item.Experience >=3 ? "Bonus Eligible" : "Not Eligible");
//     }
// }
// calculateBonus(employee);


                           //problem

//Write an arrow function that takes an array of numbers and uses a 
// for loop to return a new array where each number is increased by 10.

// let SimpleArr=[10,20,30,40]
// let Increased_number=arr=>{
//      let IncreasedArr=[]
//      for(let item of arr){
//           console.log(item+10)
//      }
// }
// Increased_number(SimpleArr);


                                 //problem

  // Problem 6: Write an arrow function that takes an array of numbers and uses 
 // a for loop to return a new array containing only numbers greater than 50.

// let simpleArr=[100,20,300,30,500,700,40]
// let GreaterNumber=arr=>{
//      let NewArr=[]
//      for(let item of arr){
//           if(item>50){
//               NewArr.push(item);
//           }

//      }
//      return NewArr;
     
// }
// console.log(GreaterNumber(simpleArr));

                                   //problem

 // Problem 7: Write an arrow function that takes an array of numbers and uses 
 // a for loop to return the first number divisible by 7. If none found, return null.

// let simpleArr = [100, 20, 300, 30, 500, 700, 40];

// let FirstElement = arr => {

//     for(let i = 0; i < arr.length; i++) {

//         let div = arr[i] % 7 == 0;

//         if(div) {
//             return arr[i];
//         }
//     }

//     return null;
// };

// console.log(FirstElement(simpleArr));