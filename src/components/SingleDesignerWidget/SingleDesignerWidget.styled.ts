import styled from "styled-components";

export const DesignerWidget = styled.div`
  height: 225px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  border-radius: 5px;
  background-color: var(--lime-yellow);
  padding: 2rem;
`;

export const DesignerPhoto = styled.img`
  height: 200px;
  width: 100%;
  border-radius: 5px;
`;

export const DesignerTags = styled.div`
  display: flex;
  align-items: space-around;
`;

export const TagButton = styled.button`
  height: fit-contenrt;
`;

export const DesignerContent = styled.p``;
