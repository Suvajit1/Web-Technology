function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Succces: Data saved to DB");
    } else {
      reject("Failure: Data not saved to DB");
    }
  });
}

// savetoDB("Suvajit Sadhukhan")
//   .then(() => {
//     console.log("promice1 was resolved");
//     return savetoDB("Arpan Sadhukhan")
//       .then(() => {
//         console.log("promice2 was resolved");
//       })
//       .catch(() => {
//         console.log("promice2 was rejected");
//       });
//   })
//   .catch(() => {
//     console.log("promice1 was rejected");
//   });

// savetoDB("Suvajit")
//   .then(() => {
//     console.log("Promise1 was resolved");
//     return savetoDB("Arpan");
//   })
//   .then(() => {
//     console.log("Promise2 was resolved");
//   })
//   .catch(() => {
//     console.log("Some promise was rejected");
//   });

// savetoDB("Suvajit")
//   .then((res) => {
//     console.log(res);
//     console.log("Promise1 was resolved");
//     return savetoDB("Arpan");
//   })
//   .then((res)=>{
//     console.log(res);
//     console.log("Promise2 was resolved");
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log("Promise1 was rejected");
//   });

let url = "https://official-joke-api.appspot.com/random_joke";

// fetch(url)
//   .then((res) => {
//     // console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.setup);
//     console.log(data.punchline);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function getJokes() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("error : ",err);
  }
}

getJokes();
