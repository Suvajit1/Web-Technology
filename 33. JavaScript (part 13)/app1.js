let url = "https://catfact.ninja/fact";

// async and await
async function getFact(){
    try{
        let res1 = await axios.get(url);
        console.log(res1);
        console.log(res1.data);

        let res2 = await axios.get(url);
        // console.log(res2);
        let data2 = res2.data;
        console.log(data2.fact);
    }
    catch(e){
        console.log("error :", e);
    }

    console.log("bye");
}

// getFact();

console.log("hello");

let btn = document.querySelector("button");
let p = document.querySelector(".fact");

btn.addEventListener("click", async ()=>{
    console.log("button was clicked");
    let fact = await getFact1()
    console.log(fact);
    p.innerText = fact;
});

async function getFact1(){
    try{
        let res1 = await axios.get(url);
        return res1.data.fact;
    }
    catch(e){
        console.log("error :", e);
        return "no fact found";
    }

}

let link = "https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg";
let img = document.querySelector("img");
img.setAttribute("src",link);