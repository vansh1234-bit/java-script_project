//  const promises1  = new Promise(function(resolve , reject ){
//   var nope = false ; 
//  if(nope){
//   resolve('Hii i am here') ;
//  }
//  else {
//   reject('i am not there') ;
//  }


//  promises1.then(function(fun){ 
//   console.log(fun) ; 
//  })
//  promises1.catch(function(nope){
//   console.log('i am failed to happened') 
//  }) 
//  })
 


// new Promise(function(resolve , reject){
//   if(false ){
// setTimeout( function(){

//   console.log('asyn called 2 ')
//   resolve() ;
// }, 1000)
//   }
//   else {
//     console.log('i introduced before reject ') ;
//     reject() ; 
//     console.log('i introduce after reject') ; 
//   }
// }).then(function(){
//   console.log("async 2 resolve") ; 
// }).catch(function(){
//   setTimeout(function(){
//   console.log('hii i am catch') ; 
// } , 1000 )
// })
// console.log("hello i am last ") ; 



// const promise3 = new Promise(function(resolve , reject){
//   setTimeout(function(){
// resolve({username : "chai" , email : "chaiorcode.gmail.com"})
//   } , 1000)
// })
// promise3.then(function(user){
//   console.log(user.username) ; 
// })


new Promise(function(resolve , reject){
setTimeout(function(){
var error = false ;
   if(error == true){
    reject("Error Found : Please remove error first ") ;
   }
   else {
    resolve({username : "vansh" , userpass : "123"}); 
   }
},1000)
})
.then(function(user){
  console.log(user) ;
  return user.username   
}).then(function(username){
console.log(username) ; 
}).catch(function(error){
  console.log(error) ; 
}).finally(() => console.log("promise is either solved or rejected")) ; 



// const promise5 = new Promise(function(resolve , reject){
// setTimeout(function(){
// var error = true ;
//    if(error == true){
//     reject("Error Found : Please remove error first ") ;
//    }
//    else {
//     resolve({username : "vansh" , userpass : "123"}); 
//    }
// },1000)
// })

// async function cosumefive(){
//   try{
// const response = await promise5 ; 
// console.log(response) ; 
//   }
//   catch(error){
//     console.log(error) ; 
//   }



// promise 5 
// const promise5 = new Promise(function(resolve , reject ){
//  setTimeout(function(){
//  var error = true ;
//     if(error == true){
//      reject("JS went wrong ") ;
//     }
//     else {
//      resolve({username : "vansh" , userpass : "123"}); 
//     }
//  },1000)
//  })

//  async function consumePromise5(){

//   const response = await promise5 ;
// console.log(response) ; 
//  }

// async function consumePromise5 (){

//   try {
//     const response = await promise5 ;
//     console.log(response) ;
//   }
//   catch(error){
// console.log(error) ;
//   }
// }
//  consumePromise5()

// async function getdata(){
//   try{
//   const response  = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json() ;
//   console.log(data) ;
//   // console.log(response) ; 
// }
// catch(error){
//   console.log("E : " ,  error) ;
// }
// }