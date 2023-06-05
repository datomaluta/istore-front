const BigSliderSlide = (props: { imgSrc: string }) => {
  return (
    <div className="mb-4 h-[40rem] lg:h-[32rem] md:h-[24rem] sm:h-[14rem] rounded overflow-hidden">
      <img
        src={props.imgSrc}
        alt="sliderimg"
        className="object-cover h-full w-full rounded"
      />
    </div>
  );
};
export default BigSliderSlide;
