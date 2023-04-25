import { useState } from "react";
import { collection, updateDoc, doc } from "firebase/firestore";
import { auth, db } from "./firebase.config";

function editFreelancer() {
  const [updatedFirstName, setUpdatedFirstName] = useState("");
  const [updatedSecondName, setUpdatedSecondName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedCity, setUpdatedCity] = useState("");
  const [updatedCountry, setUpdatedCountry] = useState("");
  const [updatedExperience, setUpdatedExperience] = useState("");
  const [updatedAboutMe, setUpdatedAboutMe] = useState("");
  const [updatedTags, setUpdatedTags] = useState("");
}

// import { doc, getDoc } from "firebase/firestore";
// import { db, auth } from "../firebase/firebase.config";

// export const getFreelancer = async () => {
//   const userId = auth.currentUser ? auth.currentUser.uid : null;
//   const docRef = doc(db, "freelancer", String(userId));
//   const docSnapF = await getDoc(docRef);

//   return { docSnapF };
// };
