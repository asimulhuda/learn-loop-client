import { useContext, useEffect, useState } from "react";
import bgImg from "../../assets/bgImg.svg";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
import UpdatePendingAssignment from "../components/UpdatePendingAssignment";

const PendingAssignments = () => {
  const { user } = useContext(AuthContext);
  const [pending, setPending] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `http://localhost:9000/pending-assignments/${user?.email}`
    );
    setPending(data);
  };

  return (
    <div className="">
      <div style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="h-[30vh] flex flex-col justify-center items-center">
          <h2 className="lg:text-5xl text-4xl font-semibold text-center leading-[60px]">
            <span className="bg-[#3BBCA7] text-white"> Pending</span>
            {""} Assignments
          </h2>
        </div>
      </div>
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 my-10">
        <h3 className="text-2xl font-semibold">
          Total Pending Assignments :{" "}
          <span className="px-2 bg-[#3BBCA7] text-white rounded-3xl">
            {pending.length}
          </span>
        </h3>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Assignment Title</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Marks</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>Examinee Email</span>
                      </th>

                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {pending.map((pend) => (
                      <tr key={pend._id} pend={pend}>
                        <UpdatePendingAssignment
                          pend={pend}
                        ></UpdatePendingAssignment>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingAssignments;
