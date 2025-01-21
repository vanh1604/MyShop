import React from "react";
import ProductItem from "../components/ProductItem";
const Shop = ({ product }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mx-52">
      {product.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          thumbnail={product.thumbnail}
        />
      ))}
    </div>
  );
};

export default Shop;
