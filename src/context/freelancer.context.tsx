// import { createContext, useContext, Dispatch, SetStateAction, ReactNode } from "react";
// import { IProfileInputFreelancer } from "../components/ProfileInputFreelancer/ProfileInputFreelancer.component";
// import { getAllFreelancers } from "../firebase/getFreelancer";
// import { fetchFirebaseData } from "../hooks/fetchFirebaseData";

// interface FreelancerContextState {
//   data: IProfileInputFreelancer[] | [];
//   loading: boolean;
//   error: string;
//   loadMore: number;
//   setLoadMore: Dispatch<SetStateAction<number>>;
//   isEmpty: boolean;
// }

// const initialState = {
//   data: [],
//   loading: false,
//   error: "",
//   loadMore: 0,
//   setLoadMore: () => null,
//   isEmpty: false,
// };

// interface ProviderProps {
//   children: ReactNode;
// }

// export const FreelancersContext = createContext<FreelancerContextState>(initialState);

// export const FreelancersContextProvider = ({ children }: ProviderProps) => {
//   return (
//     <FreelancersContext.Provider value={fetchFirebaseData(getAllFreelancers)}>{children}</FreelancersContext.Provider>
//   );
// };

// export const useData = () => useContext(FreelancersContext).data;
