import { useState } from "react";
import { CloseButton, FreelancerWrapper } from "./FreelancerProfile.styled";
import { EditionButton } from "./FreelancerProfile.styled";
import { EditionFormFreelancer } from "../EditionFormFreelancer/EditionFormFreelancer.component";
import { GrClose } from "react-icons/gr";
import { ProfileEditionInputFreelancer } from "../ProfileEditionInputFreelancer/ProfileEditionInputFreelancer.component";

const Freelancer = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <FreelancerWrapper>
      Witaj na swoim profilu
      <EditionButton onClick={openForm}>Edytuj profil</EditionButton>
      {showForm && (
        <EditionFormFreelancer open={showForm}>
          <ProfileEditionInputFreelancer />
          <CloseButton onClick={closeForm}>
            <GrClose />
          </CloseButton>
        </EditionFormFreelancer>
      )}
    </FreelancerWrapper>
  );
};

export default Freelancer;
