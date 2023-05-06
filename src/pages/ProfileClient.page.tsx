import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/auth.context";
import { getClient } from "../firebase/getClient";
import profileAvatar from "../assets/illustrations/Profile-avatar.svg";
import {
  ProfileClientContainer,
  ProfileClientLogo,
  ProfileClientTitle,
  ProfileClientParagraph,
  ProfileInformationContainer,
  ProfileClientCover,
  ProfileClientAbout,
  ProfileClientTitleCategories,
  CategoriesBox,
  CategoriesButtonBox,
  ProfileClientCategoriesLast,
  ProfileClientFrameKey,
  ProfileWrapper,
  ProfileClientCategoriesVeryLast,
} from "../components/ProfileClientFrame/ProfileClientFrame.styled";
//import images
import { getFreelancer } from "../firebase/getFreelancer";
import cover from "../assets/images/cover.png";
import { TaskFreelancer } from "../components/TaskFreelancer/TaskFreelancer.component";
import { IJob } from "../components/ProfileInputFreelancer/ProfileInputFreelancer.component";
import { DesignerServices } from "../components/DesignerServices/DesignerServices.component";
import { JobTaskWrapper } from "../components/TaskFreelancer/TaskFreelancer.styled";

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
    <ProfileWrapper>
      <div>
        {!freelancer && userData && (
          <>
            <>
              <ProfileClientCover src={cover} />
              <ProfileClientContainer>
                <ProfileClientLogo src={profileAvatar} alt="logo" />
                <ProfileInformationContainer>
                  <ProfileClientTitle>{userData.company}</ProfileClientTitle>
                  <ProfileClientParagraph>Nazwa: {userData.company}</ProfileClientParagraph>
                  <ProfileClientParagraph>e-mail: {userData.email}</ProfileClientParagraph>
                  <ProfileClientParagraph>NIP:: {userData.nip}</ProfileClientParagraph>
                  <ProfileClientParagraph>Kraj: {userData.country}</ProfileClientParagraph>
                  <ProfileClientParagraph>Miasto: {userData.city}</ProfileClientParagraph>
                  <ProfileClientParagraph>Adres: {userData.street}</ProfileClientParagraph>
                </ProfileInformationContainer>
              </ProfileClientContainer>
            </>
          </>
        )}
        {freelancer && userData && (
          <>
            <ProfileClientCover src={cover} />
            <ProfileClientContainer>
              <ProfileClientLogo src={profileAvatar} alt="logo" />
              <ProfileInformationContainer>
                <ProfileClientTitle>{userData.firstName}</ProfileClientTitle>
                <ProfileClientParagraph>Imię: {userData.firstName}</ProfileClientParagraph>
                <ProfileClientParagraph>Nazwisko: {userData.secondName}</ProfileClientParagraph>
                <ProfileClientParagraph>e-mail: {userData.email}</ProfileClientParagraph>
                <ProfileClientParagraph>Kraj: {userData.country}</ProfileClientParagraph>
                <ProfileClientParagraph>Miasto: {userData.city}</ProfileClientParagraph>
                <ProfileClientParagraph>Doświadczenie: {userData.experience}</ProfileClientParagraph>
              </ProfileInformationContainer>
            </ProfileClientContainer>
            <ProfileClientAbout>
              <ProfileClientTitle>O mnie</ProfileClientTitle>
              <ProfileClientParagraph>{userData.aboutMe}</ProfileClientParagraph>
            </ProfileClientAbout>
            <ProfileClientCategoriesLast>
              <ProfileClientTitle>Usługi</ProfileClientTitle>
              <ProfileClientTitleCategories>Kategorie</ProfileClientTitleCategories>
              <CategoriesButtonBox>
                {userData.branding ? <CategoriesBox>branding</CategoriesBox> : null}
                {userData.print ? <CategoriesBox>druk</CategoriesBox> : null}
                {userData.digital ? <CategoriesBox>digital</CategoriesBox> : null}
                {userData.ux ? <CategoriesBox>UX/UI</CategoriesBox> : null}
                {userData.ilustrations ? <CategoriesBox>ilustracje</CategoriesBox> : null}
                {userData.other ? <CategoriesBox>inne</CategoriesBox> : null}
              </CategoriesButtonBox>
              <ProfileClientTitleCategories>Umiejętności</ProfileClientTitleCategories>
              <ProfileClientParagraph>
                {userData.tags && <DesignerServices services={userData.tags}></DesignerServices>}
              </ProfileClientParagraph>
            </ProfileClientCategoriesLast>
            <ProfileClientCategoriesVeryLast>
              <ProfileClientTitle>Zlecenia</ProfileClientTitle>
              <JobTaskWrapper>
                {userData.jobs.map((job: IJob) => (
                  <>
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
              </JobTaskWrapper>
            </ProfileClientCategoriesVeryLast>
          </>
        )}
      </div>
    </ProfileWrapper>
  );
};

export default ProfileClient;
