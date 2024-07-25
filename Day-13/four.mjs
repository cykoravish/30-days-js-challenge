//Task-3

// Import specific functions from the mathOperations module
// import { add, subtract, multiply, divide } from "./three.mjs";

// // Use the imported functions
// console.log(`Addition: 5 + 3 = ${add(5, 3)}`);           // Output: Addition: 5 + 3 = 8
// console.log(`Subtraction: 5 - 3 = ${subtract(5, 3)}`);   // Output: Subtraction: 5 - 3 = 2
// console.log(`Multiplication: 5 * 3 = ${multiply(5, 3)}`); // Output: Multiplication: 5 * 3 = 15
// console.log(`Division: 6 / 3 = ${divide(6, 3)}`);        // Output: Division: 6 / 3 = 2

// Task-4

// import add from './three.mjs';

// // Use the imported function
// const result = add(5, 3);

// // Output the result
// console.log(`The result is: ${result}`);

// Task-5
// import * as utils from './three.mjs';

// // Use the imported constants and functions
// console.log(`PI: ${utils.PI}`);              // Output: PI: 3.14159
// console.log(`E: ${utils.E}`);                // Output: E: 2.71828
// console.log(`Addition: 5 + 3 = ${utils.add(5, 3)}`);   // Output: Addition: 5 + 3 = 8
// console.log(`Subtraction: 5 - 3 = ${utils.subtract(5, 3)}`); // Output: Subtraction: 5 - 3 = 2

//TASK-6
// import _ from 'lodash';

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const chunks = _.chunk(array, 3);
// console.log(chunks);

// Task-7
// import axios from "axios";

// // URL of the API you want to fetch data from
// const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

// // Function to fetch data using axios
// async function fetchData() {
//   try {
//     // Make a GET request to the API
//     const response = await axios.get(apiUrl);

//     // Log the response data
//     console.log("Data:", response.data);
//   } catch (error) {
//     // Handle any errors that occur during the request
//     console.error("Error fetching data:", error);
//   }
// }

// // Call the fetchData function
// fetchData();
