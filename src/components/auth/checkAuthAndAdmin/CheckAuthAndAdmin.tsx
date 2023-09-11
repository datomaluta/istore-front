import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../../store/store";
import { PropsType } from "./types";

const CheckAuthAndAdmin = ({ admin, children }: PropsType) => {
  const { authorizedUser } = useSelector((state: RootState) => state.user);

  if (authorizedUser === null) {
    return;
  }

  if (authorizedUser === false) {
    return <Navigate to="/" />;
  }

  if (admin) {
    if (authorizedUser && !authorizedUser.isAdmin) {
      return <Navigate to="/" />;
    }
  }

  return children;
};

export default CheckAuthAndAdmin;
