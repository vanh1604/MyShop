import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ id, title, description, price, thumbnail }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-[300px] my-4 bg-slate-100 shadow-md">
      <h1 className="text-lg text-center font-bold text-gray-800 mb-2">{title}</h1>
      <Link to={`/product/${id}`}>
        <img
          className="w-full h-[200px] object-cover rounded-lg mb-3"
          src={thumbnail}
          alt={title}
        />
      </Link>
      <p className="text-sm text-gray-600 mb-3 text-center">{description}</p>
      <p className="text-base text-center font-semibold text-gray-900">${price}</p>
    </div>
  );
};

export default ProductItem;
