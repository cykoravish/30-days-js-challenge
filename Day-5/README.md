<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-5 (JavaScript Challenge) - Functions</h1>
</div>

---

### Activity 1: Function Declaration

#### Task-1. Write a function to check if a number is even or odd and log the result to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function checkNum(n) {
  if (n % 2 == 0) {
    console.log(`${n} is even`);
  } else {
    console.log(`${n} is odd`);
  }
}
checkNum(4); //output: "4 is even"
checkNum(5); //output: "5 is odd"
```

</p>
</details>

#### Task-2. Write a function to calculate the square of a number and return the result.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function findSquare(n) {
  return n ** 2;
}

console.log(findSquare(4)); // Output: 16
console.log(findSquare(5)); // Output: 25
```

</p>
</details>

### Activity 2: Function Expression

#### Task-3. Write a function expression to find the maximum of two numbers and log the result to the console

<details><summary><b>Answer</b></summary>
<p>

```javascript
const findMax = function (a, b) {
  return Math.max(a, b); // Find the maximum of two numbers
};

console.log(findMax(10, 20)); // Output: 20
console.log(findMax(5, 3)); // Output: 5
```

</p>
</details>

#### Task-4. Write a function expression to concatenate two strings and return the result.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const concatenateStrings = function (str1, str2) {
  return str1 + str2; // Concatenate two strings
};

console.log(concatenateStrings("Hello, ", "world!")); // Output: "Hello, world!"
console.log(concatenateStrings("JavaScript ", "is awesome!")); // Output: "JavaScript is awesome!"
```

</p>
</details>

### Activity 3: Arrow Functions

#### Task-5. Write a arrow function to calulate the sum of two numbers and return the result.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const sumTwoNum = (num1, num2) => num1 + num2;
console.log(sumTwoNum(2, 5));
```

</p>
</details>

#### Task-6. Write a arrow function to check if a string contains a specific character and return a boolean value.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const checkString = (str) => str.includes("h");
console.log(checkString("hello world")); //output: true
```

</p>
</details>

### Activity 4: Function Parameters and Default Values

#### Task-7. Write a function that takes two parameters and return the product. Provide a default value for the second parameter.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const checkString = (p1, p2 = " world") => p1 + p2;
console.log(checkString("hello")); //output: "hello world"
```

</p>
</details>

#### Task-8. Write a function that takes person name and age and return a greeting message. Provide a default value for the age.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const greetinMessage = (name, age = 18) => `congrats ${name}! you are now ${age}`;
console.log(greetinMessage("dipu")); //output: "congrats dipu! you are now 18"
```

</p>
</details>

### Activity 5: Higher-Order Functions

#### Task-9. Write a Higher order function that takes a function and a number, and calls the function that many times

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Higher-order function that takes a function and a number
const repeatFunction = (fn, times) => {
    for (let i = 0; i < times; i++) {
        fn(); // Call the function `times` number of times
    }
};

// Example usage:
const sayHello = () => console.log('Hello!');

// Call `sayHello` 3 times
repeatFunction(sayHello, 3); // Output: "Hello!" "Hello!" "Hello!"

```

</p>
</details>

#### Task-10. Write a Higher order function that takes two functions and a value, applies the first function to the values and than applies the scond function to the result.

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Higher-order function that takes two functions and a value
const compose = (fn1, fn2, value) => {
    return fn2(fn1(value)); // Apply `fn1` to `value` and then `fn2` to the result
};

// Example functions
const add2 = x => x + 2;
const double = x => x * 2;

// Use the `compose` function
const result = compose(add2, double, 3); // (3 + 2) * 2 = 10
console.log(result); // Output: 10

```

</p>
</details>
