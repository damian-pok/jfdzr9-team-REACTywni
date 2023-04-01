//firebase
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase/firebase.config";

export const getFreelancer = async () => {
  const docRef = doc(db, "freelancer", String(auth.currentUser.uid));
  const docSnap = await getDoc(docRef);

  return { docSnap };
};
