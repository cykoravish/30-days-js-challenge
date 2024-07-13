<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-1 (JavaScript Questions)</h1>
</div>

---

### Activity 1: Variable Declaration

###### Task-1. Declare a variable using var, assign it a number, and log the value to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
var num;
num = 1;
console.log(num); // Output: 1
```

</p>
</details>

###### Task-2. Declare a variable using let, assign it a string, and log the value to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
let place;
place = "uttarakhand";
console.log(place); // Output: "uttarakhand"
```

</p>
</details>

### Activity 2: Constant Declaration

###### Task-3. Declare a variable using const, assign it a boolean value, and log the value to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const isOk; //SyntaxError: Missing initializer in const declaration
isOk = true;
console.log(isOk);
```

</p>
</details>

### Activity 3: Data Types

###### Task-4. Create variables of different data types(number, string, boolean, object, array) and log each variable's type using typeof operator.

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Number
let myNumber = 42;
console.log(typeof myNumber); // Output: "number"

// String
let myString = "Hello, World!";
console.log(typeof myString); // Output: "string"

// Boolean
let myBool = true;
console.log(typeof myBool); // Output: "boolean"

// Object
let obj = { name: "John", age: 30 };
console.log(typeof obj); // Output: "object"

// Array
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // Output: "object"

// Null
let myNul = null;
console.log(typeof myNul); // Output: "object"

// Undefined
let myUndefine;
console.log(typeof myUndefine); // Output: "undefined"

// Function
let myFunction = function () {};
console.log(typeof myFunction); // Output: "function"

// Symbol
let mySymbol = Symbol();
console.log(typeof mySymbol); // Output: "symbol"

// BigInt
let myBig = 9007199254740991n;
console.log(typeof myBig); // Output: "bigint"
```

</p>
</details>

### Activity 4: Reassigning Variables

###### Task-5. Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
let myName;

myName = "Ravish";
console.log(myName); //output: "Ravish"

myName = "cykoRavish";
console.log(myName); //output: "cykoRavish"
```

</p>
</details>

### Activity 4: Understanding const

###### Task-6. Try reassigning a variable declared with const, and observe the error.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const myConstant = 30;
console.log(myConstant); // Output: 30

// Attempt to reassign the variable
myConstant = 40; // Uncaught TypeError: invalid assignment to const 'myConstant'
console.log(myConstant);
```

</p>
</details>
