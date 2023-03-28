import styled from "styled-components";

export const TextareaForm = styled.textarea`
  width: 20rem;
  height: 5rem;
  background-color: var(--white);
  border: 2px solid var(--light-grey-color);
  border-radius: 0.5rem;
  padding-left: 1rem;
  padding-top: 0.6rem;
  resize: none;
  ::placeholder {
    color: var(--light-grey-color);
  }
`;
