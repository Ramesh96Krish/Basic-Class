// let a=[1,2,3,4,5,6,7,8];

// //  anonymous Function
// // Odd Number 
// (function{
  //       for(let i=0;i<a.length;i++)
  //     {
  //      if (a[i]%2!==0)
  //      {
  //       odd=' '+a[i];
  //       console.log(odd)
  //      }
  //     })(a);

// (()=>{
//       for(let i=0;i<a.length;i++)
//     {
//      if (a[i]%2!==0)
//      {
//       odd=' '+a[i];
//       console.log(odd)
//      }
//     }
// })(a)
// // Title Caps the String 
// (
//   (str)=>{
//   str=str.toLowercase().split(' ').map((word)=>{
//     return word.replace(word[0],word[0].toUppercase());
//   }).join(' ');
// })("i am a good coder");

// // Title caps in a string

// (function(){
//   const tit = arr.filter((str) => {  
//       str.toLowerCase().split(' ').map((str)=>{
//         return str.replace(str[0],str[0].toUpperCase());
//       }).join(' ');
//     });
//   })(arr);

// var arr=["i am a good coder"];


// // Sum of all numbers in a array
// (()=>{
//     Sum=0;
//     for (let i=0;i<a.length;i++)
//     {
//     Sum=Sum+a[i];
//     }
//     console.log(Sum);
//  }
// )(a)

// (function(a){
//     Sum=0;
//     for (let i=0;i<a.length;i++)
//     {
//     Sum=Sum+a[i];
//     }
//     console.log(Sum);
//  }
// )
// //Print all the Prime Numbers in a array

// (()=>{
//     for (let i=0;i<a.length;i++)
//     {
//       if(a[i] % a[i] ==0 && a[i]% 2!== 0)
//     return a[i]
//     }
//   }
// )(a)

// (function(){
//     for (let i=0;i<a.length;i++)
//     {
//       if(a[i] % a[i] ==0 && a[i]% 2!== 0)
//     return a[i]
//     }
//   }
// )(a)

// // Prime Numbers

// (function(){
//   const filteredValues = numbers.filter((num) => {  
//       for(let i = 2; i < num; i++){
//           if(num % i === 0){ 
//               return false;
//           }
//       }
//       return num > 1;
//   });
//   console.log(filteredValues);
// })();

// print all the palindromes in a array
// (function(str){
//   var stri=str.split('');
//   var reverstr=stri.reverse().join('');
//   if (str== reverstr)
//   {
//     console.log(' It is palindrome') ; 
//     var final=[];
//     final.push(str);
//     console.log(final);
//   }
//   else{
//     console.log('its not a palindrome');
//   }
//    }('civic'));

// ((str)=>{
//     var stri=str.split('');
//     var reverstr=stri.reverse().join('');
//     if (str=== reverstr)
//     {
//       console.log(' It is palindrome') ; 
//       var final=[];
//       final.push(str);
//       console.log(final);
//     }
//     else
//       console.log('its not a palindrome');
//   })('civic')
  

  //Palindrome using For loop

// (function(str){
//   const len=str.length;
// for(let i=0; i<len/2; i++){
// if(str[i]!==str[len-1-i]){
//   return 'palindrome'; 
// }
// else{
//   return 'it is not a palindrome';
// }
// }
// })('civic')

//