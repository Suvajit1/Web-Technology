import "./Product.css";

function Product({ title, price = 10 }) {
  let isDiscount = price > 10000;
  let style = { backgroundColor: isDiscount ? "pink" : "" };
  return (
    <div className="Product" style={style}>
      <h3>Product : {title}</h3>
      <p>price Rs. {price}/- only</p>
      {isDiscount && <p>Discount %5</p>}
    </div>
  );
}

export default Product;
