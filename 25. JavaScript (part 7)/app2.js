// Write a function that prints "hello world" 5 times at enterval of 2s each

let id = setInterval( () =>{
    console.log("hello World!");
}, 2000);

setTimeout( function(){
    clearInterval(id);
    console.log("clear interval ran");
}, 10000);