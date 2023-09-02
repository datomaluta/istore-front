import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ImageContainer = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShouldAnimate(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="h-[23rem] sm:h-[16rem] bg-interStellar bg-center bg-cover mb-10 rounded  flex justify-center items-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -300 }}
        animate={{
          opacity: 1,
          y: 0,

          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 360,
            damping: 20,
          },
        }}
        className={`text-6xl sm:text-5xl font-sans font-bold text-white ${
          shouldAnimate ? "animate-pulse" : ""
        }`}
      >
        istore
      </motion.h1>
    </div>
  );
};

export default ImageContainer;
