import styled from "styled-components";

export const MenuCategoriesButtons = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 20px;
  padding: 45px;
`;

export const MenuButton = styled.li`
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
