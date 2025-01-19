// 1. JSON => parse(), stringify()

const student = {
  name: 'Salib Khan',
  age: 32,
  movies: ['king khan', 'Dhakar Mastan']
}

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);

// console.log(studentObj);


// 2. fetch

fetch('url')
  .then(res => res.json())
  .then(data => console.log(data))

// 3. keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [23, 54, 56, 44, 23, 45];

numbers.forEach(num => console.log(num))
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in

// add or remove from an array
const products = [
  {name: 'laptop', price: 32000, brand: 'lenovo', color:'silver'},
  {name: 'phone', price: 7000, brand: 'realme', color:'black'},
  {name: 'watch', price: 3000, brand: 'casio', color:'silver'},
  {name: 'sunglass', price: 300, brand: 'ray ban', color:'black'},
  {name: 'camera', price: 9000, brand: 'canon', color:'gray'}
];

const newProduct = {name: 'webcam', price: 700, brand: 'Lal'};

// copy produts array and then add newProduct

const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone
const remaining = products.filter(product => product.name !== 'phone')