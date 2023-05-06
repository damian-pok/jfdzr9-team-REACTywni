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
} from "./FreelancerProfileUpdateForm.styled";
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

export const FreelancerProfileUpdateForm = () => {
  const [freelancerData, setFreelancerData] = useState<Freelancer>();

  const { control, handleSubmit } = useForm<Freelancer>();

  const freelancersCollection = collection(db, "freelancer") as CollectionReference<Freelancer>;

  //Branding
  const [isBrandingChecked, setIsBrandingChecked] = useState(false);

  //Printing - category
  const [isPrintChecked, setIsPrintChecked] = useState(false);

  function handleChangePrint(event: React.ChangeEvent<HTMLInputElement>) {
    setIsPrintChecked(event.target.checked);
  }
  //Digital - category
  const [isDigitalChecked, setIsDigitalChecked] = useState(false);

  function handleChangeDigital(event: React.ChangeEvent<HTMLInputElement>) {
    setIsDigitalChecked(event.target.checked);
  }
  //UX - category
  const [isUxChecked, setIsUxChecked] = useState(false);

  function handleChangeUx(event: React.ChangeEvent<HTMLInputElement>) {
    setIsUxChecked(event.target.checked);
  }
  //Ilustrations - category
  const [isIlustrationChecked, setIsIlustrationChecked] = useState(false);

  function handleChangeIlustration(event: React.ChangeEvent<HTMLInputElement>) {
    setIsIlustrationChecked(event.target.checked);
  }
  //Other - category
  const [isOtherChecked, setIsOtherChecked] = useState(false);

  function handleChangeOther(event: React.ChangeEvent<HTMLInputElement>) {
    setIsOtherChecked(event.target.checked);
  }
  // END - category

  function handleChangeBranding(event: React.ChangeEvent<HTMLInputElement>) {
    setIsBrandingChecked(event.target.checked);
  }

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

            <EditionLabel>Dodaj / usuń kategorie świadczonych usług</EditionLabel>

            <FreelancerCategoriesContainer>
              <FreelancerCheckboxLabel>
                <Controller
                  name="branding"
                  control={control}
                  render={({ field }) => (
                    <>
                      <EditionInput
                        type={"checkbox"}
                        checked={isBrandingChecked}
                        {...field}
                        onChange={(e) => {
                          handleChangeBranding(e);
                          field.onChange(e);
                        }}
                      />
                      <label htmlFor="branding">branding</label>
                    </>
                  )}
                />
              </FreelancerCheckboxLabel>

              <FreelancerCheckboxLabel>
                <Controller
                  name="digital"
                  control={control}
                  render={({ field }) => (
                    <>
                      <EditionInput
                        type={"checkbox"}
                        checked={isDigitalChecked}
                        {...field}
                        onChange={(e) => {
                          handleChangeDigital(e);
                          field.onChange(e);
                        }}
                      />
                      <label htmlFor="digital">digital</label>
                    </>
                  )}
                />
              </FreelancerCheckboxLabel>

              <FreelancerCheckboxLabel>
                <Controller
                  name="print"
                  control={control}
                  render={({ field }) => (
                    <>
                      <EditionInput
                        type={"checkbox"}
                        checked={isPrintChecked}
                        {...field}
                        onChange={(e) => {
                          handleChangePrint(e);
                          field.onChange(e);
                        }}
                      />
                      <label htmlFor="print">druk</label>
                    </>
                  )}
                />
              </FreelancerCheckboxLabel>

              <FreelancerCheckboxLabel>
                <Controller
                  name="ux"
                  control={control}
                  render={({ field }) => (
                    <>
                      <EditionInput
                        type={"checkbox"}
                        checked={isUxChecked}
                        {...field}
                        onChange={(e) => {
                          handleChangeUx(e);
                          field.onChange(e);
                        }}
                      />
                      <label htmlFor="ux">UX/UI</label>
                    </>
                  )}
                />
              </FreelancerCheckboxLabel>

              <FreelancerCheckboxLabel>
                <Controller
                  name="ilustrations"
                  control={control}
                  render={({ field }) => (
                    <>
                      <EditionInput
                        type={"checkbox"}
                        checked={isIlustrationChecked}
                        {...field}
                        onChange={(e) => {
                          handleChangeIlustration(e);
                          field.onChange(e);
                        }}
                      />
                      <label htmlFor="ilustration">ilustracje</label>
                    </>
                  )}
                />
              </FreelancerCheckboxLabel>
              <FreelancerCheckboxLabel>
                <Controller
                  name="other"
                  control={control}
                  render={({ field }) => (
                    <>
                      <EditionInput
                        type={"checkbox"}
                        checked={isOtherChecked}
                        {...field}
                        onChange={(e) => {
                          handleChangeOther(e);
                          field.onChange(e);
                        }}
                      />
                      <label htmlFor="other">inne</label>
                    </>
                  )}
                />
              </FreelancerCheckboxLabel>
            </FreelancerCategoriesContainer>
            <SubmitChangesButtonSecondary type="submit">Zapisz zmiany</SubmitChangesButtonSecondary>
          </>
        )}
      </FreelancerProfileEditionWrapper>
    </>
  );
};
