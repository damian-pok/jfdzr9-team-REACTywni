import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/auth.context";

const ProfileClient = () => {
  const user = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
    console.log("Client", user);
  }, [user]);

  return <h1>Profil klienta!</h1>;
};

export default ProfileClient;
