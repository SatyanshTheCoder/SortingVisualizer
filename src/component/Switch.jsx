import React from "react";

export const Switch = ({ isOn, setIsOn }) => {
  const toggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="flex justify-center mt-5 gap-4">
      <span>Bar</span>
      <button onClick={toggle}>
        <div className="w-10 h-5 flex items-center rounded-xl full bg-customBlue relative">
          <div
            className={`bg-white rounded-full shadow-md transform duration-300 ease-in-out`}
            style={{
              height: "18px",
              width: "18px",
              position: "absolute",

              // Align with the top of the outer div
              translate: isOn ? "21px" : "1px", // Move from 1px to 26px based on isOn state
              transition: "translate 0.25s",
            }}
          ></div>
        </div>
      </button>
      <span>Cell</span>
    </div>
  );
};
