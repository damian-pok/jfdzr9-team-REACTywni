//firebase
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase/firebase.config";

export const getFreelancer = async () => {
  const userId = auth.currentUser ? auth.currentUser.uid : null;
  const docRef = doc(db, "freelancer", String(userId));
  const docSnapF = await getDoc(docRef);

  return { docSnapF };
};

// export const getFreelancer = async () => {
//   const docRef = doc(db, "freelancer", String(auth.currentUser.uid));
//   const docSnapF = await getDoc(docRef);

//   return { docSnapF };
// };
