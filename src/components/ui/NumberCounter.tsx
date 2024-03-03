"use client";
import React, { useState, useEffect } from "react";

const NumberCounter: React.FC<{
  startsymbol?: string;
  start: number;
  end: number;
  duration: number;
  symbol?: string;
}> = ({ startsymbol, start, end, duration, symbol }) => {
  const [currentNumber, setCurrentNumber] = useState(start);

  useEffect(() => {
    let startTime: number;
    let requestId: number;

    const updateNumber = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        const newNumber = Math.floor(start + progress * (end - start));
        setCurrentNumber(newNumber);
        requestId = requestAnimationFrame(updateNumber);
      }
    };

    requestId = requestAnimationFrame(updateNumber);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [start, end, duration]);

  return (
    <div>
      {startsymbol}
      {currentNumber.toLocaleString()}
      {symbol}
    </div>
  );
};

export default NumberCounter;
