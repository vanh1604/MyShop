import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import instance from "../axios";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
const AuthForm = ({ isRegister }) => {
  console.log(isRegister);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data) => {
    (async () => {
      try {
        if (isRegister) {
          const res = await instance.post("/register", data);
          console.log(res);
          if (res.status === 201) {
            alert("Register successfully,redirecting to login page");
            navigate("/login");
          }
        } else {
          const res = await instance.post("/login", data);
          localStorage.setItem("token", JSON.stringify(res.data));
          if (res.status === 200) {
            alert("Login successfully,redirecting to home page");
            navigate("/");
          }
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data);
      }
    })();
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center ">
      <div className=" h-fit w-[500px]  p-6 bg-white shadow-lg rounded-lg ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>{isRegister ? "Register" : "Login"}</h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              name=""
              id=""
              {...register("email")}
            />
            {errors.email && <p className="text-red">{errors.email.message}</p>}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                className="form-control"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red">{errors.password.message}</p>
              )}
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
