import { useEffect, useState } from "react";
import { DocumentData, updateDoc, doc } from "firebase/firestore";
import { ProfileInputFreelancerStyled } from "./ProfileEditionInputFreelancer.styled";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/auth.context";
import { getFreelancer } from "../../firebase/getFreelancer";

export interface IEditionFormFreelancer {
  uid: string;
  firstName: string;
  secondName: string;
  email: string;
  country: string;
  city: string;
  experience: number;
  aboutMe: string;
  gallery: string;
  branding: string;
  print: string;
  digital: string;
  ux: string;
  ilustrations: string;
  other: string;
  tags: string;
}

export const FreelancerProfileEditionForm = () => {
  const [freelancerData, setFreelancerData] = useState<DocumentData | null>(null);
  const user = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  useEffect(() => {
    const fetchDataFreelancer = async () => {
      const { docSnapF } = await getFreelancer();
      if (docSnapF.exists()) {
        setFreelancerData(docSnapF.data());
      }
    };
    fetchDataFreelancer();
  }, []);

  return (
    <>
      <ProfileInputFreelancerStyled id="edition-form">
        <h2>Daj znać, co się zmieniło</h2>
        {freelancerData && (
          <>
            <input placeholder={freelancerData.firstName} />
            <input placeholder={freelancerData.secondName} />
            <input placeholder={freelancerData.email} />
            <input placeholder={freelancerData.country} />
            <input placeholder={freelancerData.city} />
            <input placeholder={freelancerData.experience} />
            <input placeholder={freelancerData.aboutMe} />
          </>
        )}
      </ProfileInputFreelancerStyled>
    </>
  );
};
