import { useEffect, useState } from "react";
import { Dashboard } from "../components/Dashboard/Dashboard.component";
import { CollectionReference, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { IProfileInputFreelancer } from "../components/ProfileInputFreelancer/ProfileInputFreelancer.component";
import { SearchWrapper } from "../components/Search/Search.styled";
import { SearchEngine } from "../components/SearchEngine/SearchEngine.component";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<IProfileInputFreelancer[]>([]);
  const [categories, setCategories] = useState<Record<string, boolean>>({
    branding: false,
    digital: false,
    print: false,
    uxui: false,
    ilustrations: false,
    other: false,
  });

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
    data
      .filter((freelancer) => {
        return freelancer.tags.toLowerCase().includes(query.toLowerCase());
      })
      .filter((freelancer) => {
        if (Object.values(categories).every((value) => value === false)) return true;
        if (categories.branding && freelancer.branding) return true;
        if (categories.digital && freelancer.digital) return true;
        if (categories.print && freelancer.print) return true;
        if (categories.uxui && freelancer.ux) return true;
        if (categories.ilustrations && freelancer.ilustrations) return true;
        if (categories.other && freelancer.other) return true;
        return false;
      });

  return (
    <>
      <SearchWrapper>
        <SearchEngine query={query} setQuery={setQuery} categories={categories} setCategories={setCategories} />
        {filteredData.length > 0 && <Dashboard freelancers={filteredData} />}
        {filteredData.length == 0 && <p>Brak grafików spełniających Twoje oczekiwania!</p>}
      </SearchWrapper>
    </>
  );
};

export default SearchPage;
