// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
// 2. 6 basic Conditions >, <, ===, !==, <=, >=
// multiple conditions: && ,||
if(fatherName === 'arnold' || season === 'rainy'){

}else if(fatherName === 'Arnold'){

}
else{

}

// 3. array: index, length, push(), pop()
const numbers = [89,78, 12, 98];

// 4. for loop
for(let i = 0; i < numbers.length; i++){
  const number = numbers[i];
  console.log(number);
}

// 5. function
function multiply(num1, num2){
  const result = num1 * num2;
  return result;
}

const output = multiply(35, 78)

// 6. Object
// 3 ways to access property by name
const student = {
  name: 'Salib Khan',
  age: 32,
  movies: ['king khan', 'Dhakar Mastan']
}

console.log(student.age);//direct by property
console.log(student['age']); // access via property name string



