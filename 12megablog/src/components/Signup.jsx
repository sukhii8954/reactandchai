/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import authService from "../appwrite/auth";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const Signup = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);

      if (userData) {
        const newUserData = await authService.getCurrentUser();
        if (newUserData) {     // if we get the userData then we update the store by dispatching it
          dispatch(login(newUserData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary
                           transition-all duration-200
                           hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <input
              label="Full Name: "
              placeholder="Enter your full Name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  // it is a pattern which want to match of email
                  matchPatern: (value) => {
                    // eslint-disable-next-line no-useless-escape
                    /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/
                    .test(value) || // test for value
                      "Email address must be valid address";
                  },
                },
              })} // it is a syntax
              //   ... is important to use because if we
              //   use register in any other input then its
              //  value get overwrite that we don't want to do
            />

            <input
              label="password"
              placeholder="type your password"
              type="password"
              {...register("password", {
                required: true,
                validate: {
                  matchPatern: (value) => {
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
                    .test(value) 
                    || 
                     "password must contain the special character";
                  }
                }
              })}
            />

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
