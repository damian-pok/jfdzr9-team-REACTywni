//firebase
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase/firebase.config";

export const getFreelancer = async () => {
  const docRef = doc(db, "freelancer", String(auth.currentUser.uid));
  const docSnapF = await getDoc(docRef);

  return { docSnapF };
};
