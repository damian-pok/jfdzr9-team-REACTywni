import { doc, setDoc } from "firebase/firestore";
import { IProfileInputClient } from "../components/ProfileInputClient/ProfileInputClient.component";
import { db } from "./firebase.config";

export const addClient = async (client: Partial<IProfileInputClient>) => {
  await setDoc(doc(db, "client", String(client.uid)), client);
};
