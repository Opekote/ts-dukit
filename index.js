function calculateSum(a, b) {
    return a + b;
}

let calculatedNumbers = calculateSum(5, 4);
console.log(calculatedNumbers);

const numbers = [1, 2, 3, 4, 5];
let total = 0;

numbers.forEach(num => {
    total += num;
});
console.log('Total:', total);

function concatStrings(string1, string2) {
    return string1 + string2;
}

let concatedStrings = concatStrings("hello,", " World!");
console.log(concatedStrings);

function multiplyNumbers(a, b) {
    return a * b;
}

let product = multiplyNumbers(6, 7);
console.log('Product:', product);

function subtractNumbers(a, b) {
    return a - b;
}

let difference = subtractNumbers(10, 4);
console.log('Difference:', difference);

function divideNumbers(a, b) {
    return a / b;
}

let quotient = divideNumbers(20, 5);
console.log('Quotient:', quotient);

function findMax(a, b) {
    return a > b ? a : b;
}

let maxNumber = findMax(8, 10);
console.log('Max number:', maxNumber);

function isEven(number) {
    return number % 2 === 0;
}

let checkEven = isEven(6);
console.log('Is even:', checkEven);

function reverseString(str) {
    return str.split('').reverse().join('');
}

let reversedString = reverseString("JavaScript");
console.log('Reversed string:', reversedString);

function getFactorial(n) {
    if (n === 0) return 1;
    return n * getFactorial(n - 1);
}

let factorial = getFactorial(5);
console.log('Factorial:', factorial);

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

let palindromeCheck = isPalindrome("racecar");
console.log('Is palindrome:', palindromeCheck);

function convertToUpperCase(str) {
    return str.toUpperCase();
}

let upperCaseString = convertToUpperCase("hello");
console.log('Uppercase:', upperCaseString);

function convertToLowerCase(str) {
    return str.toLowerCase();
}

let lowerCaseString = convertToLowerCase("HELLO");
console.log('Lowercase:', lowerCaseString);

function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

let arraySum = sumArray([1, 2, 3, 4, 5]);
console.log('Array sum:', arraySum);

function findMin(a, b) {
    return a < b ? a : b;
}

let minNumber = findMin(2, 8);
console.log('Min number:', minNumber);

function squareNumber(n) {
    return n * n;
}

let squaredNumber = squareNumber(4);
console.log('Squared number:', squaredNumber);

function cubeNumber(n) {
    return n * n * n;
}

let cubedNumber = cubeNumber(3);
console.log('Cubed number:', cubedNumber);

function findLength(str) {
    return str.length;
}

let stringLength = findLength("JavaScript");
console.log('String length:', stringLength);

function isPositive(n) {
    return n > 0;
}

let positiveCheck = isPositive(7);
console.log('Is positive:', positiveCheck);

function findAverage(arr) {
    return sumArray(arr) / arr.length;
}

let average = findAverage([10, 20, 30, 40, 50]);
console.log('Average:', average);

function isOdd(n) {
    return n % 2 !== 0;
}

let checkOdd = isOdd(7);
console.log('Is odd:', checkOdd);

function checkVowel(ch) {
    return ['a', 'e', 'i', 'o', 'u'].includes(ch.toLowerCase());
}

let vowelCheck = checkVowel('a');
console.log('Is vowel:', vowelCheck);

function findSquareRoot(n) {
    return Math.sqrt(n);
}

let squareRoot = findSquareRoot(16);
console.log('Square root:', squareRoot);

function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let fahrenheit = convertToFahrenheit(25);
console.log('Fahrenheit:', fahrenheit);

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let celsius = convertToCelsius(77);
console.log('Celsius:', celsius);

function calculateAreaOfCircle(radius) {
    return Math.PI * radius * radius;
}

let areaOfCircle = calculateAreaOfCircle(5);
console.log('Area of circle:', areaOfCircle);

function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

let circumference = calculateCircumference(5);
console.log('Circumference:', circumference);

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let capitalizedString = capitalizeFirstLetter("javascript");
console.log('Capitalized:', capitalizedString);

function findLargestNumber(arr) {
    return Math.max(...arr);
}

let largestNumber = findLargestNumber([1, 5, 3, 9, 2]);
console.log('Largest number:', largestNumber);

function findSmallestNumber(arr) {
    return Math.min(...arr);
}

let smallestNumber = findSmallestNumber([1, 5, 3, 9, 2]);
console.log('Smallest number:', smallestNumber);

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

let sortedArray = sortArray([5, 3, 8, 1, 2]);
console.log('Sorted array:', sortedArray);

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

let evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log('Even numbers:', evenNumbers);

function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

let oddNumbers = filterOddNumbers([1, 2, 3, 4, 5, 6]);
console.log('Odd numbers:', oddNumbers);

function findLongestString(arr) {
    return arr.reduce((a, b) => a.length > b.length ? a : b);
}

let longestString = findLongestString(["apple", "banana", "cherry", "blueberry"]);
console.log('Longest string:', longestString);

function findShortestString(arr) {
    return arr.reduce((a, b) => a.length < b.length ? a : b);
}

let shortestString = findShortestString(["apple", "banana", "cherry", "blueberry"]);
console.log('Shortest string:', shortestString);

function convertToKelvin(celsius) {
    return celsius + 273.15;
}

let kelvin = convertToKelvin(25);
console.log('Kelvin:', kelvin);
