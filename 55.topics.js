5.//data types
//primitive datatypes
1.//number
// var i=10;
// var j=10.3;
// console.log(i);
// console.log(j);
// //string
// var sudha="daisy";
// console.log(sudha);
// //boolean
// var i=10;
// var j=10;
// var z=30;
// console.log(i==j);
// console.log(j==z);
// //undefined
// let car;
// console.log(car);
// //symbol
// let result='hello'
// let result1='hello'
// console.log(result);
// console.log(result1);
// //null
// const number=null;
// //biginit
// const value1 = 900719925124740998n;

// const result2 = value1 + 1n;
// console.log(result2); 

2.//non-primitive
//object
//var obj=new obj()
// var daisy={
//     firstname:'sudha',
//     lastname:'jessy',
// }
// console.log(daisy.firstname+daisy.lastname);

//arrays
// var friuts=['mango','banana','apple']
// console.log(friuts);
// //
// var sudha=[
//     {name:'daisy',sibling:'jack',age:4},
//     {name:'madhy',sibling:'sneha',age:15}

// ]
// console.log(sudha);

//date objects
// var date=new Date(2015,11,24,10)
// date.getMonth();
// console.log(date);
// //
// var date=new Date(2021,1,15)
// date.getHours()
// console.log(date);


//math objects

// console.log(Math.random());

// //math.mini
// var sudha=[1,2,3,4,]
// var result=Math.min(...sudha)
// console.log(result);
// //math.floor
//  let x=151.5;
//  var result=Math.ceil(x)   //floor
//  console.log(result);
// abs 
// let x=-51
//  var result=Math.abs(x) 
//  console.log(result)
//sqrt
// let x=4
// var result=Math.sqrt(x)
// console.log(result);
//round
// let x=0.1;
//  var result=Math.round(x)  
//  console.log(result)
//power
// let x=10;
// let y=20;
//  var result=Math.pow(x,y)   
//  console.log(result)


//functions
// 1.// named functions
// function sudha(a,b) {
//     var c=a+b
//     console.log(c);
    
// };
// sudha(10,20)

// 2.//
// function daisy() {
//     return 'dont call me'
    
// }
// var returnedvalue=daisy(10,20);
// console.log(returnedvalue);

//anonymous functions

// var func=function(var1,var2) {
//     var result=var1*var2
//     console.log(result);
    
// }
// func(10,20);

//iife

// (function(num1,num2){
//     console.log(num1+num2);
// }),(200,300);

//arrow

// var food=burger=>console.log(burger);
// food('want to eat')

9.//BMI
window.onload=()=>{
  let button =document.querySelector("#btn");
  button.addEventListener("click",calculateBMI);
};
function calculateBMI(){
  let height=parseInt(document.querySelector("#height").value);
  let width=parseInt(document.querySelector("#width").value);
  let result=parseInt(document.querySelector("#result"));

  if(height ===""||isNaN(height))
      result.innerHTML="provide a valid height";
  else if(width===""||isNaN(width))
  result.innerHTML="provide a valid width";

  else{
      let bmi=(width/((height*height)/10000)).toFixed(2);

      if(bmi<18.6) result.innerHTML=`width:<span>${bmi}</span>`;

      else if(bmi>=18.6&&bmi<24.8)
      result.innerHTML=`Normal:<span>${bmi}</span>`;

      else result.innerHTML=`width:<span>${bmi}</span>`;

  }
}


 10.//  without new keyword 
//     function name() {

// var jack=[
//     {
//         name:'sudha',
//         place:'kakinada',
//         age:24
//     },
//     {
//         name:'daisy',
//         place:'kakinada',
//         age:4
//     }
// ]
// console.log(jack);
//     }
//    name();

11.//with new

// function name() {
//     var madhu=new Object();
//     madhu.firstName="sudha",
//     madhu.lastName="daisy",
//     madhu.age=20
//     console.log(madhu);
    
// }
    
// name();

12.//using typeof   
// var a=20
// var result=typeof (a);
// console.log(result);


13.//creating arrays without new keyword


//15.
// var date=new Date('sept 12 2020');
// date.getDay();
// console.log(date);

16.//call back
// setTimeout(change,5000)
//     function change() {
//         document.body.style.backgroundColor="red"
        
  // }
// function one() {
//     setTimeout(() => {
//         console.log('function one');
//     }, 400);
    
// }
// function two() {
//     setTimeout(() => {
//         console.log('function two');
//     }, 200);
    
// }
// one();
// two();   // output will be two and one   //doubt
//(i) if we want one first and two second
// function one(sudha){
//     setTimeout(() => {
//         console.log("function one");
//         sudha();
//     }, 4000);
    
// }
// function two() {
//         setTimeout(() => {
//             console.log('function two');
//         }, 2000);
        
//     }
//   one(two);


17.//variable hoisting

// console.log(sudha);
// var sudha="20"
//
// console.log(sudha);
// var sudha=20;

21.//push
// var sudha=[10,20,30]       //start
// var result=sudha.push('sudha')     ///return length of of array and return type is number
// console.log(result);
//pop
// var sudha=['daisy','madhu','jack']    //end
// var result=sudha.pop('madhu')
// console.log(result);              //return length of the array return type numer|string|boolean

22.//shift
// var sudha=[10,20,30,40]
// var result=sudha.shift()           //remove elements from start and retuns removed element and type number |boolean|string
// console.log(result);
//unshift
// var sudha=['daisy','madhu','jack']    //add item to the begining and returns array after adding
// var result=sudha.unshift('madhu')      //type number
// console.log(result)

24.//reverse
// var sudha=['mango','jama','kiwi']
// var result=sudha.reverse();
// console.log(result);
//sort
// var sudha=['mango','jama','kiwi']
// var result=sudha.sort();                //means ascending order and gives array 
// console.log(result);
//flat
// var madhu=['sudha',10,'true',['sudha',10]]
// var result=madhu.flat()
// console.log(result);             //The flat() method does not change the original array.
//      // The flat() method removes empty slots in arrays.

//find


// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(sudha=>sudha==12); 

// console.log(found);           //he find() method returns the value of the first element in the
// provided array that satisfies the provided testing function. 
//If no values satisfy the testing function, undefined is returned.

//findindex
// var arr=[5,22,19,25,34];  
// var result=arr.findIndex(x=>x>25);   //it gives the index of the array
// console.log(result);

// const n = [10, 20 ,30 ]
// const n1 = n
// n.slice(0)
// console.log(n1);

// function one(){
//         setInterval(() => {
//             if(i<=10){
//                 console.log(i+=1);
//             }
            
//         }, 300);
        
//     }

//     function two() {
//             setInterval(() => {
//               if(i<10){
//                   console.log(i+=1);
//               }  
            
             
//             }, 2000);
            
//         }
    // //   one(two);
    //   setInterval(()=>{
    //     console.log('hello');
    // },1000);

    //bom
// window.alert('sudha');    

// let x='window.innerHeight';
// let y='window.innerWidth';

//recursion
//   var i=[10,8,5,40,50]

// function recurse() {
//        if(i<=10) {
//         recurse();
//     }
//     else {
//      // stop calling recurse()
//     }
// //console.log(i);
//  }
//  console.log(i);


// recurse();
// // program to count down numbers to 1
// function countDown(number) {

//     // display the number
//     console.log(number);

//     // decrease the number value
//     const newNumber = number - 2;

//     // base case
//     if (newNumber > 0) {
//         countDown(newNumber);
//     }
// }

// countDown(4);