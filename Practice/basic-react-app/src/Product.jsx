import "./Product.css";

function Product({ title, price = 10, features, features2 }) {
  return (
    <div className="Product">
      <h3>Product : {title}</h3>
      <h5>Product Description!</h5>
      <p>price Rs. {price}/- only</p>
      <p>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p>
      <p>{features2.a}</p>
    </div>
  );
}

export default Product;
