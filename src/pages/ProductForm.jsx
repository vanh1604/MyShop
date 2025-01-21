import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useParams } from "react-router-dom";
import instance from "../axios";

const productSchema = z.object({
  title: z.string().min(3, { message: "Required" }).max(100),
  price: z.number().min(0),
  description: z.string().optional(),
  thumbnail: z.string().url(),
    
});
const ProductForm = ({ handleProduct }) => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });
  const onSubmit = (data) => {
    handleProduct({ ...data, id: id });
    console.log(data);
    
  };
  useEffect(() => {
    if (id) {
      (async () => {
        const res = await instance.get(`/products/${id}`);

        reset(res.data);
      })();
    }
  }, [id,reset]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center  ">
      <div className=" h-fit w-[500px]  p-6 bg-white shadow-lg rounded-lg ">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {id ? "Edit" : "Add"} Product
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
          <div className="flex flex-col">
            <label
              htmlFor="thumbnail"
              className="text-sm font-medium text-gray-700"
            >
              Thumbnail
            </label>
            <input
              type="text"
              name="thumbnail"
              id="thumbnail"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter product thumbnail"
              {...register("thumbnail")}
            />
            {errors.thumbnail?.message && (
              <p className="text-red-500">{errors.thumbnail?.message}</p>
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
            {id ? "Edit" : "Add"} Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
