// event 
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(retuned){
//   return retuned.json() ;
// })
// .then(function(data){
//   console.log(data[0].address.city) 
// })
// .catch(function(error){
//   console.log(error) 
// })




  // console.log(data[3].name) ;
  // console.log(data[1].address.city)
  // console.log(data[6].email) ;
  // console.log(data[1].company.name)
  // for(var i = 0  ; i < data.length ; i++){
  //   console.log(data[i].name) ; 
  // }
//   fetch("https://jsonplaceholder.typicode.com/users") 
// .then(function(returned){
//   return returned.json() ;
// })
// .then(function(data){
// const user = data.find(function(user) {
//   return user.id === 8 ;
// });
// console.log(user.name) ;
// console.log(user.company.name) ; 

// })
// .catch(function(error){
//   console.log(error) ; 
// })


fetch("https://jsonplaceholder.typicode.com/users") 
.then(function(returned){
return returned.json() ;
})
.then(function(data){
  console.log(data) ;
})
.catch(function(error){
  console.log(error) ; 
})