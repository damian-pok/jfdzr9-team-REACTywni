import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../context/auth.context";

const AuthRequired = () => {
  const user = useUser();

  console.log("User: ", user);

  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default AuthRequired;
