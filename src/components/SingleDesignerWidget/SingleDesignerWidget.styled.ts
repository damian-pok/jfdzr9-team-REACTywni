import styled from "styled-components";

export const DesignerWidget = styled.div`
  height: 225px;
  display: flex;
  align-items: flex-start;
  border-radius: 5px;
  background-color: var(--lime-yellow);
  padding: 3.5rem;
`;

export const DesignerPhoto = styled.img`
  height: 200px;
  width: 165px;
  border-radius: 5px;
`;

export const DesignerTags = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.7rem;
  height: fit-content;
  width: fit-content;
`;

export const Tag = styled.p`
  height: auto;
  color: var(--white-color);
  font-size: bold;
  background-color: var(--black);
  border-radius: 5px;
  padding: 0.4rem 1rem 0.4rem 1rem;
`;

export const DesignerContent = styled.p`
  height: fit-content;
  border-radius: 5px;
  padding: 1.7rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: var(--white-color);
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.85rem;
`;
