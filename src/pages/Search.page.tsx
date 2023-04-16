import { useContext, useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar.component";
import { Dashboard } from "../components/Dashboard/Dashboard.component";
import { FreelancersContext } from "../context/freelancer.context";
import { PrimaryButton } from "../components/UI/Buttons/Buttons.styled";
import { CollectionReference, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { IProfileInputFreelancer } from "../components/ProfileInputFreelancer/ProfileInputFreelancer.component";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<IProfileInputFreelancer[]>([]);

  const { loading, error, loadMore, isEmpty, setLoadMore } = useContext(FreelancersContext);

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
      //console.log("Freelancers", freelancers);
    });
  };

  useEffect(getFreelancers, []);

  const filteredData =
    data &&
    data.filter((freelancer) => {
      return freelancer.services.toLowerCase().includes(query.toLowerCase());
    });

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      {error}
      {data.length === 0 && loading && <p>Loading data from server...</p>}
      {!error && filteredData.length > 0 && <Dashboard freelancers={filteredData} />}
      {data.length > 0 && !isEmpty && (
        <PrimaryButton
          onClick={() => {
            setLoadMore(loadMore + 1);
          }}
        >
          {loading ? "Loading..." : "Load more"}
        </PrimaryButton>
      )}
      {isEmpty && <h5>No more data</h5>}
    </>
  );
};

export default SearchPage;
