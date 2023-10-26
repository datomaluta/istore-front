import StarIcon from "../../icons/StarIcon";

const TestimonialCard = (props: {
  userName: string;
  imgSrc: string;
  text: string;
}) => {
  return (
    <div
      className="bg-red-40 flex flex-col items-center
     gap-4 w-full bg-gray-200 dark:bg-neutral-800 rounded p-4"
    >
      <div className="flex gap-1">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <p className=" font-arial">{props.text}</p>
      <div className="flex items-center gap-2 mt-auto">
        <img className="rounded-full" src={props.imgSrc} alt="userimg" />
        <p className="font-arial">{props.userName}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
