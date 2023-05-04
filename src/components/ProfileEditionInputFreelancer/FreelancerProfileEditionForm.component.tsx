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
  const [draftId, setDraftId] = useState<string | null>(null);

  const freelancersCollection = collection(db, "freelancer") as CollectionReference<Freelancer>;

  const getFormData = (event: FormEvent<FreelancersForm>): Freelancer => {
    event.preventDefault();

    const {
      uid,
      firstName,
      secondName,
      email,
      country,
      city,
      experience,
      aboutMe,
      gallery,
      branding,
      print,
      digital,
      ux,
      ilustrations,
      other,
      tags,
    } = event.currentTarget.elements;

    return {
      uid: uid.value,
      firstName: firstName.value,
      secondName: secondName.value,
      email: email.value,
      country: country.value,
      city: city.value,
      experience: Number(experience.value),
      aboutMe: aboutMe.value,
      gallery: gallery.value,
      branding: branding.value,
      print: print.value,
      digital: digital.value,
      ux: ux.value,
      ilustrations: ilustrations.value,
      other: other.value,
      tags: tags.value,
    };
  };

  const handleUpdate = async (event: FormEvent<FreelancersForm>) => {
    event.preventDefault();

    if (!freelancerData) return;

    const { uid } = freelancerData;
    const docRef = doc(freelancersCollection, uid);
    await updateDoc(docRef, getFormData(event));

    setDraftId(null);
  };

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
            <FreelancerDataContainer key="uid">
              <FreelancerInputArea>
                <EditionLabel>Imię</EditionLabel>
                <EditionField placeholder={freelancerData.firstName} />
              </FreelancerInputArea>

              <FreelancerInputArea>
                <EditionLabel>Nazwisko</EditionLabel>
                <EditionField placeholder={freelancerData.secondName} />
              </FreelancerInputArea>
              <FreelancerInputArea>
                <EditionLabel>Adres e-mail</EditionLabel>
                <EditionField placeholder={freelancerData.email} />
              </FreelancerInputArea>
              <FreelancerInputArea>
                <EditionLabel>Kraj</EditionLabel>
                <EditionField placeholder={freelancerData.country} />
              </FreelancerInputArea>
              <FreelancerInputArea>
                <EditionLabel>Miasto</EditionLabel>
                <EditionField placeholder={freelancerData.city} />
              </FreelancerInputArea>
              <FreelancerInputArea>
                <EditionLabel>Doświadczenie</EditionLabel>
                <EditionField placeholder={freelancerData.experience} />
              </FreelancerInputArea>
              <FreelancerInputArea>
                <EditionLabel>O mnie...</EditionLabel>
                <EditionField placeholder={freelancerData.aboutMe} />
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
            <SubmitChangesButtonSecondary>Zapisz zmiany</SubmitChangesButtonSecondary>
          </>
        )}
      </FreelancerProfileEditionWrapper>
    </>
  );
};

// import { useEffect, useState } from "react";
// import { collection, DocumentData, updateDoc, doc, addDoc, getDocs, CollectionReference } from "firebase/firestore";
// import { auth, db } from "../../firebase/firebase.config";
// import {
//   FreelancerProfileEditionWrapper,
//   FreelancerDataContainer,
//   FreelancerInputArea,
//   EditionField,
//   EditionLabel,
//   FreelancerCategoriesContainer,
//   FreelancerCheckboxLabel,
//   EditionInput,
//   SubmitChangesButtonSecondary,
//   SubmitChangesButtonPrimary,
// } from "./FreelancerProfileEditionForm.styled";
// // import { useNavigate } from "react-router-dom";
// // import { useUser } from "../../context/auth.context";
// import { getFreelancer } from "../../firebase/getFreelancer";

// type Freelancer = {
//   uid: string;
//   firstName: string;
//   secondName: string;
//   email: string;
//   country: string;
//   city: string;
//   experience: number;
//   aboutMe: string;
//   gallery: string;
//   branding: string;
//   print: string;
//   digital: string;
//   ux: string;
//   ilustrations: string;
//   other: string;
//   tags: string;
// };

// export const FreelancerProfileEditionForm = () => {
//   const [freelancerData, setFreelancerData] = useState<DocumentData | null>(null);

//   // States to update freelancer's data
//   const [updatedFirstName, setUpdatedFirstName] = useState("");

//   const freelancersCollection = collection(db, "freelancer") as CollectionReference<Freelancer>;

//   // const user = useUser();
//   // const navigate = useNavigate();

//   // useEffect(() => {
//   //   if (!user) navigate("/login");
//   // }, [user]);

//   useEffect(() => {
//     const fetchDataFreelancer = async () => {
//       const { docSnapF } = await getFreelancer();
//       if (docSnapF.exists()) {
//         setFreelancerData(docSnapF.data());
//       }
//     };
//     fetchDataFreelancer();
//   }, []);

//   const updateFreelancerData = async (id) => {
//     const freelancerDoc = doc(db, "freelancer", id);
//     await updateDoc(freelancerDoc, { firstName: updatedFirstName });
//     setFreelancerData(
//       freelancerData.map((freelancer) => {
//         if (freelancer.id === id) {
//           return {
//             ...freelancerData,
//             firstName: updatedFirstName,
//           };
//         } else {
//           return freelancerData;
//         }
//       }),
//     );
//   };

//   return (
//     <>
//       <FreelancerProfileEditionWrapper id="edition-form">
//         <h2>Daj znać, co się zmieniło</h2>
//         {freelancerData && (
//           <>
//             <FreelancerDataContainer>
//               <FreelancerInputArea>
//                 <EditionLabel>Imię</EditionLabel>
//                 <EditionField
//                   placeholder={freelancerData.firstName}
//                   onChange={(e) => setUpdatedFirstName(e.target.value)}
//                 />
//                 <SubmitChangesButtonPrimary
//                   title="Zmienia tylko wartość danego pola"
//                   onClick={() => updateFreelancerData(freelancerData.id)}
//                 >
//                   Zmień
//                 </SubmitChangesButtonPrimary>
//               </FreelancerInputArea>

//               <FreelancerInputArea>
//                 <EditionLabel>Nazwisko</EditionLabel>
//                 <EditionField placeholder={freelancerData.secondName} />
//                 <SubmitChangesButtonPrimary
//                   title="Zmienia tylko wartość danego pola"
//                   onClick={() => updateFreelancerData(freelancerData.id)}
//                 >
//                   Zmień
//                 </SubmitChangesButtonPrimary>
//               </FreelancerInputArea>
//               <FreelancerInputArea>
//                 <EditionLabel>Adres e-mail</EditionLabel>
//                 <EditionField placeholder={freelancerData.email} />
//                 <SubmitChangesButtonPrimary
//                   title="Zmienia tylko wartość danego pola"
//                   onClick={() => updateFreelancerData(freelancerData.id)}
//                 >
//                   Zmień
//                 </SubmitChangesButtonPrimary>
//               </FreelancerInputArea>
//               <FreelancerInputArea>
//                 <EditionLabel>Kraj</EditionLabel>
//                 <EditionField placeholder={freelancerData.country} />
//                 <SubmitChangesButtonPrimary
//                   title="Zmienia tylko wartość danego pola"
//                   onClick={() => updateFreelancerData(freelancerData.id)}
//                 >
//                   Zmień
//                 </SubmitChangesButtonPrimary>
//               </FreelancerInputArea>
//               <FreelancerInputArea>
//                 <EditionLabel>Miasto</EditionLabel>
//                 <EditionField placeholder={freelancerData.city} />
//                 <SubmitChangesButtonPrimary
//                   title="Zmienia tylko wartość danego pola"
//                   onClick={() => updateFreelancerData(freelancerData.id)}
//                 >
//                   Zmień
//                 </SubmitChangesButtonPrimary>
//               </FreelancerInputArea>
//               <FreelancerInputArea>
//                 <EditionLabel>Doświadczenie</EditionLabel>
//                 <EditionField placeholder={freelancerData.experience} />
//                 <SubmitChangesButtonPrimary
//                   title="Zmienia tylko wartość danego pola"
//                   onClick={() => updateFreelancerData(freelancerData.id)}
//                 >
//                   Zmień
//                 </SubmitChangesButtonPrimary>
//               </FreelancerInputArea>
//               <FreelancerInputArea>
//                 <EditionLabel>O mnie...</EditionLabel>
//                 <EditionField placeholder={freelancerData.aboutMe} />
//                 <SubmitChangesButtonPrimary
//                   title="Zmienia tylko wartość danego pola"
//                   onClick={() => updateFreelancerData(freelancerData.id)}
//                 >
//                   Zmień
//                 </SubmitChangesButtonPrimary>
//               </FreelancerInputArea>
//             </FreelancerDataContainer>

//             <EditionLabel>Dodaj / usuń kategorie świadczonych usług</EditionLabel>

//             <FreelancerCategoriesContainer>
//               <FreelancerCheckboxLabel>
//                 <EditionInput type="checkbox" />
//                 branding
//               </FreelancerCheckboxLabel>
//               <FreelancerCheckboxLabel>
//                 <EditionInput type="checkbox" />
//                 digital
//               </FreelancerCheckboxLabel>
//               <FreelancerCheckboxLabel>
//                 <EditionInput type="checkbox" />
//                 druk
//               </FreelancerCheckboxLabel>
//               <FreelancerCheckboxLabel>
//                 <EditionInput type="checkbox" />
//                 ux / ui
//               </FreelancerCheckboxLabel>
//               <FreelancerCheckboxLabel>
//                 <EditionInput type="checkbox" />
//                 inne
//               </FreelancerCheckboxLabel>
//             </FreelancerCategoriesContainer>
//             <SubmitChangesButtonSecondary title="Zapisuje zmiany kategorii usług">
//               Zapisz zmiany
//             </SubmitChangesButtonSecondary>
//           </>
//         )}
//       </FreelancerProfileEditionWrapper>
//     </>
//   );
// };
