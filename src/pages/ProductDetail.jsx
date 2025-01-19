import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axios";
// Adjust path if needed

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from the route
  const [product, setProduct] = useState(null); // Initialize as null to handle loading state

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await instance.get(`/products/${id}`); // Assuming the API returns the product in `data`
        setProduct(data); // Update the product state
      } catch (error) {
        console.error("Error fetching product:", error); // Log errors to debug
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id]); // Re-run effect if `id` changes

  if (!product) {
    return <div>Loading...</div>; // Show a loading message while fetching the product
  }

  return (
    <div className="max-w-5xl h-screen mx-auto px-4 py-8 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-lg shadow-lg max-h-96 object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-xl text-gray-600 mt-4">
            Price:{" "}
            <span className="text-green-500 font-semibold">
              ${product.price}
            </span>
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            {product.description}
          </p>

          {/* Add to Cart Button */}
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
