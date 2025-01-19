import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
const productSchema = z.object({
  title: z.string().min(3, { message: "Required" }).max(100),
  price: z.number().min(0),
  description: z.string().optional(),
});
const ProductAdd = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });
  const onSubmit = (data) => {
    onAdd(data);
  };

  return (
    <div className="max-w-lg   mx-auto p-6 bg-white shadow-lg rounded-lg pt-[120px] ">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add Product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
          {/* Title Input */}
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter product title"
              {...register("title", { required: true })}
            />
            {errors.title?.message && (
              <p className="text-red-500">{errors.title?.message}</p>
            )}
          </div>

          {/* Price Input */}
          <div className="flex flex-col">
            <label
              htmlFor="price"
              className="text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter product price"
              {...register("price", { required: true, valueAsNumber: true })}
            />{" "}
            {errors.price?.message && (
              <p className="text-red-500">{errors.price?.message}</p>
            )}
          </div>

          {/* Description Input */}
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter product description"
              rows="4"
              {...register("description")}
            />
            {errors.description?.message && (
              <p className="text-red-500">{errors.description?.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductAdd;
