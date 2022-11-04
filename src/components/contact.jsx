import { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errorMessages, setErrorMessage] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    agreed: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const id = e.target.id;

    setFormState((prev) => ({
      ...prev,
      [id]: e.target.value,
    }));

    verifyValue(e, id);
  };

  const verifyValue = (e, id) => {
    if (!e.target.value || e.target.value.length === 0) {
      setErrorMessage((prev) => ({
        ...prev,
        [id]: `Please enter a ${id}`,
      }));
      return;
    }

    switch (id) {
      case "firstname":
      case "lastname":
        if (!e.target.value.match(/^[a-zA-Z\s]+$/)) {
          setErrorMessage((prev) => ({
            ...prev,
            [id]: `Please enter a ${id}`,
          }));
        } else {
          setErrorMessage((prev) => ({
            ...prev,
            [id]: "",
          }));
          return;
        }
        break;
      case "email":
        const mail_format =
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        if (!e.target.value.match(mail_format)) {
          setErrorMessage((prev) => ({
            ...prev,
            [id]: `Please enter a ${id}`,
          }));
        } else {
          setErrorMessage((prev) => ({
            ...prev,
            [id]: "",
          }));
          return;
        }
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function joinClass(...classes) {
    return classes.filter(Boolean).join(" ");
  }

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
              className={joinClass(
                errorMessages.firstname !== ""
                  ? "outline-red-200 border border-red-300 bg-form-error"
                  : "outline-sky-200",
                "border rounded-lg px-3 py-2 mt-2 focus:outline"
              )}
              placeholder="Enter your first name"
              value={formState.firstname}
              onChange={(e) => handleChange(e)}
            />
            {errorMessages.firstname !== "" ? (
              <small className="text-sm text-red-400 mt-2">
                {errorMessages.firstname}
              </small>
            ) : null}
          </div>
          <div className="flex flex-col lg:w-1/2">
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              className={joinClass(
                errorMessages.lastname !== ""
                  ? "outline-red-200 border border-red-300 bg-form-error"
                  : "outline-sky-200",
                "border rounded-lg px-3 py-2 mt-2 focus:outline"
              )}
              placeholder="Enter your last name"
              value={formState.lastname}
              onChange={(e) => handleChange(e)}
            />
            {errorMessages.lastname !== "" ? (
              <small className="text-sm text-red-400 mt-2">
                {errorMessages.lastname}
              </small>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className={joinClass(
              errorMessages.email !== ""
                ? "outline-red-200 border border-red-300 bg-form-error"
                : "outline-sky-200",
              "border rounded-lg px-3 py-2 mt-2 focus:outline"
            )}
            placeholder="youremail@gmail.com"
            value={formState.email}
            onChange={(e) => handleChange(e)}
          />
          {errorMessages.email !== "" ? (
            <small className="text-sm text-red-400 mt-2">
              {errorMessages.email}
            </small>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className={joinClass(
              errorMessages.message !== ""
                ? "outline-red-200 border border-red-300 bg-form-error"
                : "outline-sky-200",
              "border rounded-lg px-3 py-2 mt-2 h-32 focus:outline"
            )}
            placeholder="Send me a message and I'll reply you as soon as possible..."
            value={formState.message}
            onChange={(e) => handleChange(e)}
          />
          {errorMessages.message !== "" ? (
            <small className="text-sm text-red-400 mt-2">
              {errorMessages.message}
            </small>
          ) : null}
        </div>
        <div
          className="flex gap-3 lg:items-center mb-4 cursor-pointer"
          onClick={() =>
            setErrorMessage((prev) => ({ ...prev, ["agreed"]: !prev.agreed }))
          }
        >
          <div
            className={joinClass(
              errorMessages.agreed !== "" ? "border-sky-600" : "",
              "h-5 w-5 border rounded-md cursor-pointer bg-form flex items-center justify-center"
            )}
          >
            {errorMessages.agreed !== "" ? (
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
