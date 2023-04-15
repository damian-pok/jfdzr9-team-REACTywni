import { useState } from "react";
import { EditionButton } from "./FreelancerProfile.styled";
import { EditionFormFreelancer } from "../EditionFormFreelancer/EditionFormFreelancer.component";

export const ProfileEditionButton = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };
  return (
    <div>
      <EditionButton onClick={handleClick}>Edytuj Profil</EditionButton>
      {showForm && <EditionFormFreelancer />}
    </div>
  );
};
