import { IProfileInputFreelancer } from "../ProfileInputFreelancer/ProfileInputFreelancer.component";
import { FreelancersGrid } from "./Dashboard.styled";
import { SingleFreelancer } from "../SingleFreelancer/SingleFreelancer.component";

export interface IFreelancers {
  freelancers: IProfileInputFreelancer[];
}

export const Dashboard = ({ freelancers }: IFreelancers) => {
  return (
    <>
      <FreelancersGrid>
        <h1>Graficy</h1>
        {freelancers.map((freelancer) => (
          <SingleFreelancer key={freelancer.uid} freelancerData={freelancer}></SingleFreelancer>
        ))}
      </FreelancersGrid>
    </>
  );
};
