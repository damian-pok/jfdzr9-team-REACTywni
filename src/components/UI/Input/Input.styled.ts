import styled from "styled-components";

export const InputForm = styled.input`
  width: 20rem;
  height: 2.5rem;
  background-color: var(--secoundary-white);
  border: 2px solid var(--secoundary-grey);
  border-radius: 0.2rem;
  padding-left: 1rem;
  color: var(--primary-dark-navy);
  ::placeholder {
    color: var(--secoundary-grey);
  }
  &:focus {
    outline-color: var(--primary-green);
  }
`;

export const InputLoginSign = styled.input`
  width: 20rem;
  height: 2.5rem;
  background-color: var(--white-color);
  border: 2px solid var(--black);
  border-radius: 0.5rem;
  padding-left: 1rem;
  ::placeholder {
    color: var(--light-grey-color);
  }
`;
