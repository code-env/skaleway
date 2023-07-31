"use client";

import React, { useEffect, useState } from "react";
// import { clearInterval } from "timers";

const Test = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const demo = setInterval(() => {
      setCount(count + 1);
      setVal(() => {
        const rand = Math.floor(Math.random() * 30 + 10);
        return rand + val;
      });
    }, 1000);

    if (count >= 10) {
      clearInterval(demo);
      console.log("hello there");
    }

    return () => {
      clearInterval(demo);
    };
  }, [count, val]);

  return <div>{val}</div>;
};

export default Test;
