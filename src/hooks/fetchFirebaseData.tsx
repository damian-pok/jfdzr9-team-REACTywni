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

  console.log("Fetch ", data);

  return {
    data,
    loading,
    error,
    loadMore,
    setLoadMore,
    isEmpty,
  };
};
