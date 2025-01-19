import React, { useState } from "react";
import ProductItem from "../components/ProductItem";

const Home = ({ product }) => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className="btn btn-primary text-ưhite hover:bg-gray-200 hover:text-red-500"
          onClick={Increment}
        >
          Increase
        </button>
        <h1 className="mx-4 text-3xl my-3">{count}</h1>
        <button
          className="btn btn-primary text-ưhite hover:bg-gray-200 hover:text-red-500"
          onClick={Decrement}
        >
          Decrease
        </button>
      </div>
      {product.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          img={item.images}
        />
      ))}
    </div>
  );
};

export default Home;
