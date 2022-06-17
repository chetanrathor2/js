function myfun(){
  console.log('hello')
}



try {
   myfun()
} catch (error) {
  console.log(error)  
}
finally{
  console.log('it will run if error occured or not ')
}