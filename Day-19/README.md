<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Day-19 (JavaScript Challenge) - Regular Expression</h1>
</div>

---

### Activity 1: Basic Regular Expression

#### Task-1. Write a regular expression to match a simple pattern (e.g., match all ocurences of the word "javaScript" in a string). Log the matches

<details><summary><b>Answer</b></summary>
<p>

```javascript
const str = "javaScript is a versatile language. Many people love javaScript.";
const regex = /javaScript/g;
const matches = str.match(regex);

console.log(matches);

```

</p>
</details>

#### Task-2. Write a regular expression to match all the digits in a string. Log the matches.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const str = "There are 123 apples, 456 bananas, and 789 oranges.";
const regex = /\d+/g;
const matches = str.match(regex);

console.log(matches);

```

</p>
</details>