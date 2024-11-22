import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      className="h-screen "
      style={{ backgroundImage: `url(${"/assets/whiteback.jpg"})` }}
    >
      <div className=" pt-28 ml-6 border-l-8 border-black pl-1 ">
        <h1 className="font-bold text-6xl md:text-6xl lg:text-9xl mb-3 motion-preset-slide-down-sm motion-duration-2000 font-sans">Sorting </h1>
        <h1 className=" font-bold  text-6xl md:text-6xl lg:text-9xl motion-preset-slide-down-sm motion-duration-2000 font-sans ">Visualizer </h1>
      </div>
      <div className="  mt-28 bg-black motion-preset-fade-lg" style={{ backgroundImage: `url(${"/assets/blackback.jpg"})` }}>
        <div className="flex justify-center flex-col mt-10 pt-10 pb-5 px-4 text-white ">
          <h1 className="text-white font-bold text-2xl mb-5 ">
            Sorting Algorithms
          </h1>
          <p className="md:text-2xl text-justify mb-5">
            Sorting algorithms are used to sort a data structure according to a
            specific order relationship, such as numerical order or
            lexicographical order.
          </p>
          <p className="md:text-2xl mb-5 text-justify">
            This operation is one of the most important and widespread in
            computer science. For a long time, new methods have been developed
            to make this procedure faster and faster.
          </p>
          <p className="md:text-2xl mb-5 text-justify">
            There are currently hundreds of different sorting algorithms, each
            with its own specific characteristics. They are classified according
            to two metrics: space complexity and time complexity.
          </p>
          <p className="md:text-2xl mb-5 text-justify">
            Those two kinds of complexity are represented with asymptotic
            notations, mainly with the symbols O, Θ, Ω, representing
            respectively the upper bound, the tight bound, and the lower bound
            of the algorithm's complexity, specifying in brackets an expression
            in terms of n, the number of the elements of the data structure.
          </p>
          <p className="md:text-2xl mb-5 text-justify">
            Most of them fall into two categories:
          </p>
          <ul className="md:text-2xl list-disc pl-5">
            <li>
              <strong>Logarithmic</strong>
              <br />
              The complexity is proportional to the binary logarithm (i.e to the
              base 2) of <code>n</code>.
              <br />
              An example of a logarithmic sorting algorithm is Quick sort, with
              space and time complexity O(<code>n × log n</code>).
              <br />
              <br />
            </li>
            <li>
              <strong>Quadratic</strong>
              <br />
              The complexity is proportional to the square of <code>n</code>.
              <br />
              An example of a quadratic sorting algorithm is Bubble sort, with a
              time complexity of O(
              <code>
                n<sup>2</sup>
              </code>
              ).
              <br />
            </li>
          </ul>
          <p className="md:text-2xl mb-5 mt-4 text-justify">
            Space and time complexity can also be further subdivided into 3
            different cases: best case, average case and worst case.
          </p>
          <p className="md:text-2xl mb-5 text-justify">
            Sorting algorithms can be difficult to understand and it's easy to
            get confused. We believe visualizing sorting algorithms can be a
            great way to better understand their functioning while having fun!
          </p>
              </div>
              
              <div className="flex items-center justify-center pb-10">
              <Link to="/bubble">
            <button
              className='active:scale-95 md:text-2xl px-3 rounded-full py-3 transition-all duration-200 bg-white text-black'>
             SORTS
            </button>
          </Link>
              </div>     
      </div>
    </div>
  );
};
