// Task-1. Select an html element by its id and change its text cotent.

/*const heading = document.getElementById("heading");
heading.textContent = "This is modified heading";*/

// Task-2. Select an html element by its class and change its background color.

/*const about = document.getElementsByClassName("aboutMe");
about[0].style.backgroundColor = "red";*/

// Task-3. Create a new div element with some content and append it to the body.

/*const div = document.createElement("div");
div.innerHTML = `<h2>hellow guys, what is up ?</h2>
<p>i hope you all are doing great</p>`;
document.body.appendChild(div);*/

// Task-4. Create a new li element and add it to an ui list.

/* const li = document.createElement("li");
li.innerText = "item 2"
const existingList = document.querySelector(".unorderedList");
existingList.appendChild(li); */

//Task-5: select an html element and remove it from dom.

/* const h3 = document.getElementById("h3");
   h3.remove(); */

//Task-6: Remove the last child of a specific HTML element.

/*const box = document.getElementById('box');
box.lastElementChild.remove();*/

// Task-7: select an html element and change one of its attribute.

/*const button = document.getElementById("btn");
button.removeAttribute("disabled");*/

//Task-8: Add and remove a CSS class to/from an HTML element.

/*const boldText = document.getElementById("boldText");
boldText.classList.add("bold");
console.log(boldText);
boldText.classList.remove("bold");
console.log(boldText);*/


//Task-9: Add a click event listener to a button that changes the text content of a paragraph.

/*let firstText = true;
function changeText() {
  const actionButton = document.getElementById("actionBtn");
  const para = document.getElementById("para");
  if (firstText) {
    para.innerText = "Dipu is gonna be her gf";
    firstText = false;
  } else {
    para.innerText = "Ravish is a Smart boy.";
    firstText = true;
  }
}*/


//Add a mouseover event listener to an element that changes its border color.

/*const myElement = document.getElementById("myElement");
 // Add mouseover event listener to change border color
 myElement.addEventListener("mouseover", function() {
    myElement.classList.add("borderColorChange");
});

// Add mouseout event listener to revert border color
myElement.addEventListener("mouseout", function() {
    myElement.classList.remove("borderColorChange");
});
console.log(myElement)*/