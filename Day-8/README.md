<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-8 (JavaScript Challenge) - ES6+ Features</h1>
</div>

---

### Activity 1: Template Literals

#### Task-1. Use template titerals to create a string that includes variables for a person's name and age, and logthestring to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const name = "Ravish";
const age = 25;

const message = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(message); //output: "Hello, my name is Ravish and I am 25 years old."

```

</p>
</details>

#### Task-2. create a multiline string using template literals and log it to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
let message = `Hi, my name is ravish.
 i love building full stack websites based on my ideas.
 i enjoy website development
 `;
console.log(message); //output: "Hi, my name is ravish.
// i love building full stack websites based on my ideas.
// i enjoy website development"
```

</p>
</details>

### Activity 2: Destructuring

#### Task-3. Use array destructuring to extract the first and second element from an array of numbers and log them to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
let numArr = [2, 4, 6, 8, 10];
let [firstElem, secondElem] = numArr;
console.log(firstElem, secondElem) //ouyput: 2, 4
```

</p>
</details>

#### Task-4. Use object destructuring to extract the title and author from a book object and log them to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const book = {
    title: "on my way",
    author: "ravish"
}
const {title, author} = book;
console.log(title, author); //output: "on my way" "ravish"

```

</p>
</details>

### Activity 3: Spread and rest operators

#### Task-5. use the spread operator to create a new array that include all elements of existing array plus additional elements, and log the new array to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
let arr = [1, 2, 3, 4, 5, 6];
const newArr = [...arr, 7, 8];
console.log(newArr);

```

</p>
</details>

#### Task-6. use the rest operator in a function to accept an arbitary number of arguments, sum them, and return the result.

<details><summary><b>Answer</b></summary>
<p>

```javascript
sum = 0;
function sumAll(...arr){
    for(let i = 0; i < arr.length; i++){
         sum += arr[i];
    }
console.log(sum);
};
sumAll(1,2,3,4,5);
```

</p>
</details>

### Activity 4: Default Parameter

#### Task-7. Write a function takes two parameter and return their product, with the second parameter default value of 1. Log the result of calling this function with or without second parameter.

<details><summary><b>Answer</b></summary>
<p>

```javascript
function product(a, b=1){
  return a * b;
};

console.log(product(2,5)); //output: 10
console.log(product(2)); //output: 2
```

</p>
</details>

### Activity 5: Enhanced object literals

#### Task-8. use enhanced object literals to create an object with methods and properties, and log the object to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const name = "Ravish";
const age = 18;

const person = {
    name,
    age,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
    updateAge(newAge) {
        this.age = newAge;
        return `Age updated to ${this.age}`;
    }
};

console.log(person); 
console.log(person.greet());
console.log(person.updateAge(26));
console.log(person.greet());

```

</p>
</details>
```

#### Task-9. create an object with computed property names based on variables and log the object to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const propName1 = "firstName";
const propName2 = "lastName";
const propName3 = "age";

const person = {
    [propName1]: "John",
    [propName2]: "Doe",
    [propName3]: 30,
};

console.log(person); //output: { firstName: "John", lastName: "Doe", age: 30 }

```

</p>
</details>
