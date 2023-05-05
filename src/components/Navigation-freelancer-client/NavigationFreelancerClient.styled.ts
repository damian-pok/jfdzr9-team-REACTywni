import styled from "styled-components";

export const ComponentsField = styled.div`
  max-width: var(--Default-Body-width);
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding-top: var(--Default-Distanse-beetween-sections);
  justify-content: center;
`;

export const NavigationBox = styled.div`
  width: 32rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 3rem;
  border-radius: 1rem;
  background-color: var(--cardgroundcolor);
`;

export const Images = styled.img`
  width: auto;
  height: 9.3rem;
`;
