// 1. Falsy ==> '', 0, false, null, undefined
// check truthy
let myVar = 5;
if(myVar){
  myVar = myVar * 100;
}else{
  myVar = 0;
}
let myMoney = 50;
// check falsy or negative
if(!myMoney){
  myMoney = myMoney + 100;
}else{
  myMoney = myMoney;
}

const money = 80;
let food;
if(money > 100){
  food = 'biryani';
}else{
  food = 'cha biscuit'
}

let food1 = money > 100 ? 'biryani': 'cha biscuit';
// console.log(food1);
let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

// 

const num1 = 52;

// console.log(num1);
// number to string conversion
const numStr = num1 + '';
// console.log(numStr);

// string to number conversion
const input = '560';
const inputNum = +input;

// console.log(inputNum);

const isActive = false;

const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

// isActive ? showUser() : hideUser();

// Use && if the left side is true then right side will be execcuted
isActive && showUser();

// Use || if the left side is false then right side will be execcuted
isActive || showUser();

// toggle 
isActive = !isActive