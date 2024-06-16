import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="dark:bg-slate-900 dark:text-white modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            {/* Email */}

            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  Please fill the above details
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  Please fill the above details
                </span>
              )}
            </div>

            {/* Message */}

            <div className="mt-8 space-y-2 ">
              <span>Message</span>
              <br />
              <textarea 
                type="text-area"
                placeholder="Enter your message"
                className=" w-80 border rounded-md outline-none"
                {...register("text-area", { required: false })}
              />
              <br />
              {errors.text && (
                <span className="text-sm text-red-500">
                  Please fill the above details
                </span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-1000 ">
                Submit
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
