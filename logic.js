// control flow 
// if 
// if(condition == true ){

// }

const isUserLockedin = true;
const temp = 41;

// if(temp <= 50){
//   console.log("temp is less than  or equal to 50") ;
// }
// else {
//   console.log("temp is more than 50 ") ;
// }


// const score = 200 
// if(score > 100){
//   const power = "fly" 
//   console.log(`user power : ${power} `) ; 
//   }
//   console.log(power) ; 

// shorthand

const balance = 1000
if (balance > 500) console.log("test") //,
// console.log("test2") ; 


// switch 
// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }


// const month = "feb" ;
// switch (month) {
//   case "jan":
//     console.log("january") ; 
//     break;
// case "feb":
//     console.log("feb") ;
//     break;
// case "march":
//     console.log("march") ;
//     break;
// case "april":
//     console.log("april") ;
//     break;


//   default:
//     console.log("none") ; 
//     break;
// }


// fasly 
// false , 0 , -0 , BigInt 0n , "" , null , undefinef , NaN

// truthly values 
// true , "0" , "false" , " " , [], {} , function(){}  

// nullish coalescing operator (??) : Nll undefined 

let val1;
// val1 = 5 ?? 10 
// console.log(val1) ; // 5 
// val1 = null ?? 10 ;
// console.log(val1) ; // 10
// val1 = undefined ?? 10 ;
// console.log(val1) ; // 10

// terinary operator 
//  condition ? true : false 

// const iceteaprice = 100 
// iceteaprice <= 80 ? console.log("less than ") : console.log("more than ") ; 



// const obj = { a: 1 };
//  const copy = obj;
//   copy.a = 5; 
//   console.log(obj.a);



// function change(arr) {
//    arr = [100, 200]; 
//   }

// let nums = [1, 2, 3];
//  change(nums); 
//  console.log(nums);







// Loops 
// for 
// for (var  index = 0  ;index <= 10 ; index++) {
//   const element = index ;
//   console.log(element) ;
//   if(element == 5){
//     console.log("5 is best number") ;
//     console.log(element) ;
//   }
// }

//  for under for 
// let myarray = ["virat" , "dhoni" , "vansh" , "shabd"] 
// console.log("our super crickets are ") ; 
// for(var i =  0 ; i < myarray.length ; i++){
//   console.log(myarray[i]) ;
// }

// break and continue 

// for(var i = 1 ; i <= 20 ; i++){
//   if(i == 15){
//     break ; 
//   }
//   console.log(i) ;

// }

// alt + shift + down arrow copy the selected part and put it down 

// while
//  let myarray = ["virat" , "dhoni" , "vansh" , "shabd"] 
//  var count = 0 ;
// while(count < myarray.length){
// console.log(myarray[count]) ;
// count ++ ;
// } 

// do while
// let score = 11 ;
// do{
// console.log("score is " + score) ;
// score++ ;
// }
// while(score < 11 );


// for of loop
// ["" , "" , ""] 
// [{} , {} ,{}] 
const arr = [1,2,3,4,5] ;
for (const val  of arr) {
  console.log(val) ; 
}

// const greeting = "hello world!" 
// for(const val of greeting){
//   console.log(val)  // h e l l o w o r l d !
// }


// maps 
// const map = new Map() 
// map.set('IN' , "India") 
// map.set('US' , "USA") 

// console.log(map) ; 
// for (const [key , value]  of map) {
//   console.log(key ,":-" ,  value) ; 
// }

// we can iterate map but not objects using for of loops 
// const myobj = {
// game1 : "freefie" ,
// game2 : "bgmi" ,
// game3 : "cricket"
// }

// for (const [key , value] of myobj) {
//   console.log(key ,":-" ,  value) ; 
// }

// for in give index and for of givs direclt value at that index , and for of work on map and for in works on objects , objects are naturally inherited and map are herited naturally 
// const myobj = {
// js : "javascript" ,
// cpp : "c++" ,
// rb : "ruby" ,
// py : "python"
// }

// // for in loops 
// for(const key in myobj) { 
//   // console.log(myobj[key]) ;  
//   console.log(`shortcut for ${myobj[key]} is ${key}`) ;
// }


// const pro = ["java" , "cpp" , "py" , "rb" , "css"] ;
// for (const key in pro) {
//   console.log(pro[key]) ; 
// } 

// map is not interable fow we can not apply for in loops into the maps 

// const coding  = ["java" , "cpp" , "py" , "rb" , "css"] ;
// array.forEach(element => {

// });

// for each
// coding.forEach( function(val){
// console.log(val) ;
// }) ;

// arrow function 
// coding.forEach( (val)=>{
// console.log(val) ;
// })

// we can declare the function and then pase it just simple 
// function printMe(item){
//   console.log(item) ;
// }
// coding.forEach(printMe) ;


// It also have index , item and full arr we can print one of them as well 
// coding.forEach( (item , index , arr)=>{
//   console.log(item , index , arr ) ;
// })


// const mycoding = [
//   {
//     language_name : "javascript" ,
//     langyage_file_name : "js"  
//   } ,
//   {
//     language_name : "java" ,
//     langyage_file_name : "java"  
//   },
//   {
//     language_name : "python" ,
//     langyage_file_name : "py"  
//   },
// ]

// mycoding.forEach( (item)=>{
//   console.log(item.language_name , item.langyage_file_name) ; 
// })
// const coding  = ["java" , "cpp" , "py" , "rb" , "css"] ;
// const values = coding.forEach( (item)=>{
//   console.log(item) ; 
//   return item ;
// })
// // it did n,t return any value 

// const myNum = [1,2,3,4,5,6,7,8,9,10] ; 
// var newNums= myNum.filter( (num) => num > 4) 
// console.log(newNums) ;  // [ 5, 6, 7, 8, 9, 10 ]

// const newNums = myNum.filter( (num)=>{
//   return num > 4 ; 
// })
// console.log(newNums) ;  // [ 5, 6, 7, 8, 9, 10 ]
// but in this we have to return the value by our own if we have open the block scope {}


// same output but with logical + forEach 
// const newNum = [] ; 
// myNum.forEach( (num)=>{
//   if(num > 4 ){
//     newNum.push(num) ;
//   }
// })
// console.log(newNum) ; 

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myNum) ; 
// const newNums = myNum.map( (num) =>{return num + 10 } ) 
// console.log(newNums) ; // [11, 12, 13, 14, 15,16, 17, 18, 19, 20]


// const newNum = myNum.map( (val) => val + 10 ).map( (val) => val + 1 ) ;
const newNum = myNum.filter((val) => val >= 5).map((val) => val + 10);
// console.log(newNum) ;  // [ 15, 16, 17, 18, 19, 20 ]


// reduce 
const my = [1, 2, 3, 4, 5];
// const mytotal  = my.reduce( function(acc , currval ){
//   console.log(acc , currval) 
//   return acc + currval 
// }, 0)

// const mytotal = my.reduce( (acc , currval) =>{ 
//   console.log(acc , currval)
//   return acc + currval}, 0 )

// console.log(mytotal)


const shoppingcart = [
  {
    itemName: "js course",
    price: 2900
  },
  {
    itemName: "pyhton",
    price: 1500
  },
  {
    itemName: "data  science",
    price: 3000
  },
  {
    itemName: "main course",
    price: 2900
  },
  {
    itemName: "c++ course",
    price: 2900
  }
]
const totalprice = shoppingcart.reduce((acc, item) => acc + item.price, 0)
console.log(totalprice);  // 13200 