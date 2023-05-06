import { useState } from "react";
import { CloseButton, ClientWrapper, ClientEditionButton } from "./ClientProfile.styled";
import { EditionFormClient } from "../EditionFormClient/EditionFormClient.component";
import { GrClose } from "react-icons/gr";
import { ClientProfileUpdateForm } from "../ProfileInputClient/ClientProfileUpdateForm.component";

const UpdateClient = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <ClientWrapper>
      <ClientEditionButton onClick={openForm}>Edytuj profil</ClientEditionButton>
      {showForm && (
        <EditionFormClient open={showForm}>
          <ClientProfileUpdateForm />
          <CloseButton onClick={closeForm}>
            <GrClose />
          </CloseButton>
        </EditionFormClient>
      )}
    </ClientWrapper>
  );
};

export default UpdateClient;
