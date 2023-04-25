import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { auth, db } from "./firebase.config";

function editFreelancer() {
  const [freelancerData, setFreelancerData] = useState("");

  // States to update freelancer's data
  const [updatedFirstName, setUpdatedFirstName] = useState("");
  // const [updatedSecondName, setUpdatedSecondName] = useState("");
  // const [updatedEmail, setUpdatedEmail] = useState("");
  // const [updatedCity, setUpdatedCity] = useState("");
  // const [updatedCountry, setUpdatedCountry] = useState("");
  // const [updatedExperience, setUpdatedExperience] = useState("");
  // const [updatedAboutMe, setUpdatedAboutMe] = useState("");
  // const [updatedTags, setUpdatedTags] = useState("");

  const freelancerCollectionRef = collection(db, "freelancer");

  const getFreelancerData = async () => {
    const data = await getDocs(freelancerCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setFreelancerData(filteredData);
  };

  useEffect(() => {
    getFreelancerData();
  }, []);

  const updateFreelancerFirstName = async (uid) => {
    const freelancerDoc = doc(db, "freelancer", uid);
    await updateDoc(freelancerDoc, { firstName: updatedFirstName });
    setFreelancerData(
      freelancerData.map((freelancer) => {
        if (freelancer.uid === uid) {
          return {
            ...freelancer,
            firstName: updatedFirstName,
          };
        } else {
          return freelancer;
        }
      }),
    );
  };
}
export default editFreelancer;

// import { doc, getDoc } from "firebase/firestore";
// import { db, auth } from "../firebase/firebase.config";

// export const getFreelancer = async () => {
//   const userId = auth.currentUser ? auth.currentUser.uid : null;
//   const docRef = doc(db, "freelancer", String(userId));
//   const docSnapF = await getDoc(docRef);

//   return { docSnapF };
// };
