// const user = {
//   username : "vansh" ,
//   logCount : 8 ,
//   signedIn : true ,
//   getuseralldetailes : function(){
    // console.log("Got all the deatiles ") ;
    // return `hiii , my name is ${this.username}`
    // console.log(this) ; 
  // }

// }
// console.log(user.getuseralldetailes()) ; 
// console.log(this) ;


// constructor one 
// const promiseone = new Promise() ; 
// function user(username , userid , logincount , isloggin ){
  // this.username = username ;
  // this.userid = userid ;
  // this.logincount = logincount ;
  // this.isloggin = isloggin ;
  // this.greeting = function(){
    // console.log(`welcome ${this.username}`) ; 
  // }
  // return this 
// }

// const userone = new user("vansh" , "vanshsaini1322@gmail.com" , 12 , true ) ;
// const  usertwo = new  user("shabd" , "jaat13@gmail.com" , 2 , false ) ;
// console.log(usertwo) ; 
// console.log(userone) ; 
// console.log(userone.constructor) ; 
// console.log(userone.username) ;  



// new keyword  
// function mutilpleby5 (num){
  // this.num = num ;
  // return num * 5 
// }
// mutilpleby5.power = 2 ;
// console.log(mutilpleby5(5));
// console.log(mutilpleby5.power) ;
// console.log(mutilpleby5.prototype) ;  // {} beacuse 

// function createuser(username , score){
// this.username = username ; 
// this.score = score ;
// }

// createuser.prototype.increment = function(){
//   this.score ++ ;
// }
// createuser.prototype.printme = function(){
//   console.log(`price is ${this.score}` ) ;
// }
// const chai = new createuser("vansh" , 25 ) ;
// const tea =  new createuser("shabd" , 200) ;

// tea.printme() ;

//  prototype 

// let myname = "vansh     " 
// console.log(myname.truelength) ; 
// console.log(myname.trim().length) 
// console.log(myname.truelength) ;  we are makng a method 

let myhero = ["thor" , "vansh" , "shabd"] 
let heroPower = {
  thor : "hammer"  ,
  vansh : "adfwr" ,
  shabd : "qwer" ,

  

} 