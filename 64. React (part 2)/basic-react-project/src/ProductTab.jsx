import Product from "./Product";

export default function ProductTab(){
    let options = ["hi-tech", "durable", "fast"];
    let options2 = {a : "hi-tech", b : "durable", c : "fast"};
    // let options3 = [<li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li>];

    return (
        <>
            {/* <Product title="MacBook" price={90000} features2={options2}></Product>
            <Product title="MacBook Pro" price={150000} features2={{a : "hi-tech", b : "durable", c : "fast"}}></Product>
            <Product title="iPad" price="60k" features={["hi-tech", "durable", "fast"]}></Product> */}
            {/* <Product title="iPhone" price="45k" features={options3}></Product> */}

            <Product title="iPhone" price={50000}></Product>
            <Product title="MacBook" price={90000}></Product>
            <Product title="iPad" price={60000}></Product>
        </>
    )
}