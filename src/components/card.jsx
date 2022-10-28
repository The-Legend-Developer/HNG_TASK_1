import { useState } from "react";
import { shareIcon } from "../assets";

function LinkCard({ id, title, href, linkSwiped, swipeHandler, handleCopied }) {
  const [position, setPosition] = useState({
    touchStartX: 0,
    beingTouched: false,
  });

  const handleSwiped = () => {
    swipeHandler(id);
  };

  const handleTouchStart = (e) => {
    e.cancelable && e.preventDefault();
    let clientX = e.targetTouches[0].clientX;
    setPosition((prev) => ({
      ...prev,
      beingTouched: true,
      touchStartX: clientX,
    }));
  };

  const handleTouchMove = (e) => {
    let clientX = e.targetTouches[0].clientX;

    if (position.beingTouched) {
      const touchX = clientX;
      let deltaX = touchX - position.touchStartX;

      if (deltaX < -10) {
        handleSwiped();
      } else if (deltaX > 0) {
        deltaX = 0;
      }
    }
  };

  const handleTouchEnd = () => {
    setPosition((prev) => ({
      ...prev,
      touchStartX: 0,
      beingTouched: false,
    }));
  };

  return (
    <div
      className="flex gap-4 items-center"
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchMove(e)}
      onTouchEnd={() => handleTouchEnd()}
    >
      <a
        id={id}
        style={{
          height:
            position.height === "auto"
              ? position.height
              : position.height + "px",
          transition: "height 250ms ease-in-out",
        }}
        className="w-full rounded-md bg-gray-200 focus:bg-gray-200 hover:bg-gray-300 font-bold text-center py-5"
        href={href}
      >
        {title}
      </a>
      {linkSwiped ? (
        <div
          className="lg:hidden w-8 h-8 rounded-full border-dotted border-gray-400 border flex justify-center"
          onClick={() => handleCopied(href)}
        >
          <img
            src={shareIcon}
            alt="Open Menu"
            className="w-3"
            title="Share Link"
          />
        </div>
      ) : null}
    </div>
  );
}

export default LinkCard;
