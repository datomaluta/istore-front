import { useState } from "react";
import { motion } from "framer-motion";

const BigSliderSlide = (props: { imgSrc: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  return (
    <motion.div
      className="mb-4 h-[40rem] lg:h-[32rem] md:h-[24rem] sm:h-[14rem] rounded overflow-hidden"
      initial={false}
      animate={
        isLoaded
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1, delay: 0.2 }}
    >
      <img
        src={props.imgSrc}
        alt="sliderimg"
        className="object-cover h-full w-full rounded"
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  );
};
export default BigSliderSlide;
