

function printNumbers(input,lastdigit){
  let result_11= '';
  
  for(i=input;i<=lastdigit;i++){
    if(i!== input){
      result_11 += i + '';
    }


  }
  return result_11;
}

let input = 4;
let lastDigit = 10;
console.log("printing numbers from:",printNumbers(input, lastDigit));

function printEvenNumbers(start,end){
  let total = '';
  for(i=start;i<=end;i++){
    if(i%2 ==0){
      total += i +',';
    }
    
  }
}
return total;
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
      result += str[i] + ', '};

  console.log(result.slice(0, -2));  
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
let n = 6;
console.log(`${n}! = ${factorial(n)}`);  


function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
  }
}

let num = 5;
multiplicationTable(num);


function checkPalindrome(str) {
  let TEMP = str; 
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


