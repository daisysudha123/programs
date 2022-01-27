1//1.push
// var simple=["sudha","pooja","madhu"]
// simple.push('daisy');          //add new element to array
// console.log(simple);          //return the length of the array
//2.
// var daisy=[{name:"sudha",age:24}]
// daisy.push({name:"jack",age:3})
// daisy.push({name:"jack",age:4})
// console.log(daisy);

2//1.pop
var simple=["mango","apple","pinaple","choco","kiwi"]
simple.pop();
console.log(simple);
2//.if we want wt we remove from that array
var sudha=["mango","apple","pinaple","choco","kiwi"]
var friuts=sudha.pop();
console.log(friuts);
// 3.//by using object
// var daisy=[{name:"sudha",age:24},{name:"pooja",age:25}]
// var jack=daisy.pop()
//  console.log(daisy);       //it shows the remaining array
// console.log(jack);     //it shows the removed array


3//1.shift
// var simple=["mango","apple","pinaple","choco","kiwi"]
//  simple.shift();
//  console.log(simple);
 //2.if i want wt i removed element
//  var simple=["mango","apple","pinaple","choco","kiwi"]
// var friuts=simple.shift();
// console.log(friuts);


4//1.unshift
// var simple=["mango","apple","pinaple","choco","kiwi"]
// simple.unshift("jama","brinjal");
// console.log(simple);
 //2.if i want wt i removed element
// var simple=["mango","apple","pinaple","choco","kiwi"]
// var friuts=simple.unshift("jama","brinjal");
// console.log(friuts);


5//1.slice
// var simple=[10,20,30,40,50,60]
// var number=simple.slice(3);
// console.log(simple);
// console.log(number);     //it will slice the elements from starting it means inthis program it will retun the 40,50,60

//2.
// var simple=['mango','choco','brinjal','kiwi','apple','pinaple']
// var friuts=simple.slice(3,5);
// console.log(friuts);


6//map
//1.
//  var sudha=['mango','choco','brinjal','kiwi','apple','pinaple']
// var jack=sudha.map(function(sudha){
//     return 'kiwi'+sudha
// })
// console.log(jack);

//2. var numbers=[20,30,40,50]
// var changed=numbers.map(function(numbers){
//     return numbers*10
// })
// console.log(changed);

//3.creating new array from the values contained in a calling array

// var object=[{student:"sudha",score:60},{student:"jack",score:55}]
// var changed=object.map(function(object){
//     return object.score+10
// })
// console.log(changed);

//.4
// var numbers=[20,30,40,50]
// var result = numbers.map((value,index)=>{      //we giving arrow method as a call back function
//     return 'sudha'+value;
// });
// console.log(result);

7//splice
// var result=[1,2,3,4,5,6]
// result.splice(2,1,6,7)
// console.log(result);

8//filter
var simple=['mange','kiwi','choco','perfume','kiwi']
// var result=simple.filter((value,index)=>{
//     return(typeof(value)==index)
// })
// console.log(result);

// //2.
// var simple=[1,2,1,1,2,3,,4]
// var result=simple.filter((value,index)=>{
//     return simple.indexOf(value)===index
// })
// console.log(result);
2.
// var numbers=[10,8,20,15,40,50]
// var result =numbers.filter((age)=>{
//     return age>15
// })
// console.log(result);

//3.
// var names=['sudha','pooja','raj','madhu']
// var result=names.filter(change => change.includes('s'));

// console.log(result);     

//duplicate array
// var numbers=[1,2,1,2,3,5,3,1]
// var result=numbers.filter((value,index)=>{
//     return numbers.indexOf(value)===index
// })
// console.log(result);    

//2.
// var number=['sudha','pooja','raj','madhu','pooja','pooja','raj','madhu']
// var result=number.filter((value,index)=>{
//     return number.indexOf(value)===index
// })
// console.log(result);

//indexOf
// var sudha=['apple','kiwi','mango','jama']
// var friuts=sudha.indexOf('mango')
// console.log(friuts);

//join
// var sudha=['apple','kiwi','mango','jama']
// var friuts=sudha.join('daisy')
// console.log(friuts);

//foreach



//charAt
// var sudha="hello world"
// var friuts=sudha.charAt(1)
// console.log(friuts);          

//indexof
// var sudha=['apple','kiwi','mango','jama']
// var friuts=sudha.indexOf('kiwi',2)
// console.log(friuts);

//includes
// var sudha=['apple','kiwi','mango','jama']
// var friuts=sudha.includes('jama')
// console.log(friuts);

//replace

// var sudha="sudha are u ok"
// var friuts=sudha.replace("are","daisy")
// console.log(friuts);
2.
// let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "W3Schools");
// console.log(result);

//reverse
// var sudha=['apple','kiwi','mango','jama']
// var friuts=sudha.reverse()
// console.log(friuts);

//trim
//  var sudha="     Visit Microsoft!";
// var friuts=sudha.trim()
// console.log(friuts);

//substr

// var sudha="Visit Microsoft!";
//  var friuts=sudha.substr(1,5)
//  console.log(friuts);


//contact
//   var sudha=['apple','kiwi','mango','jama']
//   var sudha1=['jama','kiwi']
//  var result=sudha.concat(sudha1)
//  console.log(result);



//
// var abc=[1,2,3,4,5,6,7]
// var result=Math.max(...abc);
// console.log(result);
// console.log(abc.indexOf(7));
// var bf=["kukka", "nakka"];
// var gf=bf[1];
// console.log(gf);
// var df=gf.split('').reverse().join('');
// console.log(df);