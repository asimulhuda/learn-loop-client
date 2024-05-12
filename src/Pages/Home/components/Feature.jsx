import SingleAssignment from "../../components/SingleAssignment";

const Feature = () => {
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-semibold">
          <span className="bg-[#FFD24D]">Top Rated</span> Assignments
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
        <SingleAssignment></SingleAssignment>
      </div>
    </div>
  );
};

export default Feature;
