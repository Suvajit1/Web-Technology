import "./Product.css";

// function Product({title, price, features, features2=1}){
//     return (
//         <div className="Product">
//             <h4>This is the {title}</h4>
//             <p>This is the {price}</p>
//             <p>{features}</p>
//             <p>{features2.a}</p>
//         </div>
//     );
// }

// function Product({title, price, features}){
//     const list = features.map((features)=><li>{features}</li>);
//     return (
//         <div className="Product">
//             <h4>This is the {title}</h4>
//             <p>This is the {price}</p>
//             <p>{list}</p>
//         </div>
//     );
// }

// function Product({title, price, features}){
//     // const list = features.map((features)=><li>{features}</li>);
//     return (
//         <div className="Product">
//             <h4>This is the {title}</h4>
//             <p>This is the {price}</p>
//             <p>{features.map((features)=><li>{features}</li>)}</p>
//         </div>
//     );
// }


// function Product({title, price}){
//     let isDiscount = price>50000;
//     let styles = {backgroundColor : isDiscount && "pink"};
//     return (
//         <div className="Product" style={styles}>
//             <h4>This is the {title}</h4>
//             <p>Price is {price}</p>
//             {/* {price>50000 ? <p>Discount of 5%</p> : null} */}
//             {/* {price>50000 ? <p>Discount of 5%</p> : <a href="https://www.google.co.in/">generate diccount</a>} */}
//             {isDiscount && <p>Discount of 5%</p>}

//         </div>
//     );
// }


import Price from "./Price";

function Product({title, idx}){
    let oldPrice = ["12,495", "11,980", "1,599", "599"];
    let newPrice = ["8,999", "9,199", "899", "278"];
    let description = [
        ["8,000 DPI", "5 programmale button"], 
        ["intuitive surface", "design for iPad Pro"], 
        ["design for iPad Pro", "intuitive surface"], 
        ["wireless", "optical orinetation"]
    ];

    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}></Price>
        </div>
    )
}

export default Product;