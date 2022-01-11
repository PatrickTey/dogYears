//Human age
let myAge = 20;
let earlyYears = 2;
// equation for first 2 years 
earlyYears *= 10.5;  
//math for other years 
let laterYears = myAge - 2;
//equation for the rest of the years
laterYears *= 4; 
// adding to get final results 
const myAgeInDogYears =  earlyYears + laterYears;
//storing my name in lowercase
let myName = 'Patrick'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${ myAgeInDogYears} years old in dog years.`);