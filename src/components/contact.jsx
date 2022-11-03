import Input from "./input";

function Contact() {
  const contactInput = [
    {
      id: "firstname",
      type: "text",
      hint: "First name must not be empty",
      name: "First Name",
      placeholder: "Enter your first name",
    },
    {
      id: "lastname",
      type: "text",
      hint: "Last name must not be empty",
      name: "Last Name",
      placeholder: "Enter your last name",
    },
    {
      id: "email",
      type: "email",
      hint: "Must be a valid email",
      name: "Email",
      placeholder: "yourname@email.com",
    },
    {
      id: "message",
      hint: "Please enter a message",
      name: "Message",
      placeholder:
        "Send me a message and I'll reply you as soon as possible...",
    },
  ];

  return (
    <div className="view w-11/12 md:w-8/12 xl:w-5/12 m-auto">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form className="mt-5 lg:mt-12 flex-col flex gap-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col lg:w-1/2">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              className="border rounded-lg px-3 py-2 mt-2 focus:outline outline-sky-200"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex flex-col lg:w-1/2">
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              className="border rounded-lg px-3 py-2 mt-2 focus:outline outline-sky-200"
              placeholder="Enter your last name"
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
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="border rounded-lg px-3 py-2 mt-2 h-32 focus:outline outline-sky-200"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
        </div>
        <div className="flex gap-3 lg:items-center mb-4">
          <div className="h-5 w-5 border rounded-md cursor-pointer bg-form"></div>
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
