import { PropsType } from "./types";

const CustomInput = ({ label, placeholder }: PropsType) => {
  return (
    <div className="mb-4">
      <label className="block text-sm mb-1">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full bg-transparent border border-greyForBorder dark:border-greyforText px-2 py-2 
      rounded outline-none focus:border-primary focus:dark:border-primary transition-all"
      />
    </div>
  );
};

export default CustomInput;
