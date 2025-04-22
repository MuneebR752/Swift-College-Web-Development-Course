# JavaScript Arrays and Objects Lecture

## Part 1: JavaScript Arrays

### 1. What is an Array?

An array is a list-like object used to store multiple values in a single variable.

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

### 2. Accessing Array Elements

Use index numbers (starting from 0):

```javascript
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango
```

### 3. Array Length

```javascript
console.log(fruits.length); // 3
```

### 4. Common Array Methods

| Method       | Description             | Example                         |
| ------------ | ----------------------- | ------------------------------- |
| `push()`     | Add item to end         | `fruits.push("Orange");`        |
| `pop()`      | Remove last item        | `fruits.pop();`                 |
| `shift()`    | Remove first item       | `fruits.shift();`               |
| `unshift()`  | Add item to start       | `fruits.unshift("Strawberry");` |
| `indexOf()`  | Get index of an item    | `fruits.indexOf("Banana");`     |
| `includes()` | Check if a value exists | `fruits.includes("Apple");`     |

### 5. Looping through Arrays

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

## Part 2: JavaScript Objects

### 1. What is an Object?

An object stores data in key-value pairs.

```javascript
let student = {
  name: "Ali",
  age: 20,
  grade: "A",
};
```

### 2. Accessing Object Properties

```javascript
console.log(student.name); // Ali
console.log(student["age"]); // 20
```

### 3. Updating and Adding Properties

```javascript
student.age = 21; // Update existing property
student.city = "Lahore"; // Add new property
```

### 4. Looping through Object Properties

```javascript
for (let key in student) {
  console.log(key + ": " + student[key]);
}
```

### 5. Array of Objects (Common in real apps)

```javascript
let students = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 22 },
];
console.log(students[1].name); // Sara
```

## Practice Ideas

- **Array Practice**: Create an array of 5 colors and print them.
- **Object Practice**: Make an object for a book with `title`, `author`, and `pages` properties.
- **Array Manipulation**: Add a new student to the `students` array.
- **Loop Practice**: Create a loop to print all student names from an array.
- **Object Manipulation**: Update an existing property and add a new property to an object.
