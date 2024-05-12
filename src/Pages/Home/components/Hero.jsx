import { Link } from "react-router-dom";
import bgImg from "../../../assets/bgImg.svg";
import heroBg from "../../../assets/hero.png";
import { Button } from "@material-tailwind/react";

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-16 flex lg:flex-row flex-col justify-between items-center space-y-10">
        <div className="space-y-6">
          <h2 className="text-[#3bbca7]">START TO NEW JOURNEY</h2>
          <h1 className="lg:text-5xl text-3xl font-semibold lg:leading-[60px]">
            Experience a learning platform that take you <br /> next level
          </h1>
          <p>
            World-class training and development programs <br /> developed by
            top teachers
          </p>
          <div>
            <Link to="/assignments">
              <Button size="lg" className="bg-[#27DEBF] hover:bg-[#072F60]">
                Take New Assignment
              </Button>
            </Link>
          </div>
        </div>
        <img src={heroBg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
