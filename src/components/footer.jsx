import { I4GIcon, zuriIcon } from "../assets";

function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-4 lg:w-10/12 lg:flex-row mx-auto pt-6 border-t">
      <div>
        <img src={zuriIcon} alt="Zuri" />
      </div>
      <p className="text-gray-500">HNG Internship 9 Frontend Task</p>
      <div>
        <img src={I4GIcon} alt="HNG" />
      </div>
    </footer>
  );
}

export default Footer;
