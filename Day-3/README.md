<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-3 (JavaScript Challenge) - Control Structures</h1>
</div>

---

### Activity 1: if-Else Statements

#### Task-1. Write a program to check if a number is positive, negative, or zero, and log the result to the console
<details><summary><b>Answer</b></summary>
<p>

```javascript
function checkNum(n){
if(n < 0){
    console.log(`${n} is negative number`)
}else if(n > 0){
     console.log(`${n} is positive number`)
}else{
    console.log(`${n} is zero`)
}
}

checkNum(2) //output: "2 is positive number"
checkNum(0) //output: "0 is zero"
checkNum(-1) //output: "-1 is negative number
```

</p>
</details>

#### Task-2. write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function checkEligiblity(age){
if(age >= 18 ){
    console.log("you are eligible to vote")
}else{
    console.log("you are not eligible to vote")
}
}

checkEligiblity(18) //output: "you are eligible to vote"
checkEligiblity(12) //output: "you are not eligible to vote"
```

</p>
</details>

### Activity 2: Nested if-Else Statements

#### Task-3. write a program to find the largest of three numbers using nested if-else statements.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function findLargest(a, b, c) {
    let largest;

    if (a > b) {
        if (a > c) {
            largest = a;
        } else {
            largest = c;
        }
    } else {
        if (b > c) {
            largest = b;
        } else {
            largest = c;
        }
    }

    return largest;
}

console.log("The largest number is: " + findLargest(10, 5, 20));

```

</p>
</details>

### Activity 3: Switch Case 

#### Task-4. write a program that uses a switch case to determine the day of a weeek based on a number (1-7) and log the day name to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function getDayName(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
    }

    console.log(dayName);
}

getDayName(3); // Output: Tuesday

```

</p>
</details>

#### Task-5. write a program that uses a switch case to assign a grade ("A", "B", "C", "D", "F") based on a scope and log the grade to the console.
<details><summary><b>Answer</b></summary>
<p>

```javascript
function assignGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90 && score <= 100):
            grade = "A";
            break;
        case (score >= 80 && score < 90):
            grade = "B";
            break;
        case (score >= 70 && score < 80):
            grade = "C";
            break;
        case (score >= 60 && score < 70):
            grade = "D";
            break;
        case (score >= 0 && score < 60):
            grade = "F";
            break;
        default:
            grade = "Invalid score";
    }

    console.log("The grade is: " + grade);
}

// Example usage:
let score = 85;
assignGrade(score); // Output: The grade is: B
```

</p>
</details>

### Activity 3: Conditional Ternary Operator

#### Task-6. write a progeam that uses a ternary operator to check if a number is even or odd and log the result to the console. 
<details><summary><b>Answer</b></summary>
<p>

```javascript
function checkNum(n){
let result = n % 2 === 0 ? `${n} is even` : `${n} is odd`;
  console.log(result);
};
checkNum(9); //output: "9 is odd"
checkNum(10); //output: "10 is even"
```

</p>
</details>

### Activity 4: Conmining conditions

#### Task-7. write a program to check if a year is leap year by combining multiple conditions (divisible by 4 , but not 100 unless also divisible by 400) and log the result to the console. 
<details><summary><b>Answer</b></summary>
<p>

```javascript
function isLeapYear(year) {
    let isLeap;

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                isLeap = true;
            } else {
                isLeap = false;
            }
        } else {
            isLeap = true;
        }
    } else {
        isLeap = false;
    }

    return isLeap;
}

// Example usage:
let year = 2024;
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

```

</p>
</details>
