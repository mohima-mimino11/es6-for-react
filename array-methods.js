const products = [
  {name: 'laptop', price: 32000, brand: 'lenovo', color:'silver'},
  {name: 'phone', price: 7000, brand: 'realme', color:'black'},
  {name: 'watch', price: 3000, brand: 'casio', color:'silver'},
  {name: 'sunglass', price: 300, brand: 'ray ban', color:'black'},
  {name: 'camera', price: 9000, brand: 'canon', color:'gray'}
];
// 1. map()
const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

// 2. forEach()
// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));

products.forEach(product => {


})

// 3. Filter

const cheap = products.filter(product => product.price <= 5000);

// console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));

console.log(specificName);

// 4. find()

const special = products.find(product => product.name.includes('n'));

console.log(special);


