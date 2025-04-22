# JavaScript DOM and Manipulation

## 1. What is the DOM?

- **DOM** stands for **Document Object Model**.
- It represents an HTML document as a tree structure in memory.
- Each part of the web page (elements, text, etc.) becomes an object that JavaScript can access and manipulate.

### Visual Example:

```html
<body>
  <h1>Hello</h1>
  <p>This is a paragraph.</p>
</body>
```

## 2. Accessing Elements

Use JavaScript to select elements from the page.

### Methods:

```javascript
document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("tag");
document.querySelector("selector");
document.querySelectorAll("selector");
```

## 3. Changing Content

JavaScript allows you to change the content of HTML elements using:

### 🔹 innerText

- Updates only the text inside the element.

### 🔹 innerHTML

- Can insert HTML tags along with text.

---

### 🧪 Example:

```html
<p id="para">This is original content.</p>
```

```javascript
document.getElementById("para").innerText = "Updated content!";
document.getElementById("para").innerHTML = "<strong>Updated content!</strong>";
```

## 4. Changing Styles with JavaScript

You can use JavaScript to modify the style (CSS) of any HTML element directly.

### 🛠️ Syntax:

```javascript
element.style.property = "value";
```

### 🔹 Example:

```html
<div id="box">This is a box</div>
```

```javascript
let box = document.getElementById("box");
box.style.color = "blue"; // Changes text color
box.style.backgroundColor = "lightgray"; // Changes background
box.style.fontSize = "20px"; // Changes font size
```

## 5. Changing Attributes

JavaScript allows you to update or read HTML element attributes using:

### 🔹 setAttribute()

- Sets or updates the value of an attribute.

### 🔹 getAttribute()

- Retrieves the current value of an attribute.

---

### 🧪 Example:

```html
<img id="img" src="old-image.jpg" alt="Old Image" />
```

```javascript
// Change the image source
document.getElementById("img").setAttribute("src", "new-image.jpg");

// Get the current image source
let currentSrc = document.getElementById("img").getAttribute("src");
console.log(currentSrc); // Output: new-image.jpg
```

## 6. Creating and Removing Elements

JavaScript allows you to dynamically create new elements and remove existing ones in the DOM.

### 🔹 Creating New Elements

```javascript
let newElement = document.createElement("tagname"); // Create a new element
newElement.innerText = "New content"; // Add content to the new element
document.body.appendChild(newElement); // Append the element to the DOM
```

### 🔹 Removing Elements

```javascript
let elementToRemove = document.getElementById("id");
elementToRemove.remove(); // Remove the element from the DOM
```

### 🔹 Example:

```html
<p id="para">This is a paragraph.</p>
```

```javascript
// Create and add a new paragraph
let newP = document.createElement("p");
newP.innerText = "This is a new paragraph.";
document.body.appendChild(newP);

// Remove an existing paragraph
document.getElementById("para").remove();
```

## 7. Event Handling

JavaScript allows you to respond to user actions (like clicks, typing, etc.) using events.

### 🔹 Inline Event Handling

This method attaches the event directly within the HTML tag:

```html
<button onclick="alert('You clicked me!')">Click Me</button>
```

### 🔹 Using addEventListener()

`addEventListener()` is the recommended way to add event listeners because it separates JavaScript from HTML.

```javascript
element.addEventListener("event", function () {
  // Your code here
});
```

### 🔹 Example:

```html
<button id="btn">Click Me</button>
```

```javascript
document.getElementById("btn").addEventListener("click", function () {
  alert("Button was clicked!");
});
```

## 8. Practice Exercises

### 1: Change heading text on button click.

### 2: Change background color when user clicks a button.

### 3: Add a new item to a list using JavaScript.

### 4: Show/hide an image using a toggle button.

### 5: Create a mini to-do list (add/remove tasks).
