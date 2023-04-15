import { useContext, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar.component";
import { Dashboard } from "../components/Dashboard/Dashboard.component";
import { FreelancersContext, useData } from "../context/freelancer.context";
import { PrimaryButton } from "../components/UI/Buttons/Buttons.styled";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase.config";
import { collection } from "firebase/firestore";
import { getAdditionalUserInfo } from "firebase/auth";
import { getAllFreelancers } from "../firebase/getFreelancer";

// const SearchPage = () => {
//   const freelancerData = useData();
//   //const { freelancers } = getAllFreelancers();
//   console.log("Dupa ", freelancerData);
// };

// export default SearchPage;

// const SearchPage = () => {
//   const params = useParams();
//   const freelancerData = useData();

//   const freelancer = freelancerData.find((singleFreelancer) => String(singleFreelancer.uid) === params.uid);

//   if (!freelancer) return null;

//   const {
//     uid,
//     firstName,
//     secondName,
//     email,
//     country,
//     city,
//     experience,
//     aboutMe,
//     services,
//     gallery,
//     branding,
//     print,
//     digital,
//     ux,
//     ilustrations,
//     other,
//   } = freelancer;

//   console.log("Freelancer", freelancerData);

//   return (
//     <>
//       <div> Imię: {uid}</div>
//       <Dashboard freelancers={freelancerData}></Dashboard>
//     </>
//   );
// };

// export default SearchPage;

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const { data, loading, error, loadMore, isEmpty, setLoadMore } = useContext(FreelancersContext);

  const filteredData =
    data &&
    data.filter((freelancer) => {
      return freelancer.city.toLowerCase().includes(query.toLowerCase());
    });

  console.log("Data", data);

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

// const SearchPage = () => {
//   const [query, setQuery] = useState("");
//   console.log("Show me: ", getAllFreelancers());
//   const freelancers1 = [{ uid: "aaa" }, { uid: "www" }];

//   return (
//     <>
//       <SearchBar query={query} setQuery={setQuery}></SearchBar>
//       <Dashboard freelancers={freelancers1}></Dashboard>
//       <Search />
//     </>
//   );
// };

// export default SearchPage;
