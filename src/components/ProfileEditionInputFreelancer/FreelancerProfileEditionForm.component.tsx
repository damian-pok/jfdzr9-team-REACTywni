import { useEffect, useState } from "react";
import { DocumentData, updateDoc, doc } from "firebase/firestore";
import {
  FreelancerProfileEditionWrapper,
  FreelancerDataContainer,
  EditionField,
  EditionLabel,
  FreelancerCategoriesContainer,
  FreelancerCheckboxLabel,
  EditionInput,
  SubmitChangesButton,
} from "./FreelancerProfileEditionForm.styled";
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
      <FreelancerProfileEditionWrapper id="edition-form">
        <h2>Daj znać, co się zmieniło</h2>
        {freelancerData && (
          <>
            <FreelancerDataContainer>
              <EditionLabel>Imię:</EditionLabel>
              <EditionField placeholder={freelancerData.firstName} />
              <EditionLabel>Nazwisko:</EditionLabel>
              <EditionField placeholder={freelancerData.secondName} />
              <EditionLabel>Adres e-mail:</EditionLabel>
              <EditionField placeholder={freelancerData.email} />
              <EditionLabel>Kraj:</EditionLabel>
              <EditionField placeholder={freelancerData.country} />
              <EditionLabel>Miasto:</EditionLabel>
              <EditionField placeholder={freelancerData.city} />
              <EditionLabel>Doświadczenie:</EditionLabel>
              <EditionField placeholder={freelancerData.experience} />
              <EditionLabel>O mnie...:</EditionLabel>
              <EditionField placeholder={freelancerData.aboutMe} />
            </FreelancerDataContainer>

            <EditionLabel>Kategorie usług, jakie świadczysz</EditionLabel>

            <FreelancerCategoriesContainer>
              <FreelancerCheckboxLabel>
                <EditionInput type="checkbox" />
                branding
              </FreelancerCheckboxLabel>
              <FreelancerCheckboxLabel>
                <EditionInput type="checkbox" />
                digital
              </FreelancerCheckboxLabel>
              <FreelancerCheckboxLabel>
                <EditionInput type="checkbox" />
                druk
              </FreelancerCheckboxLabel>
              <FreelancerCheckboxLabel>
                <EditionInput type="checkbox" />
                ux / ui
              </FreelancerCheckboxLabel>
              <FreelancerCheckboxLabel>
                <EditionInput type="checkbox" />
                inne
              </FreelancerCheckboxLabel>
            </FreelancerCategoriesContainer>
            <SubmitChangesButton>Zapisz zmiany</SubmitChangesButton>
          </>
        )}
      </FreelancerProfileEditionWrapper>
    </>
  );
};
