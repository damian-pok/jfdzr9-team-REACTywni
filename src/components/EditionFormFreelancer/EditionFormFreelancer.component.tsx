import { FormWrapper } from "./EditionFormFreelancer.styled";
import { CloseButton } from "../FreelancerProfile/FreelancerProfile.styled";
import { GrClose } from "react-icons/gr";

export const EditionFormFreelancer = () => {
  return (
    <FormWrapper>
      {" "}
      Tu będzie zawartość
      <CloseButton>
        <GrClose />
      </CloseButton>
    </FormWrapper>
  );
};
