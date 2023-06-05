import Header from "../components/header/Header";
import BigSlider from "../components/homeComponents/bigSlider/BigSlider";
import Features from "../components/homeComponents/features/Features";
// import BigSlider from "../components/homeComponents/bigSlider/BigSlider";

const Home = () => {
  return (
    <>
      <Header />
      <div className="h-[100rem] pt-40 lg:pt-36 px-4">
        <BigSlider />
        <Features />
      </div>
    </>
  );
};

export default Home;
