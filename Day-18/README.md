<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-18 (JavaScript Challenge) - Algorithms</h1>
</div>

---

### Activity 1: Sorting Algorithm

#### Task-1. Implement the bubble sort algorithm to sort an array of numbers in ascending order.Log the sorted array.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    // Reduce the length of the array for the next iteration
    n--;
  } while (swapped);

  return arr;
}

let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(numbers));


```

</p>
</details>

#### Task-2. Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in the unsorted part of the array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", selectionSort(numbers));

```

</p>
</details>

#### Activity 2. Searching Algorithm

#### Task-3. Implement the linear search algorithm to find the target value in an array. Log the index of the target value.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if the target is found
    }
  }
  return -1; // Return -1 if the target is not found
}

let numbers = [64, 34, 25, 12, 22, 11, 90];
let target = 22;
let index = linearSearch(numbers, target);

if (index !== -1) {
  console.log(`Target value ${target} found at index: ${index}`);
} else {
  console.log(`Target value ${target} not found in the array.`);
}


```

</p>
</details>

#### Task-4. Implement the binary search algorithm to find the target value in sorted array. Log the index of the target value.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle; // Return the index if the target is found
    } else if (arr[middle] < target) {
      left = middle + 1; // Search in the right half
    } else {
      right = middle - 1; // Search in the left half
    }
  }

  return -1; // Return -1 if the target is not found
}

let numbers = [11, 12, 22, 25, 34, 64, 90];
let target = 22;
let index = binarySearch(numbers, target);

if (index !== -1) {
  console.log(`Target value ${target} found at index: ${index}`);
} else {
  console.log(`Target value ${target} not found in the array.`);
}

```

</p>
</details>