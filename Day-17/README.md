<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-17 (JavaScript Challenge) - Data Structures</h1>
</div>

---

### Activity 1: Linked List

#### Task-1. Implement a Node class to represent an elemennt in a linked list with properties value and next. 

<details><summary><b>Answer</b></summary>
<p>

```javascript
class Node {
    constructor(value) {
        this.value = value;  // The data for this node
        this.next = null;    // A pointer to the next node in the list, initially null
    }
}

// Example usage:
const firstNode = new Node(10);
const secondNode = new Node(20);

firstNode.next = secondNode; // Link the first node to the second node

console.log(firstNode.value); // Output: 10
console.log(firstNode.next.value); // Output: 20


```

</p>
</details>

#### Task-2. Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and disp
lay all nodes.

<details><summary><b>Answer</b></summary>
<p>

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNodeToEnd(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeNodeFromEnd() {
        if (this.head === null) {
            console.log("List is empty.");
            return;
        }

        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        current.next = null;
    }

    displayNodes() {
        let current = this.head;
        while (current !== null) {
            process.stdout.write(current.value + " -> ");
            current = current.next;
        }
        console.log("None");
    }
}

// Example usage
const ll = new LinkedList();
ll.addNodeToEnd(10);
ll.addNodeToEnd(20);
ll.addNodeToEnd(30);

console.log("Linked List after adding nodes:");
ll.displayNodes();

ll.removeNodeFromEnd();
console.log("Linked List after removing a node from the end:");
ll.displayNodes();

```

</p>
</details>

### Activity 2. Stack

#### Task-3. Implement a Stack calss with method (add element), pop(remove element) and peek(view the top element).

<details><summary><b>Answer</b></summary>
<p>

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // Method to add an element to the stack
  add(element) {
    this.items.push(element);
  }

  // Method to remove the top element from the stack
  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.items.pop();
  }

  // Method to view the top element of the stack
  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.items[this.items.length - 1];
  }

  // Helper method to check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Helper method to get the size of the stack
  size() {
    return this.items.length;
  }
}

// Example usage:
const stack = new Stack();
stack.add(10);
stack.add(20);
stack.add(30);

console.log(stack.peek()); // Output: 30
console.log(stack.pop());  // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2

```

</p>
</details>

#### Task-4. use the stack class to reverse a string by pushing all characters onto the stck and then popping them off.

<details><summary><b>Answer</b></summary>
<p>

```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    printStack() {
        return this.items.toString();
    }
}

function reverseString(str) {
    const stack = new Stack();

    // Push all characters of the string onto the stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    let reversedStr = '';

    // Pop all characters from the stack to reverse the string
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Example usage
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"

```

</p>
</details>