import { useContext, useEffect, useState } from "react";
import bgImg from "../../assets/bgImg.svg";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MySubmissions = () => {
  const { user } = useContext(AuthContext);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `https://learn-loop-server.vercel.app/my-submissions/${user?.email}`
    );
    setSubmissions(data);
  };

  return (
    <div className="">
      <div style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="h-[30vh] flex flex-col justify-center items-center">
          <h2 className="lg:text-5xl text-4xl font-semibold text-center leading-[60px]">
            My {""}
            <span className="bg-[#3BBCA7] text-white"> Submissions</span>
          </h2>
        </div>
      </div>
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 my-10">
        <h3 className="text-2xl font-semibold">
          Total Submitted Assignments :{" "}
          <span className="px-2 bg-[#3BBCA7] text-white rounded-3xl">
            {submissions.length}
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
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Marks</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>Status</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Your Obtained Marks
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Feedback
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {submissions.map((sub) => (
                      <tr key={sub._id}>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {sub.assignment_title.substring(0, 25)}...
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {sub.marks}
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                              sub.status === "Pending" &&
                              "bg-yellow-100/60 text-yellow-500"
                            } ${
                              sub.status === "Complete" &&
                              "bg-green-100/60 text-emerald-500"
                            } `}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                sub.status === "Pending" && "bg-yellow-500"
                              } ${sub.status === "Complete" && "bg-green-500"}`}
                            ></span>
                            <h2 className="text-sm font-normal ">
                              {sub.status}
                            </h2>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500 ">
                          {sub.obtainedMark}
                        </td>
                        <td
                          title={sub.feedback}
                          className="px-4 py-4 text-sm whitespace-nowrap"
                        >
                          {sub.feedback}...
                        </td>
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

export default MySubmissions;
