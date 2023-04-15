import React from "react";
import { FreelancerWrapper } from "./FreelancerProfile.styled";
import { ProfileEditionButton } from "./ProfileEditionButton.component";

const Freelancer = () => {
  return (
    <FreelancerWrapper>
      Witaj na swoim profilu
      <ProfileEditionButton />
    </FreelancerWrapper>
  );
};

export default Freelancer;
