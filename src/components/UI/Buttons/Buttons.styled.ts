//import libraries:
import styled from "styled-components";

export const PrimaryButton = styled.button`
  width: fit-content;
  height: 40px;
  padding: 20px 40px;
  color: var(--black);
  background-color: var(--lime-yellow);
  font-weight: bold;
  border-radius: 5px;
  display: flex;
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
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: var(--black);
    background-color: var(--lime-yellow);
  }
`;
