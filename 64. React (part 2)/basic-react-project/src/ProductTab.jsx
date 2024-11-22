import Product from "./Product";

// export default function ProductTab(){
//     let options = ["hi-tech", "durable", "fast"];
//     let options2 = {a : "hi-tech", b : "durable", c : "fast"};
//     // let options3 = [<li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li>];

//     return (
//         <>
//             {/* <Product title="MacBook" price={90000} features2={options2}></Product>
//             <Product title="MacBook Pro" price={150000} features2={{a : "hi-tech", b : "durable", c : "fast"}}></Product>
//             <Product title="iPad" price="60k" features={["hi-tech", "durable", "fast"]}></Product> */}
//             {/* <Product title="iPhone" price="45k" features={options3}></Product> */}

//             <Product title="iPhone" price={50000}></Product>
//             <Product title="MacBook" price={90000}></Product>
//             <Product title="iPad" price={60000}></Product>
//         </>
//     )
// }


export default function ProductTab(){
    let styles = {
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItems : "center",
    }
    return (
        <div style={styles}>
            <Product title="Logistich MX Master" idx={0}></Product>
            <Product title="Apple Pencile (2nd gen)" idx={1}></Product>
            <Product title="Zebronics Zeb-transformer" idx={2}></Product>
            <Product title="Petronics Toad 23" idx={3}></Product>
        </div>
    )
}