<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-15 (JavaScript Challenge) - Closures</h1>
</div>

---

### Activity 1: Understand Closures

#### Task-1.Write a function that returns another function, where the inner function access the variable from the outer function scope. call the inner function and log the result.

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Define the outer function
function outerFunction() {
  // Define a variable in the outer function's scope
  const outerVariable = 'I am from the outer function';

  // Define the inner function
  function innerFunction() {
    // Access the variable from the outer function's scope
    return outerVariable;
  }

  // Return the inner function
  return innerFunction;
}

// Call the outer function and store the returned inner function
const inner = outerFunction();

// Call the inner function and log the result
console.log(inner()); // Output: "I am from the outer function"

```

</p>
</details>

#### Task-2. create a closure that maintains a private counter. Implement fuctions to increment and get the current value of the counter.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function createCounter() {
  let counter = 0;

  return {
    increment: function() {
      counter += 1;
    },
    getValue: function() {
      return counter;
    }
  };
}

const counter = createCounter();

counter.increment();
console.log(counter.getValue()); // Output: 1

counter.increment();
console.log(counter.getValue()); // Output: 2

```

</p>
</details>

### Activity 2. Practical Closures

#### Task-3. Write a function that generates unique ID's. use a closure to keep track of last generated ID and increment it with each call.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function createIdGenerator() {
  let lastId = 0;

  return function() {
    lastId += 1;
    return lastId;
  };
}

const generateId = createIdGenerator();

console.log(generateId()); // Output: 1
console.log(generateId()); // Output: 2
console.log(generateId()); // Output: 3

```

</p>
</details>

#### Task-4. Create a closure that captures a user name and returns a function that greets the user by name.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function createGreeter(userName) {
  return function() {
    return `Hello, ${userName}!`;
  };
}

const greetJohn = createGreeter('John');
console.log(greetJohn()); // Output: Hello, John!

const greetJane = createGreeter('Jane');
console.log(greetJane()); // Output: Hello, Jane!

```

</p>
</details>

### Activity 3. Closures in Loop

#### Task-5. write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure that each function logs the correct index.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const functions = [];

for (let i = 0; i < 5; i++) {
  functions.push((function(index) {
    return function() {
      console.log(index);
    };
  })(i));
}

// Test the functions
functions[0](); // Output: 0
functions[1](); // Output: 1
functions[2](); // Output: 2
functions[3](); // Output: 3
functions[4](); // Output: 4

```

</p>
</details>

### Activity 4. Module Patterns

#### Task-6. Use a closure to create a simple module for managing a collection of items. Implements methods to add remove and list items.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function createItemManager() {
  let items = [];

  return {
    addItem: function(item) {
      items.push(item);
    },
    removeItem: function(item) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
      }
    },
    listItems: function() {
      return items.slice();
    }
  };
}

const itemManager = createItemManager();

itemManager.addItem('Apple');
itemManager.addItem('Banana');
console.log(itemManager.listItems()); // Output: ["Apple", "Banana"]

itemManager.removeItem('Apple');
console.log(itemManager.listItems()); // Output: ["Banana"]

```

</p>
</details>

### activity 5. Memoization

#### Task-7. write a function that memoizes the result of another function. Use a closure to store the result of previous computation

<details><summary><b>Answer</b></summary>
<p>

```javascript
function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Example usage
function slowFunction(num) {
  console.log('Computing...');
  return num * num;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5)); // Output: Computing... 25
console.log(memoizedSlowFunction(5)); // Output: 25 (from cache)
console.log(memoizedSlowFunction(10)); // Output: Computing... 100
console.log(memoizedSlowFunction(10)); // Output: 100 (from cache)


```

</p>
</details>

#### Task-8. Create a memoized version of a function that calculates the factorial of a number.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(5)); // Output: 120 (from cache)
console.log(memoizedFactorial(6)); // Output: 720
console.log(memoizedFactorial(6)); // Output: 720 (from cache)

```

</p>
</details>