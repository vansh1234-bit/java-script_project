// // 
// const  myARR= [0,1,2,3,4,5] 
// const myHero =["virat" , "rohit" , "dhoni"] 

// const myARR2 = new Array(1,2,3,4,5) ; 
// // console.log(myARR2[1]) ; 
// // console.log(myARR2) ; 
// // console.log(myHero)
// // console.log(typeof (myHero)) // object 
// // array method
// myARR2.push(6) ; // [1,2,3,4,5,6]
// myARR2.pop() ;  //[1,2,3,4,5]

// myARR2.unshift(9) ; // add the elements at the starting  index  
// // console.log(myARR2) ; //[9,1,2,3,4,5]
// myARR2.shift() ; // remove the starting index elements  //[1,2,3,4,5]
// // console.log(myARR2)
// // console.log(myARR2.includes(9)) ; // false not present 
// // console.log(myARR2.indexOf(3)) ; 


// // let newArray =  myARR2.join() // It give the new array of type string 
// // console.log(newArray) ; 
// //newArray.shift() ; /* can,t work because noe newArray is string and shift is a function of arraynot   a string  */
// // console.log(newArray) ; 
// // console.log(typeof newArray) ;
// // slics and splics


// // console.log(myARR) ; 
// // const myn2 = newARR2.slice(1,3) ;
// // console.log(myn2) ; 
// // console.log(newARR2) ;


// // const myn1 = newARR2.splice(1,3) ;  // it change the orginal array as well but slice do not change the original array and one more thing In splice range in also included 
// // console.log(myn1) ;
// // console.log(newARR2) 
// // //  console.log(myARR) ; 
// // // slice only give you the portation which include starting pointer but exclude the last pointer 


// // objects 
// // objects literals 
// const mysym = Symbol("key1") ; // string
// // new objects 
// const jsuser = {
//   [mysym] : "mykey1" , 
//   name : "vansh" ,
//   age : 20 ,
//   location : "haryana" ,
//   isLoggedIn : false ,
//   lastLogindays : ["Monday" , "saturday"] 
// }
// // console.log(typeof jsuser[mysym]) ; 
// // console.log(jsuser.age) ;
// // console.log(typeof jsuser["age"] ) ; 
// // console.log(jsuser[mysym] ) ;  //mykey1
// // console.log(typeof jsuser[mysym]) ; //undefined
// //  Object.freeze(jsuser) ; // after this no chance can be happen
// // jsuser.age = "23" ; 
// // console.log(jsuser.age) ;
// // console.log(jsuser) ; 

// // node reference.js
// //  we had made a small functions
// jsuser.greet = function(name){
//   console.log(`Hello js user ${this.name} , Is your age ${this.age}  ?? `) ;
// }
// // console.log(jsuser.greet()) ; 
// // jsuser.greet("vansh"); 
// // jsuser.greet(name); 

// // In this we leaned about objects how to inizilize the objects and how to put symbol in the objects , and some part of how to decalared the functions ......


// // objects's 2nd video 

// // const tinUser = new Object() ; -> this is an singletan objects 

// const tinUser = {} ;  // this is not an singleton objects 
// tinUser.id = "123" ,
// tinUser.name = "sam" , 
// tinUser.isLoggedIn = true 
// // console.log(tinUser) ; 

// const regularuser = {
//   email : "vanshsaini1322@gamil.com" ,
//   fullName : {
//   userFullName :{
//   firstName : "vansh" ,
//   LastName : "saini" 
//   }
// }
// }
// console.log(regularuser.fullName.userFullName.firstName) ; 
// console.log(regularuser.fullName?.userFullName.LastName) ; 


// // asingned property 
// const obj1 = {
//   1 : "a" , 
//   2  : "b"
// }
// const obj2 ={
//   3 : "c" ,
//   4 : "d" 
// }
// // const obj3 = {obj1 , obj2 } ; 
// // console.log(obj3) ;  // with this method obj3 conatines obj1 and obj2 separately 
// const obj3 = {obj1 , obj2} ; 
// const obj4 = Object.assign({} , obj1 , obj2) ; 
// // console.log(obj4) ; 
// const obj5 = {...obj1 , ...obj2} ; 

// // console.log(obj5) ;
// // obj4 and obj5 are the got same results with two diffenrent methods while obj3 gets different ...


// // console.log(Object.keys(obj4))  ; 
// // console.log(Object.values(obj4)) ; 
// // console.log(Object.entries(obj4)) ; 



// // last video of objects notes 

// const course = {
//   coursename : "vansh" ,
//   price : "999" ,
//   teacher : "hitesh" 
// }

// // console.log(course.teacher); this is fully correct but we can do it by one more way
// // destructor 
// // const{teacher} = course ;
// // console.log(teacher) ; 

// // const {teacher : mam } = course 
// // console.log(mam) ; 




// // small test 

// // const user = {
// //   name: "Vansh",
// //   age: 20,
// //   branch: "AIML",
// //   city: "Rohtak"
// // };


// // console.log(Object.keys(user)) ; 
// // console.log(Object.values(user)) ; 
// // console.log(Object.entries(user)) ; 
// // console.log(Object.keys(user).length) ; 
// // 


// // function 

// function sayMYName() {
// console.log("v") ;
// console.log("a") ;
// console.log("n") ;
// console.log("s") ;
// console.log("h") ;
// }

// // sayMYName() ; 
// // sayMYName() ; 

// // add two number function 
// function addtwo(a , b ){
//   return a + b  ; 
// }
//  const result = addtwo(3,5) ; 
// //  console.log(result) ; 


//  function LoginUser(username ){
// // console.log(`Welcome ${username} , How are you `) ;
// if(username === undefined){
//   // console.log("please enter your name first to enter") ;
//   return ; 
// }
// return `Welcome ${username} , How are you `
//  }

// //  const yourmessage = LoginUser("vansh")  ;
// // const yourmessage = LoginUser()  ;
// //  console.log(yourmessage)

// // (...) is rest operator
// function totalSumOfcart(val1 , val2 , ...num1 ){
// return num1 ;
// }  
// // console.log(totalSumOfcart(200 , 300)) ;   // nums = []


// // put objects in functions 

// const userdeatile = {
// name : "vansh" ,
// id : 2411015 
// }

// function handleObjects(anyobject){
//   console.log(`Hii ${anyobject.name} How are you . Is your roolnumber is ${anyobject.id} `) ;
// }
// handleObjects(userdeatile) ; 

// // const myNewarray = [200 , 300 , 400] 
// // function retunn/Sum(getarray){
// // return getarray[0] ;
// // }
// // console.log(retunnSum(myNewarray)) ; 
// // console.log(retunnSum([29 ,30 , 40])) ;
// // you can put the value at the same time as you are calling the console log or put the name of the   array and objcet it can also take from that also 

// //  scope 
// // let var const 

// // let b = 2000 ;
// // var c = 300 ;
// // if(true){
// // let a = 10 ;
// // const b = 20 ;  
// // var c = 30 ;
// // console.log(b) ;
// // console.log(c) ;
// // }
// // // console.log(a) ;
// // console.log(b) ;
// // console.log(c) ;


console.log("hello") ;
function one(){
const username = "vansh" ;
function two(){
  const website = "youtube"
  console.log(username) ;
  console.log(website) ;
}

two() ;
}
// one() ; 

// the above code has error beacause we try to access out of its scope but this can be correct if varable tyep is let instaed of const 

// if(true){
// const username = "hitesh"
// if(username === "hitesh"){
//   const website = "youtube" 
//   console.log(username + " " + website) ;
// }
// console.log(website) ; 
// }
// console.log(username) ; 


// // if(true){
// //   const username = "vansh"  ;
// //   if(username == "vansh"){
// //     const websites = " youtube"
// //     console.log(username + websites ) ;
// //   }
// //   // console.log(website) ; 
// // }
// // console.log(username) ;  

// // *********************interesting ****************************


// if we declare like i declare in first way , we can call it before decalartion but not call it before when we declare it like 2nd way 

// console.log(addone(5)) ;
// function addone(num){
//   return num + 1 ;
// }

// 2nd way of declartation of function 
// console.log(addtwo(5))
// const addtwo = function(num){
// return num + 2 ;
// }
// console.log(addtwo(5))


// arrow functions 
// this -> 

// const user = {
//   username : "vansh" ,
//   price : 999 ,
//   welcomeMessage : function(){
//     console.log(`${this.username} , hii welcome to website`) ;
//     console.log(this)  ; 
//   }
// }
// user.welcomeMessage() ; 
// console.log(this) ;
// 
// const user = {
  // username : "vansh" ,
  //  price : 999 
// };

// function welcomeMessage(anyobject){
//   console.log(`${anyobject.username} , Hii welcome to website ${anyobject.price}`) ;
// }
// welcomeMessage(user) ; 

// chai()
const chai = function(){
let username = "hitesh" ;
console.log(this.username) ;
}
console.log(chai) ; 

  // const chai = ()=>{
//   let username = "hitesh" ;
//   console.log(username) ;
//   console.log(this) ; 
// }
// chai() ; 

// arrow function 
// const sum = (num1 , num2)=>{
//   return num1 + num2 ;
// }

// // const summ = (num1 , num2) =>  (num1 + num2) ;
// const summ = (num1 , num2) =>  ({username : "vansh"}) ;
// console.log(summ(4 , 5)) ; 


// const add = (a , b) => a + b + 100  
// console.log(add(4 , 6 )) ; 


// IIFE (Immediately Invoked Function Expression )

(function chai(){
  console.log(`Hqeiuqbie`) 
})() ;

((name)=> {
  console.log(`kjwbekwbe ${name}`) ;
})("vansh")
chai(); 
// This IIFE function cannot accesss outside the its scope , avoid from outside poppulation 
// js execution context 
// 1. global execution context 
// 2. function execution context 
// 3. eval execution context 




