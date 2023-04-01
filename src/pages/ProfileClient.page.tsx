import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/auth.context";
import { getClient } from "../firebase/getClient";

const ProfileClient = () => {
  const [userData, setUserData] = useState<any>();
  const user = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      const { docSnap } = await getClient();
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Profil klienta!</h1>
      {userData && (
        <>
          <p>nazwa: {userData.company}</p>
          <p>email: {userData.email}</p>
          <p>nip: {userData.nip}</p>
          <p>kraj: {userData.country}</p>
          <p>miasto: {userData.city}</p>
          <p>adres: {userData.street}</p>
        </>
      )}
    </>
  );
};

export default ProfileClient;
