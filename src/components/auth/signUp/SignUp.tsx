import ModalDiv from "../../sharedComponents/animatedComponents/modalDiv/ModalDiv";
import CustomInput from "../../sharedComponents/inputs/customInput/CustomInput";
import { PropsType } from "./types";
import { motion } from "framer-motion";

const SignUp = ({
  closeSignUpOpenSignInHandler,
  setSignUpModalIsVisible,
}: PropsType) => {
  return (
    <ModalDiv setModalIsVisible={setSignUpModalIsVisible}>
      <h1 className="border-b border-t-greyForBorder dark:border-greyforText pb-4 text-center text-2xl font-bold">
        Sign Up
      </h1>

      <div className=" mt-4">
        <CustomInput label="Name" placeholder="Enter name..." />
        <CustomInput label="Email" placeholder="Enter Email address..." />
        <CustomInput label="Password" placeholder="Enter password..." />
        <CustomInput
          label="Re-type Password"
          placeholder="Confirm password..."
        />
        <div className="flex justify-between text-sm text-gray-500">
          <button onClick={closeSignUpOpenSignInHandler}>
            Already have an account?
          </button>
        </div>
        <button className="bg-primary text-white w-full py-3 rounded font-bold mt-6">
          Sign Up
        </button>
      </div>
    </ModalDiv>
  );
};

export default SignUp;
