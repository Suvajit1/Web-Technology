const max = prompt("Enter the max number : ");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number : ");

while(true){
    if(guess=="quit"){
        break;
    }
    if(guess==random){
        console.log("You are right! Congrats!!");
        break;
    }else if(guess < random){
        guess = prompt(" hint : Your guess was too small. Please try with larger number ");
    }else{
        guess = prompt("hint : Your guess was too large. Please try smaller number ");
    }
}