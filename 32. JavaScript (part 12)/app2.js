
function getNum2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            if(num<4){
                reject("promise rejected");
            }else{
                console.log("new number :",num);
                resolve("promise resolved");
            }
        }, 1000);
    });
}

async function demo2(){
    try{
        await getNum2();
        await getNum2();
        await getNum2();
    }
    catch(err){
        console.log("Error :", err);
    }
    let a = 100;
    console.log(a);
}

demo2();