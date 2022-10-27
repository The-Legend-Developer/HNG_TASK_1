import { dotsIcon, profileImage } from "../assets";

function Header() {
  return (
    <header className="relative flex flex-col gap-3 justify-center items-center pt-6">
      <img id="profile__img" src={profileImage} alt="Profile" />
      <h1 className="text-xl font-bold" id="twitter">
        Function ()
      </h1>
      <h2 className="hidden" id="slack">
        Michael Ajayi
      </h2>
      <div className="absolute top-0 right-4 w-8 h-8 rounded-full border-dotted border-gray-400 border flex justify-center">
        <img src={dotsIcon} alt="Open Menu" className=" w-4" />
      </div>
    </header>
  );
}

export default Header;
