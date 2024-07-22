//Task-1. Add a click event listener to a button that changes the text content of a paragraph.
const btn = document.getElementById("btn");
const para = document.getElementById("para");
btn.addEventListener("click", () => {
  para.style.color = "blue";
});

//Task-2. Add a double click event listener to an image that toggle its visibility.
const img1 = document.getElementById("img1");
img1.addEventListener("dblclick", function () {
  img1.classList.toggle("hidden");
});

//Task-3. Add a mouseover event listener to an element that changes its background color.
/*const box = document.getElementById('box');
box.addEventListener('mouseover', ()=>{
    box.style.backgroundColor = 'blue';
});*/

//Task-4. Add a mouseover event listener to an element that resets its background color.
/*const box = document.getElementById("box");
box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "white";
});*/

//Task-5. Add a keyboard event to an input field that logs the key pressed to the console.
/*const input = document.getElementById('inp');
input.addEventListener('keydown', (event)=>{
    console.log(event.key);
})*/

//Tasak-6: Add a keyup event listner to an input field that displays the current value in a paragraph.
/* const input = document.getElementById('myInput');
  const display = document.getElementById('display');
  input.addEventListener('keyup', () => {  
   display.textContent = input.value;
  }); */

//Task-7. Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
/*  // Select the form element
   const form = document.getElementById('myForm');

   // Add submit event listener
   form.addEventListener('submit', (event) => {
       // Prevent default form submission
       event.preventDefault();

       // Create a FormData object from the form element
       const formData = new FormData(form);

       // Log the form data to the console
       for (let [name, value] of formData) {
           console.log(`${name}: ${value}`);
       }
   }); */

//Task-8.  Add a change event listener to a select dropdown that displays the selected value in a paragraph

/*// Select the dropdown and paragraph elements
 const select = document.getElementById('mySelect');
 const display = document.getElementById('display');

 // Add change event listener
 select.addEventListener('change', () => {
     // Update the paragraph's text content with the selected value
     display.textContent = `Selected: ${select.value}`;
 });*/

// Task-9. Add a click event listener to a list that logs the text content of the clicked list item using event deligation.
/*  // Select the parent list element
   const list = document.getElementById('myList');

   // Add click event listener with event delegation
   list.addEventListener('click', (event) => {
       // Check if the clicked element is a list item
       if (event.target && event.target.nodeName === 'LI') {
           // Log the text content of the clicked list item
           console.log(event.target.textContent);
       }
   }); */

//Task-10. Add a event listener to a parent element that listens for events from dynamicallly added child elements.

/*// Select the parent element
const parent = document.getElementById("parent");
const myList = document.getElementById("myList");
const addButton = document.getElementById("addButton");

// Add click event listener with event delegation
parent.addEventListener("click", (event) => {
  // Check if the clicked element is a dynamically added list item
  if (event.target && event.target.nodeName === "LI") {
    // Log the text content of the clicked list item
    console.log(`List item clicked: ${event.target.textContent}`);
  }
});

// Function to add a new list item dynamically
function addListItem() {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${myList.children.length + 1}`;
  myList.appendChild(newItem);
}

// Add click event listener to the button to add new list items
addButton.addEventListener("click", addListItem);*/
