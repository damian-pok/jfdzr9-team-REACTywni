import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/auth.context";
import { getClient } from "../firebase/getClient";
import example from "../assets/example.jpg";
import {
  ProfileClientFrame,
  ProfileClientFrameData,
  ProfileClientFrameKey,
  ProfileClientFrameLogo,
} from "../components/ProfileClientFrame/ProfileClientFrame.styled";

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
      {userData && (
        <>
          <h1>Profil: {userData.company}!</h1>
          <ProfileClientFrame>
            <ProfileClientFrameLogo src={example} alt="logo" width="300" />
            <ProfileClientFrameData>
              <p>
                <ProfileClientFrameKey>Nazwa:</ProfileClientFrameKey> {userData.company}
              </p>
              <p>
                <ProfileClientFrameKey>e-mail:</ProfileClientFrameKey> {userData.email}
              </p>
              <p>
                <ProfileClientFrameKey>NIP:</ProfileClientFrameKey> {userData.nip}
              </p>
              <p>
                <ProfileClientFrameKey>Kraj:</ProfileClientFrameKey> {userData.country}
              </p>
              <p>
                <ProfileClientFrameKey>Miasto:</ProfileClientFrameKey> {userData.city}
              </p>
              <p>
                <ProfileClientFrameKey>Adres:</ProfileClientFrameKey> {userData.street}
              </p>
            </ProfileClientFrameData>
          </ProfileClientFrame>
        </>
      )}
    </>
  );
};

export default ProfileClient;
