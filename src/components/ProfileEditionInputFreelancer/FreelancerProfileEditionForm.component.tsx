import { useEffect, useState } from "react";
import { collection, CollectionReference, getDocs, DocumentData, updateDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase.config";
import { ProfileInputFreelancerStyled } from "./ProfileEditionInputFreelancer.styled";

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
  const [freelancerData, setFreelancerData] = useState<string[]>([]);

  const freelancerCollectionRef: CollectionReference<DocumentData> = collection(db, "freelancer");

  const getFreelancerData = async () => {
    const data = await getDocs(freelancerCollectionRef);
    const filteredData = data.docs.map((doc) => doc.id);
    setFreelancerData(filteredData);
  };

  return (
    <>
      <ProfileInputFreelancerStyled id="edition-form">
        <input id="firstName" />
        <input id="secondName" />
        <input id="email" />
        <input id="country" />
        <input id="city" />
        <input id="experience" />
        <input id="aboutMe" />
      </ProfileInputFreelancerStyled>
    </>
  );
};
