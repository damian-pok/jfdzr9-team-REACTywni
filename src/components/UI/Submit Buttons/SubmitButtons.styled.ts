//import libraries:
import styled from "styled-components";

export const SubmitButton = styled.input`
  width: fit-content;
  height: 2.5rem;
  padding: 0.2rem 4rem;
  color: var(--white-color);
  background-color: var(--dark-grey-color);
  font-weight: bold;
  border-radius: 0.5rem;
  display: flex;
  justify-items: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  :hover {
    color: var(--white-color);
    background-color: var(--blue-grey-color);
  }
`;
