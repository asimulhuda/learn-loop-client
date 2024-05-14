import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Faq = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  return (
    <div className="bg-[#FDFAF2]">
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-semibold">
            Frequently Asked {""}
            <span className="bg-[#3BBCA7] text-white"> Questions</span>
          </h2>
        </div>
        <div className="mt-16 space-y-4">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              How do I Register for LearnLoop?
            </AccordionHeader>
            <AccordionBody className="text-lg">
              You can sign up by visiting our website and clicking on the
              "Register" button. From there, simply follow the prompts to create
              your account.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              Is LearnLoop free to use?
            </AccordionHeader>
            <AccordionBody className="text-lg">
              Yes, LearnLoop offers a free basic plan with essential features.
              We also offer premium plans with additional functionalities for
              those who need more advanced tools.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              How do I create and manage assignments on LearnLoop?
            </AccordionHeader>
            <AccordionBody className="text-lg">
              After logging in, you can create assignments by navigating to the
              "Assignments" tab and clicking on the "Create Assignment" button.
              From there, you can specify details such as title, description,
              due date, and attached files. You can also manage assignments by
              editing, deleting, or updating their status as needed.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(4)}>
              Can I invite others to collaborate on assignments in LearnLoop?
            </AccordionHeader>
            <AccordionBody className="text-lg">
              Yes, LearnLoop allows you to invite classmates, colleagues, or
              group members to collaborate on assignments. Simply share the
              assignment link or invite them directly through their email
              addresses.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(5)}>
              How do I submit assignments on LearnLoop?
            </AccordionHeader>
            <AccordionBody className="text-lg">
              To submit an assignment, navigate to the assignment page and click
              on the "Submit Assignment" button. You can then upload your
              completed work or provide a link to your submission. Make sure to
              submit before the deadline to avoid late penalties.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
