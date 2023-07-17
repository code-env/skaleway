import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

interface DeviceSize {
  width: number;
  height: number;
}

const WaterMark = () => {
  const [deviceSize, setDeviceSize] = useState<DeviceSize>({
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

  const numBoxes = Math.floor(deviceSize.height / 1.05 / 40);

  const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, "0")}`;
  };

  const boxArray = Array.from({ length: numBoxes }).map((_, index) => (
    <div key={index} className="flex-grow gap-8 flex flex-col">
      {Array.from({ length: 100 }).map((_, index) => (
        <motion.div
          key={index}
          variants={slideIn(
            { direction: "down" },
            { type: "spring" },
            0,
            index * 1
          )}
          initial="hidden"
          animate="show"
          className="w-10 h-10 bg-white/50 bg-random"
        ></motion.div>
      ))}
    </div>
  ));

  console.log(getRandomColor());

  return (
    <div
      style={{
        height: Math.floor(deviceSize.height / 1.05),
        width: Math.floor(deviceSize.width / 2),
      }}
      className="absolute hidden lg:flex top-1/2 transform -translate-y-1/2 translate-x-[40%] right-0 -rotate-45"
    >
      <div className="flex h-full flex-1 flex-wrap gap-8 overflow-hidden">
        {boxArray}
      </div>
    </div>
  );
};

export default WaterMark;
