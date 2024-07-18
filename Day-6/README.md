<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-6 (JavaScript Challenge) - Arrays</h1>
</div>

---

### Activity 1: Array Creation and Access

#### Task-1. Create a array of numbers from 1-5 and log the array to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr)
```

</p>
</details>

#### Task-2. Access the first and last element of an array and log them in the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // output: 1
console.log(arr[arr.length - 1]); //output: 5
```

</p>
</details>

### Activity 2: Array Methods (Basic)

#### Task-3. Use the push method to add a new number to the end of the array and log the updated array.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr); //output:[1, 2, 3, 4, 5, 6]
```

</p>
</details>

#### Task-4. Use the pop method to remove the last element from the array and log the updated array.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr); //output:[1, 2, 3, 4]
```

</p>
</details>

#### Task-5. Use the shift method to remove the first element from the array and log the updated array.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const arr = [1, 2, 3, 4, 5];
arr.shift();
console.log(arr); //output:[2, 3, 4, 5]
```

</p>
</details>

#### Task-6. Use the unshift method to add the new number to the beginning of an array and log the updated array.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const arr = [1, 2, 3, 4, 5];
arr.unshift(0);
console.log(arr); //output:[0, 1, 2, 3, 4, 5]
```

</p>
</details>

### Activity 3: Array Methods (Intermediate)

#### Task-7. Use the map method to create a new array where each number is doubled and log the new array

<details><summary><b>Answer</b></summary>
<p>

```javascript
const arr = [1, 2, 3, 4, 5];
let newArr = arr.map((e) => {
  return e * 2;
});
console.log(newArr); // output: [2, 4, 6, 8, 10]
```

</p>
</details>

#### Task-8. Use the filter method to create new array with only even numbers and log the new array.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const arr = [1, 2, 3, 4, 5];
let filteredArr = arr.filter((e) => {
  return e % 2 == 0;
});
console.log(filteredArr); // output: [2, 4]
```

</p>
</details>

#### Task-9. Use the reduce method to calculate the sum of all numbers in the array and log the result.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15

```

</p>
</details>

### Activity 4: Array Iteration

#### Task-10. Use the for loop to iterate and log each element to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}

```

</p>
</details>

#### Task-11. Use the forEach method to iterate over the array and log each element to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const arr = [1, 2, 3, 4, 5];
 arr.forEach((e)=>{
    console.log(e)
 })

```

</p>
</details>

### Activity 4: Multi-dimension Arrays

#### Task-12. create a two dimension array(matrix) and log each element to the console. 

<details><summary><b>Answer</b></summary>
<p>

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

```

</p>
</details>

#### Task-13. Access and log a specific element from the two dimension array.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Access and log a specific element
// For example, to access the element in the second row and third column (6)
const specificElement = matrix[1][2];

console.log(specificElement); // Output: 6

```
</p>
</details>
