import Slider from "react-slick";
import DiscountSlide from "./DiscountSlide";
import { useQuery } from "@tanstack/react-query";
import { getCategoryAllProducts } from "../../../../services/categoryService";
import { Product } from "../../../types/product";
import LoaderDots from "../../sharedComponents/LoaderDots";

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

  const { isLoading, data: computersQuery } = useQuery({
    queryKey: ["computers"],
    queryFn: () => getCategoryAllProducts("computers", 1),
  });

  return (
    <Slider className="w-[97%] sm:w-[92%] mx-auto " {...settings}>
      {isLoading ? (
        <LoaderDots />
      ) : (
        computersQuery?.data.data.map((product: Product) => (
          <DiscountSlide key={product.id} product={product} />
        ))
      )}
    </Slider>
  );
};

export default DiscountSlider;
