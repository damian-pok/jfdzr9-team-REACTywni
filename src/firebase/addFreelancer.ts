import { addDoc, collection } from "firebase/firestore";
import { IProfileInputFreelancer } from "../components/ProfileInputFreelancer/ProfileInputFreelancer.component";

import { db } from "./firebase.config";

export const addFreelancer = async (freelancer: Partial<IProfileInputFreelancer>) => {
  const freelancerRef = collection(db, "freelancer");
  await addDoc(freelancerRef, freelancer);
};
