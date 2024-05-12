import bgImg from "../../assets/bgImg.svg";
import SingleAssignment from "../components/SingleAssignment";

const Assignments = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="h-[30vh] flex flex-col justify-center items-center">
          <h2 className="lg:text-5xl text-4xl font-semibold text-center leading-[60px]">
            All {""}
            <span className="bg-[#3BBCA7] text-white"> Assignments</span>
          </h2>
        </div>
      </div>
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 my-10">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">All Assignments : 4</h3>
          <select className="px-4 text-xl border-2">
            <option value="" disabled>
              Select
            </option>
            <option value="Easy">Hard</option>
            <option value="Normal">Normal</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
          <SingleAssignment></SingleAssignment>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
