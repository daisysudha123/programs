// var simple=[1,1,2,3,2,4,5,5,4,]
// var result=simple.filter((value,index)=>{
//     return simple.indexOf(value)===index
// })
// console.log(result);  

1.//finding largest number in an array
// var sudha=[10,20,30,40,50]
// var result=Math.max(...sudha)
// console.log(sudha);
//  console.log(sudha.indexOf());    //finding the largest number index
 
//finding second largest number
// var sudha=[10,20,30,40,50]
// var result=Math.max(...sudha)
// var daisy=sudha.splice(sudha.indexOf(result),1)
// // console.log(sudha);
// console.log(Math.max(...sudha));

2.//even and odd
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i]%2 == 0) {
//         arr.push(arr.splice(i, 1)[0]);
//       }
//     }
    
//     console.log(arr);


//finding even and odd separatly

// var arr=[1, 2, 3, 4, 5, 6, 7, 8, 9]
// var even=[]
// var odd=[]
// for (var i=0; i<arr.length;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i])
//         odd.push(arr[i+1])
//     }
// }
// console.log(even);
// console.log(odd);



3.//finding random number

// function name() {
//     console.log(Math.random());
// }
// name();

4.// //prime no
// var num = 15;
// var count = 0;   //it will  give how many nos will give reminder as 0

// for (var i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         count++
//     }
// }
// if (count <= 2) {
//     console.log(`${num} is a prime Number`);
// } else {
//     console.log(`${num} is not a prime`);
// }
 (ii)// prime no
    // var a=11
    // count=0
    // for(var i=1;i<=a;i++){
    //     if(a%i==0){
    //         count++
    //         console.log(i);
    //     }
    // }
    // if(count<=2){
    //     console.log(a+'is a prime');
    // })
//palindrome
// var num=15455451;
// var m = num.length;
// for(i=0;i<=m;i++){
//     if (num[i]==num[m-1-i]){
//         console.log('this is a palindrome');
//         break;
//     }else {
//         console.log('this is not a palindrome');
//         break;
//     }
// }

//
// //object itration program
// var num=[
//     {
//         name:'sudha',
//         age:24
//     },
//     {
//         name:'madhu',
//         age:4
//     }
// ]
// for(var i in num) {
//     console.log(num[i]);
// }

//**
// for(var i=1;i<=5;i++) {
//     var str=""            //nested for loopit means a for loop within another for loop
//     for(var j=1;j<=i;j++) {
//         str+='* '
//     }
//     console.log(str);
// }

//factorial
// var n=24
// for(var i=1;i<=n;i++){
//     if(n%i==0){
//         console.log(i);
//     }
// }

// prime no
// var a=11
// count=0
// for(var i=1;i<=a;i++){
//     if(a%i==0){
//         count++
//         console.log(i);
//     }
// }
// if(count<=2){
//     console.log(a+'is a prime');
// }

7.// Bubble sort Implementation using Javascript


    // var arr=[10,20,40,5,2,1]

    // function sudha(arr) {
    //     for(var i=0;i<arr.length;i++){
    //         for(var j=0;j<(arr.length-i-1);j++){
    //             if (arr[j]>arr[j+1]){
    //                 var temp=arr[j]
    //                 arr[j]=arr[j+1]
    //                 arr[j+1]=temp
    //             }
    //         }
    //     }
    //     console.log(arr);
        
    // }
    // // var arr=[10,20,40,5,2,1]

    //  sudha(arr);

    // array desturcring

    // let [firstname,firstplace,firstpet]  =     ["sudha","kakinada","daisy"]

        
    // console.log(firstname);
    // console.log(firstplace);
    // console.log(firstpet);


    // const profile={
    //     firstname:'sudha',
    //     petname:'daisy',
    //     place:'kakinada'
    // }
    // const firstname=profile.firstname;
    // const petname=profile.petname;
    // const place=profile.place
    // console.log(firstname);
    // console.log(petname);
    // console.log(place);

    //for...in loop

    // iterate through an object example1
    
    // var students = {
    //     name : 'vinay',
    //     id : 'sap234',
    //     class : 10,
    //     gender : 'male'
    // }
    //    for(let value in students){
    //        console.log(`${value} : ${students[value]}`);
    //    }
    
    
    // //    updating values of properties
    
    // const salaries = {
    //     vinay : 10000,
    //     vishnu :12000,
    //     teja : 13000
    // }
    // for(let i in salaries){
    //     let salary = "$" + salaries[i];
    //     console.log(`${i} : ${salary}`);
    // }
    
    // // iterating over a string
    
    // var string = 'Rebel Star';
    // for(let i in string){
    //     console.log(string[i]);
    // }
    
    
    // for loop
    
    var vinay = ['male',24,false,{empolyed : true}]
    for(i=0;i < vinay.length;i++){
        console.log(vinay[i]);
    }
    
    var i = 0;
    for(; i<5; i++){
        document.write(i + "<br>");
    }
    document.write("<br> END")
    
    var i = 0;
    for (; i<5; ){
        i++;
        document.write("<br>" + i)
    }
    
    // breaking loop
    //  var i=0;
    //  for(; ; i++){
    //      if(i==5){
    //          break;
    //      }
    //      document.write("<br>" +i)
    //  }
    
    // //  while loop
    
    // var counter = 0;
    // while(counter < 10){
    //     console.log('number:' + counter);
    //     counter++;
    // }
    
    // var counter = 0;
    // while (counter < 10){
    //     if (counter ==5)
    //     break;
    //     console.log('number:' + counter);
    //     counter++;
    // }
    
    // var res = 0;
    // while(res < 10){
    //     res++;
    //     if (res ==5)
    //     continue;
    //     console.log('number:' +res);
    // }
    
    // // do-while
    
    // var i = 0;
    // do{
    //     console.log(i+ " ");
    //     i++;
    // }while(i<5);
    
    // var x = 7;
    // do{
    //     console.log('Vinay');
    // }while(x>5)