let url = "https://catfact.ninja/fact";

// fetch(url);

// fetch(url)
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });


// fetch(url)
//     .then((res)=>{
//         console.log(res);
//         console.log(res.json());    // this will aslo return a promise
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// fetch(url)
//     .then((res)=>{
//         console.log(res);
//         res.json().then((res)=>{
//             console.log(res);
//         });
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// Another way
// fetch(url)
//     .then((res)=>{
//         // console.log(res);
//         return (res.json())
//     })
//     .then((data)=>{
//         console.log(data.fact);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// multiple request
// chaning
fetch(url)
    .then((res)=>{
        return (res.json())
    })
    .then((data1)=>{
        console.log("data1 :", data1.fact);
        return fetch(url)
    })
    .then((res)=>{
        return res.json()
    })
    .then((data2)=>{
        console.log("data2 :", data2.fact);
    })
    .catch((err)=>{
        console.log(err);
    });

console.log("Suvajit Sadhukhan");

