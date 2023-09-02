import ModalDiv from "../../sharedComponents/animatedComponents/modalDiv/ModalDiv";
import CustomInput from "../../sharedComponents/inputs/customInput/CustomInput";
import { PropsType } from "./types";

const SignIn = ({
  closeSignInOpenSignUpHandler,
  setSignInModalIsVisible,
}: PropsType) => {
  return (
    <ModalDiv setModalIsVisible={setSignInModalIsVisible}>
      <h1 className="border-b border-t-greyForBorder dark:border-greyforText pb-4 text-center text-2xl font-bold">
        Sign In
      </h1>

      <div className=" mt-4">
        <CustomInput label="Email" placeholder="Enter Email address..." />
        <CustomInput label="Password" placeholder="Enter password..." />
        <div className="flex justify-between text-sm text-gray-500">
          <button
            onClick={closeSignInOpenSignUpHandler}
            className="hover:text-primary"
          >
            Register
          </button>
          <button className="hover:text-primary">Password Recover </button>
        </div>
        <button className="bg-primary text-white w-full py-3 rounded font-bold mt-6">
          Sign In
        </button>
      </div>
    </ModalDiv>
  );
};

export default SignIn;
