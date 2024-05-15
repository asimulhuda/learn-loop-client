import { useContext, useEffect, useState } from "react";
import bgImg from "../../assets/bgImg.svg";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyAssignments = () => {
  const { user } = useContext(AuthContext);
  const [assignment, setAssignment] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `https://learn-loop-server.vercel.app/assignments/${user?.email}`
    );
    setAssignment(data);
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://learn-loop-server.vercel.app/assignment/${id}`
      );
      // console.log(data);
      toast.success("Deleted Successfully");

      // Refresh Ui
      getData();
    } catch (err) {
      // console.log(err.massage);
      toast.warn(err.massage);
    }
  };

  return (
    <div className="">
      <div style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="h-[30vh] flex flex-col justify-center items-center">
          <h2 className="lg:text-5xl text-4xl font-semibold text-center leading-[60px]">
            My {""}
            <span className="bg-[#3BBCA7] text-white"> Assignments</span>
          </h2>
        </div>
      </div>
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 my-10">
        <h3 className="text-2xl font-semibold">
          My All Assignments :{" "}
          <span className="px-2 bg-[#3BBCA7] text-white rounded-3xl">
            {assignment.length}
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
                        <span>Deadline</span>
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
                        Deficulity level
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Description
                      </th>

                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {assignment.map((assig) => (
                      <tr key={assig._id}>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {assig.assignment_title}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {new Date(assig.lastDeadline).toLocaleDateString()}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {assig.marks}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <p
                              className={`px-3 py-1 ${
                                assig.category === "Normal" &&
                                "text-blue-500 bg-blue-100/60"
                              } ${
                                assig.category === "Easy" &&
                                "text-[#3BBCA7] bg-[#D8F2ED]"
                              } ${
                                assig.category === "Hard" &&
                                "text-pink-500 bg-pink-100/60"
                              } text-xs  rounded-full`}
                            >
                              {assig.category}
                            </p>
                          </div>
                        </td>
                        <td
                          title={assig.description}
                          className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap"
                        >
                          {assig.description.substring(0, 18)}...
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button
                              onClick={() => handleDelete(assig._id)}
                              className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>

                            <Link
                              to={`/update-assignment/${assig._id}`}
                              className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </Link>
                          </div>
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

export default MyAssignments;
