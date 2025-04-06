import { useState, useEffect, useRef } from "react";

function App() {
  const [selectedSquares, setSelectedSquares] = useState<number[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (selectedSquares.length > 0) {
      // Clear existing timer if any
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      // Set new timer
      timerRef.current = setTimeout(() => {
        resetSquares();
      }, 2000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [selectedSquares]);
  const squares = Array(120).fill(null);
  // const isSquareVisible = (index: number) => {
  //   // Top row (0-3), left side (4,8), bottom row (9-12)
  //   return index <= 3 || index === 4 || index === 8 || index >= 9;
  // };

  const resetSquares = () => {
    const removeSquareWithDelay = (index: number) => {
      if (index >= 0) {
        setTimeout(() => {
          setSelectedSquares((prev) => prev.filter((_, i) => i !== 0));
          removeSquareWithDelay(index - 1);
        }, 100);
      }
    };

    removeSquareWithDelay(selectedSquares.length - 1);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="grid grid-cols-12 gap-2">
          {squares.map((_, index) => (
            <div
              key={index}
              className={`w-28 h-16 ${
                selectedSquares.includes(index) ? "bg-blue-900" : "bg-blue-500"
              } rounded transition-colors duration-300 ease-out cursor-pointer`}
              onClick={() => {
                !selectedSquares.includes(index) &&
                  setSelectedSquares([...selectedSquares, index]);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
