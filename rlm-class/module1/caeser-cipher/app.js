//CAESER CIPHER//

// var readline = require('readline-sync');
// var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
// var shift = parseInt(readline.question('How many letters would you like to shift? '));

// one input - text
// one input - number positions

//PROBLEM SOLVING PRACTICE//

//#1//
// const numbers = []

// function returnLargest(arr){
//     for(let i = 0; i < arr.length; i++){

//     }
//     console.log();
// }
// returnLargest()

//#2 Write a function that takes an array of words and a character and return each word that has that letter present.// 

// function wordsCharacters(arr, str){
//     const newArr = []
//     for(i = 0; i < arr.length; i++){
//         if(arr[i].includes(str)){
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr)
// }

// wordsCharacters(["#3", "$$$", "C%4!", "Hey!"], "!");



// function letterPresent(){

//#3//
// function isDivisible(num1, num2) {
//   if (num1 % num2 === 0) {
//     console.log("Yes, num1 is divisible " + true);
//   } else {
//     console.log("WRONG!");
//   }
// }
// isDivisible();

// - PRACTICE - using .toLowerCase(), .toUpperCase(), .slice(), .length and .concat(), make a capitalized version

// const frozenTwo = "Is the whole “putting us in mortal danger” going to be a regular thing?"
// const frozenQuote = "Here is a quote from Frozen II, "

// const twoStrings = frozenQuote.concat(frozenTwo);
// console.log(twoStrings);

// const lowerCase = frozenTwo.toLowerCase();
// console.log(lowerCase)

// const upperCase = frozenTwo.toUpperCase();
// console.log(upperCase)

// const sliceFrozen = frozenTwo.slice(7, 12);
// console.log(sliceFrozen)

// console.log(frozenTwo.length)

// meats = ["chicken", "steak", "fish"];

// const noBrackets = meats.split(' ')
// console.log(noBrackets)

// const tuna = cannedMeats.indexOf("steak")
// console.log(tuna)

// const reverseMeats = cannedMeats.reverse();
// console.log(reverseMeats)

// let name = "Clint";
// let age = 35;

// console.log(`${name} loves to eat ${cannedMeats} even if he is only ${age}`)

// console.log(`${name} loves to play golf in Hawaii. ${name} is the young age of ${age}. `)

const cutUpTwo = "ethan"
const phone = "801.555.5555";
const areaCode = phone.slice(0, 3);
const cutUp = phone.split("").join(`${cutUpTwo}`);


console.log(areaCode)
console.log(cutUp)

// const addTwoNumbers = (num1, num2) => {
//     return (num1 + num2);
// }
// console.log(addTwoNumbers(2, 5));

// How would one iterate over a nested array? 
    // nested for loop
// How do you instantiate something from a constructor?
    // using the New
// Would it be worth it to write min-max questions for grid?

// const arr = [[3, 4, 2], [1, 2, 3]]
// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length; j++){
//     console.log(arr[i][j]);
//     }
// }

// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         console.log
//     }
// }

// const myGreeting = document.getElementById("greeting")
// myGreeting.textContent = "Long time no see!"

// const myGreeting = document.getElementById("id tag")
// myGreeting.textContent = 