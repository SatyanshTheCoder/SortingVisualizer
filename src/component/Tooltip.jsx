
import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";

const Tooltip = ({ children, text ,classes }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const ref = useRef(null);

  const showTooltip = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8, // Position below the element
        left: rect.left + window.scrollX + rect.width / 2, // Center horizontally
      });
      setIsVisible(true);
    }
  };

  const hideTooltip = () => setIsVisible(false);

  return (
    <>
      <div
        ref={ref}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className={classes}
      >
        {children}
      </div>
      {isVisible &&
        createPortal(
          <div
            style={{ top: position.top, left: position.left }}
            className="fixed transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg z-50"
          >
            {text}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip;
