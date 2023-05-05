import { IProfileInputFreelancer } from "../ProfileInputFreelancer/ProfileInputFreelancer.component";
import { FreelancersGrid, HeadlineTitle } from "./Dashboard.styled";
import { SingleFreelancer } from "../SingleFreelancer/SingleFreelancer.component";

export interface IFreelancers {
  freelancers: IProfileInputFreelancer[];
}

export const Dashboard = ({ freelancers }: IFreelancers) => {
  return (
    <>
      <FreelancersGrid>
        <HeadlineTitle>Znajdź designera</HeadlineTitle>
        {freelancers.map((freelancer) => (
          <SingleFreelancer key={freelancer.uid} freelancerData={freelancer}></SingleFreelancer>
        ))}
      </FreelancersGrid>
    </>
  );
};
