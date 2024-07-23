<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-11 (JavaScript Challenge) - Promises and Async/Await</h1>
</div>

---

### Activity 1: Understanding Promises

#### Task-1. Create a promise that resolve with a message after 2 seconds timeout and log the message to the console

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Function that returns a promise which resolves after 2 seconds
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
    }, 2000);
  });
}

// Using the promise and logging the message to the console
resolveAfter2Seconds().then((message) => {
  console.log(message);
});
```

</p>
</details>

#### Task-2. Create a promise that rejects after 2 seconds with a error message and handle the error with .catch.

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Function that returns a promise which resolves after 2 seconds
function rejectAfter2Seconds() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Promise rejected after 2 seconds");
    }, 2000);
  });
}

// Using the promise and logging the message to the console
rejectAfter2Seconds()
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log("error: ", err);
  });
```

</p>
</details>

### Activity 2: chaining Promises

#### Task-3. Create a sequence of promises that simulate fetching data from a sever. Chain the promises to log the messages in a specific order.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function fetchData(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

fetchData("promise 1 resolve", 1000)
  .then((msg) => {
    console.log(msg);
    return fetchData("promise 2 reslove", 1000);
  })
  .then((msg) => {
    console.log(msg);
    return fetchData("promise 3 reslove", 1000);
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("error: ", err);
  });
```

</p>
</details>

### Activity 3: Using Async/Await

#### Task-4. Write a async function that waits for a promise to resolve and than logs the resolved value.

<details><summary><b>Answer</b></summary>
<p>

```javascript
let promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise reloved");
  }, 2000);
});

async function logPromise() {
  let promiseValue = await promise;
  console.log("promiseValue: ", promiseValue);
}
logPromise();
```

</p>
</details>

#### Task-5. Write a async function that handles a rejected promise using try catch and logs the error message.

<details><summary><b>Answer</b></summary>
<p>

```javascript
let promise = new Promise((_,reject)=>{
    setTimeout(()=>{
      reject("promise rejected")
    },2000)
});

async function logPromise(){
  try{
    let promiseValue = await promise;
      console.log("promiseValue: ", promiseValue);
    }catch(err){
      console.log("error: ", err);
    }
  }
logPromise();

```

</p>
</details>

### Activity 4: Fetching Data from API 

#### Task-6. Use the fetch api to get data from public api and log the response data using promises in the console. 

<details><summary><b>Answer</b></summary>
<p>

```javascript
fetch("https://jsonplaceholder.typicode.com/posts").then((data)=> data.json()).then((res)=>{
  console.log(res)
});

```

</p>
</details>

#### Task-7. Use the fetch api to get data from public api and log the response data using async/await in the console. 

<details><summary><b>Answer</b></summary>
<p>

```javascript
async function fetchData(){
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await data.json();
    console.log(res);
}
fetchData();

```

</p>
</details>

### Activity 5: Concurrent promisses

#### Task-8. Use promise.all to waite for multiple promisses to resolve and log all their values

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Function that returns a promise which resolves after a delay
function resolveAfterDelay(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Async function to wait for multiple promises and log their values
async function logAllResolvedValues() {
  try {
    // Create multiple promises
    const promise1 = resolveAfterDelay("Promise 1 resolved after 1 second", 1000);
    const promise2 = resolveAfterDelay("Promise 2 resolved after 2 seconds", 2000);
    const promise3 = resolveAfterDelay("Promise 3 resolved after 1.5 seconds", 1500);

    // Wait for all promises to resolve using Promise.all
    const values = await Promise.all([promise1, promise2, promise3]);

    // Log all resolved values
    values.forEach((value, index) => {
      console.log(`Value ${index + 1}: ${value}`);
    });
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
logAllResolvedValues();


```

</p>
</details>

#### Task-9. Use promise.race to log the value of the first promise that resolves among multiple promises

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Function that returns a promise which resolves after a delay
function resolveAfterDelay(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Async function to wait for the first promise to resolve and log its value
async function logFirstResolvedValue() {
  try {
    // Create multiple promises
    const promise1 = resolveAfterDelay("Promise 1 resolved after 1 second", 1000);
    const promise2 = resolveAfterDelay("Promise 2 resolved after 2 seconds", 2000);
    const promise3 = resolveAfterDelay("Promise 3 resolved after 1.5 seconds", 1500);

    // Wait for the first promise to resolve using Promise.race
    const value = await Promise.race([promise1, promise2, promise3]);

    // Log the first resolved value
    console.log(`First resolved value: ${value}`);
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
logFirstResolvedValue();

```

</p>
</details>
