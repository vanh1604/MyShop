import React, { useState } from "react";
import ProductItem from "../components/ProductItem";

const Home = ({ product }) => {
  return (
    <div>
      {product.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          thumbnail={item.thumbnail}
        />
      ))}
    </div>
  );
};

export default Home;
