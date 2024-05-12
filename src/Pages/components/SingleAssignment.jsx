import { Button } from "@material-tailwind/react";
import React from "react";

const SingleAssignment = () => {
  return (
    <div className="shadow-lg hover:scale-105 duration-300">
      <img
        src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/03/UJYT73-740x540.jpeg"
        alt=""
        className="h-60 w-full"
      />
      <div className="p-7 space-y-6">
        <div className="flex justify-between items-center">
          <span className="px-4 py-2 hover:bg-[#3BBCA7] bg-[#3BBCA733] rounded-md text-[#3BBCA7] hover:text-white font-semibold">
            Hard
          </span>
          <p className="text-[#3BBCA7] text-xl">
            Marks :<span className="text-black"> 60%</span>
          </p>
        </div>
        <h2 className="text-xl font-semibold">
          Absolute Beginners Cooking Course
        </h2>
        <div className="flex justify-between">
          <button class="text-base relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Delete
            </span>
          </button>
          <button
            class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-base text-white bg-[#3BBCA7] rounded-md hover:bg-[#3BBCA7cc] sm:w-auto sm:mb-0"
            data-primary="green-400"
            data-rounded="rounded-2xl"
            data-primary-reset="{}"
          >
            View Details
            <svg
              class="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleAssignment;
