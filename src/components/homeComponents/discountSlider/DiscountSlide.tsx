import SaleIcon from "../../icons/SaleIcon";

const DiscountSlide = (props: {
  imgsrc: string;
  productName: string;
  price: string;
}) => {
  return (
    <div
      className="mr-2 ml-2 sm:mr-0 sm:ml-0 px-2 py-2 h-[22rem]  flex flex-col  rounded bg-white overflow-hidden
     dark:bg-neutral-800 border border-neutral-300 dark:border-none  relative mb-4"
    >
      <span className="absolute pl-24 w-56 h-8 bg-red-500 text-white -right-8 -top-5 rotate-[37deg] flex justify-center items-center gap-1">
        <SaleIcon />
        Sale
      </span>
      <div className="w-full shrink-0 max-h-[15.875rem] sm:h-[20rem] overflow-hidden mx-auto">
        <img
          className="h-full w-full rounded object-cover"
          src={props.imgsrc}
          alt="productimg"
        />
      </div>
      <h1 className="h-12  mt-3 sm:text-sm">{props.productName}</h1>
      <div className="flex mt-2 gap-2">
        <p className="font-bold text-lg sm:text-base">{props.price}$</p>
        <p className="text-lg sm:text-base text-neutral-300 relative">
          {+props.price + 1000}$
          <span className="absolute top-3 sm:top-[0.55rem] left-0 w-12 h-[0.1rem] bg-red-500"></span>
        </p>
      </div>
    </div>
  );
};

export default DiscountSlide;
