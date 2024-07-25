<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-12 (JavaScript Challenge) - Error Handling</h1>
</div>

---

### Activity 1: Basic Error Handling with Try-catch

#### Task-1. Write a function that intentionally throws an error and use a try-catch block to handle the error abd llog an appropriate message in the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function funk() {
  try {
    throw new Error("i am intetional error");
  } catch (error) {
    console.log("error: ", error.message);
  }
}
funk();
```

</p>
</details>

#### Task-2.Create a function that divides two numbers and throw an error if the denominator is zero. use the try catch block to handle this error.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function divider(num1, num2) {
  try {
    if (num2 === 0) throw new Error("can't divide with zero");
    let result = num1 / num2;
    console.log(result);
  } catch (error) {
    console.log("error: ", error.message);
  }
}
divider(10, 0); //output: "error: can't divide with zero"
```

</p>
</details>

### Activity 2: Finally Block

#### Task-3.write a script that includes a try catch block and a finally block. log messages in the try catch and finally block to observe the execution flow.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function executionFlowExample() {
  try {
    console.log("Entering try block");
    // Intentionally throwing an error
    throw new Error("Intentional error thrown");
    console.log("This line will not be executed"); // This line will not be executed
  } catch (error) {
    console.log("Caught an error:", error.message);
  } finally {
    console.log("Entering finally block");
  }
  console.log("Execution continues after try-catch-finally");
}

// Calling the function to see it in action
executionFlowExample();
```

</p>
</details>

### Activity 3: Custom Error Object

#### Task-4. Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Define a custom error class that extends the built-in Error class
class CustomError extends Error {
    constructor(message) {
        super(message); // Call the constructor of the parent class (Error)
        this.name = 'CustomError'; // Set the error name to CustomError
    }
}

// Function that throws an instance of the custom error
function throwCustomError() {
    throw new CustomError('This is a custom error');
}

// Function to handle the custom error
function handleCustomError() {
    try {
        console.log('Entering try block');
        // Call the function that throws the custom error
        throwCustomError();
    } catch (error) {
        if (error instanceof CustomError) {
            console.log('Caught a custom error:', error.message);
        } else {
            console.log('Caught an unexpected error:', error);
        }
    } finally {
        console.log('Entering finally block');
    }
    console.log('Execution continues after try-catch-finally');
}

// Calling the function to see it in action
handleCustomError();

```

</p>
</details>

#### Task-5. write a function that validates user input (e.g., checking if the string is not empty) and throws a custom error if the validation fails.Handle the custom error using try catch block.

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Custom error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

// Function to validate user input
function validateInput(input) {
    if (!input || input.trim() === '') {
        throw new ValidationError('Input cannot be empty');
    }
    console.log('Input is valid');
}

// Function to handle validation
function handleValidation(input) {
    try {
        validateInput(input);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log('Validation error:', error.message);
        } else {
            console.log('Unexpected error:', error);
        }
    }
}

// Test the function
handleValidation(''); // Validation error: Input cannot be empty
handleValidation('Valid input'); // Input is valid


```

</p>
</details>

### Activity 4: Error Handling in Promises

#### Task-6. Create a promise that randomly resolves or reject. use .catch to handle the rejection and log an appropriate message in the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function randomPromise() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random > 0.5) {
            resolve('Promise resolved successfully!');
        } else {
            reject(new Error('Promise rejected'));
        }
    });
}

randomPromise()
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error('Caught an error:', error.message);
    });


```

</p>
</details>

#### Task-7. Use try-catch with in async function to handle errors from a promise that randomly resolves or reject.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function randomPromise() {
    return new Promise((resolve, reject) => {
        // Randomly resolve or reject the promise
        const shouldResolve = Math.random() > 0.5;
        setTimeout(() => {
            if (shouldResolve) {
                resolve('Promise resolved successfully!');
            } else {
                reject(new Error('Promise rejected.'));
            }
        }, 1000); // 1 second delay for simulation
    });
}

async function handlePromise() {
    try {
        const result = await randomPromise();
        console.log(result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

handlePromise();

```

</p>
</details>

### Activity 5: Graceful Error Handling in Fetch

#### Task-8. Use the fetch api to req data from an invalid URL and handle the eror using .catch(). Log an appropriate error message in the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Function to fetch data from an invalid URL
function fetchData() {
    fetch('https://invalid-url.example.com/data') // Replace with an invalid URL
        .then(response => {
            // Check if the response is not ok (status code is not 2xx)
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);
        })
        .catch(error => {
            console.error('Fetch error:', error.message);
        });
}

// Call the fetchData function
fetchData();

```

</p>
</details>

#### Task-9. Use the fetch api to req data from an invalid URL within an async function and handle the error using try catch. Log the appropriate message in the try catch.

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Function to fetch data from an invalid URL
// Define an async function to fetch data from an invalid URL
async function fetchData() {
    try {
        // Attempt to fetch data from an invalid URL
        const response = await fetch('https://invalid-url.example.com/data');

        // Check if the response was successful
        if (!response.ok) {
            // If the response was not ok, throw an error
            throw new Error('Network response was not ok. Status: ' + response.status);
        }

        // Parse the JSON data from the response
        const data = await response.json();
        console.log('Data received:', data);

    } catch (error) {
        // Handle errors that occurred during the fetch or processing
        console.error('Fetch error:', error.message);
    }
}

// Call the async function to execute the fetch operation
fetchData();


```

</p>
</details>
