"use client";

import { useState, useEffect } from "react";

interface device {
  width: number;
  height: number;
}

const MyComponent = () => {
  const [deviceSize, setDeviceSize] = useState<device>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setDeviceSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen  bg-secondary  text-white relative overflow-hidden">
      <div
        style={{
          height: Math.floor(deviceSize.height / 1.1),
          width: Math.floor(deviceSize.width / 2),
          background: "red",
        }}
        className="absolute flex top-1/2 transform -translate-y-1/2 translate-x-[40%] right-0 rotate-45"
      >
        <div className="flex h-full flex-1 bg-black"></div>
      </div>
    </div>
  );
};

export default MyComponent;
