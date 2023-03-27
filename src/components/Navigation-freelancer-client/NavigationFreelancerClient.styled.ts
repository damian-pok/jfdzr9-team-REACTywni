import styled from "styled-components";

export const ComponentsField = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
`;

export const NavigationBox = styled.div`
  width: 34rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--light-grey-color);
  background-color: var(--very-light-grey-color);
`;
