
//  variable  

// const accountId = 2411015 
// let accountEmail = "vanshsaini1322@gmail.com"
// var accountPassword = "12345"
// accountCity = "kurushatra"

// accountId = 5  // not allowed 
// beacause we can,t change the values of const variables because they are fixed 

// accountEmail = "vwbevdiubiuw" 
// accountPassword = "212121"
// let sex  ; 
// we can not change the the value inside const  
// console.log(accountId) 
/* prefer not to use var because in issus in block scope 
// console.table([accountId , accountEmail , accountPassword , accountCity , sex ]) */ 


// data types 

// "use strict" ; treat all JS code as neer version 
// alert(3+3) we are using nodejs not browser 
// let name = "vansh" 
// let age = 20 
// let islogin = false 
// let state ; 

// number's range => 2 to power 53 
// string 
// boolean 
// null => standalone value 
// symbol => unique  
// console.log(typeof islogin) //boolean
// console.log(typeof undefined )   //undefined


let score = "3xx3" 
// console.log(typeof score)
// stirng not Stirng "s" should be small in answer but when we chnage one to other S should be Captail......
// console.log(typeof (score)) 

// let valueNumber = Number(score) ; //3xx3 this is number not string 
// console.log(typeof(valueNumber))
// console.log(valueNumber) // output is NaN 
// console.log(typeof(score)) //number
// console.log(score)  //3xx3

// "33" => 33 
// "33abc" => NaN 
// true => 1 , false => 0 


let islog = "" 
let isin = "wekbwi"
let boolnumber = Boolean(islog) 
 console.log(boolnumber)

// 1=> true , 2=> false
// vansh => true 
//  ""=> 0 


// let stringnumber = true  
// tostring = String(stringnumber) 
// console.log(typeof(tostring))
// console.log(tostring)  


//**************************************** operations*************************************************
// let value = 3 
// let neqvalue = -value  
// console.log(neqvalue)

// console.log(2 + 2) 

// let str1 = " vansh"
// let str2 = "hello" 
// console.log(str2 + str1 )
// let True = 1 ;
// console.log(1 + "2") // 12 
// console.log("1" + 2 ) // 12
// console.log("1" + 2 + 2) // 122 
// console.log(1 + 2 + "2")  // 32 
// console.log(1 + (2 + "2")) // 122 
// console.log((3+ 4) * 5 % 3 ) // 2 
// console.log(++ True ) // 2
// console.log(True++)// 2
// console.log(True) ; // 3 
// let gamecounter = 100 
// console.log(++gamecounter) // 101


// console.log(2 > 1 )  // true 
// console.log("02" > 1 ) //true 
// console.log("1.1" > true ) //true 


// this below is because == works differently from >= and < operator
// console.log(null > 0)  //false 
// console.log(null == 0 ) //false 
// console.log(null >= 0) //true 
// console.log(undefined == 0 ) //false 


// === this check for datatype as well 
console.log("2" === 2) 


// summary 
/* 
 Primitive 
  7 types 
  string , number , boolean ,  NULL , undefined , symbol , BigInt
 reference type (Non Primitive)
 array , objects , functions 
*/
// const id = Symbol('123')
// const another_id = Symbol('123') 
// console.log(id == another_id)  //false 
// const BigNumber = 236842823846372834n ; 
// const player = ["vansh" , "ajay" , "lovish" , "shabd"] ; //array 

// let myOBJ = {
// name : "vansh" ,
// age : 22 , 
// }
// const myFunction = function(){
//   console.log("Hello World") ; 
// }
/*
console.log(typeof(BigNumber)) ; //bigint
console.log(typeof(myFunction)) // funtion object  
console.log(typeof(player))  // object 
console.log(typeof(null)) // object
console.log(typeof(myOBJ)) ;  // object 
console.log(typeof(id)) // symbol 
*/

// Membory 
/*
 All the Primitive datatype are stack they send copy not the original but reference type are heap their datatype chnage the directly from heap 
*/

const name = "vansh" 
const age = " 20"
// console.log(name + age + "years old") ;
// but the better mathod is down below ...
// console.log(`My name is ${name} and i am ${age} years old`) ; 

const gameName = new String('freefire') 
// console.log(gameName)

// console.table(gameName)
// console.log(gameName[0]) 
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4)) ; 
// console.log(gameName.indexOf('x')) ; 
// console.log(gameName.repeat('f')); 
// console.log()


// console.log("cat"[0])


// const a = "a" 
// const b = "b" 
// if(a > b ){
//   console.log(`${a} is greater then ${b}`) ;
// }
// else if (a < b ){
//   console.log(`${a} is smaller than ${b}`) 
// }
// else {
//   console.log(`${a} and ${b} both are equal `)
// }


const sentenece = `The quick brown fox jumps over the lazy dog.`
const index = -20 ;
let count = -4 ; 
// console.log(`the index of ${index} will give the value ${sentenece.at(index)}`)
// console.log(`the index of ${count} will give the value ${sentenece.at(count)}`)
// we can access -indexes with at as well but not with the other syntax
console.log(sentenece[index]) ; 

// const myString = "Every green bus drives fast.";
// // how to use substr it take two variable 
// console.log(myString.substr(1 , 8)) ; 


// const str = "vansh , saini"
// // console.log(str.big()) ; //<big>vansh , saini</big>


// // const st = " "
// // console.log(st.at(0)) 


// const sentence = "1The quick brown fox jumps over the lazy dog.";
// console.log(`${sentence.charCodeAt(0)}`) // 49 it value ASSIC value 


// const str1 = "Cats are the best!";

// console.log(str1.endsWith("best!"));
// // Expected output: true

// console.log(str1.endsWith("best", 17));
// // Expected output: true

// const str2 = "Is this a question?";

// console.log(str2.endsWith("question"));
// // Expected output: false



// const mood = "Happy! ";

// console.log(`I feel ${mood.repeat(3)}`);
// // Expected output: "I feel Happy! Happy! Happy! "



// const paragraph = "This dog's name is just Dog! Yes, that is the name.";

// console.log(paragraph.replace("name", "nickname"));
// // Expected output: "This dog's nickname is just Dog! Yes, that is the name."

// console.log(paragraph.replace(/\bis\b/, "was"));
// // Expected output: "This dog's name was just Dog! Yes, that is the name."

// console.log(paragraph.replace(/\bis\b/g, "was"));
// // Expected output: "This dog's name was just Dog! Yes, that was the name."



// const paragraph = "This dog's name is just Dog! Yes, that is the name.";

// console.log(paragraph.replaceAll("name", "nickname"));
// // Expected output: "This dog's nickname is just Dog! Yes, that is the nickname."

// console.log(paragraph.replaceAll(/\bis\b/g, "was"));
// // Expected output: "This dog's name was just Dog! Yes, that was the name."



// const str = "hey JudE";
// const re = /[A-Z]/;
// const reDot = /[.]/;
// console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
// console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation


// const str = "The quick brown fox jumps over the lazy dog.";

// console.log(str.slice(31));
// // Expected output: "the lazy dog."

// console.log(str.slice(4, 19));
// // Expected output: "quick brown fox"

// console.log(str.slice(-4));
// // Expected output: "dog."

// console.log(str.slice(-9, -5));
// // Expected output: "lazy"



// const str = "The quick brown fox jumps over the lazy dog.";

// const words = str.split(" ");
// console.log(words[3]);
// // Expected output: "fox"

// const chars = str.split("");
// console.log(chars[8]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]



// const str = "Saturday night plans";

// console.log(str.startsWith("Sat"));
// // Expected output: true

// console.log(str.startsWith("Sat", 1 ));
// // Expected output: false



// const str = "Mozilla";

// console.log(str.substr(1, 2));
// // Expected output: "oz"

// console.log(str.substr(2));
// // Expected output: "zilla"



// const str = "Mozilla";

// console.log(str.substring(1, 3));
// // Expected output: "oz"

// console.log(str.substring(2));
// // Expected output: "zilla"
//  substring(firdtindex , lastrindex );


//  const x = new String("Hello world");

// console.log(x.toString()); // "Hello world"


// Number 
// const balance = new Number(300) ;
// const score = 100 
// console.log(score)
// console.log(balance) 
// console.log(score.toString().length) 
// console.log(score.toFixed(4))  //100.0000

// const otherNumber = 221.850000 
// console.log(otherNumber.toPrecision(3)) ; //222 
// const hundred = 1000000 ;
// // console.log(hundred.toLocaleString()) ; // 1,000,000
// console.log(hundred.toLocaleString('en-IN')) ;  //10,00,000


// console.log(Math.ceil(4.1)) 
// console.log(Math.min(4, 3, 2, 6,7,1,0)) ; 
// console.log(Math.floor((Math.random()* 6  )+ 1 ))

// dates 

let myDate = new Date() ;
// console.log(myDate.toDateString()) ; // Sun Sep 20 2026
// console.log(myDate.toLocaleString()) ; //Sun Sep 20 2026   9/20/2026, 4:05:48 PM
// console.log(typeof(myDate))


// let currentdate = new Date(2026 , 8,  20) ;
// let currentdates = new Date(2026 , 8,  20 , 4 , 12 , 60) ;
// let newdate = new Date("1-14-2026") ; 
// console.log(currentdates) ;
// console.log(currentdates.toDateString()) ;
// console.log(currentdates.toLocaleString()) ; 
// console.log(newdate.toDateString()) ; 


// let myTimeStamp = Date.now() ;
// console.log(myTimeStamp) ; 
// console.log(newdate.getTime()) ;
// console.log(Math.floor((myTimeStamp -  newdate.getTime() ) / (3600*1000 * 12)) ) 
// console.log(currentdate.getDay()) ; 
// console.log(currentdate.getMonth()) ; 
// console.log(currentdate.getFullYear()) ; 


// console.log(myTimeStamp)




