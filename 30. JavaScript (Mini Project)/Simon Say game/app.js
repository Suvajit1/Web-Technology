let gameSeq = [];
let userSeq = [];

const btns = ["red", "yellow", "green", "purple"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(start == false){
        console.log("game started");
        start = true;
    }
    
    levelUp();
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

// for game
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    // randon btn choose
    let randomIdx = Math.floor(Math.random()*4);    // 0 to 3
    let randomCol = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomCol}`);    // select the class

    gameSeq.push(randomCol);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

// for user
function buttonPress(){
    // console.log("btn was pressed");
    let btn = this;
    // console.log(btn);
    userFlash(btn);

    let userCol = btn.getAttribute("id");
    // console.log(userCol);
    userSeq.push(userCol);
    // console.log(userSeq);

    checkAns(userSeq.length-1);

}

function checkAns(idx){

    if(userSeq[idx] == gameSeq[idx]){
        // console.log("same button");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `game over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

let allBtns = document.querySelectorAll(".btn");

for(let btn of allBtns){
    btn.addEventListener("click", buttonPress); 
}