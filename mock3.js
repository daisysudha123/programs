

// var a = [1,2,3,4,5]
// var b;    
// console.log(a);
//       b = a.push(6,7)  


var a=[1,2,3,4,5,6,7,8,9,10]
var even=[]
var odd=[]
for (var i=0; i<a.length;i++){
          if(a[i]%2==0){
            even. push(a[i])
            odd.push(a[i+1])
          }
      }
      console.log(even);
      console.log(odd);


  var a=[1,1,2,2,2,3,3,3,3,4,4,5]  
  var result=a.filter((value,index)=>{
          return a. indexOf((value))==index
      })
      console.log(result);
      
      