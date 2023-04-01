import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth.context";

const AuthRequired = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default AuthRequired;
