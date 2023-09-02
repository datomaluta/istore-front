import { motion } from "framer-motion";
import CloseIcon from "../../../icons/CloseIcon";
import { PropsType } from "./types";

const ModalDiv = ({ setModalIsVisible, children }: PropsType) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.2 },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.2 },
      }}
      className="w-screen min-h-screen fixed z-[400] top-0 left-0 right-0 text-greyforText dark:text-darkWhiteForText"
    >
      <div
        onClick={() => setModalIsVisible(false)}
        className="w-full h-full bg-black bg-opacity-80 fixed z-[500] top-0 left-0 right-0 "
      ></div>
      <motion.div
        className=" bg-white dark:bg-adminBgDark rounded py-10 z-[600] px-10 sm:px-4 max-w-[30rem] sm:max-w-[22rem] w-full 
    fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, y: "-150%", x: "-50%" }}
        animate={{
          opacity: 1,
          y: "-50%",
          x: "-50%",
          transition: { duration: 0.2 },
        }}
        exit={{
          opacity: 0,
          y: "-150%",
          transition: { duration: 0.2 },
        }}
      >
        <button
          onClick={() => setModalIsVisible(false)}
          className="absolute top-4 right-4"
        >
          <CloseIcon />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ModalDiv;
