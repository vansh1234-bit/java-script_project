new Promise(function(resolve , reject){
   let variable =  true ;
   if(variable){
    setTimeout(function(){
    resolve({name : "vansh" , email : "saini"}) ; 
   
   },2000) 
} }) 
.then(function(yes){
  console.log(yes.email) ;
}).catch(function(error){
console.log(error) ; 
}).finally(function(){
  console.log("yeah boy i am excuted at the end ") ; 
})
console.log("fetching data") ; 