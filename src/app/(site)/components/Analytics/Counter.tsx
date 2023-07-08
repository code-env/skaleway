"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface ScrollCountProps {
  start: number;
  end: number;
  duration: number;
}

const Counter: React.FC<ScrollCountProps> = ({ start, end, duration }) => {
  const [isCounting, setIsCounting] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsCounting(true);
    } else {
      setIsCounting(false);
    }
  }, [inView]);

  return (
    <span ref={ref} className="text-2xl font-bold">
      {isCounting ? (
        <CountUp start={start} end={end} duration={duration} />
      ) : (
        start
      )}
    </span>
  );
};

export default Counter;
