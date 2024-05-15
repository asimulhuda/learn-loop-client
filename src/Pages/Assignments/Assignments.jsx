import bgImg from "../../assets/bgImg.svg";
import SingleAssignment from "../components/SingleAssignment";
import { useEffect, useState } from "react";
import axios from "axios";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        "https://learn-loop-server.vercel.app/assignments"
      );
      setAssignments(data);
    };
    getData();
  }, []);

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
          <h3 className="text-2xl font-semibold">
            All Assignments :{" "}
            <span className="px-2 bg-[#3BBCA7] text-white rounded-3xl">
              {assignments.length}
            </span>
          </h3>
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="px-4 text-xl border-2"
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Normal">Normal</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
          {assignments
            .filter((ass) => filter === "All" || ass.category === filter)
            .map((assignment) => (
              <SingleAssignment key={assignment._id} assignment={assignment} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Assignments;
