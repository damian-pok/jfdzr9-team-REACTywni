import styled from "styled-components";

export const DesignerWidget = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 2fr 1fr;
  gap: 1.8rem;
  border-radius: 15px;
  background-color: var(--lime-yellow);
  padding: 3.5rem 3.5rem 0rem 3.5rem;
`;

export const DesignerPhoto = styled.img`
  height: 205px;
  width: 205px;
  border-radius: 5px;
  object-fit: cover;
`;

export const DesignerTags = styled.div`
  display: flex;
  gap: 0.7rem;
  height: 80px;
  width: fit-content;
  grid-column: 1 / span 2;
`;

export const Tag = styled.p`
  height: fit-content;
  color: var(--white-color);
  font-size: bold;
  background-color: var(--black);
  border-radius: 5px;
  padding: 0.4rem 1rem 0.4rem 1rem;
`;

export const DesignerContent = styled.p`
  height: auto;
  border-radius: 5px;
  padding: 1.7rem;
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
`;
