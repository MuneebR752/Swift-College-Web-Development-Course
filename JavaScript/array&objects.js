let evenNums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

document.writeln(evenNums[6]);
document.writeln(evenNums.length);

console.log(evenNums);

evenNums.push(22);

// console.log(evenNums);

evenNums.pop();

// console.log(evenNums);

// console.log(evenNums.indexOf(14));
console.log(evenNums.includes(14));

let product = {
  name: "brush",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, dicta!",
  price: 500,
  inStock: true,
};
product.price = 250;
product.company = "Colgate";

console.log(product.name);
console.log(product["desc"]);
console.log(product.price);
console.log(product["inStock"]);
console.log(product["company"]);

let products = [
  {
    name: "brush",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, dicta!",
    price: 500,
    inStock: true,
  },
  {
    name: "bottle",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, dicta!",
    price: 150,
    inStock: false,
  },
  {
    name: "cap",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, dicta!",
    price: 350,
    inStock: true,
  },
  {
    name: "phone",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, dicta!",
    price: 20000,
    inStock: true,
  },
];

let students = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 22 },
];

let student3 = {
  name: "Ahmad",
  age: 24,
};

students.push(student3);

console.log(students);
