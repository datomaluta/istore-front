import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import BigSlider from "../components/homeComponents/bigSlider/BigSlider";
import DiscountSlider from "../components/homeComponents/discountSlider/DiscountSlider";
import Features from "../components/homeComponents/features/Features";
import TestimonialLayout from "../components/homeComponents/testimonial/TestimonialLayour";
import { motion } from "framer-motion";
import Layout from "../components/sharedComponents/layout/Layout";

const Home = () => {
  // const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;
