console.log('first ...');

const steps = [5000, 7000, 8000, 4000, 6000, 7500, 9000];

for (i = 0; i < steps.length; i++) {
  console.log(
    `
  Day ${i + 1} ` +
      `
  
  steps  ${steps[i]}`
  );
}
console.log('second ...');
const expenses = [150, 200, 100, 300, 250, 400, 50];
let total_expenses = 0;
for (i = 0; i < expenses.length; i++) {
  total_expenses = total_expenses + expenses[i];
}
console.log('total expenses for the week:' + total_expenses);
console.log('third...');
const expenses_1 = [150, 200, 100, 300, 250, 400, 50];
for (i = 0; i < expenses_1.length; i++) {
  if (expenses_1[i] > 200) console.log('Day' + (i + 1) + ':' + expenses_1[i]);
}

const income = [500, 700, 800, 400, 600];
const expenses_2 = [300, 200, 500, 300, 400];

for (i = 0; i < income.length; i++) {
  const profit = income[i] - expenses_2[i];

  console.log('Day' + (i + 1) + ':' + profit);
}

const temp = [28, 30, 35, 33, 31, 29, 36];
let max = temp[0];

for (i = 0; i < temp.length; i++) {
  if (temp[i] > max) {
    max = temp[i];
  }
}

console.log('the highest temp:' + max);

const distances = [2.5, 3.0, 2.8, 4.0, 3.2, 2.9, 3.5, 4.1, 3.8, 3.0];
for (i = 0; i < distances.length; i++) {
  console.log('Day' + (i + 1) + ':' + distances[i] + 'KMs');
}
//1
function getArrayLength(arr) {
  return arr.length;
}

let myArray = [1, 2, 3, 4, 5];
let arrayLength = getArrayLength(myArray);

console.log(arrayLength);

//4
function findMissingNumber(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;

  let actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5]));

//5
const array = [1, 2, 3, 4, 2, 3, 5];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray);

//
function rotateArrayLeft(arr, k) {
  k = k % arr.length;
  for (let i = 0; i < k; i++) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
  }

  return arr;
}
let arr = [1, 2, 3, 4, 5];
let k = 3;
console.log(rotateArrayLeft(arr, k));

function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
console.log(isPalindrome('racecar'));

//
function arrayLengths(arr) {
  let lengths = [];

  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  return lengths;
  console.log(arrayLengths(['apple', 'banana', 'cherry']));

  function sortnumbers(arr) {
    return arr.sort((a, b) => a - b);
  }
  console.log(sortnumbers([3, 1, 4, 2]));
}

///1
let price = '$2';
let product = 'Apple';
console.log(`${product} costs ${price}`);

//2
let name = 'Tharuni';
let message_received = 'You have 0 notifications';
console.log(`Hey ${name},${message_received}`);
//3
let first_value = 15;
let second_value = 7;

console.log(
  `The result of ${first_value} + ${second_value} is ${
    first_value + second_value
  }`
);

//4
let task = 'Code Review';
let deadline = 'Dec 12th';
let status = 'Pending';
console.log(`${task}
${deadline}
${status}`);
//5
console.clear;
for (let i = 1; i <= 15; i++) {
  if (i % 2 == 0 && i % 3 == 0) {
    console.log('the numbers are:', i);
  }
}
//5
let n = 2;
let x = 3;
let r = 1;
for (let i = 1; i <= x; i++) {
  r *= n;
}
console.log(`${n}^${x}=${r}`);
//6
num_value = 12345;
for (i = 0; i < num_value.length; i++) {
  r;
}
//7num
let arr5 = 'JavaScript';
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//8
let sum = 0;
for (let num = 1; num <= 50; num++) {}


function printNumbers(input,lastdigit){
  let res= '';
  
  for(let i=1;i<=lastdigit;i++){
    if(i!== input){
      res += i + ',';
    }


  }
  return res;
}

let input = 7;
let lastDigit = 10;
console.log("printing numbers from:",printNumbers(input, lastDigit));


function printEvenNumbers(start,end){
  let total = '';
  for(i=start;i<=end;i++){
    if(i%2 ==0){
      total += i +',';
    }
    
  }
  return total;
}
let start = 10;
let end = 30;
console.log(printEvenNumbers(start,end));


function findPrimeNumbers(start,end){
  let prime_num = '';
  for(i=1;i<=100;i++){

    if(i %2 !== 0){
      prime_num += i;

    }
  }
  return prime_num
  
}
function reverseNumber(num){

}

function reverseNumber(num) {
  
  let reversedNum = num.toString().split('').reverse().join('');
  
  return parseInt(reversedNum, 10);
}

let num = 12345;
console.log('The reversed number is:', reverseNumber(num));  


function printCharacters(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
      result += str[i] + ' '};

  console.log(result);  
}

let str = "JavaScript";
printCharacters(str);  


function sumOfOddNumbers(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i += 2) {  
      sum += i;
  }

  return sum;
}

console.log('The sum of odd numbers from 1 to 50 is:', sumOfOddNumbers(1, 50)); 

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
      result *= i; 
      
  }
return result;
}
let number = 6;
console.log(`${n}! = ${factorial(number)}`);  


function multiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
  }
}

let num_1 = 5;
multiplicationTable(num_1);


function checkPalindrome(str) {
  const TEMP = str; 
  let reversedStr = '';

  
  for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
  }
  if (TEMP === reversedStr) {
      console.log(`${TEMP} is a palindrome.`);
  } else {
      console.log(`${TEMP} is not a palindrome.`);
  }
}
checkPalindrome("madam");  


function power(x, n) {
  let result = 1; 
  for (let i = 1; i <= n; i++) {
      result *= x;  
  }
  return result;
}

let x1 = 2;
let n1 = 3;
console.log(`${x1}^${n1} = ${power(x1, n1)}`);

function minValue(inputArray){
  let res = inputArray[0];
  for(i=0;i<inputArray.length;i++){
    if(res>inputArray[i]){
      res = inputArray[i];
    }
  }
  return res;
}
console.log(minValue([14,253,34,45]));


function reverseArray(inputArray){
  let resArray = [];
  for(i=inputArray.length-1;i>=0;i--){
resArray.push(inputArray[i]);
  }
  return resArray;
}
console.log('Reverse Array:',reverseArray([1,2,3,4]));

function filterEvenNumbers(inputArray){
  let res = [];
  for(i=0;i<=inputArray.length;i++){
   if(inputArray[i]%2==0){
     res += inputArray[i]+' ';
   }
  }
  return res ;
}
console.log('Even numbers :',filterEvenNumbers([1,2,3,5,6,8]));

function filterOddNumbers(inputArray){
  let res = [];
  for(i=0;i<inputArray.length;i++){
   if(inputArray[i]%2!==0){
     res += (inputArray[i]+' ');
   }
  }
  return res ;
}
console.log('Odd numbers:',filterOddNumbers([1,2,3,5,6]));

function removeDuplicates(inputArray){
  let res = [];
  for(i=0;i<inputArray.length;i++){
    if(inputArray[i]!==inputArray[i+1]){
    res.push(inputArray[i]);
  }

}
return res;
}
console.log('Remove Duplicates:',removeDuplicates([1,1,2,3,4,4,5]));

function AverageOfArray(inputArray){
  let avg = 0;
  for(let i=0;i<inputArray.length;i++){
     avg +=  inputArray[i];
    
  }
  let res = avg / inputArray.length;
  return res;
}
console.log('Average Of Array:',AverageOfArray([10,20,30,40]));

function findIndexValue(inputArray){
  let indexValue = 0;
  //let inputValue = prompt("Enter numbers separated by commas (e.g., 10,30,40):");

  for(i=0;i<inputArray.length;i++){
    if(inputValue == inputArray[i]){
      indexValue = i;
    }
    
    

  }
  return indexValue;

}
console.log('Index Value is:',findIndexValue([1,2,3,5]));

function ConcatArray(inputArray1,inputArray2){
  let concatarray = [];
  for(let i=0;i<inputArray1.length;i++){
  for (let j = 0;j<inputArray2.length;i++){
    concatarray.push(inputArray1[i]+inputArray2[j]);
   
    }
  }
  return concatarray;
}
console.log('Concate Array:',ConcatArray([[1, 2, 3], [4, 5, 6]]));


