import {
  CollectionReference,
  QueryDocumentSnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { db, auth } from "../firebase/firebase.config";
import { IProfileInputFreelancer } from "../components/ProfileInputFreelancer/ProfileInputFreelancer.component";

export const getFreelancer = async () => {
  const userId = auth.currentUser ? auth.currentUser.uid : null;
  const docRef = doc(db, "freelancer", String(userId));
  const docSnapF = await getDoc(docRef);

  return { docSnapF };
};

const pageLimit = 1;
const orderByFilter = "city";

export const getAllFreelancers = async (lastDoc?: QueryDocumentSnapshot) => {
  const freelancersCollection = collection(db, "freelancer") as CollectionReference<IProfileInputFreelancer>;

  // console.log("Czy dziala ", freelancersCollection);

  let dbQuery = query(freelancersCollection, orderBy(orderByFilter), limit(pageLimit));
  if (lastDoc) {
    dbQuery = query(freelancersCollection, orderBy(orderByFilter), startAfter(lastDoc), limit(pageLimit));
  }

  const data = await getDocs(dbQuery);
  const freelancers = data.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    } as IProfileInputFreelancer;
  });

  const isEmpty = data.empty;

  return { freelancers, lastDoc: data.docs[data.docs.length - 1], isEmpty };
};
