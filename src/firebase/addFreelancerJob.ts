import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebase.config";

import { IProfileInputFreelancer } from "../components/ProfileInputFreelancer/ProfileInputFreelancer.component";

export interface IFreelancer {
  freelancerData: IProfileInputFreelancer;
  jobContent: string;
  jobDate: string;
}

export const addFreelancerJob = async ({ freelancerData, jobContent, jobDate }: IFreelancer) => {
  const userId = auth.currentUser ? auth.currentUser.uid : null;
  const docRef = doc(db, "freelancer", freelancerData.uid);
  const docSnapF = await getDoc(docRef);
  console.log(docSnapF);
};
