import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div className="max-w-[500px] mx-auto my-20">
      <div className="pt-8 pr-8 pb-8 pl-8 lg:col-span-7">
        <p
          fontsize="2xl"
          className="text-gray-900 text-center font-extrabold leading-snug tracking-tight mb-10 md:text-4xl"
        >
          Register
        </p>
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="rounded-md w-full pt-3 pr-0 pb-3 pl-0 inline-flex items-center justify-center bg-gray-800 text-white
          cursor-pointer hover:bg-gray-600"
            >
              <p>
                <FaGoogle />
              </p>
              <p className="text-xl">Google</p>
            </div>
            <div
              className="rounded-md w-full inline-flex items-center justify-center bg-white border-2
          text-gray-800 pt-3 pr-0 pb-3 pl-0 gap-2 cursor-pointer border-gray-300"
            >
              <p>
                <FaGithub />
              </p>
              <p className="text-xl">Apple</p>
            </div>
          </div>
          <p className="text-sm text-center text-gray-600 pt-4 pr-0 pb-2 pl-0 border-b-2 border-gray-100">
            OR
          </p>
        </div>
        <div>
          <div className="w-full mt-3 mr-auto mb-3 ml-auto">
            <label className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <div className="mt-1 mr-0 mb-0 ml-0">
              <input
                type="email"
                placeholder="Ex: james@bond.com"
                className="focus:ring-indigo-500 focus:border-indigo-500
            sm:text-sm w-full block h-10 border-gray-300 border shadow-sm rounded-md"
              />
            </div>
          </div>
          <div className="w-full mt-0 mr-auto mb-3 ml-auto">
            <label className="block text-sm font-medium text-gray-700">
              Your Password
            </label>
            <div className="mt-1 mr-0 mb-0 ml-0">
              <input
                type="password"
                placeholder="********"
                className="focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
            w-full block h-10 border-gray-300 border shadow-sm rounded-md"
              />
            </div>
          </div>
          <div className="w-full mt-0 mr-auto mb-4 ml-auto">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="mt-1 mr-0 mb-0 ml-0">
              <input
                type="text"
                placeholder="ex: user1"
                className="focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
            w-full block h-10 border-gray-300 border shadow-sm rounded-md"
              />
            </div>
          </div>
          <button
            fontfamily="Arial"
            className="hover:bg-gray-600 rounded-md text-xl pt-3 pr-3 pb-3 pl-3 bg-gray-800 font-semibold
        text-white w-full text-center"
          >
            Submit
          </button>
          <div className="flex items-center justify-start border-t-2 border-gray-100 mt-6 mr-0 mb-0 ml-0 pt-6 pr-0 pb-0 pl-0">
            <p className="text-sm text-gray-800">Already have an account?</p>
            <a className="text-sm text-blue-500 mt-0 mr-0 mb-0 ml-2">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
