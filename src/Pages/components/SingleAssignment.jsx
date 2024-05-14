import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SingleAssignment = ({ assignment }) => {
  const { user } = useContext(AuthContext);
  const { _id, category, assignment_title, marks, image_url } =
    assignment || {};
  return (
    <div className="shadow-lg hover:scale-105 duration-300">
      <img src={image_url} alt="" className="h-60 w-full" />
      <div className="p-7 space-y-6">
        <div className="flex justify-between items-center">
          <span
            className={`px-3 py-1 ${
              category === "Normal" &&
              "text-blue-500 bg-blue-100/60 hover:bg-blue-500"
            } ${
              category === "Easy" &&
              "text-emerald-500 bg-[#3BBCA733] hover:bg-[#3BBCA7]"
            } ${
              category === "Hard" &&
              "text-pink-500 bg-pink-100/60 hover:bg-pink-500"
            } text-xs px-4 py-2 hover:bg-[#3BBCA7] rounded-md text-[#3BBCA7] hover:text-white font-semibold`}
          >
            {category}
          </span>
          <p className="text-[#3BBCA7] text-xl">
            Marks :<span className="text-black"> {marks}%</span>
          </p>
        </div>
        <h2 className="text-xl font-semibold">{assignment_title}</h2>
        <div className="flex justify-between gap-4">
          {user && (
            <Link to={`/update-assignment/${_id}`}>
              <Button>Edit</Button>
            </Link>
          )}
          <Link
            to={`/assignment/${_id}`}
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAssignment;
