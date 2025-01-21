import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ id, title, description, price, thumbnail }) => {
  return (
    <div classtitle="border border-gray-300 p-4 w-[300px] my-2 bg-slate-50">
      <h1>{title}</h1>
      <Link to={`/product/${id}`}>
        <img className="w-auto h-[300px] object-cover" src={thumbnail} alt="" />
      </Link>

      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
};

export default ProductItem;
