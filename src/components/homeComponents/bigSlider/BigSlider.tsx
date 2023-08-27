import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg1 from "../../../assets/images/laptop1.jpg";
import sliderimg2 from "../../../assets/images/laptop2.jpg";
import sliderimg3 from "../../../assets/images/peri.png";
import sliderimg4 from "../../../assets/images/peri2.png";
import "./BigSlider.css";
import BigSliderSlide from "./BigSliderSlide";

const BigSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings} className="w-[100%] mx-auto rounded">
      <BigSliderSlide imgSrc={sliderimg1} />
      <BigSliderSlide imgSrc={sliderimg2} />
      <BigSliderSlide imgSrc={sliderimg3} />
      <BigSliderSlide imgSrc={sliderimg4} />
    </Slider>
  );
};

export default BigSlider;
