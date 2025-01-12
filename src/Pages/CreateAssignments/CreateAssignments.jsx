import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bgImg from "../../assets/bgImg.svg";
import { Button } from "@material-tailwind/react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const CreateAssignments = () => {
  const [deadline, setDeadline] = useState(new Date());
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateAssignment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const assignment_title = form.assignment_title.value;
    const image = form.image.value;
    const user_email = form.user_email.value;
    const examiner_name = form.examiner_name.value;
    const lastDeadline = deadline;
    const category = form.category.value;
    const marks = parseFloat(form.marks.value);
    const description = form.description.value;

    const newAssignmentData = {
      assignment_title,
      image,
      user_email,
      examiner_name,
      lastDeadline,
      category,
      marks,
      description,
    };

    try {
      const { data } = await axios.post(
        "https://learn-loop-server.vercel.app/assignment",
        newAssignmentData
      );
      toast.success("Created New Assignment successfully");
      navigate("/my-assignments");
    } catch (err) {}
    form.reset();
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="h-[30vh] flex flex-col justify-center items-center">
          <h2 className="lg:text-5xl text-4xl font-semibold text-center leading-[60px]">
            Create New {""}
            <span className="bg-[#3BBCA7] text-white"> Assignment</span>
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center lg:max-w-[1200px] lg:mx-auto mx-5 my-10">
        <section className="lg:p-16 p-6 w-full bg-white rounded-md shadow-md space-y-10">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">New Assignment</h2>
          </div>

          <form onSubmit={handleCreateAssignment}>
            <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
              <div>
                <label className="text-gray-700 " htmlFor="job_title">
                  Assignment Title
                </label>
                <input
                  name="assignment_title"
                  type="text"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="max_price">
                  Image URL
                </label>
                <input
                  name="image"
                  type="url"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  defaultValue={user?.email}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="emailAddress">
                  Examiner Name
                </label>
                <input
                  type="text"
                  name="examiner_name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700">Deadline</label>

                {/* Date Picker Input Field */}
                <DatePicker
                  className="border p-2 rounded-md"
                  selected={deadline}
                  onChange={(date) => setDeadline(date)}
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700 " htmlFor="category">
                  Deficulity level
                </label>
                <select name="category" className="border p-2 rounded-md">
                  <option disabled>Select</option>
                  <option value="Easy">Easy</option>
                  <option value="Normal">Normal</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="min_price">
                  Marks
                </label>
                <input
                  name="marks"
                  type="number"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-gray-700 " htmlFor="description">
                Description
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="description"
                required
              ></textarea>
            </div>
            <div className="flex justify-end mt-6">
              <Button size="lg" type="submit" className="bg-[#3BBCA7] ">
                Create
              </Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CreateAssignments;
