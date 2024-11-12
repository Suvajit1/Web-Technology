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


function Product({title, price}){
    let isDiscount = price>50000;
    let styles = {backgroundColor : isDiscount && "pink"};
    return (
        <div className="Product" style={styles}>
            <h4>This is the {title}</h4>
            <p>Price is {price}</p>
            {/* {price>50000 ? <p>Discount of 5%</p> : null} */}
            {/* {price>50000 ? <p>Discount of 5%</p> : <a href="https://www.google.co.in/">generate diccount</a>} */}
            {isDiscount && <p>Discount of 5%</p>}

        </div>
    );
}

export default Product;