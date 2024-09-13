

function calculateSum(a: number, b: number) {
    return a + b;
}

let calculatedNumbers = calculateSum(5, 4);
console.log(calculatedNumbers);

const numbers = [1, 2, 3, 4, 5];
let total = 0;


numbers.forEach(num: number => {
    total += num;
});
console.log('Total:', total);


function concatStrings(string1: string, string2: string) {
    return string1 + string2;
}

let concatedStrings = concatStrings("hello,", " World!");
console.log(concatedStrings);



function multiplyNumbers(a: number, b: number) {
    return a * b;
}

let product = multiplyNumbers(6, 7);
console.log('Product:', product);


function subtractNumbers(a: number, b: number) {
    return a - b;
}

let difference = subtractNumbers(10, 4);
console.log('Difference:', difference);




function divideNumbers(a: number, b: number) {
    return a / b;
}

let quotient = divideNumbers(20, 5);
console.log('Quotient:', quotient);



function findMax(a: number, b: number) {
    return a > b ? a : b;
}

let maxNumber = findMax(8, 10);
console.log('Max number:', maxNumber);



function isEven(number: number) {
    return number % 2 === 0;
}

let checkEven = isEven(6);
console.log('Is even:', checkEven);


function reverseString(str: string) {
    return str.split('').reverse().join('');
}

let reversedString = reverseString("JavaScript");
console.log('Reversed string:', reversedString);



function getFactorial(n: number) {
    if (n === 0) return 1;
    return n * getFactorial(n - 1);
}

let factorial = getFactorial(5);
console.log('Factorial:', factorial);



function isPalindrome(str: string) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

let palindromeCheck = isPalindrome("racecar");
console.log('Is palindrome:', palindromeCheck);



function convertToUpperCase(str: string) {
    return str.toUpperCase();
}

let upperCaseString = convertToUpperCase("hello");
console.log('Uppercase:', upperCaseString);



function convertToLowerCase(str: string) {
    return str.toLowerCase();
}

let lowerCaseString = convertToLowerCase("HELLO");
console.log('Lowercase:', lowerCaseString);



function sumArray(arr: number[]) {
    return arr.reduce((acc, num) => acc + num, 0);
}

let arraySum = sumArray([1, 2, 3, 4, 5]);
console.log('Array sum:', arraySum);


function findMin(a: number, b: number) {
    return a < b ? a : b;
}

let minNumber = findMin(2, 8);
console.log('Min number:', minNumber);


function squareNumber(n: number) {
    return n * n;
}

let squaredNumber = squareNumber(4);
console.log('Squared number:', squaredNumber);



function cubeNumber(n: number) {
    return n * n * n;
}

let cubedNumber = cubeNumber(3);
console.log('Cubed number:', cubedNumber);



function findLength(str: string) {
    return str.length;
}

let stringLength = findLength("JavaScript");
console.log('String length:', stringLength);


function isPositive(n: number) {
    return n > 0;
}

let positiveCheck = isPositive(7);
console.log('Is positive:', positiveCheck);


function findAverage(arr: number[]) {
    return sumArray(arr) / arr.length;
}

let average = findAverage([10, 20, 30, 40, 50]);
console.log('Average:', average);



function isOdd(n: number) {
    return n % 2 !== 0;
}

let checkOdd = isOdd(7);
console.log('Is odd:', checkOdd);


function checkVowel(ch: string) {
    return ['a', 'e', 'i', 'o', 'u'].includes(ch.toLowerCase());
}

let vowelCheck = checkVowel('a');
console.log('Is vowel:', vowelCheck);



function findSquareRoot(n: number) {
    return Math.sqrt(n);
}

let squareRoot = findSquareRoot(16);
console.log('Square root:', squareRoot);



function convertToFahrenheit(celsius: number) {
    return (celsius * 9/5) + 32;
}

let fahrenheit = convertToFahrenheit(25);
console.log('Fahrenheit:', fahrenheit);


function convertToCelsius(fahrenheit: number) {
    return (fahrenheit - 32) * 5/9;
}



let celsius = convertToCelsius(77);
console.log('Celsius:', celsius);


function calculateAreaOfCircle(radius: number) {
    return Math.PI * radius * radius;
}

let areaOfCircle = calculateAreaOfCircle(5);
console.log('Area of circle:', areaOfCircle);


function calculateCircumference(radius: number) {
    return 2 * Math.PI * radius;
}

let circumference = calculateCircumference(5);
console.log('Circumference:', circumference);



function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let capitalizedString = capitalizeFirstLetter("javascript");
console.log('Capitalized:', capitalizedString);


function findLargestNumber(arr: number[]}) {
    return Math.max(...arr);
}

let largestNumber = findLargestNumber([1, 5, 3, 9, 2]);
console.log('Largest number:', largestNumber);


function findSmallestNumber(arr: number[]) {
    return Math.min(...arr);
}

let smallestNumber = findSmallestNumber([1, 5, 3, 9, 2]);
console.log('Smallest number:', smallestNumber);


function sortArray(arr: number[]) {
    return arr.sort((a, b) => a - b);
}

let sortedArray = sortArray([5, 3, 8, 1, 2]);
console.log('Sorted array:', sortedArray);



function filterEvenNumbers(arr: number[]}) {
    return arr.filter(num => num % 2 === 0);
}

let evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log('Even numbers:', evenNumbers);


function filterOddNumbers(arr: number[]) {
    return arr.filter(num => num % 2 !== 0);
}

let oddNumbers = filterOddNumbers([1, 2, 3, 4, 5, 6]);
console.log('Odd numbers:', oddNumbers);


indLongestString(arr: string[]) {
    return arr.reduce((a, b) => a.length > b.length ? a : b);
}

let longestString = findLongestString(["apple", "banana", "cherry", "blueberry"]);
console.log('Longest string:', longestString);


function findShortestString(arr: string[]) {
    return arr.reduce((a, b) => a.length < b.length ? a : b);
}

let shortestString = findShortestString(["apple", "banana", "cherry", "blueberry"]);
console.log('Shortest string:', shortestString);



function convertToKelvin(celsius: number) {
    return celsius + 273.15;
}

let kelvin = convertToKelvin(25);
console.log('Kelvin:', kelvin);
