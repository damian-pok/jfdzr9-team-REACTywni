//import libraries:
import styled from "styled-components";

export const PrimaryButton = styled.button`
  width: fit-content;
  height: 40px;
  padding: 20px 40px;
  color: var(--black);
  background-color: var(--lime-yellow);
  font-weight: bold;
  border-radius: 0.5rem;
  display: flex;
  border: 2px solid var(--black);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: var(--white-color);
    background-color: var(--black);
  }
`;

export const SecondaryButton = styled.button`
  width: fit-content;
  height: 40px;
  padding: 20px 40px;
  font-weight: bold;
  color: var(--black);
  background-color: var(--white-color);
  border: 2px solid var(--black);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: var(--black);
    background-color: var(--lime-yellow);
  }
`;

export const ButtonBlack = styled.button`
  width: fit-content;
  height: 40px;
  padding: 20px 40px;
  color: var(--white-color);
  background-color: var(--black);
  font-weight: bold;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: var(--black);
    background-color: var(--lime-yellow);
  }
`;
