import { githubIcon, slackIcon } from "../assets";
import LinkCard from "./card";

function Main({ Links }) {
  return (
    <main className="flex flex-col gap-6 max-w-sm mx-auto my-6">
      {Links.map((link, index) => (
        <LinkCard key={index} {...link} />
      ))}
      <div className="my-6 flex items-center gap-6 justify-center">
        <a href="/">
          <img src={slackIcon} alt="Slack" />
        </a>
        <a href="https://github.com/The-Legend-Developer">
          <img src={githubIcon} alt="Github" />
        </a>
      </div>
    </main>
  );
}

export default Main;
