import { useRef } from "react";
import { useState, useEffect } from "react";
import { githubIcon, slackIcon } from "../assets";
import LinkCard from "./card";

function Main() {
  const [links, setLinks] = useState([
    {
      title: "Twitter Link",
      href: "https://twitter.com/Michaelajayi150",
      id: "btn_twitter",
    },
    {
      title: "Zuri Team",
      href: "https://training.zuri.team/",
      id: "btn__zuri",
    },
    {
      title: "Zuri Books",
      href: "https://books.zuri.team/",
      id: "books",
    },
    {
      title: "Python Books",
      href: "https://books.zuri.team/python-for-beginners?ref_id=CodeMon",
      id: "book__python",
    },
    {
      title: "Background Check for Coders",
      href: "https://background.zuri.team",
      id: "pitch",
    },
    {
      title: "Design Books",
      href: "https://books.zuri.team/design-rules",
      id: "book__design",
    },
  ]);

  const [selected, setSelected] = useState();
  const [show, setClip] = useState(false);

  useEffect(() => {
    setLinks((content) =>
      content.map((obj) => {
        if (obj.id === selected) {
          return { ...obj, linkSwiped: true };
        }
        return { ...obj, linkSwiped: false };
      })
    );
  }, [selected]);

  const handleCopied = (text) => {
    setClip((prev) => !prev);
    setTimeout(() => {
      setClip((prev) => !prev);
    }, 1000);
    navigator.clipboard.writeText(text);
  };

  return (
    <main className="flex flex-col gap-6 w-11/12 md:w-10/12 mx-auto my-6">
      {links.map((link, index) => (
        <LinkCard
          key={index}
          {...link}
          swipeHandler={(id) => setSelected(id)}
          handleCopied={handleCopied}
        />
      ))}
      <div className="my-6 flex items-center gap-6 justify-center">
        <a href="/">
          <img src={slackIcon} alt="Slack" />
        </a>
        <a href="https://github.com/The-Legend-Developer">
          <img src={githubIcon} alt="Github" />
        </a>
      </div>
      <div
        className={
          show
            ? "fixed bottom-2 left-1/2 -translate-x-1/2 text-sm bg-gray-300 px-4 py-3 rounded-full font-bold"
            : "hidden"
        }
      >
        Copied from the Clipboard
      </div>
    </main>
  );
}

export default Main;
