import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import BigSlider from "../components/homeComponents/bigSlider/BigSlider";
import DiscountSlider from "../components/homeComponents/discountSlider/DiscountSlider";
import Features from "../components/homeComponents/features/Features";
import TestimonialLayout from "../components/homeComponents/testimonial/TestimonialLayour";
import SaleIcon from "../components/icons/SaleIcon";
// import BigSlider from "../components/homeComponents/bigSlider/BigSlider";

const Home = () => {
  return (
    <>
      <Header />
      <div className=" pt-40 lg:pt-36 px-4 pb-20">
        <BigSlider />
        <Features />
        <div className="mt-20 flex justify-center flex-col items-center">
          <h1 className="text-lg text-center mb-8 max-w-max border-b-2 border-primary">
            დღის შეთავაზებები
          </h1>
          <DiscountSlider />
        </div>

        <TestimonialLayout />
      </div>
      <Footer />
    </>
  );
};

export default Home;
