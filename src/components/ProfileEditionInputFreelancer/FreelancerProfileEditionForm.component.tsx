import { useEffect, useState, FormEvent } from "react";
import { collection, updateDoc, doc, CollectionReference } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { getFreelancer } from "../../firebase/getFreelancer";
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
} from "./FreelancerProfileEditionForm.styled";
import { Controller, useForm } from "react-hook-form";

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

type FormElements = HTMLFormControlsCollection & {
  uid: HTMLInputElement;
  firstName: HTMLInputElement;
  secondName: HTMLInputElement;
  email: HTMLInputElement;
  country: HTMLInputElement;
  city: HTMLInputElement;
  experience: HTMLInputElement;
  aboutMe: HTMLInputElement;
  gallery: HTMLInputElement;
  branding: HTMLInputElement;
  print: HTMLInputElement;
  digital: HTMLInputElement;
  ux: HTMLInputElement;
  ilustrations: HTMLInputElement;
  other: HTMLInputElement;
  tags: HTMLInputElement;
};

type FreelancersForm = HTMLFormElement & {
  elements: FormElements;
};

export const FreelancerProfileEditionForm = () => {
  const [freelancerData, setFreelancerData] = useState<Freelancer>();

  const { control, handleSubmit } = useForm<Freelancer>();

  const freelancersCollection = collection(db, "freelancer") as CollectionReference<Freelancer>;

  const handleUpdate = handleSubmit((updates) => {
    if (!freelancerData) return;
    const { uid } = freelancerData;
    const docRef = doc(freelancersCollection, uid);
    const updatedData = {
      ...freelancerData,
      ...updates,
    };
    updateDoc(docRef, updatedData);
  });

  useEffect(() => {
    const fetchDataFreelancer = async () => {
      const { docSnapF } = await getFreelancer();
      if (docSnapF.exists()) {
        setFreelancerData(docSnapF.data() as Freelancer);
      }
    };
    fetchDataFreelancer();
  }, []);

  if (!freelancerData) return null;

  return (
    <>
      <FreelancerProfileEditionWrapper onSubmit={(e) => handleUpdate(e as FormEvent<FreelancersForm>)}>
        <h2>Daj znać, co się zmieniło</h2>
        {freelancerData && (
          <>
            <FreelancerDataContainer>
              <FreelancerInputArea>
                <EditionLabel>Imię</EditionLabel>
                <Controller
                  name="firstName"
                  defaultValue={freelancerData.firstName}
                  control={control}
                  render={({ field }) => <EditionField type={"text"} {...field} />}
                />
              </FreelancerInputArea>

              <FreelancerInputArea>
                <EditionLabel>Nazwisko</EditionLabel>
                <Controller
                  name="secondName"
                  defaultValue={freelancerData.secondName}
                  control={control}
                  render={({ field }) => <EditionField type={"text"} {...field} />}
                />
              </FreelancerInputArea>
              <FreelancerInputArea>
                <EditionLabel>Adres e-mail</EditionLabel>
                <Controller
                  name="email"
                  defaultValue={freelancerData.email}
                  control={control}
                  render={({ field }) => <EditionField type={"text"} {...field} />}
                />
              </FreelancerInputArea>
              <FreelancerInputArea>
                <EditionLabel>Kraj</EditionLabel>
                <Controller
                  name="country"
                  defaultValue={freelancerData.country}
                  control={control}
                  render={({ field }) => <EditionField type={"text"} {...field} />}
                />
              </FreelancerInputArea>
              <FreelancerInputArea>
                <EditionLabel>Miasto</EditionLabel>
                <Controller
                  name="city"
                  defaultValue={freelancerData.city}
                  control={control}
                  render={({ field }) => <EditionField type={"text"} {...field} />}
                />
              </FreelancerInputArea>
              <FreelancerInputArea>
                <EditionLabel>Doświadczenie</EditionLabel>
                <Controller
                  name="experience"
                  defaultValue={freelancerData.experience}
                  control={control}
                  render={({ field }) => <EditionField type={"number"} {...field} />}
                />
              </FreelancerInputArea>
              <FreelancerInputArea>
                <EditionLabel>O mnie...</EditionLabel>
                <Controller
                  name="aboutMe"
                  defaultValue={freelancerData.aboutMe}
                  control={control}
                  render={({ field }) => <EditionField type={"text"} {...field} />}
                />
              </FreelancerInputArea>
            </FreelancerDataContainer>

            {/* <EditionLabel>Dodaj / usuń kategorie świadczonych usług</EditionLabel> */}

            {/* <FreelancerCategoriesContainer>
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
            </FreelancerCategoriesContainer> */}
            <SubmitChangesButtonSecondary type="submit">Zapisz zmiany</SubmitChangesButtonSecondary>
          </>
        )}
      </FreelancerProfileEditionWrapper>
    </>
  );
};
