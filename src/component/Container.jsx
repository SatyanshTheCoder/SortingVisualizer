/* eslint-disable no-unused-vars */
import Bar from "./Bar";
import { Cell } from "./Cell";
import { useLocation } from "react-router-dom";
export const Container = ({
  arr,
  setArr,
  swaps,
  comp,
  swapping,
  sorted,
  setSorted,
  isOn,
  setIsOn,
  minIdx,
  time,
  divRef,
  isSwapping,
  swapStyles,
  highlightRef,
  dark,
}) => {
  const location = useLocation();
  const formattedPath =
    location.pathname.replace("/", "").charAt(0).toUpperCase() +
    location.pathname.slice(2);

  return (
    <div
      className={`flex flex-col items-center  ${isOn ? "h-96" : "flex-grow"} ${
        dark ? "text-white" : "text-black"
      }`}
    >
      <main className="flex flex-col flex-grow pt-7 min-w-[300px] max-h-[400px] pb-11 mt-2 max-w-full px-4">
        <div
          className="p-5 flex-grow  shadow-md flex flex-col justify-between"
          style={{
            boxShadow: `${
              dark
                ? "0 0px 4px rgba(255, 255, 255, 0.4)"
                : "0 0 4px rgba(0, 0, 0, 0.4)"
            }`,
          }}
        >
          <header className="flex justify-between">
            <h2 className="font-bold text-lg">{formattedPath} Sort</h2>
            <h2>
              Time: <b>{Math.floor(time / 100)}</b>
            </h2>
          </header>
          <div className="pt-4 pb-8 flex-grow flex flex-col max-w-full  justify-center overflow-auto ">
            {isOn ? (
              <Cell
                arr={arr}
                divRef={divRef}
                swapping={swapping}
                sorted={sorted}
                minIdx={minIdx}
                isSwapping={isSwapping}
                swapStyles={swapStyles}
                highlightRef={highlightRef}
                dark={dark}
              />
            ) : (
              <Bar
                arr={arr}
                setArr={setArr}
                swapping={swapping}
                sorted={sorted}
                minIdx={minIdx}
              />
            )}
          </div>
          <footer className="flex justify-between">
            <h2>
              Swaps:<b>{swaps}</b>
            </h2>
            <h2>
              Comparison: <b>{comp}</b>{" "}
            </h2>
          </footer>
        </div>
      </main>
    </div>
  );
};
