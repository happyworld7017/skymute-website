import { useState, useEffect } from "react";

export default function ToggleButton({ state }) {
  const [isProblem, setProblem] = useState(state);
  const [isAnimating, setIsAnimating] = useState(!state);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handleToggle = (value) => {
    setIsAnimating(true);
    setTimeout(() => {
      setProblem(value);
    }, 250);
  };

  return (
    <div className="w-full max-w-sm h-16 relative rounded-3xl overflow-hidden border border-gray-200 mx-auto">
      {/* Background element that shows which section is active */}
      <div
        className={`absolute top-0 h-full w-1/3 transition-all duration-500 bg-opacity-100 ${
          isProblem ? "left-0 bg-red-500" : "left-2/3 bg-green-500"
        }`}
      />

      {/* Button container */}
      <div className="flex relative h-full z-10">
        <button
          onClick={() => handleToggle(true)}
          className={`w-1/2 h-full flex items-center justify-center font-extrabold text-2xl transition-all cursor-pointer duration-500 ${
            isProblem ? "text-white" : "text-gray-700"
          }`}
        >
          problem
        </button>
        <button
          onClick={() => handleToggle(false)}
          className={`w-1/2 h-full cursor-pointer flex items-center justify-center font-extrabold text-2xl transition-all duration-500 ${
            !isProblem ? "text-white" : "text-gray-700"
          }`}
        >
          solution
        </button>
      </div>
    </div>
  );
}
