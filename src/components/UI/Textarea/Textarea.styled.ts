import styled from "styled-components";

export const TextareaForm = styled.textarea`
  width: 19rem;
  height: 5rem;
  background-color: var(--secoundary-white);
  border: 2px solid var(--secoundary-grey);
  border-radius: 0.2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.6rem;
  resize: none;
  color: var(--primary-dark-navy);
  ::placeholder {
    color: var(--secoundary-grey);
  }
  &:focus {
    outline-color: var(--primary-green);
  }
`;
