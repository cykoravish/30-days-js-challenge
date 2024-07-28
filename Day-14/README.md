<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-14 (JavaScript Challenge) -   Classes</h1>
</div>

---

### Activity 1: Class Definition

#### Task-1. Define a class person with property name and age and a method to return a greeting message. Create an instance of class and log the greeting message.

<details><summary><b>Answer</b></summary>
<p>

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Create an instance of the Person class
const person1 = new Person('Ravish', 25);

// Log the greeting message
console.log(person1.getGreeting());

```

</p>
</details>

#### Task-2. Add a method to the person class that updates the age property and logs the updated age.

<details><summary><b>Answer</b></summary>
<p>

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Age updated to ${this.age} years old.`);
  }
}

// Create an instance of the Person class
const person1 = new Person('Ravish', 25);

// Log the greeting message
console.log(person1.getGreeting());

// Update the age and log the updated age
person1.updateAge(26);


```

</p>
</details>

### Activity 2: Class Inheritance

#### Task-3. Define a class student that extends the person class. Add a property studentId and a method to return student ID in the message. Log the overriden greeting message

<details><summary><b>Answer</b></summary>
<p>

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Age updated to ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return `My student ID is ${this.studentId}.`;
  }

  getGreeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

// Create an instance of the Student class
const student1 = new Student('Ravish', 25, 'S123456');

// Log the overridden greeting message
console.log(student1.getGreeting());

```

</p>
</details>

#### Task-4. Override the greeting method in the studentt class to include the student ID in the message. Log the overrided greeting message.

<details><summary><b>Answer</b></summary>
<p>

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getGreeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

// Create an instance of the Student class
const student1 = new Student('Ravish', 25, 'S123456');

// Log the overridden greeting message
console.log(student1.getGreeting());

```

</p>
</details>

### Activity 3: Static Methods and Properties

#### Task-5. Add a static method to the person class that returns a generic greeting message. call the static method without creating an instance of the class and log the message.

<details><summary><b>Answer</b></summary>
<p>

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  static getGenericGreeting() {
    return `Hello, welcome!`;
  }
}

// Call the static method and log the message
console.log(Person.getGenericGreeting());

```

</p>
</details>

#### Task-6. Add a static property to the student class to keep the track of number of students created. Increment this property in the constructor and log the total number of students.

<details><summary><b>Answer</b></summary>
<p>

```javascript
class Student extends Person {
  static studentCount = 0;

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount += 1;
  }

  static logStudentCount() {
    console.log(`Total number of students: ${Student.studentCount}`);
  }
}

// Create instances of the Student class
const student1 = new Student('Ravish', 25, 'S123456');
const student2 = new Student('Alex', 22, 'S123457');

// Log the total number of students
Student.logStudentCount();


```

</p>
</details>

### Activity 4. Getters and Setters.

#### Task-7. Add a getter method to the persons class to return the full name (assume a firstname and lastname property). Create an instance and log the fullname using getters.

<details><summary><b>Answer</b></summary>
<p>

```javascript
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getGreeting() {
    return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
  }
}

// Create an instance of the Person class
const person1 = new Person('Ravish', 'Kumar', 25);

// Log the full name using the getter
console.log(person1.fullName);

// Log the greeting message
console.log(person1.getGreeting());

```

</p>
</details>

#### Task-8. Add a setter method to the persons class to update the name properties (firstname and lastname). update the name using setter and log the updated name.

<details><summary><b>Answer</b></summary>
<p>

```javascript
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getGreeting() {
    return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
  }
}

// Create an instance of the Person class
const person1 = new Person('Ravish', 'Kumar', 25);

// Log the initial full name
console.log(person1.fullName);

// Update the name using the setter
person1.fullName = 'Ravi Sharma';

// Log the updated full name
console.log(person1.fullName);

// Log the updated greeting message
console.log(person1.getGreeting());

```

</p>
</details>