//import libraries:
import styled from "styled-components";

export const PrimaryButton = styled.button`
  width: fit-content;
  height: 40px;
  padding: 20px 40px;
  color: var(--white-color);
  background-color: var(--dark-grey-color);
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: var(--white-color);
    background-color: var(--blue-grey-color);
  }
`;

export const SecondaryButton = styled.button`
  width: fit-content;
  height: 40px;
  padding: 20px 40px;
  font-weight: bold;
  color: var(--dark-grey-color);
  background-color: var(--white-color);
  border: 1px solid var(--light-grey-color);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: var(--white-color);
    background-color: var(--light-blue-grey-color);
  }
`;
