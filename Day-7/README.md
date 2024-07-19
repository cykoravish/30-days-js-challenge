<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-7 (JavaScript Challenge) - objects</h1>
</div>

---

### Activity 1: Object Creation and Access

#### Task-1. Create aan object representing a book with properties like title, author and year, and log the object to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Create a book object
const book = {
  title: "30 days of js-challenge",
  author: "Ravish",
  year: 2024,
};

// Log the book object to the console
console.log(book);
```

</p>
</details>

#### Task-2. Access and log the title and author property of the book object.

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Create a book object
const book = {
  title: "30 days of js-challenge",
  author: "Ravish",
  year: 2024,
};

let author = book.author;
let title = book.title;
console.log(author, title); //output: "Ravish 30 days of js-challenge"
```

</p>
</details>

### Activity 2: Object Methods

#### Task-3. Add a method to the book object that returns a string with a boooks title and author, and log the result of calling this method.

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Create a book object
const book = {
  title: "30 days of js-challenge",
  author: "Ravish",
  info: function () {
    return `Title of the book is ${this.title} and author is ${this.author}`;
  },
};

console.log(book.info()); //output: "Title of the book is 30 days of js-challenge and author is Ravish"
```

</p>
</details>

#### Task-4. Add a method to the book object that takes a parameter (year) and updates the book year properly, then log the updated object.

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Create a book object
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,

  // Method to update the year
  updateYear: function (newYear) {
    this.year = newYear;
  },
};

// Log the original book object to the console
console.log("Original book:", book);

// Update the year of the book
book.updateYear(2021);

// Log the updated book object to the console
console.log("Updated book:", book);
```

</p>
</details>

### Activity 3: Nested Objects

#### Task-5. Create a nested object representing library with properties like name and books (an array of book objects), and log the library object to the console.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const library = {
  name: "Library of books",
  books: [
    { title: "an handsome boy ravish", author: "cykoravish", year: 2024 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  ],
};

console.log(library);
```

</p>
</details>

#### Task-6. Access and log the name of library and the titles of all books in the library.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const library = {
  name: "Library of books",
  books: [
    { title: "an handsome boy ravish", author: "cykoravish", year: 2024 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  ],
};

//name of library
console.log(library.name);

//title of all books
library.books.forEach((e) => console.log(e.title));
```

</p>
</details>

### Activity 3: The this keyword

#### Task-7. Add a method to the book that uses the this keyword to return a string with the books title and year and log the result of calling this method.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  getTitleAndYear: function () {
    return `${this.title} (${this.year})`;
  },
};
console.log(book.getTitleAndYear());
```

</p>
</details>

### Activity 4: Object Iteration

#### Task-8. Use for...in method to iterate over the properties of book object and log each proprty and its value.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  getTitleAndYear: function () {
    return `${this.title} (${this.year})`;
  },
};
// Use for...in loop to iterate over the properties of the book object
for (let property in book) {
  console.log(`${property}: ${book[property]}`);
}
```

</p>
</details>

#### Task-9. use object.keys and object.values method to log all the keys and values of the object.

<details><summary><b>Answer</b></summary>
<p>

```javascript
// Create a book object
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  getTitleAndYear: function () {
    return `${this.title} (${this.year})`;
  },
};

// Log all keys of the book object
const keys = Object.keys(book);
console.log("Keys:", keys);

// Log all values of the book object
const values = Object.values(book);
console.log("Values:", values);
```

</p>
</details>
