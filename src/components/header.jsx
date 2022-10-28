import { cameraIcon, dotsIcon, profileImage, shareIcon } from "../assets";

function Header() {
  return (
    <header className="relative max-w-md mx-auto flex flex-col gap-3 justify-center items-center pt-6">
      <div className="relative rounded-full cursor-pointer">
        <div className="bg-opacity-0 hover:bg-opacity-40 bg-sky-800 w-full h-full rounded-full absolute z-10"></div>
        <img
          className="w-full"
          id="profile__img"
          src={profileImage}
          alt="Profile"
        />
        <img
          className="absolute bottom-2 left-1/2 -translate-x-1/2"
          src={cameraIcon}
          alt="Profile camera"
        />
      </div>
      <h1 className="text-xl font-extrabold" id="twitter">
        Function ()
      </h1>
      <h2 className="hidden" id="slack">
        CodeMon
      </h2>
      <div className="absolute top-0 bg-shade right-4 w-8 h-8 cursor-pointer rounded-full border-dotted border-gray-400 border flex justify-center">
        <img src={dotsIcon} alt="Open Menu" className="lg:hidden w-4" />
        <img
          src={shareIcon}
          alt="Open Menu"
          className="hidden lg:block w-3"
          title="Share Link"
        />
      </div>
    </header>
  );
}

export default Header;
