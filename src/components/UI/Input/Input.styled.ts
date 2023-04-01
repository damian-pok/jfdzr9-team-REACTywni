import styled from "styled-components";

export const InputForm = styled.input`
  width: 20rem;
  height: 2.5rem;
  background-color: var(--white);
  border: 2px solid var(--light-grey-color);
  border-radius: 0.5rem;
  padding-left: 1rem;
  ::placeholder {
    color: var(--light-grey-color);
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
