import { addDoc, collection } from "firebase/firestore";
import { IProfileInputClient } from "../components/ProfileInputClient/ProfileInputClient.component";
import { db } from "./firebase.config";

export const addClient = async (client: Partial<IProfileInputClient>) => {
  const clientRef = collection(db, "client");
  await addDoc(clientRef, client);
};
