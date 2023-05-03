import { useEffect, useState } from "react";
import { collection, DocumentData, updateDoc, doc, addDoc, getDocs, CollectionReference } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase.config";
import {
  FreelancerProfileEditionWrapper,
  FreelancerDataContainer,
  FreelancerInputArea,
  EditionField,
  EditionLabel,
  FreelancerCategoriesContainer,
  FreelancerCheckboxLabel,
  EditionInput,
  SubmitChangesButtonSecondary,
  SubmitChangesButtonPrimary,
} from "./FreelancerProfileEditionForm.styled";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/auth.context";
import { getFreelancer } from "../../firebase/getFreelancer";

type Freelancer = {
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
};

export const FreelancerProfileEditionForm = () => {
  const [freelancerData, setFreelancerData] = useState<DocumentData | null>(null);

  // States to update freelancer's data
  const [updatedFirstName, setUpdatedFirstName] = useState("");

  const freelancersCollection = collection(db, "freelancer") as CollectionReference<Freelancer>;

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

  const updateFreelancerData = async (id) => {
    const freelancerDoc = doc(db, "freelancer", id);
    await updateDoc(freelancerDoc, { firstName: updatedFirstName });
    setFreelancerData(
      freelancerData.map((freelancer) => {
        if (freelancer.id === id) {
          return {
            ...freelancerData,
            firstName: updatedFirstName,
          };
        } else {
          return freelancerData;
        }
      }),
    );
  };

  return (
    <>
      <FreelancerProfileEditionWrapper id="edition-form">
        <h2>Daj znać, co się zmieniło</h2>
        {freelancerData && (
          <>
            <FreelancerDataContainer>
              <FreelancerInputArea>
                <EditionLabel>Imię</EditionLabel>
                <EditionField
                  placeholder={freelancerData.firstName}
                  onChange={(e) => setUpdatedFirstName(e.target.value)}
                />
                <SubmitChangesButtonPrimary
                  title="Zmienia tylko wartość danego pola"
                  onClick={() => updateFreelancerData(freelancerData.id)}
                >
                  Zmień
                </SubmitChangesButtonPrimary>
              </FreelancerInputArea>

              <FreelancerInputArea>
                <EditionLabel>Nazwisko</EditionLabel>
                <EditionField placeholder={freelancerData.secondName} />
                <SubmitChangesButtonPrimary
                  title="Zmienia tylko wartość danego pola"
                  onClick={() => updateFreelancerData(freelancerData.id)}
                >
                  Zmień
                </SubmitChangesButtonPrimary>
              </FreelancerInputArea>
              <FreelancerInputArea>
                <EditionLabel>Adres e-mail</EditionLabel>
                <EditionField placeholder={freelancerData.email} />
                <SubmitChangesButtonPrimary
                  title="Zmienia tylko wartość danego pola"
                  onClick={() => updateFreelancerData(freelancerData.id)}
                >
                  Zmień
                </SubmitChangesButtonPrimary>
              </FreelancerInputArea>
              <FreelancerInputArea>
                <EditionLabel>Kraj</EditionLabel>
                <EditionField placeholder={freelancerData.country} />
                <SubmitChangesButtonPrimary
                  title="Zmienia tylko wartość danego pola"
                  onClick={() => updateFreelancerData(freelancerData.id)}
                >
                  Zmień
                </SubmitChangesButtonPrimary>
              </FreelancerInputArea>
              <FreelancerInputArea>
                <EditionLabel>Miasto</EditionLabel>
                <EditionField placeholder={freelancerData.city} />
                <SubmitChangesButtonPrimary
                  title="Zmienia tylko wartość danego pola"
                  onClick={() => updateFreelancerData(freelancerData.id)}
                >
                  Zmień
                </SubmitChangesButtonPrimary>
              </FreelancerInputArea>
              <FreelancerInputArea>
                <EditionLabel>Doświadczenie</EditionLabel>
                <EditionField placeholder={freelancerData.experience} />
                <SubmitChangesButtonPrimary
                  title="Zmienia tylko wartość danego pola"
                  onClick={() => updateFreelancerData(freelancerData.id)}
                >
                  Zmień
                </SubmitChangesButtonPrimary>
              </FreelancerInputArea>
              <FreelancerInputArea>
                <EditionLabel>O mnie...</EditionLabel>
                <EditionField placeholder={freelancerData.aboutMe} />
                <SubmitChangesButtonPrimary
                  title="Zmienia tylko wartość danego pola"
                  onClick={() => updateFreelancerData(freelancerData.id)}
                >
                  Zmień
                </SubmitChangesButtonPrimary>
              </FreelancerInputArea>
            </FreelancerDataContainer>

            <EditionLabel>Dodaj / usuń kategorie świadczonych usług</EditionLabel>

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
            <SubmitChangesButtonSecondary title="Zapisuje zmiany kategorii usług">
              Zapisz zmiany
            </SubmitChangesButtonSecondary>
          </>
        )}
      </FreelancerProfileEditionWrapper>
    </>
  );
};
