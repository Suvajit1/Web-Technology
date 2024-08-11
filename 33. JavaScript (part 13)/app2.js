const url = "https://official-joke-api.appspot.com/random_joke"

async function getJokes(){
    try{
        const config = {Headers: {Accept : "application/json"}}
        let joke = await axios.get(url, config);
        console.log(joke.data);
    }
    catch(e){
        console.log("Error -",e);
    }
}

getJokes();