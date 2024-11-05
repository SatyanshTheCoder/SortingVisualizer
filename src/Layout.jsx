import React, { useEffect, useRef } from "react";
import { Navbar } from "./component/Navbar";
import { Container } from "./component/Container";
import { Controller } from "./component/Controller";
import { Switch } from "./component/Switch";
import { useState } from "react";
import { DarkMode } from "./component/DarkMode";

export const Layout = () => {
  const [arr, setArr] = useState([
    180, 234, 100, 142, 87, 126, 230, 140, 45, 210,
  ]);
  const [swapping, setSwapping] = useState([]);
  const [swaps, setSwaps] = useState(0);
  const [comp, setComp] = useState(0);
  const [sorted, setSorted] = useState([]);
  const [play, setPlay] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [minIdx, setMinIdx] = useState([]);
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const [timerId, setTimerId] = useState(null);
  const divRef = useRef([]);
  const [isSwapping, setIsSwapping] = useState(false); 
  const [swapStyles, setSwapStyles] = useState({}); 
  const highlightRef = useRef(500);
  const delayRef = useRef(2000);
  const [dark, setDark] = useState(true)
  
 const bgColour = dark?'bg-black':''
  return (
    <div className={`flex flex-col h-screen motion-preset-fade-md ${bgColour} ${dark?'text-white':'textBlack'}`} >
   
      <Navbar dark={dark} />
      <Controller
        arr={arr}
        setArr={setArr}
        setSwapping={setSwapping}
        setSwaps={setSwaps}
        setComp={setComp}
        setSorted={setSorted}
        play={play}
        setPlay={setPlay}
        minIdx={minIdx}
        setMinIdx={setMinIdx}
        time={time}
        setTime={setTime}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        timerId={timerId}
        setTimerId={setTimerId}
        isSwapping={isSwapping}
        setIsSwapping={setIsSwapping}
        setSwapStyles={setSwapStyles}
        divRef={divRef}
        isOn={isOn}
        highlightRef={highlightRef}
        delayRef={delayRef}
        dark= {dark}
      />
      <Switch isOn={isOn } setIsOn={setIsOn} />
      <div className="flex-grow flex flex-col ">
        <Container
          arr={arr}
          setArr={setArr}
          swaps={swaps}
          comp={comp}
          swapping={swapping}
          sorted={sorted}
          setSorted={setSorted}
          isOn={isOn} setIsOn={setIsOn}
          minIdx={minIdx}
          time={time}
          divRef={divRef}
          isSwapping={isSwapping}
          swapStyles={swapStyles}
          highlightRef={highlightRef}
          dark = {dark}
        />
      </div>
      <DarkMode dark={ dark} setDark={setDark}/>
    </div>
  );
};
