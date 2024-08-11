// // Favorite Movie game

// let fav = "pk";

// let guess = prompt("Guess my favorite movie ");

// while(guess !=fav && guess != 'q'){
//     guess = prompt("You are wrong! Guess again! \n(or write q to QUIT!) ");
// }
// if(guess==fav){
//     console.log("Congratulation!");
// }else{
//     console.log("Better Luck Next Time")
// }

// to-do app
let task=[];

let req=prompt("Enter your request ");

while(true){
    if(req=="quit"){
        console.log("QUIT todo");
        break;
    }
    
    if(req=="list"){
        console.log("-----------");
        for(let i=0;i<task.length;i++){
            console.log(i,task[i]);
        }
        console.log("-----------");
    }
    else if(req=="add"){
        let t=prompt("Enter task you wanna add! ");
        task.push(t);
        console.log("task added");
    }
    else if(req=="delete"){
        let i=prompt("Enter index of the task to delete")
        task.splice(i,1);
        console.log("task deleted")
    }else{
        console.log("Wrong Request!")
    }

    req=prompt("Enter your request ");    
}