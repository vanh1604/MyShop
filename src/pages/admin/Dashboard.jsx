import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ data }) => {
  return (
    <div>
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
              <td>
                {item.thumbnail ? (
                  <img src={item.thumbnail} alt="" />
                ) : (
                  "Dang Cap Nhat"
                )}
              </td>
              <td className="flex gap-2 items-center ">
                <button className="btn btn-danger">Delete</button>
                <button className="px-4 py-2 bg-blue-500 text-white">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
