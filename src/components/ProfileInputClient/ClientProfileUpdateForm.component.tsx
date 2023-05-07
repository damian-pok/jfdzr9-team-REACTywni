import { useEffect, useState, FormEvent } from "react";
import { collection, updateDoc, doc, CollectionReference } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import {
  ClientProfileEditionWrapper,
  ClientDataContainer,
  ClientInputArea,
  ClientEditionField,
  ClientEditionLabel,
  SubmitChangesButtonSecondary,
} from "./ClientProfileUpdateForm.styled";
import { Controller, useForm } from "react-hook-form";
import { getClient } from "../../firebase/getClient";

type Client = {
  uid?: string;
  company: string;
  email: string;
  nip: number;
  country: string;
  city: string;
  street: string;
};

type FormElements = HTMLFormControlsCollection & {
  uid: HTMLInputElement;
  company: HTMLInputElement;
  email: HTMLInputElement;
  nip: HTMLInputElement;
  country: HTMLInputElement;
  city: HTMLInputElement;
  street: HTMLInputElement;
};

type ClientsForm = HTMLFormElement & {
  elements: FormElements;
};

export const ClientProfileUpdateForm = () => {
  const [clientData, setClientData] = useState<Client>();

  const { control, handleSubmit } = useForm<Client>();

  const clientsCollection = collection(db, "client") as CollectionReference<Client>;

  const handleUpdate = handleSubmit(async (updates) => {
    if (!clientData) return;
    const { uid } = clientData;
    const docRef = doc(clientsCollection, uid);
    const updatedData = {
      ...clientData,
      ...updates,
    };

    await updateDoc(docRef, updatedData);
    window.location.reload();
  });

  useEffect(() => {
    const fetchDataClient = async () => {
      const { docSnap } = await getClient();
      if (docSnap.exists()) {
        setClientData(docSnap.data() as Client);
      }
    };
    fetchDataClient();
  }, []);

  if (!clientData) return null;

  return (
    <>
      <ClientProfileEditionWrapper onSubmit={(e) => handleUpdate(e as FormEvent<ClientsForm>)}>
        <h2>Daj znać, co się zmieniło</h2>
        {clientData && (
          <>
            <ClientDataContainer>
              <ClientInputArea>
                <ClientEditionLabel>Nazwa firmy</ClientEditionLabel>
                <Controller
                  name="company"
                  defaultValue={clientData.company}
                  control={control}
                  render={({ field }) => <ClientEditionField type={"text"} {...field} />}
                />
              </ClientInputArea>
              <ClientInputArea>
                <ClientEditionLabel>Email</ClientEditionLabel>
                <Controller
                  name="email"
                  defaultValue={clientData.email}
                  control={control}
                  render={({ field }) => <ClientEditionField type={"text"} {...field} />}
                />
              </ClientInputArea>
              <ClientInputArea>
                <ClientEditionLabel>NIP</ClientEditionLabel>
                <Controller
                  name="nip"
                  defaultValue={clientData.nip}
                  control={control}
                  render={({ field }) => <ClientEditionField type={"text"} {...field} />}
                />
              </ClientInputArea>
              <ClientInputArea>
                <ClientEditionLabel>Kraj</ClientEditionLabel>
                <Controller
                  name="country"
                  defaultValue={clientData.country}
                  control={control}
                  render={({ field }) => <ClientEditionField type={"text"} {...field} />}
                />
              </ClientInputArea>
              <ClientInputArea>
                <ClientEditionLabel>Miasto</ClientEditionLabel>
                <Controller
                  name="city"
                  defaultValue={clientData.city}
                  control={control}
                  render={({ field }) => <ClientEditionField type={"text"} {...field} />}
                />
              </ClientInputArea>
              <ClientInputArea>
                <ClientEditionLabel>Ulica</ClientEditionLabel>
                <Controller
                  name="street"
                  defaultValue={clientData.street}
                  control={control}
                  render={({ field }) => <ClientEditionField type={"text"} {...field} />}
                />
              </ClientInputArea>
            </ClientDataContainer>

            <SubmitChangesButtonSecondary type="submit">Zapisz zmiany</SubmitChangesButtonSecondary>
          </>
        )}
      </ClientProfileEditionWrapper>
    </>
  );
};
