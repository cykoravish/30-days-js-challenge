<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-16 (JavaScript Challenge) - Recursion</h1>
</div>

---

### Activity 1: Basic Recursion

#### Task-1.Write a recursive function to calculate the factoria of a numbe. Log the result for the few test case. 

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Recursive function to calculate factorial
function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial(n-1)
    return n * factorial(n - 1);
}

// Test cases
console.log("Factorial of 0:", factorial(0)); // 1
console.log("Factorial of 1:", factorial(1)); // 1
console.log("Factorial of 2:", factorial(2)); // 2
console.log("Factorial of 3:", factorial(3)); // 6
console.log("Factorial of 4:", factorial(4)); // 24

```

</p>
</details>

#### Task-2. Write a recursive function to calculate nth fibonaci number. Log the result for the few test case. 

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Recursive function to calculate nth Fibonacci number
function fibonacci(n) {
  // Base cases: F(0) = 0, F(1) = 1
  if (n <= 1) {
    return n;
  }
  // Recursive case: F(n) = F(n-1) + F(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases
console.log(`Fibonacci(0): ${fibonacci(0)}`); // 0
console.log(`Fibonacci(1): ${fibonacci(1)}`); // 1
console.log(`Fibonacci(2): ${fibonacci(2)}`); // 1
console.log(`Fibonacci(3): ${fibonacci(3)}`); // 2
console.log(`Fibonacci(4): ${fibonacci(4)}`); // 3
console.log(`Fibonacci(5): ${fibonacci(5)}`); // 5
console.log(`Fibonacci(6): ${fibonacci(6)}`); // 8
console.log(`Fibonacci(7): ${fibonacci(7)}`); // 13
console.log(`Fibonacci(8): ${fibonacci(8)}`); // 21
console.log(`Fibonacci(9): ${fibonacci(9)}`); // 34
console.log(`Fibonacci(10): ${fibonacci(10)}`); // 55

```

</p>
</details>

### Activity 2. Recursion with arrays. 

#### Task-3. Write a recursive function to find the sum of all elements in an array. Log the result for few test cases.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function recursiveSum(arr) {
  // Base case: if the array is empty, return 0
  if (arr.length === 0) {
    return 0;
  }
  // Recursive case: return the first element plus the sum of the rest of the array
  return arr[0] + recursiveSum(arr.slice(1));
}

// Test cases
const testCases = [
  [1, 2, 3, 4, 5],     // Sum should be 15
  [10, 20, 30],        // Sum should be 60
  [0, 0, 0, 0, 0],     // Sum should be 0
  [5],                 // Sum should be 5
  [],                  // Sum should be 0
  [-1, -2, -3, -4, -5] // Sum should be -15
];

// Logging the results
testCases.forEach((testCase, index) => {
  console.log(`Sum of test case ${index + 1} (${testCase}):`, recursiveSum(testCase));
});

```

</p>
</details>

#### Task-4. Write a recursive function to find the maximum elements in a array. Log the result for few test case.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function findMax(arr, n) {
    // Base case: if array size is 1, return the only element
    if (n === 1) {
        return arr[0];
    }

    // Recursive call to find the maximum in the remaining array
    let max = findMax(arr, n - 1);

    // Compare the result with the last element in the array
    if (arr[n - 1] > max) {
        return arr[n - 1];
    } else {
        return max;
    }
}

// Helper function to call the recursive function
function getMax(arr) {
    return findMax(arr, arr.length);
}

// Test cases
let testArray1 = [1, 5, 3, 9, 2];
let testArray2 = [10, 20, 30, 40, 50];
let testArray3 = [-1, -5, -3, -9, -2];
let testArray4 = [1];
let testArray5 = [];

console.log(`Max of [1, 5, 3, 9, 2]: ${getMax(testArray1)}`); // Output: 9
console.log(`Max of [10, 20, 30, 40, 50]: ${getMax(testArray2)}`); // Output: 50
console.log(`Max of [-1, -5, -3, -9, -2]: ${getMax(testArray3)}`); // Output: -1
console.log(`Max of [1]: ${getMax(testArray4)}`); // Output: 1
console.log(`Max of []: ${getMax(testArray5)}`); // Output: undefined or an appropriate message

```

</p>
</details>

### Activity 3. String Manipulation with Recursion.

#### Task-5. Write a recursive function to reverse a string. Log the result for few test case.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function reverseString(str) {
  // Base case: if the string is empty or has only one character, return the string
  if (str.length <= 1) {
    return str;
  }
  // Recursive case: take the last character and concatenate it with the reverse of the remaining string
  return str.charAt(str.length - 1) + reverseString(str.substring(0, str.length - 1));
}

// Test cases
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString(""));      // Output: ""
console.log(reverseString("a"));     // Output: "a"
console.log(reverseString("OpenAI"));// Output: "IAnepO"

```

</p>
</details>

#### Task-6. Write a recursive function to check if the string is palindrome. Log the result for few test case.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function isPalindrome(str) {
  // Base case: if the string is empty or has only one character, it is a palindrome
  if (str.length <= 1) {
    return true;
  }
  // Check if the first and last characters are the same
  if (str.charAt(0) !== str.charAt(str.length - 1)) {
    return false;
  }
  // Recursive case: check the substring excluding the first and last characters
  return isPalindrome(str.substring(1, str.length - 1));
}

// Test cases
console.log(isPalindrome("madam"));    // Output: true
console.log(isPalindrome("racecar"));  // Output: true
console.log(isPalindrome("hello"));    // Output: false
console.log(isPalindrome("a"));        // Output: true
console.log(isPalindrome(""));         // Output: true
console.log(isPalindrome("level"));    // Output: true

```

</p>
</details>
