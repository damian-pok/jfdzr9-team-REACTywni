import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase/firebase.config";

export const getFreelancer = async () => {
  const userId = auth.currentUser ? auth.currentUser.uid : null;
  const docRef = doc(db, "freelancer", String(userId));
  const docSnapF = await getDoc(docRef);

  return { docSnapF };
};
