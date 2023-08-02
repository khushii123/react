import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import "./product-list.css"
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  if (!products) {
    return (
      <BounceLoader
        color={"#325795"}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  return (
    <div>
      <h1>My Products</h1>
      <div className="product-list">
      {products.map((item) => {
        return (
          <div key={item.id} className="product-item">
             <img
              src={item.image}
              alt={item.title}
              style={{ width: "200px", height: "200px" }}
            />
              <p className="product-title">{item.title}</p>
              <p className="product-price">₹ {item.price}</p>
            </div>
        );
      })}
      </div>
    </div>
  );
};

export default ProductList;
