import styled from "styled-components";

export const SingleStepContainer = styled.div`
  width: 15rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--secondary-light-grey);
`;

export const IconStep = styled.img`
  width: 6.25rem;
  height: auto;
`;

export const TileStep = styled.h3`
  font-size: var(--Default-Body-size);
  padding-top: 1rem;
  text-align: center;
`;
