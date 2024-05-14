import { FaArrowRight } from "react-icons/fa";
import bgImg from "../../assets/bgImg.svg";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const AssignmentDetails = () => {
  const { user } = useContext(AuthContext);
  const assignment = useLoaderData();
  const navigate = useNavigate();

  const {
    _id,
    assignment_title,
    image,
    description,
    marks,
    category,
    examiner_name,
    lastDeadline,
    user_email,
  } = assignment || {};

  const handleAssignmentSubmit = async (e) => {
    e.preventDefault();
    if (user?.email === user_email) return toast.error("Action not permitted");

    const form = e.target;
    const studentEmail = form.email.value;
    const pdf = form.pdf.value;
    const note = form.note.value;
    const assignmentId = _id;
    const userEmail = user_email;
    const status = "Pending";

    const submitData = {
      studentEmail,
      pdf,
      note,
      assignmentId,
      userEmail,
      status,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:9000/submit",
        submitData
      );
      toast.success("Assignment submitted successfully  ");
      navigate("/");
    } catch (err) {}
    form.reset();
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="h-[30vh] flex flex-col justify-center items-center">
          <h2 className="lg:text-5xl text-4xl font-semibold text-center leading-[60px]">
            Assignment {""}
            <span className="bg-[#3BBCA7] text-white"> Details</span>
          </h2>
        </div>
      </div>
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 mt-12 mb-20">
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="lg:w-[800px] space-y-10">
            <img src={image} alt="" className="w-full lg:h-[450px]" />
            <h2 className="text-2xl font-semibold">{assignment_title}</h2>
            <div>
              <div className="pb-8 border-b border-gray-600">
                <p className="text-xl font-semibold">Description :</p>
              </div>
              <div className="pt-6">
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[400px]">
            <div className="sticky top-32 px-7 py-10 border rounded-md space-y-6">
              <div className="space-y-6">
                <div className="flex justify-between pb-3 border-b">
                  <span className="text-[14px]">Examiner's Name</span>
                  <span className="text-[15px]">{examiner_name}</span>
                </div>
                <div className="flex justify-between pb-3 border-b">
                  <span className="text-[14px]">Marks</span>
                  <span className="text-[14px]">{marks}%</span>
                </div>
                <div className="flex justify-between pb-3 border-b">
                  <span className="text-[14px]">Difficulty Level</span>
                  <span className="text-[14px]">{category}</span>
                </div>
                <div className="flex justify-between pb-3">
                  <span className="text-[14px]">Deadline</span>
                  <span className="text-[14px]">
                    {new Date(lastDeadline).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                class="flex justify-center items-center w-full px-6 gap-2 py-3 mb-2 text-base text-white bg-[#3BBCA7] rounded-full hover:bg-[#3BBCA7cc]"
              >
                Take Assignment
                <FaArrowRight />
              </button>
            </div>
            {/* Modal section  */}
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box py-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn text-2xl btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold">
                    Please Submit your Assignment
                  </h3>
                  <form
                    onSubmit={handleAssignmentSubmit}
                    className="mt-8 mb-2 sm:w-96 mx-auto"
                  >
                    <div className="mb-1 flex flex-col gap-6">
                      <Input
                        size="lg"
                        name="pdf"
                        label="Pdf/Doc link"
                        type="url"
                        required
                      />
                      <Input
                        size="lg"
                        name="email"
                        defaultValue={user?.email}
                        type="email"
                        disabled
                      />
                      <Textarea label="Give a quick note" name="note" />
                    </div>
                    <div className="flex justify-end">
                      <Button type="submit" className="bg-[#62C9B9]">
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
            {/* Modal section  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
