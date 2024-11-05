/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SVGComponent from "../icons/homeIcon";
import Ham from "../icons/Ham";
import { Buttons } from "./Buttons";
export const Navbar = ({dark}) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const [isToggel, setIsToggel] = useState(false);
  const bgColour = dark ? 'white' : 'black'
  
  return (
    <nav className={`flex justify-between py-3 px-5 items-center mb-5 ${dark?"shadow-white-md":"shadow-md"}`}>
      <Link to="/">
        <h1
          className={`flex text-2xl font-semibold tracking-wide gap-2 items-center text-${bgColour}`}
          style={{
            fontSize: "24px",
            lineHeight: "36px",
          }}
        >
          {" "}
          <SVGComponent width={24} height={24} />
          Sorting Visualizer
        </h1>
      </Link>
      <div className={`md:hidden ${dark?'invert':''}`}>
        <button
          onClick={() => setIsToggel(!isToggel)}
          className="active:scale-95"
        >
          <Ham width={25} height={25}></Ham>
        </button>
      </div>
      <ul
        className={`md:flex md:justify-evenly md:gap-4 ${
          isToggel
            ? `absolute z-10 flex flex-col top-16 ${dark?'bg-black':'bg-white'}  right-0 gap-2 shadow w-full px-1`
            : "hidden "
        }`}
      >
        <li>
          <Link to="/bubble">
            <Buttons
              name="Bubble"
              isTrue={isActive("/bubble")}
              setIsToggel={setIsToggel}
              dark={dark}
            ></Buttons>
          </Link>
        </li>
        <li>
          <Link to="/selection">
            <Buttons
              name="Selection"
              isTrue={isActive("/selection")}
              setIsToggel={setIsToggel}
              dark={dark}

            ></Buttons>
          </Link>
        </li>
        <li>
          <Link to="/merge">
            <Buttons
              name="Merge"
              isTrue={isActive("/merge")}
              setIsToggel={setIsToggel}
              dark={dark}

            ></Buttons>
          </Link>
        </li>
        <li>
          <Link to="/insertion">
            <Buttons
              name="Insertion"
              isTrue={isActive("/insertion")}
              setIsToggel={setIsToggel}
              dark={dark}

            ></Buttons>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
