<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-4 (JavaScript Challenge) - Loops</h1>
</div>

---

### Activity 1: for Loop

#### Task-1. Write a program to print a number from 1 to 10 using a for loop.
<details><summary><b>Answer</b></summary>
<p>

```javascript
for(let i = 1; i <=10; i++){
    console.log(i);
}
```

</p>
</details>

#### Task-2. Write a program to print multiplication table of 5 using a for loop.
<details><summary><b>Answer</b></summary>
<p>

```javascript
for(let i = 1; i <=10; i++){
  let table = 5 * i;
  console.log(`5 * ${i} = ${table}`);
}
```

</p>
</details>

### Activity 2: while Loop

#### Task-3. Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function calculateSum(n){
    let sum = 0;
    let i = 1;
    while(i <= n ){
     sum += i;
     i++;
    }
    console.log(sum)
}
calculateSum(10); //output: 55
```

</p>
</details>

#### Task-4. Write a program to print numbers from 10 to 1 using a while loop.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function printNumInReverse(n){
    while(n >= 1 ){
     console.log(n)
     n--;
    }
}
printNumInReverse(10);
```

</p>
</details>

### Activity 3: do-while Loop

#### Task-5. Write a program to print number from 1 to 5 using do-while loop.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function printNumber(n){
    let i = 1;
  do{
   console.log(i);
   i++;
  }while(i <= n)
}
printNumber(5);
```

</p>
</details>

#### Task-6. Write a program to print the factorial of a nuber using a do...while loop.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function factorial(n) {
  let result = 1;
  let i = 1;
  
  do {
    result *= i;
    i++;
  } while (i <= n);
  
  return result;
}

const number = 5; // Change this value to calculate the factorial of a different number
console.log(`Factorial of ${number} is ${factorial(number)}`);

```

</p>
</details>

### Activity 4: Nested Loop

#### Task-7. Write a program to print a pattern using nested for Loops:
<details><summary><b>Answer</b></summary>
<p>

```javascript
const n = 5; // Number of rows

for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}

```

</p>
</details>

### Activity 5: Loop Control Statements

#### Task-8. Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
<details><summary><b>Answer</b></summary>
<p>

```javascript
let skipNo = 5;
for (let i = 1; i <= 10; i++) {
 if(i === skipNo)continue;
  console.log(i)
 }

```

</p>
</details>

#### Task-9. Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
<details><summary><b>Answer</b></summary>
<p>

```javascript
let stopAt = 7;
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if(i === stopAt)break;
 }

```

</p>
</details>