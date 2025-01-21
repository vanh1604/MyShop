import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ data, removeProduct }) => {
  return (
    <div className="container">
      <h1 className="text-3xl">hello admin</h1>
      <Link to="/admin/product-add" className="btn btn-primary">
        Add new product
      </Link>
      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.title}</td>
              <td>{item.description || "Dang Cap Nhat"}</td>
              <td>{item.price}</td>
              <td className="object-cover w-[200px] h-[200px]">
                {item.thumbnail ? (
                  <img src={item.thumbnail} alt="" />
                ) : (
                  "Dang Cap Nhat"
                )}
              </td>
              <td className="">
                <div className=" flex gap-4">
                  <button
                    className="btn btn-danger w-[100px]"
                    onClick={() => removeProduct(item.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/admin/product-edit/${item.id}`}>
                    <button className="btn btn-primary w-[100px]">
                      Edit
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
