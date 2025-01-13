import Product from "./Product";

function ProductTab() {
  return (
    <>
      <Product
        title="phone"
        price={10000}
        features={["hi-tech", "durable", "fast"]}
        features2={{ a: "hi-tech", b: "durable", c: "fast" }}
      ></Product>
    </>
  );
}

export default ProductTab;
