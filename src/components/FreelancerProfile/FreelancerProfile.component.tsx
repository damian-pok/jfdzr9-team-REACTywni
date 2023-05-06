import { useState } from "react";
import { CloseButton, FreelancerWrapper } from "./FreelancerProfile.styled";
import { EditionButton } from "./FreelancerProfile.styled";
import { EditionFormFreelancer } from "../EditionFormFreelancer/EditionFormFreelancer.component";
import { GrClose } from "react-icons/gr";
import { FreelancerProfileUpdateForm } from "../ProfileEditionInputFreelancer/FreelancerProfileUpdateForm.component";

const UpdateFreelancer = () => {
  const [showForm, setShowForm] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <FreelancerWrapper>
      <EditionButton onClick={openForm}>Edytuj profil</EditionButton>
      {showForm && (
        <EditionFormFreelancer open={showForm}>
          <FreelancerProfileUpdateForm />
          <CloseButton onClick={closeForm}>
            <GrClose />
          </CloseButton>
        </EditionFormFreelancer>
      )}
    </FreelancerWrapper>
  );
};

export default UpdateFreelancer;
