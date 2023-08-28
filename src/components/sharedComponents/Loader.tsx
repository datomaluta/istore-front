import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="loader absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3"
    ></motion.div>
  );
};

export default Loader;
