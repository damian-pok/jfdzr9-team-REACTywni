import { DocumentData, QueryDocumentSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { IProfileInputFreelancer } from "../components/ProfileInputFreelancer/ProfileInputFreelancer.component";

type CallbackFn<T> = (lastDoc?: QueryDocumentSnapshot<DocumentData>) => Promise<T>;

interface FirebaseResponse {
  freelancers: IProfileInputFreelancer[];
  lastDoc?: QueryDocumentSnapshot<DocumentData>;
  isEmpty: boolean;
}

export const fetchFirebaseData = (callback: CallbackFn<FirebaseResponse>) => {
  const [data, setData] = useState<IProfileInputFreelancer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loadMore, setLoadMore] = useState(0);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot | undefined>(undefined);
  const [isEmpty, setIsEmpty] = useState(false);

  // const getFreelancers = () => {
  //   const actorsCollection = collection(db, "freelancer") as CollectionReference<IProfileInputFreelancer>;
  //   getDocs(actorsCollection).then((querySnapshot) => {
  //     const actors = querySnapshot.docs.map((doc) => {
  //       return {
  //         id: doc.id,
  //         ...doc.data(),
  //       };
  //     });
  //     actors && setData(actors);
  //     console.log("Freelancers", actors);
  //   });
  // };

  // useEffect(() => getFreelancers, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      callback(lastDoc)
        .then((response) => {
          setData((prevData) => [...prevData, ...response.freelancers]);
          setLastDoc(response.lastDoc);
          setIsEmpty(response.isEmpty);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  }, [loadMore]);

  return {
    data,
    loading,
    error,
    loadMore,
    setLoadMore,
    isEmpty,
  };
};
