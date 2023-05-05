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
  ProfileClientFrameWrapper,
} from "../components/ProfileClientFrame/ProfileClientFrame.styled";
import { getFreelancer } from "../firebase/getFreelancer";
import { TaskFreelancer } from "../components/TaskFreelancer/TaskFreelancer.component";
import { IJob } from "../components/ProfileInputFreelancer/ProfileInputFreelancer.component";

const ProfileClient = () => {
  const [userData, setUserData] = useState<any>();
  const [freelancer, setFreelancer] = useState<boolean>(false);
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
        //setFreelancer(false);
      }
    };
    fetchData();
    //check here
    if (userData == undefined) {
      const fetchDataFreelancer = async () => {
        const { docSnapF } = await getFreelancer();
        if (docSnapF.exists()) {
          setUserData(docSnapF.data());
          setFreelancer(true);
        }
      };
      fetchDataFreelancer();
    }
  }, []);

  return (
    <>
      {!freelancer && userData && (
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
      {freelancer && userData && (
        <>
          <ProfileClientFrameWrapper>
            <h1>Profil: {userData.firstName}!</h1>
            <ProfileClientFrame>
              <ProfileClientFrameLogo src={example} alt="logo" width="300" />
              <ProfileClientFrameData>
                <p>
                  <ProfileClientFrameKey>Imię:</ProfileClientFrameKey> {userData.firstName}
                </p>
                <p>
                  <ProfileClientFrameKey>Nazwisko:</ProfileClientFrameKey> {userData.secondName}
                </p>
                <p>
                  <ProfileClientFrameKey>O mnie:</ProfileClientFrameKey> {userData.aboutMe}
                </p>
                <p>
                  <ProfileClientFrameKey>e-mail:</ProfileClientFrameKey> {userData.email}
                </p>
                <p>
                  <ProfileClientFrameKey>Kraj:</ProfileClientFrameKey> {userData.country}
                </p>
                <p>
                  <ProfileClientFrameKey>Miasto:</ProfileClientFrameKey> {userData.city}
                </p>
                <p>
                  <ProfileClientFrameKey>Doświadczenie:</ProfileClientFrameKey> {userData.experience}
                </p>
                <p>
                  <ProfileClientFrameKey>Tagi:</ProfileClientFrameKey> {userData.tags}
                </p>
                <p>
                  <ProfileClientFrameKey>Usługi:</ProfileClientFrameKey>
                  {userData.branding ? <button>Branding</button> : null}
                  {userData.print ? <button>Druk</button> : null}
                  {userData.digital ? <button>Digital</button> : null}
                  {userData.ux ? <button>UX/UI</button> : null}
                  {userData.ilustrations ? <button>Ilustracje</button> : null}
                  {userData.other ? <button>Inne</button> : null}
                </p>
                <p>
                  <ProfileClientFrameKey>Galeria:</ProfileClientFrameKey> {userData.gallery}
                </p>
              </ProfileClientFrameData>
            </ProfileClientFrame>
          </ProfileClientFrameWrapper>
          <div>
            <ProfileClientFrameKey>Zadania:</ProfileClientFrameKey>
            {userData.jobs.map((job: IJob) => (
              <>
                {" "}
                <TaskFreelancer
                  key={job.id}
                  author={job.author}
                  content={job.content}
                  date={job.date}
                  status={job.status}
                  email={job.email}
                />
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ProfileClient;
