import styled from "styled-components";

export const MenuField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  padding: 1.5rem 2.5rem;
  height: 2.5rem;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--light-grey-color);
`;

export const ButtonMenuField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;
`;
