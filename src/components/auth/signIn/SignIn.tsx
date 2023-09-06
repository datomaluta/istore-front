import { useForm } from "react-hook-form";
import ModalDiv from "../../sharedComponents/animatedComponents/modalDiv/ModalDiv";
import CustomInput from "../../sharedComponents/inputs/customInput/CustomInput";
import { PropsType } from "./types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAuthenticatedUserInfo, loginUser } from "../../../../services/auth";

const SignIn = ({
  closeSignInOpenSignUpHandler,
  setSignInModalIsVisible,
}: PropsType) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  const loginUserMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log(data);
      // setSuccessMessage("მომხმარებელი წარმატებით დარეგისტრირდა");
      // setTimeout(() => {
      //   setSignUpModalIsVisible(false);
      //   setSuccessMessage("");
      // }, 3500);
    },
    // onError: (error: customAxiosError) => {
    //   if (error.response) {
    //     setBackErrorStatusCode(error.response.status);
    //   }
    // },
  });

  const submitHandler = async (data) => {
    const requestData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    loginUserMutation.mutate(data);
  };

  const userQuery = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => getAuthenticatedUserInfo(),
  });

  console.log(userQuery.data);

  return (
    <ModalDiv setModalIsVisible={setSignInModalIsVisible}>
      <h1 className="border-b border-t-greyForBorder dark:border-greyforText pb-4 text-center text-2xl font-bold">
        Sign In
      </h1>

      <form onSubmit={handleSubmit(submitHandler)} className=" mt-4">
        <CustomInput
          register={register}
          name="email"
          label="Email"
          placeholder="Enter Email address..."
        />
        <CustomInput
          register={register}
          name="password"
          label="Password"
          placeholder="Enter password..."
        />
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
      </form>
    </ModalDiv>
  );
};

export default SignIn;
