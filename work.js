// // // objects revison
// // const os = new Object();
// //   os.name = "vansh" ,
// // os.email = "vanshsaini1322.gamil.com" 
// // // 
// // // console.table(os) ;
// // // console.log(typeof os) ;  
// // // console.log(os.name) ;



// // // const os = new Object(null) ;
// // // console.log(os) ; 

// // const target = {a : 1 , b : 2};
// // const source = {b : 4, c : 3} ;
// // // console.log(target) ; 
// // // const returentarget = Object.assign(target , source ) ;
// // // console.log(returentarget) ;
// // // console.log(typeof returentarget) ; 
// // // console.log(typeof o) ; 


// // // const target = { a: 1, b: 2 };
// // // const source = { b: 4, c: 5 };

// // // const returnedTarget = Object.assign(target, source);

// // // console.log(target);
// // // console.log(returnedTarget) ; 
// // // Expected output: Object { a: 1, b: 4, c: 5 }

// // // console.log(returnedTarget === target);
// // // Expected output: true


// // // const v1 = "abc";
// // // const v2 = true;
// // // const v3 = 10;
// // // const v4 = Symbol("foo");

// // // const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// // // // Primitives will be wrapped, null and undefined will be ignored.
// // // // Note, only string wrappers can have own enumerable properties.
// // // console.log(obj); // { "0": "a", "1": "b", "2": "c" }

// // // const person = {
// // //   ishuman : false ,
// // // printintroduction(){
// // //   console.log(` my name is ${this.name} and   i am human ? ${this.ishuman}  `) ; 
// // // },
// // // };

// // // const me = Object.create(person) ;
// // // me.name = "vansh" ;
// // // me.ishuman = true ;

// // // me.printintroduction(); 

// // // const name = "vansh" ;
// // // console(name) 
// // // name = "saini" ;
// // // console.log(name) ; 


// // // var course = "abc123" ;
// // // var a = "123" ;
// // // var anumber = Number(a) ;
// // // var number = Number(course) ;
// // // console.log(typeof number) ; 
// // // console.log(number) ; 
// // // console.log(anumber) ; 
// // // console.log(typeof anumber) ; 


// // var string1 = "vansh" ;
// // var string2 = " saini"  ;
// // // console.log(string1 + string2) ; 
// // // console.log(2 + "2" + "2") ; 
// // // console.log(2 + 2 + "2") ; 
// // // console.log(2 + (2 + "2")) ; 


// // // console.log(0 == undefined) //false 
// // // console.log(0 == null) ; // false
// // // console.log(null > 0); // false
// // // console.log(null >= 0 )  ; // true 

// // // console.log(2 == "2") ; /
// // // /true 
// // // console.log(2 === "2") ; 

// // var arr = [1,2,3,4,5] ;
// // // console.log(typeof arr) ; 
// // // arr.push(8) ;
// // // arr.unshift(0) ; 
// // // arr.shift() ; 
// // // console.log(arr);


// // // var newarr =  arr.join() ; 
// // // console.log(newarr) ; 
// // // console.log(typeof newarr) ; 


// // // slice and splice 

// // var newA = arr.slice(1,3) ; 
// // // console.log(arr) ; //1,2,3,4,5
// // // console.log(newA) ;  // 2,3


// // // var splicearr = arr.splice(1,3) ; 
// // // console.log(splicearr) ;//2,3,4
// // // console.log(arr) //1,5

// // // var mysm = Symbol("mus1") ; 
// // // const mysym = Symbol("key1") ;
// // // const user =  {
// // // [mysm] : "mus1", 
// // //  [mysym] : "mykey1" , 
// // //   name : "vansh" ,
// // //   branch : "aiml" ,
// // //   rollnumber : 2411015 ,
// // //   cgpa : 7.5 , 
// // //   isloggedin : false ,
// // // loginDays : ["monday" , "wednesday" , "sunday"] 
// // // }
// // // console.log(user.mysm) ;
// // // console.log (typeof user.mysm) ; 
// // // // console.table(user) ; 


// // // console.log(user.name) ; 
// // // console.log(typeof user.name ) ; 


// // // console.table(user) ;
// // // // freeze user ; 
// // // Object.freeze(user) ; 
// // // user.cgpa = 8.6 ;
// // // console.log(`My name is ${user.name} , and my branch is ${user.branch} and rollnumber is ${user.rollnumber} , i Got ${user.cgpa} cgpa in my first 4 semesters `) ;   


// // // user.js = function(name){
// // // console.log(`my name is ${this.name} and i am in ${this.branch}` ) ;
// // // }
// // // console.log(user.js()) ; 
// // // user.js("vansh") ; 


// // // const js = {
// // //   fullname : name = {
// // //     firstname : "vansh" ,
// // //     lastname : "saini" ,
// // //     endname : "panwar" 
// // //   }
// // // }
// // // console.log(js.fullname ) ; 


// // // const v1 = {
// // //   1 : "a" ,
// // //   2  : "b"
// // // }
// // // const v2 = {
// // //   2 : "c" ,
// // //   3 : "d" 
// // // }
// // // const v3 = {v1 ,  v2} ; 
// // // console.log(v3) ;  // { v1: { '1': 'a', '2': 'b' }, v2: { '2': 'c', '3': 'd' } }
// // // const v3 = Object.assign({} , v1 , v2 ) ; 
// // // console.log(v3) ;   // { '1': 'a', '2': 'c', '3': 'd' }


// // // const v3 = {...v1 , ...v2} ;
// // // console.log(v3) ; 

// // // console.log(Object.entries(v2)) ; 



// // // const obj = {
// // //   name : "vansh" ,
// // //   class : "AIML" 
// // // }

// // // const{name : username , class : branch } = obj ;
// // // // const { name, age } = user;

// // // console.log(username) ; 
// // // console.log(name) ; 

// // // const MyName = function(val){
// // // console.log("v" + val) ;
// // // console.log("a"+ val) ;
// // // console.log("n"+ val) ;
// // // console.log("s"+ val) ;
// // // console.log("h"+ val) ;
// // // }

// // // MyName(2) ; 

// // // const My = function(name , branch ,  rollno){
// // // console.log(`${name} , ${branch} , ${rollno}`)
// // // }

// // // My("vansh" , "AIMl" , 2411015) ; 
// // // My("shabd" , "BCA" , "6969") ; 

// // // var sum = 0 ;

// // // // rest operator
// // // const My = function(num1 , num2 , ...num){
  
// // //   sum += num ; 
// // //   return sum ; 
// // // }

// // // console.log(My(1,2,3,4)) ; 


// // // const obj1 = {
// // //   name : "vansh" ,
// // //   rollNo : 2411015 ,
// // //   sex : "kiya haa" 
// // // }


// // // var fun1 = function(anyobject){
// // //   console.log(`${anyobject.name} ${anyobject.rollNo} "sex = " ${anyobject.sex} `) ;
// // // }

// // // fun1(obj1) ; 

// // // IIFE 

// // // (function hhh(name){
// // // console.log(`my name is ${name}`) 
// // // })("vansh") ; 


// // // (function chai(){
// // //   console.log(`Hqeiuqbie`) 
// // // })() ;


// // // chai() ; 

// // // ((name) => console.log("my first love is cricket"))() ; 


// // // const fun = function(name){
// // //   console.log(`my name is  ${this.name}`) ;
// // // }
// // // fun("vansh") ; 


// // // const obj = {
// // //     gender  :  "male" ,
// // //    function (name) {
// // //   //  console.log(`${this.gender}`)
// // //   console.log(this.gender) 
// // //    console.log(this) ; 
// // //    },
// // // };
// // // obj.function()
// // // console.log(this) ; 



// // // const myself = {
// // // name : "vansh" ,
// // // introName : function(){
// // //   console.log(this.name) ;
// // //   myself.introAge() ; 
// // // },
// // // introAge : function(){
// // //   console.log(this.age) ;
// // //   console.log(this) ; 
  
// // // },
// // // age : 20 ,
// // // } ;
// // // const x = myself.introAge() ;

// // // myself.introName() ; 


// // // const myself = {
// // // name : "vansh" ,
// // // introName : ()=>{
// // //   console.log(`HII , My name is ${this.name}`) ;
// // // },
// // // introAge :  ()=>{
// // //   console.log(`HII , My name is ${this.age}`) ;
  
// // // },
// // // age : 20 ,
// // // } ;

// // // myself.introName() ; 



// // // can,t access ,s 
// // // one("ajay") ; 
// // // function one(name){
// // //   console.log(`my name is ${name}`) ;
// // // }


// // // two("vansh") ;
// // // const two = function (name) {
// // //   console.log(`my name is ${name}`)
// // // }

// // //  array plus constions 

// // // let arrr = [10, 20, 30, 40, 50]; 
// // // let size = arrr.length ; 
// // // if(arrr[Math.floor(size / 2) ]> 25 ){
// // //   console.log("yes middle elemenst if greater than 25 ") ;
// // // }
// // // else {
// // //   console.log("no middle emelenst is smaller than 25 ") ; 
// // // }

// // // var a = [10 , 20 , 30 , 40 , 50 ];
// // // var x = a ;
// // // x[1] = 69 ;
// // // console.log(x[1]) ;
// // // console.log(a[1]) ; 

// // // function test() {
// // //     console.log("A");
// // //     return 10;
// // //     console.log("B");
// // // }

// // // console.log(test());


// // // const a = [100,200,300] ;
// // // a[0] = 0 ;
// // // a = [1,2,3] ; 
// // // console.log(a) ; 


// // // const student = {
// // //     name: "Vansh",
// // //     age: 20,
// // //     branch: "AIML"
// // // };

// // // const {name : username  , age : userage } = student ;
// // // console.log(`${username} is ${userage} years old ` ) ; 


// // // var summ = 0 ;
// // // function sum(num1 , num2 , ...all) {
// // //   // return  all ;
// // //   summ += num1 + num2 + all ; 
// // //   return summ ; 
// // // }
// // // console.log(sum(10 , 20 , 30 , 40 , 50 , 60 , 70 )) ;


// // // loops 
// // // const a = [1,2,3,4,5,6] ;
// // // for(var i = 0 ; i < a.length ; i++){
// // //   console.log(a[i]) ;
// // // }
// // // var count = 0 ;
// // // while(count < a.length) {
// // //   console.log(a[count]) ;
// // //   count ++ ;
// // // }
// // // var count = 0 ;
// // // do{
// // // console.log(a[count]) ; 
// // // count++ ; 
// // // }
// // //   while(count < a.length) ;
// // const a = [
// //   {
// //     itemname : "book" ,
// //     price : 699 
// //   },
// //   {
// //     itemname : "games" ,
// //     price : 200 
// //   },
// //   {
// //     itemname : "shoes" ,
// //     price : 3699 
// //   },
// // ] ;

// // // const newprice = a.map( (num[price]) => num[price] * 1.1 ) ;
// // // console.log(newprice); 


// // // for (const val of a) {
// // //   const ans = console.log(`${val.itemname} price is  ${val.price}` ) ; 
// // // }
// // // console.log(ans) ; 



// // // for (const key of a) {
// // //   console.log(key) ; 
// // // }

// // //  const a = [1,2,3,4,5] ;
// // //  for (const val  of a) {
// // //    console.log(val) ; 
// // //  }

  
// var abc = [1,2,4,5,6,7] ;
// // for(const index of abc ){
// // // console.log(index) ; 
// // return index ; 
// // }
// // for of loop which direclty elekenest of the object 
// // but fot in loop give index of that object 
// // if we get elemenst at that index we should do arr of that index 
// // const str = "vansh saini"
// // for(const index in str){
// //   console.log( index  +  str[index]) ; 
// // }


// // map 
// // const map = new Map() ;
// // map.set("name" , "vansh") ;
// // map.set("age" , 20) ;
// // map.set("branch" , "AIML") ;
// // map.set("rollnumber" , 2411015) ;

// // for(const [key , value ] of map){
// //   console.log(` ${key} : ${value}`) ;
// //   // console.log(Map) ; 
// // }


// // objects 
// const myobj = {
// js : "javascript" ,
// cpp : "c++" ,
// rb : "ruby" ,
// py : "python"
// }

// // for(const val in myobj){
// //   console.log(`shortcut for ${myobj[val]} is ${val}`) ; 
// // }

// // const arrr = ["virat" , "rohit" , "dhoni" , "kohli"] ; 
// // for(const val in arrr){
// //   console.log(`my favorate crickters are ${arrr[val]}`) ; 
// // }

// // const coding  = ["java" , "cpp" , "py" , "rb" , "css"] ;
// // const ans = coding.forEach( (item , index , arr)=>  
// // console.log(index ) ) ;
// // // console.log(ans) ; 


// //  const mycoding = [
// //    {
// //      language_name : "javascript" ,
// //      langyage_file_name : "js"  
// //    },
// //    {
// //      language_name : "java" ,
// //      langyage_file_name : "java"  
// //    },
// //    {
// //      language_name : "python" ,
// //      langyage_file_name : "py"  
// //    },
// //  ]

// //  mycoding.forEach( (value) =>
// // console.log(value.langyage_file_name + " " + value.language_name)) ; 


// const ar = [1,2,3,4,5,6,7,8,9,10,11] ;
// // //  use of filter 
// // const ans = ar.filter( (num) => num >5 ) ;
// // console.log(ar) ; 
// // console.log(ans) ; 


// //  filter is used to filter out the useful thinks from the array or object we can say 

// // const ans = ar.map( (val) =>  val + 10 ).filter( (val) => val > 15)
// // console.log(ans) ;    
// //  const ans = ar.reduce( (acc , val) => {acc + val  ; 
// // console.log(acc)
// //  }, 0 ) 
// // const ans =ar.reduce( ( acc , val) => acc + val,  0 )
// // console.log(ans ) ; 

// // const ans =ar.reduce( ( acc , val) => {
// //   console.log(acc , val ) ;
// //   return acc + val } ,  0 )
// // // console.log(ans ) ; 


// // const fruits = ["apple", "banana", "mango", "orange", "grapes"] ;
// // for(var i = 0  ; i < fruits.length ; i++){
// //   if(i == 3 ){
// //     console.log(fruits[i]) ;
// //   }
// // } 



// const mydetailes = {
//   name : "vansh" ,
//   class : "AIML" ,
//   Roll_Number : 2411015 ,
//   intro(){`Hii my name is ${this.name} and my brach is ${this.class}  my roll number is ${this.Roll_Number} ` 
// }
// }

// mydetailes.caste = "saini" ;
// console.log(mydetailes) ; 
// console.log(mydetailes.caste) ;
// delete mydetailes["name"] ;  
// console.log(mydetailes.name) ; 
// mydetailes.class = undefined ; 
// console.log(mydetailes["class"])
// console.log(mydetailes.intro()) ; 

// console.log("Hii my  name is vansh") ;
// setTimeout(()=>{
//   console.log('i am not vansh ')
// } , 100) ;

// console.log('i am vansh 2') ; 

// promiseOne = new Promise((resolve , reject)=>{
//   let getted = true ;
//   if(getted){ 
// setTimeout(()=>{
// resolve('You get your Data') ;
// } , 1000 )
//   }
//   else {
// seTimeonut(()=>{
// reject('your data get rejected ') ;
// } , 1000 )
//   }
// }) ; 

// promiseOne.then((data)=>{
//   console.log(data) ;
// })
// promiseOne.catch((error)=>{
//   console.log("oops your data stucked somewhere  ")
// })
// promiseOne.finally(()=>{
//   console.log("I am done ") ; 
// })


// Promise.resolve(5) 
// .then(number => number * 5 ) 
// .then(number => number + 10 ) 
// .then(result => console.log(result)) 
// .catch(error => console.log(error)) ; 


// Promise.resolve(5)
//   .then(number => number * 2)  // returns 10
//   .then(number => number + 3)  // receives 10, returns 13
//   .then(result => console.log(result))
//   .catch(error => console.error(error));



// promise 
// promiseone = new Promise((resolve , reject )=>{

// setTimeout(()=>{
// console.log("my name is vansh ")
// resolve('Hii i am resolve ') ;
// console.log('I am from kurushtra ') ;
// } , 1000 )

// })
// console.log("hello i am outof block of promise ")

// promiseone.then((data)=>{
//   console.log(data) ; 
// });
// console.log("I am at last ") ; 



// console.log("Start");

// setTimeout(() => console.log("Timer"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");




// promiseone = new Promise((resolve , reject)=>{
// resolve(5) 
// reject('i am done , bro error aa gya ')
// }) 

// promiseone.then((data)=>{
// console.log(data) ;
// return data * 2  ;  
// })
// .then((data)=>{
//   console.log(data) ;
//     throw new error ;
//   return data / 10  ; 

// })
// .then((data)=>{
//   console.log(data) ;
// })
// .catch((error)=>{
//   console.log("ERROR : FOUND ") ;
// })




// async function f(){
//   return 5 ;
// }

// f().then((data)=>{
// console.log(data) ; 
// })

async function f(){
console.log("hii i am here ") ;
let promiseone = new Promise((resolve , reject )=>{
  resolve("dono!")
} , 1000 )
let result = await promiseone ; 
console.log(result) ; 
}
f() ; 
console.log("hey !!")


