import Slider from "react-slick";
import DiscountSlide from "./DiscountSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DiscountSlider.css";

const DiscountSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider className="w-[97%] sm:w-[92%] mx-auto " {...settings}>
      {/* <CustomNextArrow /> */}
      <DiscountSlide
        imgsrc="https://alta.ge/images/thumbnails/270/250/detailed/243/113532_1.png?t=1657513543"
        productName="Lenovo V14-ADA (82C6006ERU) 256gb"
        price="4000"
      />
      <DiscountSlide
        imgsrc="https://alta.ge/images/thumbnails/270/250/detailed/221/113956_1_eguq-zg.jpg?t=1657513543"
        productName="Apple MacBook Air 13'' M1 "
        price="5000"
      />
      <DiscountSlide
        imgsrc="https://alta.ge/images/thumbnails/270/250/detailed/254/120150_1.jpg?t=1658607325"
        productName="ASUS V14-ADA (82C6006ERU)"
        price="6000"
      />
      <DiscountSlide
        imgsrc="https://alta.ge/images/thumbnails/270/250/detailed/243/121326_1.jpg?t=1657513558"
        productName="HUAWEI V14-ADA (82C6006ERU)"
        price="7000"
      />
      <DiscountSlide
        imgsrc="https://alta.ge/images/thumbnails/270/250/detailed/257/132685.png?t=1670482499"
        productName="HP V14-ADA (82C6006ERU)"
        price="8000"
      />
    </Slider>
  );
};

export default DiscountSlider;
