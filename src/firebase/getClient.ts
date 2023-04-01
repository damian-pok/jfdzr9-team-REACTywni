//firebase
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase/firebase.config";

export const getClient = async () => {
  const docRef = doc(db, "client", String(auth.currentUser.uid));
  const docSnap = await getDoc(docRef);

  return { docSnap };
};
