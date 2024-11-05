
import React, { useState, useEffect,useRef } from 'react';

const Check = () => {
  const [numDivs, setNumDivs] = useState(5); // Default number of divs
  const [swapIndex1, setSwapIndex1] = useState(0); // First index to swap
  const [swapIndex2, setSwapIndex2] = useState(4); // Second index to swap
  const [divs, setDivs] = useState([...Array(5).keys()]); // Initial divs
  const [isSwapping, setIsSwapping] = useState(false); // To trigger animations
  const [swapStyles, setSwapStyles] = useState({}); // To store dynamically generated keyframes
  const divRefs = useRef([]); // Array of refs for each div

  // Handle number of divs input
  const handleNumDivsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setNumDivs(value);
      setDivs([...Array(value).keys()]); // Update divs array dynamically
    }
  };

  // Swap function with animation
  const handleSwap = () => {
    
      const element1 = divRefs.current[swapIndex1];
      const element2 = divRefs.current[swapIndex2];

      if (element1 && element2) {
        // Calculate the distance between the two elements
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();

        const deltaX = rect2.left - rect1.left;
      

        // Create keyframes for each element
        const swapAnimation1 = `
          @keyframes swap1 {
            25% { transform: translateY(${55}px); }
            75% { transform: translate(${deltaX}px, ${55}px); }
            100% { transform: translate(${deltaX}px, 0); }
          }
        `;
        const swapAnimation2 = `
          @keyframes swap2 {
            25% { transform: translateY(${-55}px); }
            75% { transform: translate(${-deltaX}px, ${-55}px); }
            100% { transform: translate(${-deltaX}px, 0); }
          }
        `;

        setSwapStyles({ swapAnimation1, swapAnimation2 });
        setIsSwapping(true); // Trigger animations

        setTimeout(() => {
          const newDivs = [...divs];
         [newDivs[swapIndex1], newDivs[swapIndex2]] = [newDivs[swapIndex2], newDivs[swapIndex1]];
          setDivs(newDivs);
          // Perform the actual swap after the animation
          setIsSwapping(false); // Reset animation state
          setSwapStyles({}); // Clear styles after swap
        }, 500); // Duration of the animation
      }
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Inject dynamic styles into the document */}
      <style>
        {isSwapping && swapStyles.swapAnimation1}
        {isSwapping && swapStyles.swapAnimation2}
      </style>

      <div className="mb-4 flex gap-2">
        <input
          type="number"
          value={numDivs}
          onChange={handleNumDivsChange}
          className="px-2 py-1 border rounded"
          placeholder="Number of Divs"
        />
        <input
          type="number"
          value={swapIndex1}
          onChange={(e) => setSwapIndex1(parseInt(e.target.value, 10))}
          className="px-2 py-1 border rounded"
          placeholder="Index 1"
        />
        <input
          type="number"
          value={swapIndex2}
          onChange={(e) => setSwapIndex2(parseInt(e.target.value, 10))}
          className="px-2 py-1 border rounded"
          placeholder="Index 2"
        />
        <button
          onClick={handleSwap}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Swap
        </button>
      </div>

      {/* Dynamic Flex Container */}
      <div className="flex justify-center items-center gap-4">
        {divs.map((div, index) => (
          <div
            ref={(el) => (divRefs.current[index] = el)} // Assign ref to each div
            key={index}
            style={{
              animation:
                isSwapping && (index === swapIndex1 || index === swapIndex2)
                  ? index === swapIndex1
                    ? "swap1 0.5s forwards"
                    : "swap2 0.5s forwards"
                  : "none",
            }}
            className="w-12 h-12 bg-blue-500 flex items-center justify-center text-white rounded"
          >
            {div + 1}
          </div>
        ))}
      </div>
    </div>
  );

  
};

export default Check;
