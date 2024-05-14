import React from "react";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Faq from "./components/Faq";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Faq />
    </div>
  );
};

export default Home;
