import React from 'react'

export const Buttons = ({name,isTrue,setIsToggel,dark}) => {
  return (
    <button onClick={()=> setIsToggel(false)}
    className={`px-3 rounded-md py-1 transition-[background-color] duration-200 w-full ${dark?'text-white':''}  ${
      isTrue ? "bg-customBlue text-white ":"bg-transparent hover:outline hover:outline-1  hover:outline-customBlue"
    }`}
    style={{transition:''}}
  >
    {name}
  </button>
  )
}
