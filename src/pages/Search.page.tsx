import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar.component";
import { Dashboard } from "../components/Dashboard/Dashboard.component";
import { CollectionReference, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { IProfileInputFreelancer } from "../components/ProfileInputFreelancer/ProfileInputFreelancer.component";
import { SearchWrapper } from "../components/Search/Search.styled";
import { SearchEngine } from "../components/SearchEngine/SearchEngine.component";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<IProfileInputFreelancer[]>([]);

  const getFreelancers = () => {
    const actorsCollection = collection(db, "freelancer") as CollectionReference<IProfileInputFreelancer>;
    getDocs(actorsCollection).then((querySnapshot) => {
      const freelancers = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      freelancers && setData(freelancers);
    });
  };

  useEffect(getFreelancers, []);

  const filteredData =
    data &&
    data.filter((freelancer) => {
      return freelancer.tags.toLowerCase().includes(query.toLowerCase());
    });

  return (
    <>
      {filteredData.length > 0 && (
        <SearchWrapper>
          {/* <SearchBar query={query} setQuery={setQuery} /> */}
          <SearchEngine query={query} setQuery={setQuery} />
          <Dashboard freelancers={filteredData} />
        </SearchWrapper>
      )}
    </>
  );
};

export default SearchPage;
