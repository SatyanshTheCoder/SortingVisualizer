function Bar({ arr, setArr, swapping, sorted, minIdx }) {
  return (
    <>
      <ul className="flex items-end flex-grow ">
        {arr.map((size, index) => (
          <li
            key={index}
            className={`bg-customGray max-h flex flex-col items-center justify-end border-customGray ${
              sorted.includes(index) ? "bg-customGreen" : ""
            } 
          ${minIdx.includes(index) ? "bg-customOrange" : ""} 
          ${swapping.includes(index) ? "bg-customYellow" : ""}`}
            style={{
              width: "30px",
              height: `${size}px`,
              margin: "1px",
              border: "0.5px solid #d3d3d3",
            }}
          >
            {" "}
          </li>
        ))}
      </ul>
      <ul className="flex flex-row">
        {arr.map((_, index) => (
          <li
            className="w-[30px] flex justify-center shrink font-extralight text-[6.4px]"
            style={{ margin: "1px" }}
            key={index}
          >
            {index}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Bar;
