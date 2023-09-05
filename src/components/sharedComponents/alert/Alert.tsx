import { motion } from "framer-motion";
import { PropsType } from "./types";

const Alert = ({ message }: PropsType) => {
  return (
    <>
      {message && (
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, x: 500, transition: { duration: 0.2 } }}
          className="fixed bottom-6 text-sm right-6 bg-green-500 rounded p-4 z-[9999]"
        >
          {message}
        </motion.div>
      )}
    </>
  );
};

export default Alert;
