import React from "react";
import { useLocation } from "react-router-dom";
export const Cell = ({
  arr,
  divRef,
  swapping,
  sorted,
  minIdx,
  isSwapping,
  swapStyles,
  highlightRef,
  dark,
}) => {
  const location = useLocation();
  const path = location.pathname;
  const swapIndex1 = swapping[0];
  const swapIndex2 = swapping[1];
  const swapIndex3 = [];
  if (path === '/merge') {
    for (let i = swapIndex1 + 1; i <= swapIndex2; i++){
      swapIndex3.push(i);

    }
   
  }
 
  return (
    <>
    <ul className="flex  text-center text-black">
      <style>
        {isSwapping && swapStyles.swapAnimation1}
          {isSwapping && swapStyles.swapAnimation2}
          {isSwapping && swapStyles.swapAnimation3}
      </style>
      {arr.map((size, index) => (
        <li
          ref={(el) => (divRef.current[index] = el)}
          key={index}
          className={`max-h border border-black rounded-md leading-[50px] flex-shrink-0 relative }
            
            ${
              minIdx.includes(index)
                ? "bg-customOrange"
                : swapping.includes(index)
                ? "bg-customYellow"
                : sorted.includes(index) ? "bg-customGreen" : "bg-white"
            }
            `}

          style={{
            boxShadow:dark?"0 4px 4px rgba(255, 255, 255, 0.15)": "0 4px 4px rgba(0, 0, 0, 0.15)",
            width: "50px",
            height: "50px",
            margin: "2px",
            zIndex: swapIndex1 === index ? '10' : '0',
            animation:
              isSwapping && (index === swapIndex1 || index === swapIndex2|| swapIndex3.includes(index))
                ? index === swapIndex1
                  ? `swap1 ${
                      highlightRef.current * 4
                    }ms linear 0s 1 normal forwards `
                  : swapIndex3.includes(index)
                    ?`swap3 ${
                      highlightRef.current * 4
                    }ms linear 0s 1 normal forwards`
                    : `swap2 ${
                      highlightRef.current * 4
                    }ms linear 0s 1 normal forwards`
                : "none",
          }}
        >
          {size}
        </li>
      ))}
      </ul>
      <ul className={`flex flex-row opacity-25 ${dark?"text-white":"text-black"} relative  pt-2 `}  >
    {arr.map((size, index) => (
      <li className="w-[50px] flex justify-center flex-shrink-0 text-[12px] " style={{margin:'2px', zIndex:"1"}}key={index} >{index}</li>
    ))}
    </ul>
      </>
  );
};
