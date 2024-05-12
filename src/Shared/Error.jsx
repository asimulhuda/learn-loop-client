import React from "react";
import error from "../assets/error.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="lg:mx-auto mx-5">
      <div className="h-[100vh] flex flex-col justify-center items-center space-y-10">
        <img src={error} alt="" className="lg:w-auto w-80" />
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-semibold">
            Sorry We Can`t Find That Page!
          </h2>
          <p>
            The page you are looking for was moved, removed, renamed or never
            existed.
          </p>
        </div>
        <Link to="/">
          <Button size="lg" className="bg-[#27DEBF] hover:bg-[#072F60]">
            Take Me Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
