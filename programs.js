// 1. hello world
console.log("hello world");

// 2.adding two numbers
const a=50;
const b=20;
const sum=a+b;
console.log('The sum of'+ a +' and ' + b + ' is: ' + sum);

//3.square root of a number
const number = prompt('Enter the number: 9 ');

const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);


//4. program to swap two variables

let s = prompt('Enter the first variable:10 ');
let t = prompt('Enter the second variable:15 ');

let temp;

temp = s;
s = t;
t = temp;

console.log(`The value of a after swapping: ${15}`);
console.log(`The value of b after swapping: ${10}`);

//5.check the number is even or odd

if(29%2==0){
    console.log("the number is even");
}
else{
    console.log("the number is odd");
}

//6.largest among three numbers

const num1 = parseFloat(prompt("enter first number:10"));
const num2 = parseFloat(prompt("enter second number:25"));
const num3 = parseFloat(prompt("enter third number:40"));

const largest =Math.max(num1,num2,num3);
console.log("the largest number is 40"+largest);

//7.removing dupilcate array

function getUnique(arr){
    let uniqueArr = [new Set(arr)];    //=>removing duplicate arrays
    console.log(uniqueArr);
}

const array = [1,2,3,2,3,2,4,5];

getUnique(array);

//7.merge two arrays and removing duplicate array

function getUniqueAfterMerge(arr1,arr2){
    let arr = [arr1,arr2];    //merge two arrays
     let uniqueArr = [new Set(arr)];  //removing duplicate 
     console.log(uniqueArr);
}

const array1=[1,2,3,4];
const array2=[2,3,5,6]

 getUniqueAfterMerge(array1,array2);   //function calling


//8. program to remove item from an array

function removeItemFromArray(array,n) {
    const index = array.indexOf(n);

    if(index > -1) {            // if the element is in the array, remove it

        // remove item
        array.splice(index, 1);
    }
    return array;
}

const result = removeItemFromArray([1, 2, 3 , 4, 5], 2);

console.log(result);




//9. program to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = [1, 'hello', 5, 8];

const result = getRandomItem(array);
console.log(result);


//10.add,sub,mul,div,mod of two numbers


var a = prompt('Enter the first a:10 ');
var b = prompt('Enter the second b:20 ');
 var c;



var sub = a - b;
c =sub;
var mul = a * b;
c = mul;
var div = a / b;
c =div ;
var mod = a % b;
var add = a+b;

console.log('The sum of a and b : ' + add);
console.log('The sub of a and b : ' + sub);
console.log('The mul of a and b : ' + mul);
console.log('The div of a and b : ' + div);
console.log('The mod of a and b : ' + mod);

//11.math functions of sqrt,round,ceil,floor

var a = prompt('Enter first a : ');
var b = prompt('Enter second a : ');
var c = String (prompt('Enter third a : '));


var result = Math.sqrt(a);
var result1 = Math.sqrt(b);
var result2 = Math.sqrt(c);
var result3 = Math.round(a);
var result4 = Math.ceil(b);
var result5 = Math.floor(b);




console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

//12.area of triangle

var base = prompt('Enter the base of a triangle: ');
var height = prompt('Enter the height of a triangle: ');


var area = (base * height) / 2;

// console.log(`The area of the triangle is ${area}`);
console.log(area);


//13.factorial

var n = prompt("Enter the number :10 ");

var fact=1;  
      
for(var i = 1;  i<= n; i++){    
      fact=fact*i;    
  }    
  console.log("Factorial of " + n + " is: " + fact);


//14.multiplication table

  var n = prompt('Enter an Number : ');


for(var i = 1; i <= 10; i++) {

    var result = i * n;

    console.log(`${n} * ${i} = ${result}`);
}


//15.programs to pass parameter to a setTimeout()function

function daisy(){
    console.log('hello sudha');
}
setTimeout(daisy,4000);
console.log('this message is shown first');

// 16.program to convert an object to a string

const person = {
    name: 'Jack',
    age: 27
}

const result =  JSON.stringify(person);

console.log(result);
console.log(typeof result);

//17.program to removing white space

const string ='   hello world  ';
const result = string.split('').join('');
console.log(result);

// 18. program to convert date to number
// create date
const d1 = new Date();
console.log(d1);

// converting to number
const result = d1.getTime();
console.log(result);

//19.program to get a random item from an array

function getRandomItem(arr){
    const randomIndex=(Math.random()*arr.length);
    const item=arr[randomIndex];
    return item;
}

const array = [1,'hello',5,8];
const result=getRandomItem(array);
console.log(result);

//20.program to convert first letter of a string to uppercase

function capitalizeFirstletter(str){
    const capitalized = str.charAt(0).toUpperCase()+str.slice(1);
    return capitalized;    
}

const string = prompt('enter a string:angular');
const result=capitalizeFirstletter(string);
console.log(result);

//21. program to write to console

//passing number 
console.log(8);

// passing string
console.log('hello');

// passing variable
const x = 'hello';
console.log(x);

// passing function
function sayName() {
    return 'Hello John';
}
console.log(sayName());

// // passing string and a variable
const name = 'John';
console.log('Hello ' +name );

// // passing object
let obj = {
    name: 'John',
    age: 28
}
console.log(obj);

//22. program to perform intersection between two arrays using filter method

function performIntersection(arr1, arr2) {

    const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1);
 
    return intersectionResult;

}

const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];

const result = performIntersection(array1, array2);
console.log(result);

//23.Get The Current URL
const url1 = window.location.href;
const url2 = document.URL;
console.log(url1);
console.log(url2);

//24. program to check if a variable is of function type
function testVariable(variable) {
      
    if(variable instanceof Function) {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}
const count = true;
const x = function() {
    console.log('hello')
};
testVariable(count);
testVariable(x);

//25.program to convert date to number
// create date
const d1 = new Date();
console.log(d1);
// converting to number
const result = d1.getTime();
console.log(result);

//26. program to get the dimensions of an image
const img = new Image();
// get the image
img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';

// get height and width
img.onload = function() {
  console.log('width ' + this.width)
  console.log('height '+ this.height);
}


//27. program to insert an item at a specific index into an array

function insertElement() {
    let array = [1, 2, 3, 4, 5];

    // index to add to
    let index = 3;

    // element that you want to add
    let element = 8;
  
    array.splice(index, 0, element);
    console.log(array);
}

insertElement();

//28.Integer Value Between Two Numbers
// input from the user
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));
// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;
// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);

//29.program to check if a variable is undefined or null
function checkVariable(variable) {
    if(variable == null) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}
let newVariable;
checkVariable(5);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);


//30.program to compare two arrays using JSON.stringify
function compareArrays(arr1, arr2) {
    // compare arrays
    const result = JSON.stringify(arr1) == JSON.stringify(arr2)

    // if result is true
    if(result) {
        console.log('The arrays have the same elements.');
    }
    else {
        console.log('The arrays have different elements.');
    }

}
const array1 = [1, 3, 5, 8];
const array2 = [1, 3, 5, 8];
compareArrays(array1, array2);
