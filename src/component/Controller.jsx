/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import { bubbleSort } from "../Sorting Algo/Bubble";
import { selectionSort } from "../Sorting Algo/Selection";
import { mergeSort } from "../Sorting Algo/Merge";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { insertionSort } from "../Sorting Algo/Insertion";
import { startTimer } from "../Sorting Algo/time";
import { stopTimer } from "../Sorting Algo/time";
import { resetTimer } from "../Sorting Algo/time";
import { setDelay } from "../Sorting Algo/setDelay";
import Tooltip from "./Tooltip";
import { toast } from "sonner";
export const Controller = ({
  arr,
  setArr,
  setSwapping,
  setSwaps,
  setComp,
  setSorted,
  play,
  setPlay,
  minIdx,
  setMinIdx,
  time,
  setTime,
  isRunning,
  setIsRunning,
  timerId,
  setTimerId,
  setIsSwapping,
  setSwapStyles,
  divRef,
  isOn,
  highlightRef,
  delayRef,
  dark,
}) => {
  const [speed, setSpeed] = useState(1);
  const location = useLocation();
  const idTime = useRef(null);

  const resetRef = useRef(false);
  const arrRef = useRef([180, 234, 100, 142, 87, 126, 230, 140, 45, 211]);

  const [input, setInput] = useState(
    "180, 234, 100, 142, 87, 126, 230, 140, 45, 211"
  );
  useEffect(() => {
    setDelay(isOn, speed, delayRef, highlightRef);
  }, [isOn]);

  const updateDelay = (event) => {
    setSpeed(event.target.value);
    setDelay(isOn, speed, delayRef, highlightRef);
  };
  //array generator
  function generateRandomArray() {
    if (play === true) return;
    console.log(play);
    resetRef.current = false;
    const size = Math.floor(Math.random() * (40 - 10 + 1)) + 10;

    const randomArray = Array.from(
      { length: size },
      () => Math.floor(Math.random() * (239 - 50 + 1)) + 50
    );
    setInput(randomArray.join(", "));
    setArr(randomArray);
    arrRef.current = randomArray;
    console.log(arr);
    setSwaps(0);
    setComp(0);
    setSorted([]);
    setPlay(false);
    setSwapping([]);
  }

  //reset Array function
  function resetArray() {
    resetRef.current = true;
    setPlay(false);
    setInput(arrRef.current.join(", "));
    setArr([...arrRef.current]);
    console.log(arrRef.current);
    setSwaps(0);
    setComp(0);
    setSorted([]);
    setSwapping([]);
    setMinIdx([]);
    resetTimer(timerId, setIsRunning, setTime);
    idTime.current = null;
  }
  useEffect(() => {
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [timerId]);
  //Calling Sorting
  useEffect(() => {
    if (play === true) {
      startTimer(isRunning, setIsRunning, setTimerId, time, setTime, idTime);

      switch (location.pathname) {
        case "/bubble":
          bubbleSort(
            [...arr],
            setArr,
            setSwapping,
            delayRef,
            setSwaps,
            setComp,
            setSorted,
            resetRef,
            setIsSwapping,
            setSwapStyles,
            divRef,
            highlightRef
          ).then(() => {
            stopTimer(setIsRunning, idTime);
            toast.success("Sorting Completed");
            setPlay(false);
          });

          break;
        case "/selection":
          selectionSort(
            [...arr],
            setArr,
            setSwapping,
            delayRef,
            setSwaps,
            setComp,
            setSorted,
            resetRef,
            setPlay,
            minIdx,
            setMinIdx,
            setIsSwapping,
            setSwapStyles,
            divRef,
            highlightRef
          ).then(() => {
            stopTimer(setIsRunning, idTime);
            toast.success("Sorting Completed");
            setPlay(false);
          });
          break;
        case "/merge":
          mergeSort(
            [...arr],
            setArr,
            setSwapping,
            delayRef,
            setSwaps,
            setComp,
            setSorted,
            resetRef,
            setPlay,
            setIsSwapping,
            setSwapStyles,
            divRef,
            highlightRef
          ).then(() => {
            stopTimer(setIsRunning, idTime);
            toast.success("Sorting Completed");
            setPlay(false);
          });
          break;
        case "/insertion":
          insertionSort(
            [...arr],
            setArr,
            setSwapping,
            delayRef,
            setSwaps,
            setComp,
            setSorted,
            resetRef,
            setPlay,
            setIsSwapping,
            setSwapStyles,
            divRef,
            highlightRef
          ).then(() => {
            stopTimer(setIsRunning, idTime);
            toast.success("Sorting Completed");
            setPlay(false);
          });
          break;
      }
    }
  }, [play]);
  //route handler
  useEffect(() => {
    resetArray();
  }, [location]);
  //InputBoxKeyHandler
  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" ||
      e.key === "Tab" ||
      e.key === "Enter" ||
      e.key === "Escape" ||
      e.key === "," ||
      // Allow numeric keys
      (e.key >= "0" && e.key <= "9")
    ) {
      return; // Allow these keys
    }

    e.preventDefault();
  };
  //generate arr handler

  return (
    <div>
      <div className="flex justify-between gap-5 md:gap-8 items-center mx-3 md:mx-10 flex-wrap ">
        <div className="flex flex-grow gap-7 md:w-fit w-full">
          <button
            onClick={generateRandomArray}
            className=" text-white px-2.5 rounded py-1.5 active:scale-95 bg-customBlue"
          >
            Generate
          </button>
          {/* Input Box */}
          <input
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              if (play) {
                resetArray();
              }
              const value = e.target.value;
              const newArrStr = value
                .replace(/\s*,\s*/g, ", ")
                .replace(/\s+/g, " ")
                .replace(/\d{4}/g, "")
                .trim();

              const newArray = newArrStr
                .split(",")
                .filter((v) => v !== "")
                .map((v) => Math.min(+v, 240));

              setArr(newArray);
              setInput(newArrStr);

              console.log(arr);
            }}
            value={input}
            className={`text-black border  border-black  px-4 py-1.5 rounded focus:outline-none w-full`}
            type="text"
            placeholder="Numbers to sort (comma separate - max 3 digits)"
          ></input>
        </div>
        {/* PlayButton */}
        <div className="flex md:w-fit w-full gap-5 md:justify-normal md:gap-7 shrink-0">
          <Tooltip text="Play" classes="">
            <button
              onClick={() => {
                resetRef.current = false;
                setPlay(true);
                console.log(play);
              }}
              className="py-1.5 active:scale-95 "
            >
              <img
                className={`h-6 w-6 ${dark ? "invert" : ""}`}
                src="public\assets\download.svg"
                alt="play"
              />
            </button>
          </Tooltip>
          {/* Reset Button */}
          <Tooltip text="Reset" classes="">
            <button
              onClick={resetArray}
              className={`py-1.5   active:rotate-45 `}
            >
              <img
                className={`h-6 w-6 ${dark ? "invert" : ""}`}
                src="public\assets\reset.svg"
                alt="Reset"
              />
            </button>
          </Tooltip>
          {/* Delay button */}

          <Tooltip text="Animation Speed" classes="flex flex-grow">
            <input
              onChange={updateDelay}
              className="md:w-52 w-full shrink"
              type="range"
              min="1"
              max="20"
              step="1"
              value={speed}
            ></input>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
