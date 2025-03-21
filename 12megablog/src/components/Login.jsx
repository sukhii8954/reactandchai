/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-constant-binary-expression */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Selectbtn, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit} = useForm();  // register is a way of form handling and its a syntax of react hook form
  const [error, setError] = useState("");

  const login = async (data) => {
    setError(""); // whenever setting the login
    //    then empty out the errors
    try {
      // when user getting logging in then we send
      // its data to login service we made in authservice
      const session = await authService.login(data);
      //   whatever response we get ,is the in form of
      // session and we check if have session then
      // user is logged in otherwise not.
      if (session) {
        //   if user logged in we get the data for current user
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));  // authlogin is login in authslice can also be name as storeLogin
        navigate("/"); // if user logged in we navigate it to the route
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline block w-full m-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>  
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have an account ?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary
                transition-all duration-200
                hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {
          //  using the variable we named in usestate here if there is error then display here
          error && <p className="text-red-500 text-center">{error}</p>
        }

        <form  className="mt-8"
        onSubmit={handleSubmit(login)}>
            <div className="space-y-5">
                <Input    // it is a component we made Input.jsx
                  label = "Email: "
                  placeholder = "Enter your email"
                  type="email"
                  {...register("email",{
                    required: true,
                    validate:{  // it is a pattern which want to match of email
                        matchPatern: (value)=> {
                            // eslint-disable-next-line no-useless-escape
                            /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/   // taken from regexr . com
                            .test(value)  // test for value : joh bhi email value mili h is pattern se 
                                          // se match ho rahe h toh theek h vrna display below message
                              || "Email address must be valid address"
                        }
                    }
                  })}  // it is a syntax
                //   ... spread operator is important to use with register everywhere 
                // because if we use register in any other input then its
                //  value get overwrite that we don't want to do
                 />
                 <Input
                  label = "password: "
                  placeholder= "Enter your password"
                  type= "password"
                  {...register("password", {
                    required: true,
                    validate:{
                        matchPatern: (value)=>{
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
                            .test(value) 
                            || 
                            "Enter your correct password which may contain characters"
                        }
                    }
                  })}
                 /> 

                <Selectbtn
                 type="submit"
                 className="w-full"
                > Sign in
                </Selectbtn>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

        {/* handleSubmit is a method in its own and in which we pass our method 
         to submit the form and it is an become an keyword as it came from useForm
         also an event */}

        {/* Note:- this event is called and it takes the values
        from the input field  with the help of register and 
        the state of those values it manage automatically we
        don't have to worry about it and at the time of handle submit 
        it takes those values 
        
        **********  bookish explaination:- ************

        The register function is used to connect input fields to
        the form state managed by react-hook-form. It allows you 
        to collect and validate the input field values effortlessly.
        The handleSubmit() function is a method provided by 
        react-hook-form that collects the form's values when the
        form is submitted. It automatically handles the 
        registered fields' values and validates them, ensuring 
        we don't need to manage state or validation manually.
        
        */}
