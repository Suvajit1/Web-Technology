let url = "http://universities.hipolabs.com/search?name=";

// let country = "India";

let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);

    let clgArr = await getColleges(country);
    show(clgArr);
})

function show(clgArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for (let clg of clgArr) {
        console.log(clg);
        let li = document.createElement("li");
        li.innerText = clg.name;
        list.append(li);
    }
}
async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log("error :",e);
        return [];
    }
}