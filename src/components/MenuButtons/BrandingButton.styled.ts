import styled from "styled-components";

export const ButtonBranding = styled.button`
  width: fit-content;
  height: 40px;
  padding: 20px 40px;
  font-weight: bold;
  color: var(--dark-grey-color);
  background-color: var(--white-color);
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s all ease-out;
  cursor: pointer;

  :hover {
    color: var(--white-color);
    background-color: var(--blue-grey-color);
  }
`;
