import styled from "styled-components";

export const MenuField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  padding: 20px 30px;
  height: 40px;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--light-grey-color);
`;

export const ButtonMenuField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 20px;
`;
