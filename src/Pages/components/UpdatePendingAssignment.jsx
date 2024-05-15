import { Button, Input, Textarea } from "@material-tailwind/react";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdatePendingAssignment = ({ pend }) => {
  const navigate = useNavigate();
  const {
    _id,
    studentEmail,
    pdf,
    note,
    assignmentId,
    marks,
    userEmail,
    assignment_title,
  } = pend || {};

  const handleUpdatePending = async (e) => {
    e.preventDefault();
    const form = e.target;
    const obtainedMark = parseFloat(form.obtainedMark.value);
    const feedback = form.feedback.value;

    const updatePendingData = {
      status: "Complete",
      obtainedMark,
      feedback,
    };

    try {
      const { data } = await axios.put(
        `https://learn-loop-server.vercel.app/pending-assignments/${_id}`,
        updatePendingData
      );
      toast.success("Mark given successfully");
      navigate("/");
    } catch (error) {
      // Handle error
      toast.error("Failed to update pending assignment");
      console.error(error);
    }
  };

  return (
    <>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {assignment_title.substring(0, 50)}...
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {marks}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {studentEmail}
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          {pend.status === "Complete" ? (
            <h2 className="bg-[#3BBCA7] rounded-3xl py-1 px-4 text-white">
              Done
            </h2>
          ) : (
            <Button
              size="sm"
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="flex justify-center items-center gap-2"
            >
              Give Mark
              <FaArrowRight />
            </Button>
          )}
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
            <div className="text-center flex flex-col items-center">
              <h3 className="text-2xl font-semibold">
                Please Submit your Assignment
              </h3>
              <iframe
                className="mt-6"
                src={pdf}
                frameborder="0"
                width="400px"
                height="400px"
              ></iframe>
              <form
                onSubmit={handleUpdatePending}
                className="mt-8 mb-2 sm:w-96 mx-auto"
              >
                <div className="mb-1 flex flex-col gap-6">
                  <Input
                    size="lg"
                    name="obtainedMark"
                    label="Give Mark"
                    type="number"
                    required
                  />
                  <Textarea label="Give a feedback" name="feedback" />
                </div>
                <div className="flex justify-end">
                  <Button type="submit" className="bg-[#62C9B9]">
                    Give Mark
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
        {/* Modal section  */}
      </td>
    </>
  );
};

export default UpdatePendingAssignment;
