/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./component/Home";
import Check from "./component/Check";
import { Toaster } from "sonner";
function App() {
  
  
  return (
   
    <BrowserRouter>
     <Toaster  richColors position="bottom-right"/>
      
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/bubble" element={<Layout />} />
        <Route path="/Selection" element={<Layout />} />
        <Route path="/Merge" element={<Layout />} />
        <Route path="/Insertion" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
