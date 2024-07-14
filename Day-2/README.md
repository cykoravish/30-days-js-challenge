<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-2 (JavaScript Challenge)</h1>
</div>

---

### Activity 1: Arithmetic Operations

#### Task-1. Write a program to add two numbers and log the result to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function addTwoNumbers(num1, num2) {
  return num1 + num2;
};
let number = addTwoNumbers(8, 2);
console.log(number); //output: 10
```

</p>
</details>

#### Task-2. Write a program to subtract two numbers and log the result to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
};
let number = subtractTwoNumbers(10, 2);
console.log(number); //output: 8
```

</p>
</details>

#### Task-3. Write a program to multiply two numbers and log the result to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function multiplyTwoNumbers(num1, num2) {
  return num1 * num2;
};
let number = multiplyTwoNumbers(10, 2);
console.log(number); //output: 20
```

</p>
</details>

#### Task-4. Write a program to divide two numbers and log the result to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function divideTwoNumbers(num1, num2) {
  return num1 / num2;
};
let number = divideTwoNumbers(10, 2);
console.log(number); //output: 5
```

</p>
</details>

#### Task-5. Write a program to find the remainder when two numbers are divided by another and log the result to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function findRemainder(num1, num2) {
  return num1 % num2;
};
let number = findRemainder(8, 3);
console.log(number); //output: 2
```

</p>
</details>

### Activity 2: Arithmetic Operations

#### Task-6. Use += operator to add a number to a variable and log the result to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
let number = 6;
let addValue = 4;
number += addValue;
console.log(number); //output: 10

```

</p>
</details>

#### Task-7. Use -= operator to substract a number to a variable and log the result to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
let number = 6;
let subtractValue = 4;
number -= subtractValue;
console.log(number); //output: 2

```

</p>
</details>

### Activity 2: Comparisions Operations

#### Task-8. Write a program to compare two numbers using < and > operator and log the result to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function comapreNumb(num1, num2){
console.log(num1 > num2);
console.log(num1 < num2)
}
comapreNumb(2, 4) //output: false true

```

</p>
</details>

#### Task-9. Write a program to compare two numbers using <= and >= operator and log the result to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function comapreNumb(num1, num2){
console.log(num1 >= num2);
console.log(num1 <= num2)
}
comapreNumb(6, 6) //output: true true
comapreNumb(2, 6) //output: false true

```

</p>
</details>

#### Task-10. Write a program to compare two numbers using == and === operator and log the result to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function comapreNumb(num1, num2){
console.log(num1 === num2);
console.log(num1 == num2)
}
comapreNumb(6, "6") //output: false true

```

</p>
</details>

### Activity 3: Logical Operations

#### Task-11. Write a program that uses && operator to combine two conditions and log the result to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function checkConditions(condition1, condition2) {
  if (condition1 && condition2) {
    console.log('Both conditions are true.');
  } else {
    console.log('At least one condition is false.');
  }
}
checkConditions(true, true); //output: 'Both conditions are true.'
checkConditions(true, false); //output: 'At least one condition is false.'

```

</p>
</details>

#### Task-12. Write a program that uses || operator to combine two conditions and log the result to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function checkConditions(condition1, condition2) {
  if (condition1 || condition2) {
    console.log('at least one condition is true');
  } else {
    console.log('Both conditions are false.');
  }
}
checkConditions(true, false); //output: 'at least one condition is true'
checkConditions(false, false); //output: 'Both conditions are false.'

```

#### Task-13. Write a program that uses ! operator to negate a condition and log the result to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function checkConditions(condition) {
  if (!condition) {
    console.log("condition is false");
  } else {
    console.log("condition is true");
  }
}
checkConditions(true); //output: "condition is true"
checkConditions(false); //output: "condition is false"

```

</p>
</details>

### Activity 3: Ternary Operations

#### Task-13. Write a program that uses ternary operator to check if a number is positive or negative and log the result to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function checkNumber(num){
  const result = num >= 0 ? "number is positive" : "number is negative";
  console.log(result);
}
checkNumber(2); //output: "number is positive"
checkNumber(-2); //output:  "number is negative"

```

