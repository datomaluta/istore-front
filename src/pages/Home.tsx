import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import BigSlider from "../components/homeComponents/bigSlider/BigSlider";
import DiscountSlider from "../components/homeComponents/discountSlider/DiscountSlider";
import Features from "../components/homeComponents/features/Features";
import TestimonialLayout from "../components/homeComponents/testimonial/TestimonialLayour";
import { motion } from "framer-motion";

const Home = () => {
  // const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  return (
    <>
      <Header />
      <motion.div
        className=" pt-40 lg:pt-36 px-4 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <BigSlider />
        <Features />
        <div className="mt-20 flex justify-center flex-col items-center">
          <h1 className="text-lg text-center mb-8 max-w-max border-b-2 border-primary pb-1">
            დღის შეთავაზებები
          </h1>
          <DiscountSlider />
        </div>

        <TestimonialLayout />
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const visible = { opacity: 1, y: 0, transition: { duration: 0.2 } };

// function Home() {
//   return (
//     <motion.article
//       initial="hidden"
//       animate="visible"
//       exit={{ opacity: 0, transition: { duration: 0.2 } }}
//       variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
//     >
//       <motion.h1
//         variants={{
//           hidden: { opacity: 0, y: -20 },
//           visible,
//         }}
//         style={
//           {
//             "--base-width": "24vw",
//             top: "-18vw",
//             letterSpacing: "-1.4vw",
//             x: "-50%",
//           } as any
//         }
//       >
//         Galleries
//       </motion.h1>
//       <ul>
//         <motion.li variants={itemVariants}>
//           <Link to="/computers">Amsterdam Zuid nightwalk</Link>
//         </motion.li>
//         <motion.li variants={itemVariants}>
//           <Link to="/london">White lines of Canary Wharf</Link>
//         </motion.li>
//       </ul>
//     </motion.article>
//   );
// }

// export default Home;
