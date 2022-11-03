import { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [formError, setFormError] = useState({
    firstname: false,
    lastname: false,
    email: false,
    message: false,
  });

  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const id = e.target.id;

    setFormState((prev) => ({
      ...prev,
      [id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="view w-11/12 md:w-8/12 xl:w-5/12 m-auto">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form
        className="mt-5 lg:mt-12 flex-col flex gap-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col lg:w-1/2">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              className="border rounded-lg px-3 py-2 mt-2 focus:outline outline-sky-200"
              placeholder="Enter your first name"
              value={formState.firstname}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex flex-col lg:w-1/2">
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              className="border rounded-lg px-3 py-2 mt-2 focus:outline outline-sky-200"
              placeholder="Enter your last name"
              value={formState.lastname}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="border rounded-lg px-3 py-2 mt-2 focus:outline outline-sky-200"
            placeholder="youremail@gmail.com"
            value={formState.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="border rounded-lg px-3 py-2 mt-2 h-32 focus:outline outline-sky-200"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            value={formState.message}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div
          className="flex gap-3 lg:items-center mb-4 cursor-pointer"
          onClick={() => setAgreed((prev) => !prev)}
        >
          <div
            className={
              agreed
                ? "h-5 w-5 border rounded-md cursor-pointer bg-form flex items-center justify-center border-sky-600"
                : "h-5 w-5 border rounded-md cursor-pointer bg-form flex items-center justify-center"
            }
          >
            {agreed ? (
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6668 1.5L4.25016 7.91667L1.3335 5"
                  stroke="#1570EF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
          </div>
          <p className="w-full">
            You agree to providing your data to {`{name}`} who may contact you.
          </p>
        </div>
        <button
          type="submit"
          className="rounded-md text-white bg-blue-600 hover:bg-blue-700 bg-form py-4"
        >
          Send message
        </button>
      </form>
    </div>
  );
}

export default Contact;
